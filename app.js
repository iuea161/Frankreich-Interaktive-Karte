/**
 * Frankreich Interaktiv - Map Application
 * Unterstützt Google Maps JavaScript API und Leaflet / OpenStreetMap
 */

// Anwendungszustand
const state = {
  currentEngine: 'leaflet', // 'leaflet' oder 'google'
  googleApiKey: localStorage.getItem('france_map_google_key') || '',
  activeStationId: null,
  currentFilter: 'all',
  searchQuery: '',
  map: null,
  markers: [],
  googleMarkers: [],
  isGoogleLoaded: false
};

// URL-Parameter für API-Key prüfen (?key=...)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('key')) {
  state.googleApiKey = urlParams.get('key');
  localStorage.setItem('france_map_google_key', state.googleApiKey);
  state.currentEngine = 'google';
} else if (state.googleApiKey) {
  state.currentEngine = 'google';
}

// Initialisierung bei DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  renderStationList();
  
  if (state.currentEngine === 'google' && state.googleApiKey) {
    loadGoogleMapsAPI();
  } else {
    initLeafletMap();
  }
});

/* ==========================================================================
   UI Event-Handler & Rendering
   ========================================================================== */

function initUI() {
  // Filter-Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentFilter = btn.dataset.filter;
      renderStationList();
      updateMarkerVisibility();
    });
  });

  // Suchfeld
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderStationList();
      updateMarkerVisibility();
    });
  }

  // Engine Switcher
  const engineBtn = document.getElementById('btn-toggle-engine');
  if (engineBtn) {
    engineBtn.addEventListener('click', toggleEngine);
  }

  // API Key Button & Modal
  const apiKeyBtn = document.getElementById('btn-api-key');
  const apiKeyModal = document.getElementById('api-key-modal');
  const closeApiKeyBtn = document.getElementById('btn-close-modal');
  const saveApiKeyBtn = document.getElementById('btn-save-key');
  const removeApiKeyBtn = document.getElementById('btn-remove-key');
  const apiKeyInput = document.getElementById('api-key-input');

  if (apiKeyBtn) {
    apiKeyBtn.addEventListener('click', () => {
      apiKeyInput.value = state.googleApiKey;
      apiKeyModal.classList.add('open');
    });
  }

  if (closeApiKeyBtn) {
    closeApiKeyBtn.addEventListener('click', () => {
      apiKeyModal.classList.remove('open');
    });
  }

  if (saveApiKeyBtn) {
    saveApiKeyBtn.addEventListener('click', () => {
      const val = apiKeyInput.value.trim();
      state.googleApiKey = val;
      if (val) {
        localStorage.setItem('france_map_google_key', val);
        apiKeyModal.classList.remove('open');
        switchEngine('google');
      } else {
        localStorage.removeItem('france_map_google_key');
        apiKeyModal.classList.remove('open');
        switchEngine('leaflet');
      }
    });
  }

  if (removeApiKeyBtn) {
    removeApiKeyBtn.addEventListener('click', () => {
      state.googleApiKey = '';
      localStorage.removeItem('france_map_google_key');
      apiKeyInput.value = '';
      apiKeyModal.classList.remove('open');
      switchEngine('leaflet');
    });
  }

  // Drawer Close Button
  const closeDrawerBtn = document.getElementById('btn-close-drawer');
  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeDrawer);
  }

  // Reset Map Center Button
  const resetBtn = document.getElementById('btn-reset-map');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetMapView);
  }

  // Mobile Sidebar Toggle
  const toggleSidebarBtn = document.getElementById('btn-toggle-sidebar');
  const sidebar = document.getElementById('sidebar');
  if (toggleSidebarBtn && sidebar) {
    toggleSidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
  }

  updateEngineStatus();
}

/**
 * Aktualisiert die Anzeige des aktuellen Karten-Modus
 */
