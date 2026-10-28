# Interaktive Frankreich-Karte: Kultur, Raum & Realität

Eine interaktive Web-Kartenanwendung von Frankreich mit didaktischer Aufbereitung von 8 Kultur- und Raumstationen, basierend auf der Gegenüberstellung von **Klischee vs. Realität** sowie einer 5-stufigen **Raumanalyse** (*Wo?*, *Was?*, *Warum dort?*, *Folgen?*, *Wandel?*).

---

## Funktionen & Highlights

1. **Dual-Engine-Architektur (Google Maps JS API & OpenStreetMap/Leaflet)**:
   - **Google Maps JS API**: Volle Unterstützung für die Google Maps JavaScript API mit Marker, Info-Logik, Straßen-/Satellitenkarten.
   - **Sofort einsatzbereit**: Falls kein Google Maps API-Schlüssel eingegeben ist, startet die Karte automatisch mit OpenStreetMap/CartoDB Voyager. Jederzeit umschaltbar per Button in der Kopfzeile.
   - **API-Key-Verwaltung**: API-Key kann direkt in der Benutzeroberfläche über den Button `Google Maps API-Key` eingegeben werden (wird lokal im Browser gespeichert) oder über den URL-Parameter `?key=DEIN_API_KEY`.
2. **Alle 8 Kultur- und Raumstationen**:
   1. **Paris** (`48.85, 2.35`): *„Paris ist Frankreich”* · Bereich ④⑤ (Zentralismus vs. Peripherie)
   2. **Boulangerie** (`49.50, 3.00`): *„Béret & Baguette”* · Bereich ④⑤ (Landesweites Alltagsphänomen)
   3. **Bordeaux** (`44.84, -0.58`): *„Wein & Terroir”* · Bereich ② (Kernstation, Terroir & Klimawandel)
   4. **Auvergne / Clermont-Ferrand** (`45.78, 3.08`): *„Käse & Regionalität”* · Bereich ③ (Zentralmassiv & AOP)
   5. **Bretagne / Brest** (`48.39, -4.49`): *„Eine Sprache, viele Sprachen”* · Bereich ③ + ④⑤ (Regionalsprachen & Höflichkeitsregeln)
   6. **Marseille** (`43.30, 5.37`): *„Vielfalt durch Migration”* · Bereich ③ (Hafenstadt, Banlieues & Kulturwandel)
   7. **Lyon** (`45.76, 4.84`): *„Protest- & Streikkultur”* · Bereich ④⑤ (Canuts-Aufstände & Zivilgesellschaft)
   8. **Outre-mer / Überseegebiete** (Offshore-Marker im Atlantik): *„12 Zeitzonen & das afrikanische Französisch”* · Bereich ⑥ (Überraschung, inklusive Schnellnavigation nach Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, Polynesien, Neukaledonien)
3. **Filter & Suche**:
   - Filter nach didaktischen Bereichen: `Alle (8)`, `Bereich ②`, `Bereich ③`, `Bereich ④⑤`, `Bereich ⑥`.
   - Live-Volltextsuche in Titel, Städtenamen, Klischees und Raumanalyse.
4. **Detail Drawer**:
   - Übersichtliche Gegenüberstellung von *Klischee* (rot) und *Realität* (grün).
   - Strukturierte Raumanalyse (Wo, Was, Warum dort, Folgen, Wandel).

---

## Starten der Anwendung

### Option 1: Direkt im Browser öffnen
Einfach die Datei `index.html` mit einem Doppelklick oder per Drag-and-Drop im Browser (Chrome, Safari, Firefox, Edge) öffnen:
```
file:///Users/karl/.gemini/antigravity/playground/scarlet-zenith/frankreich-karte/index.html
```

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
