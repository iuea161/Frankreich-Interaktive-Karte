// Daten der 8 Kultur- und Raumstationen Frankreichs
const FRANCE_STATIONS = [
  {
    id: 1,
    name: "Paris",
    tagline: "Norden-Zentrum",
    coords: { lat: 48.8566, lng: 2.3522 },
    icon: "paris",
    color: "#2563eb",
    title: "„Paris ist Frankreich”",
    bereich: "④⑤",
    bereichLabel: "Bereich ④⑤: Identität & Zentralismus",
    klischee: "Mode, Liebe, Eiffelturm – Paris gilt im Ausland und in vielen Vorstellungen als „typisch Frankreich”.",
    realitaet: "Paris ist zwar das unbestrittene Mode- und Kulturzentrum und Frankreich das meistbesuchte Land der Welt. Aber rund 80 % der Bevölkerung leben gar nicht in Paris! Viele Touristen erleben das sogenannte „Paris-Syndrom” (Diskrepanz zwischen romantisiertem Bild und Realität der Metropole).",
    raumanalyse: {
      wo: "Paris, im Norden-Zentrum (Île-de-France).",
      was: "Paris wird mental und medial häufig mit „ganz Frankreich” gleichgesetzt.",
      warumDort: "Ausgeprägter Zentralismus seit der Französischen Revolution 1789 und Napoleon → Bündelung aller politischen, administrativen und kulturellen Fäden in der Hauptstadt.",
      folgen: "Der Rest des Landes („La France périphérique”, ländliche Räume, Vororte/Banlieues und die Überseegebiete) wird oft marginalisiert oder übersehen.",
      wandel: "Die französischen Regionen fordern heute zunehmend mehr Eigenständigkeit, Dezentralisierung und finanzielle Kompetenzen."
    }
  },
  {
    id: 2,
    name: "Boulangerie (Landesweit)",
    tagline: "Landesweites Phänomen",
    coords: { lat: 49.5000, lng: 3.0000 },
    icon: "bread",
    color: "#d97706",
    title: "„Béret & Baguette”",
    bereich: "④⑤",
    bereichLabel: "Bereich ④⑤: Alltagskultur & Stereotypen",
    isNationwide: true,
    klischee: "Der Franzose mit Baskenmütze (Béret), Baguette unterm Arm, der sich ununterbrochen von Baguette, Croissant und Rotwein ernährt.",
    realitaet: "Das Baguette ist seit 2022 immaterielles UNESCO-Weltkulturerbe (~10 Milliarden Stück pro Jahr). Allerdings ist der tägliche Konsum stark gesunken (~½ Baguette pro Person/Tag). Zudem wurde es vermutlich um 1839 von einem Wiener Bäcker nach Paris gebracht. Das Béret stammt aus dem Baskenland und wird im modernen Alltag kaum noch getragen.",
    raumanalyse: {
      wo: "Überall in Frankreich – die Bäckerei (Boulangerie) gehört in jedem Dorf und Viertel fest zum Straßenbild.",
      was: "Baguette und Béret gelten weltweit als ultimatives Symbol für „typisch Frankreich”.",
      warumDort: "Tourismuswerbung, Nachkriegsfilme und Hollywood des 20. Jahrhunderts haben dieses Klischee global festgeschrieben.",
      folgen: "Ein romantisch-nostalgisch eingefrorenes Bild, das den dynamischen, multikulturellen heutigen Alltag nicht mehr trifft.",
      wandel: "Jüngere Generationen konsumieren diverser (Snacking, internationale Küche); das Klischee überlebt vor allem als lukratives Marketing- und Tourismusmotiv."
    }
  },
  {
    id: 3,
    name: "Bordeaux",
    tagline: "Südwesten, Atlantik",
    coords: { lat: 44.8378, lng: -0.5792 },
    icon: "wine",
    color: "#991b1b",
    title: "„Wein & Terroir”",
    bereich: "② (Kernstation)",
    bereichLabel: "Bereich ②: Natur, Kultur & Wirtschaft (Kernstation)",
    klischee: "„Die Franzosen trinken ständig und zu jeder Mahlzeit Wein.”",
    realitaet: "Wein ist zwar ein elementarer Pfeiler von Alltag, Tischkultur und Nationalidentität, ist aber streng an spezifische geografische Regionen gebunden. Der Pro-Kopf-Konsum sinkt seit Jahrzehnten kontinuierlich; besonders junge Menschen trinken deutlich weniger Wein.",
    raumanalyse: {
      wo: "Bordeaux, Burgund, Champagne, Rhône-Tal, Loire-Tal, Elsass; das strenge AOC-Siegel (Appellation d'Origine Contrôlée) schützt die Herkunft.",
      was: "Weinanbau als hochspezialisierte Kulturpraxis, tief verankert im Terroir-Prinzip (Zusammenspiel von Boden, Mikroklima und Winzertradition).",
      warumDort: "Günstiges Atlantik- und Flussklima, kalk- und schieferhaltige Böden an sonnigen Hanglagen; schon die Römer und mittelalterliche Mönchsorden kultivierten hier den Weinbau.",
      folgen: "Prägt nachhaltig das Landschaftsbild (ausgedehnte Rebhänge), treibt die Exportwirtschaft und den boomenden Weintourismus (Önotourismus) an.",
      wandel: "Der Klimawandel erzwingt Anpassungen (Trauben reifen früher, Anbauflächen verschieben sich nach Norden bis nach Südengland!); harter globaler Wettbewerb und starker Trend zu zertifizierten Bio- und Naturweinen."
    }
  },
  {
    id: 4,
    name: "Auvergne / Clermont-Ferrand",
    tagline: "Zentralmassiv",
    coords: { lat: 45.7772, lng: 3.0870 },
    icon: "cheese",
    color: "#ca8a04",
    title: "„Käse & Regionalität”",
    bereich: "③",
    bereichLabel: "Bereich ③: Regionale Vielfalt & Geografie",
    klischee: "„1000 verschiedene Käsesorten – typisch französisch und einheitlich im ganzen Land.”",
    realitaet: "Charles de Gaulle fragte einst verzweifelt: „Wie wollen Sie ein Land regieren, das 246 Sorten Käse hat?” Reale Schätzungen gehen heute von 1.000 bis 1.600 verschiedenen Käsesorten aus. Käse ist jedoch keineswegs homogen, sondern strikt regional zersplittert.",
    raumanalyse: {
      wo: "Vor allem in gebirgigen und rauen Regionen wie dem Zentralmassiv (Auvergne), den Alpen, dem Jura und den Pyrenäen.",
      was: "Außergewöhnliche Vielfalt an Rohmilch-, Weich- und Hartkäsen (z.B. Saint-Nectaire, Bleu d'Auvergne, Cantal).",
      warumDort: "Traditionelle Almwirtschaft und Viehhaltung auf Höhenweiden kombiniert mit spezifischer Geologie (Vulkanböden, feuchtes Bergklima).",
      folgen: "Käse fungiert als essbare Visitenkarte regionaler Identität und bewahrt dezentrale landwirtschaftliche Strukturen.",
      wandel: "AOP-/AOC-Siegel sichern handwerkliche Herstellungsverfahren, während industrielle Massenproduktion (Supermarktkäse) kleine Höfe unter enormen Preisdruck setzt."
    }
  },
  {
    id: 5,
    name: "Bretagne / Brest",
    tagline: "Nordwest-Zipfel",
    coords: { lat: 48.3904, lng: -4.4861 },
    icon: "language",
    color: "#0891b2",
    title: "„Eine Sprache, viele Sprachen”",
    bereich: "③ + ④⑤",
    bereichLabel: "Bereich ③ + ④⑤: Sprache, Minderheiten & Staat",
    klischee: "„In Frankreich spricht man nur Französisch, und aus sprachlicher Arroganz weigert man sich prinzipiell, Englisch zu sprechen.”",
    realitaet: "Frankreich beheimatet zahlreiche historisch gewachsene Regionalsprachen (Bretonisch, Okzitanisch, Elsässisch, Korsisch, Baskisch, Flämisch). Das Vorurteil, Franzosen würden Englisch verweigern, beruht meist auf einem interkulturellen Missverständnis: Französische Höflichkeit verlangt zwingend ein einleitendes „Bonjour / Excusez-moi”, bevor ein Anliegen auf Englisch vorgetragen wird.",
    raumanalyse: {
      wo: "Periphere Grenz- und Küstenregionen an den Rändern des Staatsgebiets.",
      was: "Jahrhundertealte Mehrsprachigkeit im Spannungsfeld mit dem zentralistischen Hochfranzösisch (wachend gehütet durch die Académie française seit 1635).",
      warumDort: "Über Jahrhunderte unterdrückte der Pariser Zentralismus regionale Idiome in Schulen und Ämtern rigoros („Vergiss deine Mundart”), um die nationale Einheit zu erzwingen.",
      folgen: "Die Regionalsprachen wurden an den Rand des Aussterbens gedrängt; heute gelten viele als bedroht.",
      wandel: "Zunehmende Wiederbelebung durch Bürgerinitiativen, zweisprachige Schulen (z.B. Diwan in der Bretagne), zweisprachige Ortsschilder und verfassungsrechtliche Anerkennung als Kulturerbe."
    }
  },
  {
    id: 6,
    name: "Marseille",
    tagline: "Süden, Mittelmeerhafen",
    coords: { lat: 43.2965, lng: 5.3698 },
    icon: "port",
    color: "#059669",
    title: "„Vielfalt durch Migration”",
    bereich: "③",
    bereichLabel: "Bereich ③: Gesellschaft & Demografie",
    klischee: "Frankreich sei eine traditionell rein weiße, katholische Nation geprägt von Chansons und dörflicher Gemütlichkeit.",
    realitaet: "Geprägt von Kolonialgeschichte und Einwanderungswellen ist Frankreich eine der ethnisch vielfältigsten Gesellschaften Europas: Couscous rangiert regelmäßig unter den Top-3-Lieblingsgerichten der Franzosen, Raï, Afrobeats und Hip-Hop aus den Vororten (Banlieues) dominieren die Charts, und die Jugendsprache (Verlan / Argot) prägt die Alltagssprache. Frankreich ist einerseits der strikteste laizistische Staat Europas, beherbergt jedoch zugleich die größte muslimische und die größte jüdische Gemeinschaft Westeuropas.",
    raumanalyse: {
      wo: "Vor allem in den großen Hafen- und Handelsmetropolen (Marseille, Le Havre, Nantes) sowie den Metropolregionen Paris und Lyon samt Vororten.",
      was: "Eine lebendige, hybride Alltagskultur in Gastronomie, Straßenbild, Popkultur und Umgangssprache.",
      warumDort: "Marseille fungierte als historisches „Tor zum Mittelmeer und nach Nordafrika”, über das Hunderttausende Einwanderer, Rückkehrer (Pieds-noirs) und Arbeitsmigranten nach Frankreich gelangten.",
      folgen: "Entstehung einer pulsierenden multikulturellen Lebenswirklichkeit; gleichzeitig permanente gesellschaftliche Debatten über Integration, Laizismus und Chancengleichheit.",
      wandel: "Migration verändert die Identität des Landes unaufhaltsam – französisches Selbstverständnis wird tagtäglich neu verhandelt."
    }
  },
  {
    id: 7,
    name: "Lyon",
    tagline: "Mitte-Ost (Landesweites Phänomen)",
    coords: { lat: 45.7640, lng: 4.8357 },
    icon: "protest",
    color: "#dc2626",
    title: "„Protest- & Streikkultur”",
    bereich: "④⑤",
    bereichLabel: "Bereich ④⑤: Politische Kultur & Zivilgesellschaft",
    klischee: "„Die Franzosen arbeiten kaum und streiken ständig bei jeder kleinsten Reform.”",
    realitaet: "Frankreich besitzt eine historisch gewachsene, leidenschaftliche Protestkultur, in der das Streikrecht als unantastbares demokratisches Grundrecht gilt. Allerdings streiken keineswegs „alle ständig” – die Streiktage konzentrieren sich überwiegend auf den öffentlichen Verkehr (SNCF/RATP), Energie- und Bildungssektor, während die Privatwirtschaft vergleichsweise moderat streikt.",
    raumanalyse: {
      wo: "Überall im Land sichtbar; Lyon dient als symbolträchtiges historisches Paradebeispiel (Aufstände der Seidenweber / Canuts 1831 und 1834 als Geburtsstunde moderner Arbeiterbewegungen).",
      was: "Streik, Demonstrationszüge („manifs”) und Blockaden als legitimes politisches Instrument zur gesellschaftlichen Teilhabe.",
      warumDort: "Die Errungenschaften der Französischen Revolution von 1789 etablierten das Prinzip: Bürgerrechte müssen notfalls auf der Straße gegen die Staatsmacht verteidigt werden.",
      folgen: "Starke Gewerkschaftspräsenz in Schlüsselbereichen; Gesetzesreformen werden oft erst nach massiven Straßenprotesten nachverhandelt.",
      wandel: "Mediale Bilder von Straßenbarrikaden (z.B. Gelbwesten / Gilets Jaunes, Rentenproteste) prägen das Auslandserlebnis oft drastischer, als der Alltag für die Mehrheit der Bevölkerung tatsächlich ist."
    }
  },
  {
    id: 8,
    name: "Outre-mer / Überseegebiete",
    tagline: "Weltweit / 3 Ozeane",
    coords: { lat: 46.2000, lng: -3.8000 }, // Offshore-Marker im Atlantik vor Frankreich
    icon: "globe",
    color: "#7c3aed",
    title: "„12 Zeitzonen & das afrikanische Französisch”",
    bereich: "⑥ (Überraschung)",
    bereichLabel: "Bereich ⑥: Globale Dimension (Überraschung)",
    isOutreMer: true,
    klischee: "„Frankreich ist ein kleines, kompaktes europäisches Sechseck (l'Hexagone), und die französische Sprache gehört allein Paris.”",
    realitaet: "Durch seine Überseegebiete (DROM-COM) erstreckt sich Frankreich über sage und schreibe 12 Zeitzonen – mehr als die USA oder Russland! Weltweit ist Französisch mit rund 396 Millionen Sprechern die viertmeistgesprochene Sprache. Allerdings leben rund 65 % aller Französischsprechenden in Afrika: In Kinshasa (Demokratische Republik Kongo) sprechen heute mehr Menschen tagtäglich Französisch als im gesamten Großraum Paris!",
    raumanalyse: {
      wo: "Guadeloupe und Martinique (Karibik), Französisch-Guayana (Südamerika), La Réunion und Mayotte (Indischer Ozean), Französisch-Polynesien, Neukaledonien und Wallis/Futuna (Pazifik), Saint-Pierre und Miquelon (Nordatlantik) sowie subantarktische Inseln.",
      was: "Enorme geopolitische und geografische Ausdehnung der Republik und der Frankophonie über den gesamten Globus (zweitgrößte ausschließliche Wirtschaftszone der Weltmeere).",
      warumDort: "Erbe des ersten und zweiten französischen Kolonialreichs vom 17. bis ins 20. Jahrhundert.",
      folgen: "Frankreich ist weitaus globaler, maritimer und flächenmäßig diverser, als es jede traditionelle Europakarte des Festlands vermuten lässt.",
      wandel: "Das demografische und sprachliche Gravitationszentrum des Französischen verlagert sich rasant auf den afrikanischen Kontinent; die Zukunft der Sprache entscheidet sich in Abidjan, Kinshasa und Dakar – nicht mehr in Paris."
    },
    territories: [
      { name: "Guadeloupe", ocean: "Karibik / Atlantik", coords: { lat: 16.2650, lng: -61.5510 }, zoom: 9 },
      { name: "Martinique", ocean: "Karibik / Atlantik", coords: { lat: 14.6415, lng: -61.0242 }, zoom: 9 },
      { name: "Französisch-Guayana", ocean: "Südamerika", coords: { lat: 3.9339, lng: -53.1258 }, zoom: 7 },
      { name: "La Réunion", ocean: "Indischer Ozean", coords: { lat: -21.1151, lng: 55.5364 }, zoom: 9 },
      { name: "Mayotte", ocean: "Indischer Ozean", coords: { lat: -12.8275, lng: 45.1662 }, zoom: 10 },
      { name: "Französisch-Polynesien", ocean: "Südpazifik", coords: { lat: -17.6797, lng: -149.4068 }, zoom: 8 },
      { name: "Neukaledonien", ocean: "Südpazifik", coords: { lat: -21.3069, lng: 165.4853 }, zoom: 7 }
    ]
  }
];

// Zentrums- und Grenz-Konfiguration
const FRANCE_MAP_CONFIG = {
  center: { lat: 46.603354, lng: 2.333333 }, // Geografischer Mittelpunkt Frankreichs
  zoom: 6,
  minZoom: 2,
  maxZoom: 18
};