function updateEngineStatus() {
  const label = document.getElementById('engine-label');
  const dot = document.querySelector('.engine-dot');
  if (label && dot) {
    if (state.currentEngine === 'google') {
      label.textContent = 'Engine: Google Maps JS API';
      dot.style.background = '#3b82f6';
      dot.style.boxShadow = '0 0 8px #3b82f6';
    } else {
      label.textContent = 'Engine: Leaflet (OpenStreetMap)';
      dot.style.background = '#10b981';
      dot.style.boxShadow = '0 0 8px #10b981';
    }
  }
}

/**
 * Filtert die Stationen basierend auf aktuellem Filter & Suche
 */
function getFilteredStations() {
  return FRANCE_STATIONS.filter(s => {
    // Bereich-Filter
    let matchesFilter = true;
    if (state.currentFilter === '2') {
      matchesFilter = s.bereich.includes('②');
    } else if (state.currentFilter === '3') {
      matchesFilter = s.bereich.includes('③');
    } else if (state.currentFilter === '45') {
      matchesFilter = s.bereich.includes('④⑤');
    } else if (state.currentFilter === '6') {
      matchesFilter = s.bereich.includes('⑥');
    }

    // Suchfilter
    let matchesSearch = true;
    if (state.searchQuery) {
      const q = state.searchQuery;
      matchesSearch = (
        s.name.toLowerCase().includes(q) ||
        s.title.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.klischee.toLowerCase().includes(q) ||
        s.realitaet.toLowerCase().includes(q) ||
        s.raumanalyse.wo.toLowerCase().includes(q) ||
        s.raumanalyse.was.toLowerCase().includes(q)
      );
    }

    return matchesFilter && matchesSearch;
  });
}

/**
 * Rendert die Liste der Stationen in der linken Seitenleiste
 */
