// Daten der 6 Kultur- und Raumstationen Frankreichs
const FRANCE_STATIONS = [
  {
    id: 1,
    name: "Paris",
    tagline: "Norden-Zentrum",
    coords: { lat: 48.8566, lng: 2.3522 },
    icon: "paris",
    color: "#2563eb",
    title: "„Paris ist Frankreich“",
    bereich: "Pflichtteil ④⑤",
    bereichLabel: "Pflichtteil ④⑤: Identität & Zentralismus",
    klischee: "Mode, Liebe, Eiffelturm – Paris gilt im Ausland und in vielen Vorstellungen als „typisch Frankreich“.",
    realitaet: "Paris ist zwar das unbestrittene Mode- und Kulturzentrum und Frankreich das meistbesuchte Land der Welt. Aber rund 80 % der Bevölkerung leben gar nicht in Paris, sondern außerhalb des Großraums Paris! Viele Touristen erleben das sogenannte „Paris-Syndrom“ (Diskrepanz zwischen romantisiertem Bild und Realität der Metropole).",
    raumanalyse: {
      wo: "Paris, im Norden-Zentrum (Île-de-France).",
      was: "Paris wird mental und medial häufig mit „ganz Frankreich“ gleichgesetzt.",
      warumDort: "Zentralismus seit den Königen, verstärkt durch Revolution 1789 und Napoleon → Bündelung aller politischen, administrativen und kulturellen Fäden in der Hauptstadt.",
      folgen: "Der Rest des Landes („La France périphérique“, ländliche Räume, Vororte/Banlieues und die Überseegebiete außerhalb des Großraums Paris) wird oft marginalisiert oder übersehen.",
      wandel: "Die französischen Regionen fordern heute zunehmend mehr Eigenständigkeit, Dezentralisierung und finanzielle Kompetenzen."
    }
  },
  {
    id: 2,
    name: "Bordeaux",
    tagline: "Südwesten, Atlantik",
    coords: { lat: 44.8378, lng: -0.5792 },
    icon: "wine",
    color: "#991b1b",
    title: "„Wein & Terroir“",
    bereich: "Pflichtteil ② (Kernstation)",
    bereichLabel: "Pflichtteil ②: Natur, Kultur & Wirtschaft (Kernstation)",
    klischee: "„Die Franzosen trinken ständig und zu jeder Mahlzeit Wein.“",
    realitaet: "Wein ist zwar ein elementarer Pfeiler von Alltag, Tischkultur und Nationalidentität, ist aber streng an spezifische geografische Regionen gebunden. Der Pro-Kopf-Konsum sinkt seit Jahrzehnten kontinuierlich: ca. −70 % seit 1960 (von über 120 auf unter 40 Liter pro Person); besonders junge Menschen trinken deutlich weniger Wein.",
    raumanalyse: {
      wo: "Bordeaux, Burgund, Champagne, Rhône-Tal, Loire-Tal, Elsass; das strenge AOC-Siegel (Appellation d'Origine Contrôlée) schützt die Herkunft.",
      was: "Weinanbau als hochspezialisierte Kulturpraxis, tief verankert im Terroir-Prinzip (Zusammenspiel von Boden, Mikroklima und Winzertradition).",
      warumDort: "Günstiges Atlantik- und Flussklima, kalk- und schieferhaltige Böden an sonnigen Hanglagen; schon die Römer und mittelalterliche Mönchsorden kultivierten hier den Weinbau.",
      folgen: "Prägt nachhaltig das Landschaftsbild (ausgedehnte Rebhänge), treibt die Exportwirtschaft und den boomenden Weintourismus (Önotourismus) an.",
      wandel: "Der Klimawandel erzwingt Anpassungen (Trauben reifen früher, Anbauflächen verschieben sich nach Norden bis nach Südengland!); harter globaler Wettbewerb und starker Trend zu zertifizierten Bio- und Naturweinen."
    }
  },
  {
    id: 3,
    name: "Auvergne / Clermont-Ferrand",
    tagline: "Zentralmassiv",
    coords: { lat: 45.7772, lng: 3.0870 },
    icon: "cheese",
    color: "#ca8a04",
    title: "„Käse & Regionalität“",
    bereich: "Pflichtteil ③",
    bereichLabel: "Pflichtteil ③: Regionale Vielfalt & Geografie",
    klischee: "„Die französische Küche besteht aus Gourmet-Restaurants, Schnecken und Froschschenkeln.“",
    realitaet: "Die echte französische Gastronomie ist zutiefst regional, ländlich und bodenständig geprägt – jedes Département besitzt eigene Spezialitäten. Frankreich zählt über 1.200 registrierte Käsesorten (davon 46 mit geschütztem AOP-Siegel, das beim Käse seit 2009 gilt). Die Auvergne im Zentralmassiv ist das Herz dieser traditionellen Viehwirtschaft und Käsereikultur (z. B. Saint-Nectaire, Cantal, Bleu d'Auvergne).",
    raumanalyse: {
      wo: "Zentralmassiv (Auvergne), Normandie, Savoyen, Jura, Pyrenäen; jede Berg- und Weideregion hat ihre eigenen Leitsorten.",
      was: "Handwerkliche Käseherstellung aus Rohmilch als immaterielles Kulturgut und Identitätsanker.",
      warumDort: "Raues Mittelgebirgsklima, vulkanische Böden und saftige Bergwiesen eignen sich ideal für Weidewirtschaft und Milchvieh, kaum für großflächigen Ackerbau.",
      folgen: "Erhalt der Kulturlandschaft und Weidewirtschaft; Identitätsstiftung für strukturschwache ländliche Räume.",
      wandel: "AOP-Siegel (gilt beim Käse seit 2009) sichern handwerkliche Herstellungsverfahren, während industrielle Massenproduktion (Supermarktkäse) kleine Höfe unter Druck setzt; Trend zu regionalem Qualitätsbewusstsein."
    }
  },
  {
    id: 4,
    name: "Bretagne / Brest",
    tagline: "Nordwest-Zipfel",
    coords: { lat: 48.3904, lng: -4.4861 },
    icon: "language",
    color: "#0891b2",
    title: "„Eine Sprache, viele Sprachen“",
    bereich: "Pflichtteil ③ + ④⑤",
    bereichLabel: "Pflichtteil ③ + ④⑤: Sprache, Minderheiten & Staat",
    klischee: "„In Frankreich spricht man nur Französisch, und aus sprachlicher Arroganz weigert man sich prinzipiell, Englisch zu sprechen.“",
    realitaet: "Frankreich beheimatet viele Regionalsprachen (Bretonisch, Okzitanisch, Elsässisch, Korsisch, Baskisch, Flämisch). Das Vorurteil, Franzosen würden Englisch verweigern, beruht meist auf einem interkulturellen Missverständnis: Französische Höflichkeit verlangt zwingend ein einleitendes „Bonjour / Excusez-moi“, bevor ein Anliegen auf Englisch vorgetragen wird.",
    raumanalyse: {
      wo: "Periphere Grenz- und Küstenregionen an den Rändern des Staatsgebiets.",
      was: "Jahrhundertealte Mehrsprachigkeit im Spannungsfeld mit dem zentralistischen Hochfranzösisch (wachend gehütet durch die Académie française seit 1635).",
      warumDort: "Über Jahrhunderte unterdrückte der Pariser Zentralismus regionale Idiome in Schulen und Ämtern rigoros („Vergiss deine Mundart“), um die nationale Einheit zu erzwingen.",
      folgen: "Die Regionalsprachen wurden an den Rand des Aussterbens gedrängt; heute gelten viele als bedroht.",
      wandel: "Zunehmende Wiederbelebung durch Bürgerinitiativen, zweisprachige Schulen (1977 – erste Diwan-Schule in der Bretagne), zweisprachige Ortsschilder und verfassungsrechtliche Anerkennung als Kulturerbe."
    }
  },
  {
    id: 5,
    name: "Marseille",
    tagline: "Süden, Mittelmeerhafen",
    coords: { lat: 43.2965, lng: 5.3698 },
    icon: "port",
    color: "#059669",
    title: "„Vielfalt durch Migration“",
    bereich: "Pflichtteil ③",
    bereichLabel: "Pflichtteil ③: Gesellschaft & Demografie",
    klischee: "Frankreich sei eine traditionell rein weiße, katholische Nation geprägt von Chansons und dörflicher Gemütlichkeit.",
    realitaet: "Geprägt von Kolonialgeschichte und Einwanderungswellen ist Frankreich eine der ethnisch vielfältigsten Gesellschaften Europas: Couscous ist eines der beliebtesten Gerichte der Franzosen, Raï, Afrobeats und Hip-Hop aus den Vororten (Banlieues) dominieren die Charts, und die Jugendsprache (Verlan / Argot) prägt die Alltagssprache. Frankreich ist ein streng laizistischer Staat, beherbergt jedoch zugleich die größte muslimische und die größte jüdische Gemeinschaft Westeuropas.",
    raumanalyse: {
      wo: "Marseille und die großen Metropolen (Paris, Lyon, Lille, Toulouse) sowie deren Vororte (Banlieues).",
      was: "Multikulturelle Alltagskultur, kulinarische Verschmelzung und lebendige postkoloniale Identität.",
      warumDort: "Historischer Haupthafen für Einwanderung aus dem Maghreb und Westafrika; Mittelmeer als Brücke der Kulturen.",
      folgen: "Soziale Spannungen und Stigmatisierung der Vororte (Banlieues) stehen einer reichen kulturellen Bereicherung gegenüber.",
      wandel: "Aus der früheren Einwanderersubkultur ist längst französischer Pop- und Kulturmainstream geworden; gesellschaftliche Diversität verändert die Identität des Landes unaufhaltsam – französisches Selbstverständnis wird tagtäglich neu verhandelt."
    }
  },
  {
    id: 6,
    name: "Kinshasa (DR Kongo)",
    tagline: "Zentralafrika • Größte frankophone Stadt",
    coords: { lat: -4.32, lng: 15.31 },
    icon: "globe",
    color: "#7c3aed",
    title: "„Das afrikanische Französisch“",
    bereich: "Pflichtteil ⑥ · Überraschung",
    bereichLabel: "Pflichtteil ⑥ · Überraschung: Globale Frankophonie",
    isKinshasa: true,
    klischee: "„Französisch gehört Paris.“",
    realitaet: "Französisch ist die viertmeistgesprochene Sprache der Welt (~396 Mio.), aber ~65 % der Sprecher leben in Afrika. In Kinshasa sprechen mehr Menschen Französisch als in Paris; bis 2050 werden ~90 % der Frankophonen Afrikaner sein.",
    raumanalyse: {
      wo: "Vor allem West- und Zentralafrika (z. B. DR Kongo).",
      was: "Das Zentrum der frankophonen Welt.",
      warumDort: "Kolonialgeschichte + starkes Bevölkerungswachstum.",
      folgen: "Die Zukunft der Sprache liegt in Afrika, nicht in Frankreich.",
      wandel: "Paris verliert seine Rolle als „Zentrum“."
    }
  }
];

// Zentrums- und Grenz-Konfiguration
const FRANCE_MAP_CONFIG = {
  center: { lat: 46.603354, lng: 2.333333 }, // Geografischer Mittelpunkt Frankreichs
  zoom: 6,
  minZoom: 2,
  maxZoom: 18
};
