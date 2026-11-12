# Interaktive Frankreich-Karte: Kultur, Raum & Realität

Eine interaktive Web-Kartenanwendung von Frankreich mit didaktischer Aufbereitung von 6 Kultur- und Raumstationen, basierend auf der Gegenüberstellung von **Klischee vs. Realität** sowie einer 5-stufigen **Raumanalyse** (*Wo?*, *Was?*, *Warum dort?*, *Folgen?*, *Wandel?*).

---

## Funktionen & Highlights

1. **Dual-Engine-Architektur (Google Maps JS API & OpenStreetMap/Leaflet)**:
   - **Google Maps JS API**: Volle Unterstützung für die Google Maps JavaScript API mit Marker, Info-Logik, Straßen-/Satellitenkarten.
   - **Sofort einsatzbereit**: Falls kein Google Maps API-Schlüssel eingegeben ist, startet die Karte automatisch mit OpenStreetMap/CartoDB Voyager. Jederzeit umschaltbar per Button in der Kopfzeile.
   - **API-Key-Verwaltung**: API-Key kann direkt in der Benutzeroberfläche über den Button `Google Maps API-Key` eingegeben werden (wird lokal im Browser gespeichert) oder über den URL-Parameter `?key=DEIN_API_KEY`.
2. **Alle 6 Kultur- und Raumstationen**:
   1. **Paris** (`48.86, 2.35`): *„Paris ist Frankreich“* · Pflichtteil ④⑤ (Zentralismus seit den Königen, verstärkt durch Revolution 1789 und Napoleon)
   2. **Bordeaux** (`44.84, -0.58`): *„Wein & Terroir“* · Pflichtteil ② (Kernstation, Terroir & Klimawandel)
   3. **Auvergne / Clermont-Ferrand** (`45.78, 3.08`): *„Käse & Regionalität“* · Pflichtteil ③ (Zentralmassiv & AOP)
   4. **Bretagne / Brest** (`48.39, -4.49`): *„Eine Sprache, viele Sprachen“* · Pflichtteil ③ + ④⑤ (Regionalsprachen & Diwan-Schulen)
   5. **Marseille** (`43.30, 5.37`): *„Vielfalt durch Migration“* · Pflichtteil ③ (Hafenstadt, Banlieues & Kulturwandel)
   6. **Kinshasa (DR Kongo)** (`-4.32, 15.31`): *„Das afrikanische Französisch“* · Pflichtteil ⑥ · Überraschung (Größte frankophone Stadt der Welt)
3. **Filter & Suche**:
   - Filter nach didaktischen Pflichtteilen: `Alle (6)`, `Pflichtteil ②`, `Pflichtteil ③`, `Pflichtteil ④⑤`, `Pflichtteil ⑥`.
   - Live-Volltextsuche in Titel, Städtenamen, Klischees und Raumanalyse.
4. **Detail Drawer & Modal**:
   - Übersichtliche Gegenüberstellung von *Klischee* und *Realität*.
   - Strukturierte 5-stufige Raumanalyse (Wo, Was, Warum dort, Folgen, Wandel).

---

## Starten der Anwendung

### Option 1: Direkt im Browser öffnen
Einfach die Datei `index.html` (Website) oder `1.html` (interaktive Karte) mit einem Doppelklick oder per Drag-and-Drop im Browser (Chrome, Safari, Firefox, Edge) öffnen.

### Option 2: Lokaler Webserver (empfohlen)
Im Terminal im Ordner `frankreich-karte` ausführen:
```bash
python3 -m http.server 8080
```
Dann im Browser aufrufen:
```
http://localhost:8080
```

Mit direkt übergebenem Google Maps API-Key:
```
http://localhost:8080?key=DEIN_GOOGLE_MAPS_API_KEY
```