function renderStationList() {
  const container = document.getElementById('station-list');
  if (!container) return;

  const filtered = getFilteredStations();
  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding: 2rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Keine Stationen für diese Auswahl gefunden.
      </div>
    `;
    return;
  }

  filtered.forEach(station => {
    const item = document.createElement('div');
    item.className = `station-item ${state.activeStationId === station.id ? 'active' : ''}`;
    item.dataset.id = station.id;

    item.innerHTML = `
      <div class="station-badge" style="background: ${station.color};">
        ${station.id}
      </div>
      <div class="station-info">
        <div class="station-topline">
          <span class="station-name">${station.name}</span>
          <span class="station-pill">${station.bereich}</span>
        </div>
        <div class="station-title">${station.title}</div>
        <div class="station-tagline">
          <span>${station.icon}</span>
          <span>${station.tagline}</span>
        </div>
      </div>
    `;

    item.addEventListener('click', () => {
      selectStation(station.id, true);
    });

    container.appendChild(item);
  });
}

/**
 * Wählt eine Station aus, zentriert die Karte und öffnet die Detail-Ansicht
 */
function selectStation(id, panTo = true) {
  const station = FRANCE_STATIONS.find(s => s.id === id);
  if (!station) return;

  state.activeStationId = id;

  // Aktive Klasse in Sidebar aktualisieren
  document.querySelectorAll('.station-item').forEach(el => {
    if (parseInt(el.dataset.id) === id) {
      el.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      el.classList.remove('active');
    }
  });

  // Karte animieren
  if (panTo && state.map) {
    if (state.currentEngine === 'google') {
      state.map.panTo(station.coords);
      state.map.setZoom(Math.max(state.map.getZoom(), 7));
    } else {
      state.map.flyTo([station.coords.lat, station.coords.lng], Math.max(state.map.getZoom(), 7), {
        duration: 1.2,
        easeLinearity: 0.25
      });
    }
  }

  // Marker Highlight aktualisieren
  updateMarkerHighlight(id);

  // Detail Drawer befüllen & öffnen
  populateDrawer(station);
  openDrawer();
}

/**
 * Befüllt den Detail-Drawer mit den strukturierten Inhalten
 */
function populateDrawer(station) {
  const drawerIcon = document.getElementById('drawer-icon');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerSubtitle = document.getElementById('drawer-subtitle');
  const drawerMeta = document.getElementById('drawer-meta');
  const clicheText = document.getElementById('cliche-text');
  const realityText = document.getElementById('reality-text');
  const analysisGrid = document.getElementById('analysis-grid');
  const overseasSection = document.getElementById('overseas-section');

  if (drawerIcon) {
    drawerIcon.textContent = station.icon;
    drawerIcon.style.background = station.color;
  }

  if (drawerTitle) {
    drawerTitle.textContent = `${station.id}. ${station.name}`;
  }

  if (drawerSubtitle) {
    drawerSubtitle.textContent = station.title;
  }

  if (drawerMeta) {
    drawerMeta.innerHTML = `
      <span>${station.bereichLabel}</span>
      <span>•</span>
      <span>${station.coords.lat.toFixed(2)}° N, ${station.coords.lng.toFixed(2)}° E</span>
    `;
  }

  if (clicheText) {
    clicheText.textContent = station.klischee;
  }

  if (realityText) {
    realityText.textContent = station.realitaet;
  }

  if (analysisGrid) {
    analysisGrid.innerHTML = `
      <div class="analysis-item">
        <div class="analysis-question">Wo?</div>
        <div class="analysis-answer">${station.raumanalyse.wo}</div>
      </div>
      <div class="analysis-item">
        <div class="analysis-question">Was?</div>
        <div class="analysis-answer">${station.raumanalyse.was}</div>
      </div>
      <div class="analysis-item">
        <div class="analysis-question">Warum dort?</div>
        <div class="analysis-answer">${station.raumanalyse.warumDort}</div>
      </div>
      <div class="analysis-item">
        <div class="analysis-question">Folgen?</div>
        <div class="analysis-answer">${station.raumanalyse.folgen}</div>
      </div>
      <div class="analysis-item">
        <div class="analysis-question">Wandel?</div>
        <div class="analysis-answer">${station.raumanalyse.wandel}</div>
      </div>
    `;
  }

  // Überseegebiete-Schnellnavigation (für Station 8)
  if (overseasSection) {
    if (station.isOutreMer && station.territories) {
      overseasSection.style.display = 'block';
      let chipsHtml = `
        <div class="overseas-header">
          <span>Überseegebiete direkt anfliegen:</span>
        </div>
        <div class="overseas-chips">
      `;
      station.territories.forEach(t => {
        chipsHtml += `
          <button class="territory-btn" onclick="flyToTerritory(${t.coords.lat}, ${t.coords.lng}, ${t.zoom}, '${t.name}')">
            
            <span>${t.name}</span>
          </button>
        `;
      });
      chipsHtml += `
          <button class="territory-btn" style="background:#2563eb; border-color:#3b82f6;" onclick="resetMapView()">
            
            <span>Zurück zum Festland</span>
          </button>
        </div>
      `;
      overseasSection.innerHTML = chipsHtml;
    } else {
      overseasSection.style.display = 'none';
      overseasSection.innerHTML = '';
    }
  }
}

/**
 * Springt direkt zu einem Überseegebiet
 */
window.flyToTerritory = function(lat, lng, zoom, name) {
  if (state.currentEngine === 'google' && state.map) {
    state.map.panTo({ lat, lng });
    state.map.setZoom(zoom);
  } else if (state.map) {
    state.map.flyTo([lat, lng], zoom, {
      duration: 1.8,
      easeLinearity: 0.25
    });
  }
};

function openDrawer() {
  const drawer = document.getElementById('detail-drawer');
  if (drawer) drawer.classList.add('open');
}

function closeDrawer() {
  const drawer = document.getElementById('detail-drawer');
  if (drawer) drawer.classList.remove('open');
  state.activeStationId = null;
  document.querySelectorAll('.station-item').forEach(el => el.classList.remove('active'));
  updateMarkerHighlight(null);
}

function resetMapView() {
  if (state.currentEngine === 'google' && state.map) {
    state.map.panTo(FRANCE_MAP_CONFIG.center);
    state.map.setZoom(FRANCE_MAP_CONFIG.zoom);
  } else if (state.map) {
    state.map.flyTo([FRANCE_MAP_CONFIG.center.lat, FRANCE_MAP_CONFIG.center.lng], FRANCE_MAP_CONFIG.zoom, {
      duration: 1.2
    });
  }
}

/* ==========================================================================
   Leaflet / OpenStreetMap Implementierung
   ========================================================================== */

function initLeafletMap() {
  clearCurrentMap();
  state.currentEngine = 'leaflet';
  updateEngineStatus();

  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;

  // Leaflet Map erzeugen
  state.map = L.map('map', {
    center: [FRANCE_MAP_CONFIG.center.lat, FRANCE_MAP_CONFIG.center.lng],
    zoom: FRANCE_MAP_CONFIG.zoom,
    minZoom: FRANCE_MAP_CONFIG.minZoom,
    maxZoom: FRANCE_MAP_CONFIG.maxZoom,
    zoomControl: false
  });

  // Zoom-Buttons oben rechts
  L.control.zoom({ position: 'topright' }).addTo(state.map);

  // Hochwertige CartoDB Positron / Voyager Karte
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(state.map);

  // Marker erzeugen
  createLeafletMarkers();
}

function createLeafletMarkers() {
  state.markers = [];

  FRANCE_STATIONS.forEach(station => {
    // Schönes Custom-Icon via DivIcon
    const customIcon = L.divIcon({
      className: 'custom-pin-wrapper',
      html: `
        <div class="custom-pin" id="pin-station-${station.id}">
          <div class="pin-bubble" style="background: ${station.color};">
            <div class="pin-inner">${station.icon}</div>
            <div class="pin-number">${station.id}</div>
          </div>
          <div class="pin-label">${station.name}</div>
        </div>
      `,
      iconSize: [42, 60],
      iconAnchor: [21, 52]
    });

    const marker = L.marker([station.coords.lat, station.coords.lng], {
      icon: customIcon,
      title: `${station.id}. ${station.name}`
    });

    marker.stationId = station.id;

    marker.on('click', () => {
      selectStation(station.id, true);
    });

    marker.addTo(state.map);
    state.markers.push(marker);
  });
}

function updateMarkerHighlight(activeId) {
  if (state.currentEngine === 'leaflet') {
    document.querySelectorAll('.custom-pin').forEach(pin => {
      pin.classList.remove('selected');
    });
    if (activeId) {
      const activePin = document.getElementById(`pin-station-${activeId}`);
      if (activePin) activePin.classList.add('selected');
    }
  } else if (state.currentEngine === 'google') {
    state.googleMarkers.forEach(({ marker, station }) => {
      if (station.id === activeId) {
        if (marker.setAnimation) marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(() => { if (marker.setAnimation) marker.setAnimation(null); }, 1400);
      }
    });
  }
}

function updateMarkerVisibility() {
  const filtered = getFilteredStations();
  const visibleIds = new Set(filtered.map(s => s.id));

  if (state.currentEngine === 'leaflet') {
    state.markers.forEach(marker => {
      if (visibleIds.has(marker.stationId)) {
        if (!state.map.hasLayer(marker)) marker.addTo(state.map);
      } else {
        if (state.map.hasLayer(marker)) state.map.removeLayer(marker);
      }
    });
  } else if (state.currentEngine === 'google') {
    state.googleMarkers.forEach(({ marker, station }) => {
      marker.setVisible(visibleIds.has(station.id));
    });
  }
}

/* ==========================================================================
   Google Maps JavaScript API Implementierung
   ========================================================================== */

function loadGoogleMapsAPI() {
  if (!state.googleApiKey) {
    alert('Bitte gib zuerst einen gültigen Google Maps JavaScript API Schlüssel ein.');
    return;
  }

  if (window.google && window.google.maps) {
    initGoogleMap();
    return;
  }

  // Google Maps Auth-Error fangen
  window.gm_authFailure = () => {
    alert('Google Maps Authentifizierungsfehler: Der angegebene API-Schlüssel ist ungültig oder hat keine Berechtigung für die Maps JavaScript API. Wir schalten zurück auf OpenStreetMap.');
    switchEngine('leaflet');
  };

  const script = document.createElement('script');
  script.id = 'google-maps-script';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(state.googleApiKey)}&callback=initGoogleMap`;
  script.async = true;
  script.defer = true;
  script.onerror = () => {
    alert('Fehler beim Laden der Google Maps JavaScript API. Bitte prüfe deine Internetverbindung und den API-Key.');
    switchEngine('leaflet');
  };

  window.initGoogleMap = () => {
    state.isGoogleLoaded = true;
    initGoogleMap();
  };

  document.head.appendChild(script);
}

function initGoogleMap() {
  clearCurrentMap();
  state.currentEngine = 'google';
  updateEngineStatus();

  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;

  state.map = new google.maps.Map(mapContainer, {
    center: FRANCE_MAP_CONFIG.center,
    zoom: FRANCE_MAP_CONFIG.zoom,
    minZoom: FRANCE_MAP_CONFIG.minZoom,
    maxZoom: FRANCE_MAP_CONFIG.maxZoom,
    mapTypeId: 'roadmap',
    streetViewControl: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT
    },
    fullscreenControl: false
  });

  createGoogleMarkers();
}

function createGoogleMarkers() {
  state.googleMarkers = [];

  FRANCE_STATIONS.forEach(station => {
    // Custom SVG Pin als Data-URL
    const svgPin = `
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56" viewBox="0 0 46 56">
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.45"/>
          </filter>
        </defs>
        <path d="M23 0 C10.3 0 0 10.3 0 23 C0 38 23 56 23 56 C23 56 46 38 46 23 C46 10.3 35.7 0 23 0 Z" fill="${station.color}" stroke="#ffffff" stroke-width="2.5" filter="url(#shadow)"/>
        <circle cx="23" cy="22" r="16" fill="#ffffff" />
        <text x="23" y="27" font-size="14" font-weight="bold" fill="${station.color}" text-anchor="middle" font-family="-apple-system, sans-serif">${station.id}</text>
      </svg>
    `;

    const iconUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgPin);

    const marker = new google.maps.Marker({
      position: station.coords,
      map: state.map,
      title: `${station.id}. ${station.name}: ${station.title}`,
      icon: {
        url: iconUrl,
        scaledSize: new google.maps.Size(46, 56),
        anchor: new google.maps.Point(23, 56)
      }
    });

    marker.addListener('click', () => {
      selectStation(station.id, true);
    });

    state.googleMarkers.push({ marker, station });
  });
}

/* ==========================================================================
   Map Cleanup & Engine Switching
   ========================================================================== */

function clearCurrentMap() {
  const container = document.getElementById('map');
  if (!container) return;

  if (state.currentEngine === 'leaflet' && state.map) {
    state.map.remove();
    state.map = null;
    state.markers = [];
  } else if (state.currentEngine === 'google' && state.map) {
    if (state.googleMarkers) {
      state.googleMarkers.forEach(({ marker }) => marker.setMap(null));
      state.googleMarkers = [];
    }
    state.map = null;
  }

  // DOM Container leeren
  container.innerHTML = '';
  // Eventuelle Leaflet-Klassen entfernen
  container.className = '';
}

function switchEngine(engine) {
  if (engine === 'google') {
    if (!state.googleApiKey) {
      document.getElementById('api-key-modal').classList.add('open');
      return;
    }
    loadGoogleMapsAPI();
  } else {
    initLeafletMap();
  }
}

function toggleEngine() {
  if (state.currentEngine === 'leaflet') {
    if (!state.googleApiKey) {
      document.getElementById('api-key-modal').classList.add('open');
    } else {
      switchEngine('google');
    }
  } else {
    switchEngine('leaflet');
  }
}
