// IT Essentials – Deel II: Hardwarecomponenten – 6: Optische geheugens en leesgeheugens
// v = vraag, a = antwoord, o = onderwerp (bovenaan de kaart), uitleg = extra uitleg onder het antwoord
// img = afbeelding op de voorkant (map afbeeldingen/ITdeel2les6_optisch/), imgAntwoord = afbeelding op de achterkant (optioneel)
// wit: true = witte kaart die de cursus voorstelt · extra: true = extra info, niet uit de cursus (turquoise rand)
// tabel = kleine overzichtstabel (eerste rij = kolomkoppen)
// De structuur onderaan bepaalt het overzicht rechts (volgorde van de slides).

const kaarten_IT_deel2_les6 = [

  // ===== Inhoud (slide 2) =====
  { v: "Optische geheugens en leesgeheugens (slide 2)", a: "Dit hoofdstuk heeft twee delen:\n• Optische geheugens\n• Leesgeheugens", o: "Inhoud", wit: true,
    uitleg: "Optisch betekent: de data wordt met licht gelezen, met een laser. Denk aan de cd, de dvd en de Blu-ray.\n\nLeesgeheugens zijn ROM en zijn opvolgers: PROM, EPROM, EEPROM en flash. Flash zit vandaag in usb-sticks, geheugenkaartjes en SSD's, dus ook die komen aan bod." },
  { v: "Welke 2 onderwerpen komen aan bod in hoofdstuk 6?", a: "1. Optische geheugens\n2. Leesgeheugens", o: "Inhoud" },

  // ===== De cd: oorsprong (slide 3) =====
  { v: "De cd: geschiedenis (slide 3)", a: "• Ontwikkeld door Philips en Sony als geluidsdrager\n• 12 cm diameter, 1,2 mm dik, gat van 15 mm\n• Later ook de standaard voor data-opslag", o: "De cd: oorsprong", wit: true,
    uitleg: "Geluidsdrager betekent: iets waar je muziek op zet. De cd was dus eerst de audio-cd. Later ging men er ook computerdata op zetten." },
  { v: "De cd: eigenschappen (slide 3)", a: "• Niet magnetisch: optische opslag, dus ongevoelig voor magnetische velden\n• ROM: read only memory, de data zit er bij het persen al in", o: "De cd: oorsprong", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s03_pits.jpg",
    uitleg: "Een cd wordt in de fabriek geperst. De data staat erop als heel kleine putjes (pits) met vlakke stukken ertussen (lands). Na het persen kan je niets meer veranderen: je kan de cd alleen lezen.\n\nOmdat een cd met licht gelezen wordt en niet met magnetisme, kan een magneet hem niet wissen. Dat is anders dan bij de harde schijf of de floppy uit hoofdstuk 5." },
  { v: "Wie ontwikkelde de cd, en waarvoor?", a: "Philips en Sony, als geluidsdrager.", o: "De cd: oorsprong" },
  { v: "Waarvoor werd de cd later ook de standaard?", a: "Voor data-opslag.", o: "De cd: oorsprong" },
  { v: "Wat zijn de afmetingen van een cd?", a: "12 cm diameter, 1,2 mm dik, met een gat van 15 mm.", o: "De cd: oorsprong" },
  { v: "Waarom is een cd ongevoelig voor magnetische velden?", a: "Hij is niet magnetisch: het is optische opslag.", o: "De cd: oorsprong" },
  { v: "Waarom is een gewone cd een ROM?", a: "Read only memory: de data zit er bij het persen al in.", o: "De cd: oorsprong",
    uitleg: "Je kan een geperste cd alleen lezen, niet beschrijven." },
  { v: "Wat zie je op deze foto?", a: "Geperste pits in een cd, onder een elektronenmicroscoop.", o: "De cd: oorsprong", img: "afbeeldingen/ITdeel2les6_optisch/l6_s03_pits.jpg",
    uitleg: "De langwerpige putjes zijn de pits; de vlakke stukken ertussen zijn de lands. Samen vormen ze de 1'en en 0'en." },
  { v: "De cd in jaartallen", a: "De audio-cd kwam op de markt in 1982. De cd-rom voor computerdata volgde enkele jaren later.", o: "De cd: oorsprong", extra: true },

  // ===== Een cd lezen met licht (slide 4) =====
  { v: "Een cd lezen: draaisnelheid (slide 4)", a: "• Afhankelijk van de fabrikant\n• Niet altijd constant\n– Buitenste gedeelte trager\n– Binnenste gedeelte sneller", o: "Een cd lezen met licht", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s04_spiraal.jpg",
    uitleg: "De data staat op één lang spoor in de vorm van een spiraal, van binnen naar buiten (rood op de tekening). Een rondje aan de buitenkant is veel langer dan een rondje aan de binnenkant. Daarom draait de schijf buiten trager: zo komt de data altijd ongeveer even snel voorbij de laser." },
  { v: "Een cd lezen: werking (slide 4)", a: "• Laserstraal\n– 780 nm, onzichtbaar\n– Putjes geven een andere reflectie: zo codeer je 1 en 0", o: "Een cd lezen met licht", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s04_doorsnede.jpg",
    uitleg: "De laser schijnt van onderen door het doorzichtige plastic (polycarbonaat) op een dun laagje aluminium. Dat aluminium weerkaatst het licht terug naar een sensor. Waar een putje zit, komt het licht anders terug dan op een vlak stuk. Die verschillen leest de speler als 1 en 0.\n\nDe tekening toont de lagen van een cd: label, acryl, aluminium en polycarbonaat (samen 1,2 mm dik)." },
  { v: "Draait een cd altijd aan dezelfde snelheid?", a: "Nee: de draaisnelheid hangt af van de fabrikant en is niet altijd constant. Het buitenste gedeelte draait trager, het binnenste sneller.", o: "Een cd lezen met licht" },
  { v: "Draait een cd aan de buitenkant sneller of trager dan aan de binnenkant?", a: "Trager.", o: "Een cd lezen met licht",
    uitleg: "Een rondje buiten is langer, dus er komt per toer meer data voorbij." },
  { v: "Hoe ziet het spoor van een cd eruit op deze tekening?", a: "Eén lang spiraalvormig spoor, van binnen naar buiten.", o: "Een cd lezen met licht", img: "afbeeldingen/ITdeel2les6_optisch/l6_s04_spiraal.jpg" },
  { v: "Waarmee wordt een cd gelezen?", a: "Met een laserstraal van 780 nm, die onzichtbaar is.", o: "Een cd lezen met licht" },
  { v: "Hoe codeert een cd een 1 en een 0?", a: "De putjes geven een andere reflectie van het laserlicht.", o: "Een cd lezen met licht" },
  { v: "Welke lagen van een cd staan op plaats 1 tot 4?", a: "1 = label\n2 = acryl (acrylic)\n3 = aluminium (aluminum)\n4 = polycarbonaat (polycarbonate plastic)", o: "Een cd lezen met licht", img: "afbeeldingen/ITdeel2les6_optisch/l6_s04_doorsnede_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les6_optisch/l6_s04_doorsnede.jpg",
    uitleg: "De laser komt van onderen door het polycarbonaat; het aluminium weerkaatst het licht." },
  { v: "780 nm en CLV", a: "780 nm (nanometer) is infrarood licht: net buiten wat je oog kan zien.\n\nDat de schijf buiten trager draait zodat de data aan een vaste snelheid voorbijkomt, heet CLV: constant linear velocity.", o: "Een cd lezen met licht", extra: true },

  // ===== Krassen en error correction (slide 5) =====
  { v: "Krassen en error correction (slide 5)", a: "• Redundantie: meer dan 10% van de bits is error-correcting code (ECC)\n• Een schijf krijgt krassen en stof, en speelt toch verder\n– De lezer herkent en herstelt de fouten met die extra bits\n– Een kleine kras: geen data verloren", o: "Krassen en error correction", wit: true,
    uitleg: "Redundantie betekent: er staat meer op de schijf dan strikt nodig. Een deel van de bits is geen data, maar controle-informatie (ECC). Leest de laser door een kras een paar bits verkeerd, dan kan de lezer met die extra bits uitrekenen wat er had moeten staan." },
  { v: "Hoeveel van de bits op een cd is error-correcting code (ECC)?", a: "Meer dan 10%.", o: "Krassen en error correction" },
  { v: "Waarvoor staat ECC?", a: "Error-correcting code.", o: "Krassen en error correction" },
  { v: "Hoe noem je het dat meer dan 10% van de bits op een cd extra controlebits zijn?", a: "Redundantie.", o: "Krassen en error correction" },
  { v: "Waarom speelt een cd met krassen en stof toch verder?", a: "De lezer herkent en herstelt de fouten met de extra bits (ECC).", o: "Krassen en error correction" },
  { v: "Gaat er data verloren bij een kleine kras op een cd?", a: "Nee.", o: "Krassen en error correction" },
  { v: "ECC en de verspreide data", a: "ECC werkt zoals parity bij RAID: extra informatie waarmee je ontbrekende stukjes kan terugrekenen.\n\nDe data staat bovendien verspreid op de schijf. Een kras veegt daardoor niet één lang stuk weg, maar telkens kleine stukjes die hersteld kunnen worden. Bij een grote kras lukt het herstel niet meer.", o: "Krassen en error correction", extra: true },

  // ===== CD-R: eenmalig beschrijfbaar (slide 6) =====
  { v: "CD-R: eenmalig beschrijfbaar (slide 6)", a: "• 1 keer beschrijven ('recordable')\n• Geen pits en lands geperst, maar 'gebrand'\n• Wel een spoor aanwezig om de laserstraal te leiden en de snelheid van de cd te bepalen", o: "CD-R: eenmalig beschrijfbaar", wit: true,
    uitleg: "Een lege CD-R heeft nog geen data, maar wel al een voorgevormd spoor. Daardoor weet de schrijflaser waar hij moet schrijven en hoe snel de schijf draait." },
  { v: "CD-R: werking (slide 6)", a: "• Een laag kleurstof (dye) in plaats van geperste putjes\n• De schrijflaser verhit de kleurstof: die plek weerkaatst daarna minder\n• Wat gebrand is, blijft gebrand", o: "CD-R: eenmalig beschrijfbaar", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s06_cdr.jpg",
    uitleg: "Daarom heet het 'een cd branden'. Een gebrande plek weerkaatst slecht, net zoals een putje op een geperste cd. De speler ziet dus hetzelfde verschil tussen 1 en 0.\n\nDe foto toont de onderkant van een lege CD-R: de kleur komt van de kleurstof." },
  { v: "Hoe vaak kan je een CD-R beschrijven?", a: "1 keer ('recordable').", o: "CD-R: eenmalig beschrijfbaar" },
  { v: "Worden de pits en lands van een CD-R geperst?", a: "Nee, ze worden 'gebrand'.", o: "CD-R: eenmalig beschrijfbaar" },
  { v: "Waarvoor dient het spoor dat al op een lege CD-R staat?", a: "Om de laserstraal te leiden en de snelheid van de cd te bepalen.", o: "CD-R: eenmalig beschrijfbaar" },
  { v: "Welke laag gebruikt een CD-R in plaats van geperste putjes?", a: "Een laag kleurstof (dye).", o: "CD-R: eenmalig beschrijfbaar" },
  { v: "Wat doet de schrijflaser bij een CD-R?", a: "Hij verhit de kleurstof: die plek weerkaatst daarna minder.", o: "CD-R: eenmalig beschrijfbaar" },
  { v: "Kan je een gebrande plek op een CD-R terug wissen?", a: "Nee: wat gebrand is, blijft gebrand.", o: "CD-R: eenmalig beschrijfbaar" },
  { v: "Wat zie je op deze foto, en waar komt de kleur vandaan?", a: "De onderkant van een lege CD-R. De kleur komt van de kleurstof (dye).", o: "CD-R: eenmalig beschrijfbaar", img: "afbeeldingen/ITdeel2les6_optisch/l6_s06_cdr.jpg" },

  // ===== CD-RW: herschrijfbaar (slide 7) =====
  { v: "CD-RW: herschrijfbaar (slide 7)", a: "• Midden jaren 90 uitgebreid voor read/write: herschrijfbaar\n• Werking: phase change (fasewisseling)\n– De laser verhit de laag tot een van twee temperaturen\n– Heel heet: de laag wordt amorf en weerkaatst slecht, zoals een pit\n– Minder heet: de laag kristalliseert en weerkaatst weer goed, zoals een land\n– Zo kan je een plek wissen en opnieuw beschrijven", o: "CD-RW: herschrijfbaar", wit: true,
    uitleg: "Fase betekent hier: de toestand van het materiaal. Amorf = de deeltjes liggen door elkaar, zoals glas: dat weerkaatst slecht. Kristallijn = de deeltjes liggen netjes geordend: dat weerkaatst goed. Omdat je met de laser telkens van de ene naar de andere toestand kan gaan, kan je de schijf wissen en opnieuw beschrijven." },
  { v: "CD-RW: minder duidelijk verschil (slide 7)", a: "• Verschil tussen 0 en 1 minder duidelijk 'zichtbaar'\n– Oudere lezers kunnen geen CD-RW lezen, bijvoorbeeld een oude audio-cd-speler", o: "CD-RW: herschrijfbaar", wit: true,
    uitleg: "Een amorfe plek weerkaatst wel minder dan een kristallijne, maar het verschil is kleiner dan tussen een echt putje en een vlak stuk. Een oude speler met een minder gevoelige sensor ziet dat verschil niet goed." },
  { v: "Wanneer werd de cd uitgebreid voor read/write (herschrijfbaar)?", a: "Midden jaren 90.", o: "CD-RW: herschrijfbaar" },
  { v: "Volgens welk principe werkt een CD-RW?", a: "Phase change (fasewisseling).", o: "CD-RW: herschrijfbaar" },
  { v: "Wat gebeurt er als de laser de laag van een CD-RW heel heet maakt?", a: "De laag wordt amorf en weerkaatst slecht, zoals een pit.", o: "CD-RW: herschrijfbaar" },
  { v: "Wat gebeurt er als de laser de laag van een CD-RW minder heet maakt?", a: "De laag kristalliseert en weerkaatst weer goed, zoals een land.", o: "CD-RW: herschrijfbaar" },
  { v: "Tot hoeveel temperaturen verhit de laser de laag van een CD-RW?", a: "Tot een van twee temperaturen: heel heet of minder heet.", o: "CD-RW: herschrijfbaar" },
  { v: "Waarom kunnen oudere lezers soms geen CD-RW lezen?", a: "Het verschil tussen 0 en 1 is minder duidelijk 'zichtbaar'. Een voorbeeld is een oude audio-cd-speler.", o: "CD-RW: herschrijfbaar" },

  // ===== ROM, R en RW vergeleken (slide 8) =====
  { v: "ROM, R en RW vergeleken (slide 8)", a: "Voor de lezer is het hetzelfde: een plek die slecht weerkaatst, leest als een pit.", o: "ROM, R en RW vergeleken", wit: true,
    tabel: [
      ["", "Read-only", "Recordable", "Rewritable"],
      ["Voorbeeld", "CD-ROM", "CD-R", "CD-RW"],
      ["Hoe de data erop komt", "pits en lands geperst in de fabriek", "de laser verbrandt een laag kleurstof (dye)", "de laser maakt de laag amorf of kristallijn (phase change)"],
      ["Hoe vaak schrijven", "nooit", "1 keer", "vaak: wissen en opnieuw schrijven"],
      ["Leest elke speler het?", "ja", "meestal", "oudere spelers niet"]
    ] },
  { v: "Waarom maakt het voor de lezer niet uit of een cd geperst, gebrand of herschreven is?", a: "Voor de lezer is het hetzelfde: een plek die slecht weerkaatst, leest als een pit.", o: "ROM, R en RW vergeleken" },
  { v: "Geef het voorbeeld van read-only, recordable en rewritable bij de cd.", a: "Read-only: CD-ROM\nRecordable: CD-R\nRewritable: CD-RW", o: "ROM, R en RW vergeleken" },
  { v: "Hoe komt de data op een CD-ROM, een CD-R en een CD-RW?", a: "CD-ROM: pits en lands geperst in de fabriek.\nCD-R: de laser verbrandt een laag kleurstof (dye).\nCD-RW: de laser maakt de laag amorf of kristallijn (phase change).", o: "ROM, R en RW vergeleken" },
  { v: "Hoe vaak kan je schrijven op een CD-ROM, een CD-R en een CD-RW?", a: "CD-ROM: nooit.\nCD-R: 1 keer.\nCD-RW: vaak: wissen en opnieuw schrijven.", o: "ROM, R en RW vergeleken" },
  { v: "Leest elke speler een CD-ROM, een CD-R en een CD-RW?", a: "CD-ROM: ja.\nCD-R: meestal.\nCD-RW: oudere spelers niet.", o: "ROM, R en RW vergeleken" },

  // ===== De dvd (slide 9) =====
  { v: "De dvd (slide 9)", a: "• Digital Versatile Disc\n– Zelfde afmeting als de CD-ROM\n– Grotere capaciteit (4,7 GB): data dichter bij elkaar", o: "De dvd", wit: true,
    uitleg: "Versatile betekent veelzijdig: de dvd is voor films, maar ook voor data. Hij ziet er uit zoals een cd, maar er past veel meer op, omdat de putjes en de sporen dichter bij elkaar liggen." },
  { v: "De dvd: werking (slide 9)", a: "• Rode laser, fijner gefocust dan bij de cd\n• Pits en lands kleiner dan bij de cd\n• Andere mechanismen voor adressering en error correction\n• Eventueel 2 lagen (dual layer), gescheiden door een half doorlatende laag, en eventueel tweezijdig", o: "De dvd", wit: true,
    uitleg: "Dual layer: er liggen twee datalagen boven elkaar. De bovenste laag laat een deel van het licht door, zodat de laser door de eerste laag heen de tweede kan lezen; hij stelt gewoon scherp op een andere diepte.\n\nTweezijdig: er staat ook data op de andere kant van de schijf." },
  { v: "Waarvoor staat dvd?", a: "Digital Versatile Disc.", o: "De dvd" },
  { v: "Is een dvd groter of kleiner dan een CD-ROM?", a: "Even groot: zelfde afmeting als een CD-ROM.", o: "De dvd" },
  { v: "Wat is de capaciteit van een dvd (1 laag), en waarom past er meer op dan op een cd?", a: "4,7 GB: de data ligt dichter bij elkaar.", o: "De dvd" },
  { v: "Welke laser gebruikt een dvd, en hoe verschilt die van de cd?", a: "Een rode laser, fijner gefocust dan bij de cd.", o: "De dvd" },
  { v: "Zijn de pits en lands van een dvd groter of kleiner dan bij een cd?", a: "Kleiner.", o: "De dvd" },
  { v: "Wat is een dual layer dvd?", a: "Een dvd met 2 lagen, gescheiden door een half doorlatende laag.", o: "De dvd" },
  { v: "Kan een dvd tweezijdig zijn?", a: "Ja, eventueel tweezijdig.", o: "De dvd" },
  { v: "Wat is er bij de dvd nog anders dan bij de cd, behalve de laser en de pits?", a: "Andere mechanismen voor adressering en error correction.", o: "De dvd" },

  // ===== DVD: regiocodes (slide 10) =====
  { v: "DVD: regiocodes (slide 10)", a: "• DVD: vooral films\n• Films kwamen niet overal tegelijk uit\n• Daarom een regiocode op de schijf\n– En ook in het toestel, in de hardware of in de software\n• Een schijf speelt alleen af op een speler uit dezelfde regio", o: "DVD: regiocodes", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s10_regios.jpg",
    uitleg: "Filmmaatschappijen brachten een film bijvoorbeeld eerst in de VS uit en pas maanden later in Europa. Met een regiocode konden ze voorkomen dat iemand in Europa al een Amerikaanse dvd afspeelde.\n\nDe kaart toont de dvd-regio's 1 tot 6. België valt in regio 2." },
  { v: "Waarvoor werden dvd's vooral gebruikt?", a: "Voor films.", o: "DVD: regiocodes" },
  { v: "Waarom kreeg een dvd een regiocode?", a: "Films kwamen niet overal tegelijk uit.", o: "DVD: regiocodes" },
  { v: "Waar zit de regiocode van een dvd?", a: "Op de schijf, en ook in het toestel: in de hardware of in de software.", o: "DVD: regiocodes" },
  { v: "Op welke speler speelt een dvd met een regiocode af?", a: "Alleen op een speler uit dezelfde regio.", o: "DVD: regiocodes" },
  { v: "Hoeveel dvd-regio's toont deze kaart, en in welke regio valt België?", a: "De regio's 1 tot 6. België valt in regio 2.", o: "DVD: regiocodes", img: "afbeeldingen/ITdeel2les6_optisch/l6_s10_regios.jpg" },

  // ===== Blu-ray: capaciteit (slide 11) =====
  { v: "Blu-ray: capaciteit (slide 11)", a: "• Met HD-tv kwam meer data per film: ongeveer 5x meer bandbreedte dan een dvd", o: "Blu-ray: capaciteit", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s11_capaciteit.jpg",
    uitleg: "HD-beelden hebben veel meer pixels, dus een film in HD is veel meer data. Een dvd was daarvoor te klein, en zo kwam de Blu-ray.\n\nDe grafiek toont de capaciteit per schijf: cd 0,7 GB · dvd 1 laag 4,7 GB · dvd 2 lagen 8,5 GB · Blu-ray 1 laag 25 GB · Blu-ray 2 lagen 50 GB." },
  { v: "Waarom kwam er na de dvd de Blu-ray?", a: "Met HD-tv kwam meer data per film: ongeveer 5x meer bandbreedte dan een dvd.", o: "Blu-ray: capaciteit" },
  { v: "Hoeveel meer bandbreedte vraagt een HD-film ongeveer dan een dvd?", a: "Ongeveer 5x meer.", o: "Blu-ray: capaciteit" },
  { v: "Welke capaciteit hoort bij de staven 1 tot 5?", a: "1 = cd: 0,7 GB\n2 = dvd, 1 laag: 4,7 GB\n3 = dvd, 2 lagen: 8,5 GB\n4 = Blu-ray, 1 laag: 25 GB\n5 = Blu-ray, 2 lagen: 50 GB", o: "Blu-ray: capaciteit", img: "afbeeldingen/ITdeel2les6_optisch/l6_s11_capaciteit_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les6_optisch/l6_s11_capaciteit.jpg" },

  // ===== Kortere golflengte, meer data (slide 12) =====
  { v: "Kortere golflengte, meer data (slide 12)", a: "• CD: infrarode laser (780 nm), track pitch 1,6 micron\n• DVD: rode laser (650 nm), track pitch 0,74 micron\n• Blu-ray: blauwe laser (405 nm), track pitch 0,32 micron\n• Kleinere lichtvlek, dus sporen en putjes dichter op elkaar", o: "Kortere golflengte, meer data", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s12_lasers.jpg",
    uitleg: "Hoe korter de golflengte van het licht, hoe kleiner het lichtvlekje dat de laser kan maken. Met een kleiner vlekje kan je kleinere putjes lezen en de sporen dichter naast elkaar leggen. Zo past er meer data op dezelfde schijf.\n\nTrack pitch = de afstand tussen twee sporen naast elkaar. 1 micron = 1 duizendste van een millimeter." },
  { v: "Welke laser en golflengte gebruikt een cd?", a: "Een infrarode laser van 780 nm.", o: "Kortere golflengte, meer data" },
  { v: "Welke laser en golflengte gebruikt een dvd?", a: "Een rode laser van 650 nm.", o: "Kortere golflengte, meer data" },
  { v: "Welke laser en golflengte gebruikt een Blu-ray?", a: "Een blauwe laser van 405 nm.", o: "Kortere golflengte, meer data" },
  { v: "Wat is de track pitch van een cd, een dvd en een Blu-ray?", a: "Cd: 1,6 micron.\nDvd: 0,74 micron.\nBlu-ray: 0,32 micron.", o: "Kortere golflengte, meer data" },
  { v: "Waarom past er meer data op een schijf met een kortere golflengte?", a: "Een kleinere lichtvlek: de sporen en putjes kunnen dichter op elkaar.", o: "Kortere golflengte, meer data" },
  { v: "Welke laser hoort bij 1, 2 en 3, en welke track pitch bij 4, 5 en 6?", a: "1 = cd: 780 nm (infrarood)\n2 = dvd: 650 nm (rood)\n3 = Blu-ray: 405 nm (blauw)\n4 = cd: 1,6 micron\n5 = dvd: 0,74 micron\n6 = Blu-ray: 0,32 micron", o: "Kortere golflengte, meer data", img: "afbeeldingen/ITdeel2les6_optisch/l6_s12_lasers_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les6_optisch/l6_s12_lasers.jpg",
    uitleg: "Op de tekening staat bij de cd 'red laser', maar volgens de cursus is de cd-laser infrarood (780 nm)." },
  { v: "Wat is track pitch precies?", a: "Track pitch is de afstand van het midden van een spoor tot het midden van het spoor ernaast. Hoe kleiner die afstand, hoe meer sporen er op de schijf passen. Vergelijk het met de track density (TPI) uit hoofdstuk 5.", o: "Kortere golflengte, meer data", extra: true },

  // ===== Blu-ray: opkomst en vandaag (slide 13) =====
  { v: "Blu-ray: opkomst en vandaag (slide 13, ter informatie)", a: "Blu-ray kwam er samen met HD-tv.\n• Spelers waren eerst duur: de blauwe laser was nieuw en schaars\n– Na verloop van tijd werden ze goedkoper\n• Vandaag\n– Films en software komen vooral via streaming en downloads\n– Laptops hebben bijna nooit nog een optische lezer", o: "Blu-ray: opkomst en vandaag", wit: true,
    uitleg: "De cursus zet bij deze slide 'Ter informatie!'." },
  { v: "Waarom waren Blu-ray-spelers eerst duur?", a: "De blauwe laser was nieuw en schaars.", o: "Blu-ray: opkomst en vandaag" },
  { v: "Hoe komen films en software vandaag vooral bij ons?", a: "Via streaming en downloads.", o: "Blu-ray: opkomst en vandaag",
    uitleg: "Daarom hebben laptops bijna nooit nog een optische lezer." },

  // ===== De standaarden op een rij (slide 14) =====
  { v: "De standaarden op een rij (slide 14)", a: "• Niet elke lezer leest alles: een cd-speler geen dvd, een dvd-speler geen Blu-ray\n• Oudere toestellen lezen soms geen RW, of maar een van -R en +R", o: "De standaarden op een rij", wit: true,
    tabel: [
      ["", "CD", "DVD", "Blu-ray"],
      ["Laser", "infrarood, 780 nm", "rood, 650 nm", "blauw, 405 nm"],
      ["Capaciteit, 1 laag", "700 MB", "4,7 GB", "25 GB"],
      ["Capaciteit, 2 lagen", "", "8,5 GB", "50 GB"],
      ["Read-only (geperst)", "CD-ROM", "DVD-ROM", "BD-ROM"],
      ["Recordable (1x)", "CD-R", "DVD-R, DVD+R", "BD-R"],
      ["Rewritable", "CD-RW", "DVD-RW, DVD+RW", "BD-RE"],
      ["Speler leest ook", "", "cd", "dvd en cd"]
    ] },
  { v: "Kan een cd-speler een dvd lezen? En een dvd-speler een Blu-ray?", a: "Nee, niet elke lezer leest alles: een cd-speler leest geen dvd, een dvd-speler geen Blu-ray.", o: "De standaarden op een rij" },
  { v: "Wat leest een dvd-speler ook nog? En een Blu-ray-speler?", a: "Een dvd-speler leest ook cd's.\nEen Blu-ray-speler leest ook dvd's en cd's.", o: "De standaarden op een rij" },
  { v: "Welke problemen kunnen oudere toestellen hebben met beschrijfbare schijven?", a: "Ze lezen soms geen RW, of maar een van -R en +R.", o: "De standaarden op een rij" },
  { v: "Wat is de capaciteit van een cd, een dvd en een Blu-ray met 1 laag?", a: "Cd: 700 MB.\nDvd: 4,7 GB.\nBlu-ray: 25 GB.", o: "De standaarden op een rij" },
  { v: "Wat is de capaciteit van een dvd en een Blu-ray met 2 lagen?", a: "Dvd: 8,5 GB.\nBlu-ray: 50 GB.", o: "De standaarden op een rij" },
  { v: "Hoe heten de read-only (geperste) versies van cd, dvd en Blu-ray?", a: "CD-ROM, DVD-ROM en BD-ROM.", o: "De standaarden op een rij" },
  { v: "Hoe heten de recordable versies (1x schrijven) van cd, dvd en Blu-ray?", a: "CD-R, DVD-R en DVD+R, BD-R.", o: "De standaarden op een rij" },
  { v: "Hoe heten de rewritable versies van cd, dvd en Blu-ray?", a: "CD-RW, DVD-RW en DVD+RW, BD-RE.", o: "De standaarden op een rij" },
  { v: "Welke rewritable Blu-ray-variant heet niet 'RW'?", a: "BD-RE.", o: "De standaarden op een rij" },
  { v: "DVD-R en DVD+R", a: "DVD-R en DVD+R zijn twee concurrerende formaten van verschillende fabrikantengroepen. Ze doen hetzelfde (1 keer beschrijven), maar werken net iets anders. Daarom kunnen sommige oudere spelers maar een van de twee lezen. Moderne toestellen lezen allebei.\n\nBD-RE staat voor Blu-ray Disc Recordable Erasable.", o: "De standaarden op een rij", extra: true },

  // ===== ROM: read only memory (slide 15) =====
  { v: "ROM: read only memory (slide 15)", a: "• De inhoud wordt bij de productie vastgebrand: enkel lezen, niet schrijven\n• 'Dode geheugens', cfr. gloeilamp\n• Non-volatile (bestendig): informatie gaat niet verloren als de stroom uitvalt\n• Vroeger gebruikt voor bv. de BIOS van computers", o: "ROM: read only memory", wit: true,
    uitleg: "Een ROM-chip krijgt zijn inhoud in de fabriek en die verandert nooit meer.\n\n'Dood geheugen' en de gloeilamp: wat erin zit, ligt vast zoals een doorgebrande gloeilamp die je niet meer kan herstellen. Je kan niets meer veranderen.\n\nNon-volatile is het tegenovergestelde van het werkgeheugen (RAM) uit hoofdstuk 2, dat alles kwijt is als de stroom uitvalt." },
  { v: "PROM = programmable ROM (slide 15)", a: "• Leeg geleverd: de gebruiker kan 1x schrijven, en vanaf dan blijft alles bewaard\n• Gebruik: vooral prototypes en kleine reeksen", o: "ROM: read only memory", wit: true,
    uitleg: "Een gewone ROM laten maken is pas goedkoop als je er heel veel nodig hebt (grote reeksen). Voor een prototype of een kleine reeks koop je liever lege PROM-chips en schrijf je ze zelf één keer." },
  { v: "Waarvoor staat ROM?", a: "Read Only Memory.", o: "ROM: read only memory" },
  { v: "Wanneer krijgt een ROM zijn inhoud?", a: "Bij de productie wordt de inhoud vastgebrand: daarna enkel lezen, niet schrijven.", o: "ROM: read only memory" },
  { v: "Waarom noemt men ROM 'dode geheugens'?", a: "De inhoud ligt vast en kan niet meer veranderen, zoals bij een gloeilamp (cfr. gloeilamp).", o: "ROM: read only memory" },
  { v: "Wat betekent non-volatile (bestendig)?", a: "De informatie gaat niet verloren als de stroom uitvalt.", o: "ROM: read only memory" },
  { v: "Waarvoor werd ROM vroeger bijvoorbeeld gebruikt?", a: "Voor de BIOS van computers.", o: "ROM: read only memory" },
  { v: "Waarvoor staat PROM?", a: "Programmable ROM.", o: "ROM: read only memory" },
  { v: "Hoe wordt een PROM geleverd, en hoe vaak kan je erop schrijven?", a: "Leeg. De gebruiker kan 1x schrijven, en vanaf dan blijft alles bewaard.", o: "ROM: read only memory" },
  { v: "Waarvoor wordt PROM vooral gebruikt?", a: "Voor prototypes en kleine reeksen.", o: "ROM: read only memory" },

  // ===== PROM: eenmalig programmeren (slide 16) =====
  { v: "PROM: eenmalig programmeren (slide 16)", a: "• Gebruik van een speciaal toestel om gegevens weg te schrijven: de PROM programmer\n• Werkt met zekeringen ('fusable link') die men kan opblazen door een spanningsstoot\n• Zeer traag schrijven: 1000x trager dan SRAM schrijven", o: "PROM: eenmalig programmeren", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s16_prom.jpg",
    uitleg: "Elke bit is een piepklein zekeringetje. Heel blijft het een 1, en met een spanningsstoot blaas je het door, dan wordt het een 0 (of omgekeerd). Een doorgeblazen zekering maak je nooit meer heel: daarom kan je een PROM maar één keer programmeren.\n\nSRAM is het snelle cachegeheugen uit hoofdstuk 2." },
  { v: "Met welk toestel schrijf je gegevens naar een PROM?", a: "Met een PROM programmer.", o: "PROM: eenmalig programmeren" },
  { v: "Hoe worden de bits in een PROM geschreven?", a: "Met zekeringen ('fusable link') die men kan opblazen door een spanningsstoot.", o: "PROM: eenmalig programmeren" },
  { v: "Hoe traag is schrijven naar een PROM?", a: "Zeer traag: 1000x trager dan SRAM schrijven.", o: "PROM: eenmalig programmeren" },
  { v: "Waarom kan je een PROM maar één keer programmeren?", a: "Een opgeblazen zekering (fusable link) kan je niet meer herstellen.", o: "PROM: eenmalig programmeren" },
  { v: "Welk soort chip zie je op deze foto, en hoe schrijf je er gegevens naar?", a: "Een PROM-chip. Je schrijft er gegevens naar met een PROM programmer.", o: "PROM: eenmalig programmeren", img: "afbeeldingen/ITdeel2les6_optisch/l6_s16_prom.jpg",
    uitleg: "De programmer blaast zekeringen (fusable links) op met een spanningsstoot." },

  // ===== EPROM: wissen met uv-licht (slide 17) =====
  { v: "EPROM: wissen met uv-licht (slide 17)", a: "• Inhoud van door de gebruiker geschreven data toch misschien nog aanpassen\n• Erasable programmable ROM\n– Uitwissen door blootstelling aan ultravioletstralen gedurende 20 tot 40 minuten\n– Behuizing met een venster uit kwartskristal", o: "EPROM: wissen met uv-licht", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s17_eprom.jpg",
    uitleg: "Bij een PROM ben je vast na één keer schrijven. Een EPROM kan je wissen: je legt de chip 20 tot 40 minuten onder een uv-lamp. Het uv-licht moet tot bij de chip geraken, daarom zit er een doorzichtig venstertje van kwarts in de behuizing. Dat zie je op de foto." },
  { v: "EPROM: na het uitwissen (slide 17)", a: "• Na uitwissen: herprogrammeerbaar\n– Veel uitwissen: verslechtering van de eigenschappen\n– Na 10 jaar: toch verliezen van informatie", o: "EPROM: wissen met uv-licht", wit: true,
    uitleg: "Een EPROM kan dus vaak opnieuw gebruikt worden, maar niet eindeloos, en de data blijft er ook niet voor altijd op staan." },
  { v: "Waarvoor staat EPROM?", a: "Erasable programmable ROM.", o: "EPROM: wissen met uv-licht" },
  { v: "Welk voordeel heeft EPROM tegenover PROM?", a: "Je kan de door de gebruiker geschreven data toch nog aanpassen: de chip is uitwisbaar.", o: "EPROM: wissen met uv-licht" },
  { v: "Hoe wis je een EPROM, en hoe lang duurt dat?", a: "Door blootstelling aan ultravioletstralen, gedurende 20 tot 40 minuten.", o: "EPROM: wissen met uv-licht" },
  { v: "Waarom heeft een EPROM een venster in de behuizing? Uit welk materiaal is het?", a: "Om het uv-licht tot bij de chip te laten. Het venster is uit kwartskristal.", o: "EPROM: wissen met uv-licht" },
  { v: "Wat kan je met een EPROM na het uitwissen?", a: "Opnieuw programmeren: hij is herprogrammeerbaar.", o: "EPROM: wissen met uv-licht" },
  { v: "Wat zijn de 2 nadelen van een EPROM?", a: "Veel uitwissen verslechtert de eigenschappen.\nNa 10 jaar verliest hij toch informatie.", o: "EPROM: wissen met uv-licht" },
  { v: "Welk soort chip zie je op deze foto, en waaraan herken je hem?", a: "Een EPROM: je herkent hem aan het venster (uit kwartskristal) in de behuizing.", o: "EPROM: wissen met uv-licht", img: "afbeeldingen/ITdeel2les6_optisch/l6_s17_eprom.jpg" },

  // ===== EEPROM: elektrisch wissen (slide 18) =====
  { v: "EEPROM: elektrisch wissen (slide 18)", a: "• Electrically Erasable PROM: elektrisch wissen en herschrijven, in het toestel zelf\n• Geen uv-licht nodig, sneller wissen, wel duurder dan EPROM\n• Na 10 jaar informatieverlies", o: "EEPROM: elektrisch wissen", wit: true,
    uitleg: "Het grote verschil met EPROM: je hoeft de chip niet uit het toestel te halen en onder een uv-lamp te leggen. Een elektrisch signaal wist hem, terwijl hij gewoon in het toestel zit." },
  { v: "EEPROM: twee varianten (slide 18)", a: "Er zijn twee varianten van EEPROM.", o: "EEPROM: elektrisch wissen", wit: true,
    uitleg: "Flash wist een heel blok tegelijk: dat is eenvoudiger te bouwen, dus compacter en goedkoper. Full-featured EEPROM kan één byte apart wissen; daarvoor is meer elektronica nodig.\n\nErase cycles = hoe vaak je kan wissen voor het geheugen versleten is.",
    tabel: [
      ["", "Flash EEPROM", "Full-featured EEPROM"],
      ["Wissen", "per blok", "per byte"],
      ["Kostprijs", "goedkoop", "duurder"],
      ["Ruimte op de chip", "compact", "2,5x meer ruimte"],
      ["Erase cycles", "minder", "veel meer"]
    ] },
  { v: "Waarvoor staat EEPROM?", a: "Electrically Erasable PROM.", o: "EEPROM: elektrisch wissen" },
  { v: "Hoe en waar wis je een EEPROM?", a: "Elektrisch, in het toestel zelf.", o: "EEPROM: elektrisch wissen" },
  { v: "Wat zijn de voordelen van EEPROM tegenover EPROM?", a: "Geen uv-licht nodig en sneller wissen.", o: "EEPROM: elektrisch wissen" },
  { v: "Wat is het nadeel van EEPROM tegenover EPROM?", a: "Duurder.", o: "EEPROM: elektrisch wissen" },
  { v: "Hoe lang blijft de informatie in een EEPROM bewaard?", a: "Na 10 jaar is er informatieverlies.", o: "EEPROM: elektrisch wissen" },
  { v: "Geef de 2 varianten van EEPROM.", a: "Flash EEPROM en full-featured EEPROM.", o: "EEPROM: elektrisch wissen" },
  { v: "Hoe wissen flash EEPROM en full-featured EEPROM?", a: "Flash EEPROM: per blok.\nFull-featured EEPROM: per byte.", o: "EEPROM: elektrisch wissen" },
  { v: "Welke EEPROM-variant is goedkoop, en welke duurder?", a: "Flash EEPROM: goedkoop.\nFull-featured EEPROM: duurder.", o: "EEPROM: elektrisch wissen" },
  { v: "Hoeveel meer ruimte op de chip neemt full-featured EEPROM in dan flash?", a: "2,5x meer ruimte; flash is compact.", o: "EEPROM: elektrisch wissen" },
  { v: "Welke EEPROM-variant heeft veel meer erase cycles?", a: "Full-featured EEPROM. Flash EEPROM heeft er minder.", o: "EEPROM: elektrisch wissen" },

  // ===== Flash: de doorbraak (slide 19) =====
  { v: "Flash: de doorbraak (slide 19)", a: "Flash werd zeer populair. Doorbraak door:\n• Meer mogelijke herbeschrijvingen, hogere informatiedichtheid, lagere kost\n• Laag energieverbruik: ideaal voor draagbare toestellen\n• Zeer vlug tov. andere bestendige geheugens (vooral random lezen of schrijven)\n• Betrouwbaar: geen mechanische onderdelen, compact tov. HDD", o: "Flash: de doorbraak", wit: true,
    uitleg: "Random lezen of schrijven = kleine stukjes data op willekeurige plaatsen. Een harde schijf moet daarvoor telkens zijn kop verplaatsen en wachten tot de plaat draait. Flash heeft geen bewegende delen en is daar dus veel sneller in." },
  { v: "Flash: wat blijft, en waar zit het (slide 19)", a: "• Wat blijft: elke cel kan maar een beperkt aantal keer gewist worden\n• Flash zit overal: camera's, smartphones, printers, usb-sticks, SSD's\n– Kaartjes: vandaag vooral SD en microSD", o: "Flash: de doorbraak", wit: true,
    uitleg: "Elke keer dat je een cel wist, slijt ze een klein beetje. Na veel wisbeurten werkt ze niet meer. Bij gewoon gebruik duurt dat jaren." },
  { v: "Geef de 4 redenen voor de doorbraak van flash.", a: "1. Meer mogelijke herbeschrijvingen, hogere informatiedichtheid, lagere kost.\n2. Laag energieverbruik: ideaal voor draagbare toestellen.\n3. Zeer vlug tov. andere bestendige geheugens (vooral random lezen of schrijven).\n4. Betrouwbaar: geen mechanische onderdelen, compact tov. een HDD.", o: "Flash: de doorbraak" },
  { v: "Waarom is flash ideaal voor draagbare toestellen?", a: "Door het lage energieverbruik.", o: "Flash: de doorbraak" },
  { v: "Waarin is flash vooral sneller dan andere bestendige geheugens?", a: "In random lezen of schrijven.", o: "Flash: de doorbraak" },
  { v: "Waarom is flash betrouwbaarder dan een HDD?", a: "Er zijn geen mechanische onderdelen, en het is compact.", o: "Flash: de doorbraak" },
  { v: "Welke beperking heeft flash nog altijd?", a: "Elke cel kan maar een beperkt aantal keer gewist worden.", o: "Flash: de doorbraak" },
  { v: "Geef 5 toestellen of producten waarin flash zit.", a: "Camera's, smartphones, printers, usb-sticks en SSD's.", o: "Flash: de doorbraak" },
  { v: "Welke flashkaartjes gebruikt men vandaag vooral?", a: "SD en microSD.", o: "Flash: de doorbraak" },
  { v: "Wear leveling", a: "Omdat een flashcel maar een beperkt aantal keer gewist kan worden, verspreidt de controller in een SSD of usb-stick het schrijven over alle cellen. Zo slijten ze ongeveer even snel en gaat het geheugen langer mee. Dat heet wear leveling.", o: "Flash: de doorbraak", extra: true },

  // ===== Flash: meer bits per cel (slide 20) =====
  { v: "Flash: meer bits per cel (slide 20)", a: "• SLC: 1 bit per cel, 2 waarden (2¹), snelst en duurzaamst\n• MLC en TLC: 2 en 3 bits per cel, 4 (2²) en 8 (2³) waarden\n• QLC: 4 bits per cel, 16 waarden (2⁴), meeste capaciteit, traagst", o: "Flash: meer bits per cel", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s20_bitspercel.jpg",
    uitleg: "Een flashcel bewaart een hoeveelheid elektrische lading. Bij SLC onderscheid je maar 2 niveaus (vol of leeg = 1 bit). Bij MLC 4 niveaus, bij TLC 8, bij QLC 16. Met n bits heb je 2ⁿ waarden.\n\nHoe meer niveaus, hoe meer data per cel, maar ook hoe moeilijker de niveaus te onderscheiden zijn. Daarom is SLC het snelst en duurzaamst en QLC het traagst. Op de tekening zie je de niveaus: 1 en 0 bij SLC, 11 tot 00 bij MLC, 111 tot 000 bij TLC." },
  { v: "Hoeveel bits per cel en hoeveel waarden heeft SLC?", a: "1 bit per cel, 2 waarden (2¹).", o: "Flash: meer bits per cel" },
  { v: "Hoeveel bits per cel en hoeveel waarden hebben MLC en TLC?", a: "MLC: 2 bits, 4 waarden (2²).\nTLC: 3 bits, 8 waarden (2³).", o: "Flash: meer bits per cel" },
  { v: "Hoeveel bits per cel en hoeveel waarden heeft QLC?", a: "4 bits per cel, 16 waarden (2⁴).", o: "Flash: meer bits per cel" },
  { v: "Welk flashtype is het snelst en duurzaamst?", a: "SLC.", o: "Flash: meer bits per cel" },
  { v: "Welk flashtype heeft de meeste capaciteit, maar is het traagst?", a: "QLC.", o: "Flash: meer bits per cel" },
  { v: "Welk type flash hoort bij 1, 2 en 3 op deze tekening?", a: "1 = SLC: 1 bit per cel\n2 = MLC: 2 bits per cel\n3 = TLC: 3 bits per cel", o: "Flash: meer bits per cel", img: "afbeeldingen/ITdeel2les6_optisch/l6_s20_bitspercel_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les6_optisch/l6_s20_bitspercel.jpg",
    uitleg: "Tel de niveaus: 2 (1 en 0), 4 (11 tot 00) en 8 (111 tot 000)." },
  { v: "Waar staan de afkortingen SLC, MLC, TLC en QLC voor?", a: "SLC = single-level cell\nMLC = multi-level cell\nTLC = triple-level cell\nQLC = quad-level cell", o: "Flash: meer bits per cel", extra: true },

  // ===== Geheugentypes op een rij (slide 21) =====
  { v: "Geheugentypes op een rij (slide 21)", a: "Alle geheugentypes uit de hoofdstukken 2 en 6 naast elkaar.", o: "Geheugentypes op een rij", wit: true,
    uitleg: "Byte-alterable = je kan één byte apart veranderen. Volatile = de data is weg als de stroom uitvalt. Read-mostly = je leest er vooral van en schrijft er maar af en toe naar.",
    tabel: [
      ["Type", "Category", "Wissen", "Byte-alterable", "Volatile", "Typisch gebruik"],
      ["SRAM", "read/write", "elektrisch", "ja", "ja", "cache in de processor"],
      ["DRAM", "read/write", "elektrisch", "ja", "ja", "werkgeheugen (vroeger)"],
      ["SDRAM", "read/write", "elektrisch", "ja", "ja", "werkgeheugen (nu, DDR)"],
      ["ROM", "read-only", "niet mogelijk", "nee", "nee", "grote reeksen toestellen"],
      ["PROM", "read-only", "niet mogelijk", "nee", "nee", "kleine reeksen"],
      ["EPROM", "read-mostly", "uv-licht", "nee", "nee", "prototypes"],
      ["EEPROM", "read-mostly", "elektrisch", "ja", "nee", "prototypes, instellingen"],
      ["Flash", "read/write", "elektrisch (blok)", "nee", "nee", "usb-stick, SSD, smartphone"]
    ] },
  { v: "Welke geheugentypes uit de tabel zijn volatile?", a: "SRAM, DRAM en SDRAM.", o: "Geheugentypes op een rij" },
  { v: "Welke geheugentypes uit de tabel zijn read-only?", a: "ROM en PROM.", o: "Geheugentypes op een rij" },
  { v: "Welke geheugentypes uit de tabel zijn read-mostly?", a: "EPROM en EEPROM.", o: "Geheugentypes op een rij" },
  { v: "Hoe wis je SRAM, ROM, EPROM, EEPROM en flash volgens de tabel?", a: "SRAM: elektrisch.\nROM (en PROM): niet mogelijk.\nEPROM: uv-licht.\nEEPROM: elektrisch.\nFlash: elektrisch (per blok).", o: "Geheugentypes op een rij" },
  { v: "Welke geheugentypes zijn byte-alterable?", a: "SRAM, DRAM, SDRAM en EEPROM.", o: "Geheugentypes op een rij" },
  { v: "Is flash byte-alterable? Waarom?", a: "Nee: flash wist per blok.", o: "Geheugentypes op een rij" },
  { v: "Wat is het typisch gebruik van SRAM, DRAM en SDRAM?", a: "SRAM: cache in de processor.\nDRAM: werkgeheugen (vroeger).\nSDRAM: werkgeheugen (nu, DDR).", o: "Geheugentypes op een rij" },
  { v: "Wat is het typisch gebruik van ROM en PROM?", a: "ROM: grote reeksen toestellen.\nPROM: kleine reeksen.", o: "Geheugentypes op een rij" },
  { v: "Wat is het typisch gebruik van EPROM, EEPROM en flash?", a: "EPROM: prototypes.\nEEPROM: prototypes, instellingen.\nFlash: usb-stick, SSD, smartphone.", o: "Geheugentypes op een rij" },
  { v: "Welke category heeft flash volgens de tabel?", a: "Read/write.", o: "Geheugentypes op een rij" },

  // ===== SSD's: flash als schijf (slide 22) =====
  { v: "SSD's: flash als schijf (slide 22)", a: "Solid state drive (SSD): NAND-flash, vaak met een cache op basis van DRAM.", o: "SSD's: flash als schijf", wit: true,
    uitleg: "Solid state betekent: zonder bewegende delen. De DRAM-cache is een stukje snel werkgeheugen in de SSD, waarin hij bijvoorbeeld bijhoudt waar alle data staat.\n\nDaarom zet men het besturingssysteem vaak op een SSD (snel opstarten) en grote hoeveelheden bestanden op een HDD (goedkoop).",
    tabel: [
      ["", "SSD", "HDD"],
      ["Prijs per GB", "hoger", "lager"],
      ["Opstarten en laden", "snel: geen draaiende onderdelen", "trager: de platen draaien, de kop beweegt"],
      ["Geluid", "geruisloos", "hoorbaar"],
      ["Energie en warmte", "laag", "hoger"],
      ["Schokken, temperatuur", "betrouwbaar", "gevoeliger: bewegende delen"],
      ["Typisch gebruik", "systeemschijf", "veel opslag voor weinig geld"]
    ] },
  { v: "Waarvoor staat SSD?", a: "Solid state drive.", o: "SSD's: flash als schijf" },
  { v: "Uit welk geheugen bestaat een SSD?", a: "NAND-flash, vaak met een cache op basis van DRAM.", o: "SSD's: flash als schijf" },
  { v: "Wat is goedkoper per GB: een SSD of een HDD?", a: "Een HDD. Een SSD heeft een hogere prijs per GB.", o: "SSD's: flash als schijf" },
  { v: "Waarom start een computer met een SSD sneller op dan met een HDD?", a: "Een SSD heeft geen draaiende onderdelen. Bij een HDD moeten de platen draaien en de kop bewegen.", o: "SSD's: flash als schijf" },
  { v: "Vergelijk SSD en HDD op geluid en op energie en warmte.", a: "Geluid: SSD geruisloos, HDD hoorbaar.\nEnergie en warmte: SSD laag, HDD hoger.", o: "SSD's: flash als schijf" },
  { v: "Welke is gevoeliger voor schokken en temperatuur: SSD of HDD? Waarom?", a: "De HDD: die heeft bewegende delen. Een SSD is betrouwbaar.", o: "SSD's: flash als schijf" },
  { v: "Wat is het typisch gebruik van een SSD en van een HDD?", a: "SSD: systeemschijf.\nHDD: veel opslag voor weinig geld.", o: "SSD's: flash als schijf" },

  // ===== Form factor: 2,5 inch (slide 23) =====
  { v: "Form factor: 2,5 inch (slide 23)", a: "2,5 inch SATA-SSD\n• Desktop en laptop\n• Enkel SATA\n• Zelfde vorm als een 2,5 inch harde schijf, dus een rechtstreekse vervanger", o: "Form factor: 2,5 inch", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s23_sata.jpg",
    uitleg: "Form factor = de vorm en de afmetingen van een onderdeel. Een 2,5 inch SSD past op exact dezelfde plaats en met dezelfde kabels als een 2,5 inch harde schijf. Je kan een oude harde schijf dus gewoon vervangen door een SSD.\n\nSATA is de aansluiting (interface) waarlangs de SSD met het moederbord praat." },
  { v: "Welke interface gebruikt een 2,5 inch SSD?", a: "Enkel SATA.", o: "Form factor: 2,5 inch" },
  { v: "In welke toestellen gebruik je een 2,5 inch SATA-SSD?", a: "In desktops en laptops.", o: "Form factor: 2,5 inch" },
  { v: "Waarom is een 2,5 inch SSD een rechtstreekse vervanger van een harde schijf?", a: "Hij heeft dezelfde vorm als een 2,5 inch harde schijf.", o: "Form factor: 2,5 inch" },
  { v: "Welke form factor zie je op deze foto (1)?", a: "1 = 2,5 inch SATA-SSD.", o: "Form factor: 2,5 inch", img: "afbeeldingen/ITdeel2les6_optisch/l6_s23_sata_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les6_optisch/l6_s23_sata.jpg" },
  { v: "Wat is SATA?", a: "SATA (Serial ATA) is de standaardaansluiting voor harde schijven en 2,5 inch SSD's. Er gaan twee kabels naar het toestel: een datakabel en een stroomkabel.", o: "Form factor: 2,5 inch", extra: true },

  // ===== Form factor: M.2 (slide 24) =====
  { v: "Form factor: M.2 (slide 24)", a: "• Small form factor\n• SATA of PCIe (NVMe)\n– M.2 is een form factor, geen snelheid\n• Laptop en desktop\n• Rechtstreeks op het moederbord (geen kabels)\n– De lengte staat in de naam: 2280 is 22 mm breed en 80 mm lang", o: "Form factor: M.2", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s24_m2.jpg",
    uitleg: "Een M.2-SSD is een klein, plat printplaatje dat je rechtstreeks in een slot op het moederbord steekt en vastschroeft.\n\n'Geen snelheid': M.2 zegt alleen iets over de vorm. Een M.2-SSD kan via SATA werken (even snel als een 2,5 inch SSD) of via PCIe/NVMe (veel sneller). Kijk dus altijd welke interface hij gebruikt.\n\nDe foto toont twee M.2-slots, met schroefposities voor 2242, 2260, 2280 en 22110." },
  { v: "Welke interfaces kan een M.2-SSD gebruiken?", a: "SATA of PCIe (NVMe).", o: "Form factor: M.2" },
  { v: "Zegt M.2 iets over de snelheid van een SSD?", a: "Nee: M.2 is een form factor, geen snelheid.", o: "Form factor: M.2" },
  { v: "Hoe wordt een M.2-SSD aangesloten?", a: "Rechtstreeks op het moederbord, zonder kabels.", o: "Form factor: M.2" },
  { v: "In welke toestellen vind je M.2?", a: "In laptops en desktops.", o: "Form factor: M.2" },
  { v: "Wat betekent 2280 bij een M.2-SSD?", a: "22 mm breed en 80 mm lang: de lengte staat in de naam.", o: "Form factor: M.2" },
  { v: "Welke lengtes kan je in de M.2-slots op deze foto vastschroeven?", a: "2242, 2260, 2280 en 22110.", o: "Form factor: M.2", img: "afbeeldingen/ITdeel2les6_optisch/l6_s24_m2.jpg",
    uitleg: "Alle M.2-modules zijn 22 mm breed; de laatste cijfers zijn de lengte: 42, 60, 80 of 110 mm." },
  { v: "Is M.2 een small form factor?", a: "Ja.", o: "Form factor: M.2" },
  { v: "Wat is NVMe?", a: "NVMe (Non-Volatile Memory Express) is een manier van communiceren die speciaal voor flash gemaakt is en over PCIe loopt. Een NVMe-SSD is meerdere keren sneller dan een SATA-SSD.", o: "Form factor: M.2", extra: true },

  // ===== Form factors naast elkaar (slide 25) =====
  { v: "Form factors naast elkaar (slide 25)", a: "Drie vormen van SSD naast elkaar: 2,5 inch SATA, M.2 en PCIe add-in card.", o: "Form factors naast elkaar", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s25_formfactors.jpg",
    uitleg: "De PCIe add-in card is een SSD op een insteekkaart die je in een PCIe-slot van het moederbord steekt, zoals een grafische kaart." },
  { v: "Welke form factors staan op plaats 1, 2 en 3?", a: "1 = 2,5 inch SATA\n2 = M.2\n3 = PCIe add-in card", o: "Form factors naast elkaar", img: "afbeeldingen/ITdeel2les6_optisch/l6_s25_formfactors_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les6_optisch/l6_s25_formfactors.jpg" },

  // ===== U.2: SSD's voor servers (slide 26) =====
  { v: "U.2: SSD's voor servers (slide 26)", a: "• 2,5 inch-formaat in een behuizing (vaak in de vorm van passieve koeling)\n• Enkel PCIe\n• Werkstations en servers\n• Via kabels", o: "U.2: SSD's voor servers", wit: true, img: "afbeeldingen/ITdeel2les6_optisch/l6_s26_u2.jpg",
    uitleg: "Een U.2-SSD ziet eruit als een 2,5 inch SSD, maar is dikker en zit in een metalen behuizing met koelribben. Die ribben voeren de warmte af zonder ventilator: dat heet passieve koeling." },
  { v: "Welk formaat heeft een U.2-SSD?", a: "Het 2,5 inch-formaat, in een behuizing (vaak in de vorm van passieve koeling).", o: "U.2: SSD's voor servers" },
  { v: "Welke interface gebruikt U.2?", a: "Enkel PCIe.", o: "U.2: SSD's voor servers" },
  { v: "Waar vind je U.2-SSD's?", a: "In werkstations en servers.", o: "U.2: SSD's voor servers" },
  { v: "Hoe wordt een U.2-SSD aangesloten?", a: "Via kabels.", o: "U.2: SSD's voor servers" },
  { v: "Welk soort SSD zie je op deze foto?", a: "U.2-SSD's: het 2,5 inch-formaat in een behuizing met passieve koeling.", o: "U.2: SSD's voor servers", img: "afbeeldingen/ITdeel2les6_optisch/l6_s26_u2.jpg" },

  // ===== Form factors vergeleken (slide 27) =====
  { v: "Form factors vergeleken (slide 27)", a: "De vier vormen van SSD naast elkaar.", o: "Form factors vergeleken", wit: true,
    tabel: [
      ["Form factor", "Interface", "Kabels", "Waar je het vindt"],
      ["2,5 inch", "SATA", "ja, data en stroom", "desktop en laptop, vervangt een 2,5 inch harde schijf"],
      ["M.2", "SATA of PCIe (NVMe)", "nee, op het moederbord", "laptop en desktop"],
      ["U.2", "PCIe", "ja", "werkstations en servers"],
      ["PCIe add-in card", "PCIe", "nee, in een PCIe-slot", "desktop en servers"]
    ] },
  { v: "Geef de 4 form factors van SSD's uit de cursus.", a: "2,5 inch, M.2, U.2 en PCIe add-in card.", o: "Form factors vergeleken" },
  { v: "Welke form factors gebruiken enkel PCIe?", a: "U.2 en PCIe add-in card.", o: "Form factors vergeleken" },
  { v: "Welke form factor kan zowel SATA als PCIe (NVMe) gebruiken?", a: "M.2.", o: "Form factors vergeleken" },
  { v: "Welke form factors hebben kabels nodig?", a: "2,5 inch (data en stroom) en U.2.", o: "Form factors vergeleken" },
  { v: "Waar zit een M.2-SSD, en waar een PCIe add-in card?", a: "M.2: op het moederbord.\nPCIe add-in card: in een PCIe-slot.", o: "Form factors vergeleken" },
  { v: "Waar vind je een PCIe add-in card?", a: "In desktops en servers.", o: "Form factors vergeleken" },
  { v: "Welke form factor vervangt een 2,5 inch harde schijf?", a: "De 2,5 inch SSD (SATA).", o: "Form factors vergeleken" },
];

kaarten_IT_deel2_les6.structuur = [
  { o: "Inhoud", slide: "2" },
  { kop: "Optische geheugens", slide: "3–14" },
  { o: "De cd: oorsprong", slide: "3", sub: true },
  { o: "Een cd lezen met licht", slide: "4", sub: true },
  { o: "Krassen en error correction", slide: "5", sub: true },
  { o: "CD-R: eenmalig beschrijfbaar", slide: "6", sub: true },
  { o: "CD-RW: herschrijfbaar", slide: "7", sub: true },
  { o: "ROM, R en RW vergeleken", slide: "8", sub: true },
  { o: "De dvd", slide: "9", sub: true },
  { o: "DVD: regiocodes", slide: "10", sub: true },
  { o: "Blu-ray: capaciteit", slide: "11", sub: true },
  { o: "Kortere golflengte, meer data", slide: "12", sub: true },
  { o: "Blu-ray: opkomst en vandaag", slide: "13", sub: true },
  { o: "De standaarden op een rij", slide: "14", sub: true },
  { kop: "Leesgeheugens", slide: "15–27" },
  { o: "ROM: read only memory", slide: "15", sub: true },
  { o: "PROM: eenmalig programmeren", slide: "16", sub: true },
  { o: "EPROM: wissen met uv-licht", slide: "17", sub: true },
  { o: "EEPROM: elektrisch wissen", slide: "18", sub: true },
  { o: "Flash: de doorbraak", slide: "19", sub: true },
  { o: "Flash: meer bits per cel", slide: "20", sub: true },
  { o: "Geheugentypes op een rij", slide: "21", sub: true },
  { o: "SSD's: flash als schijf", slide: "22", sub: true },
  { o: "Form factor: 2,5 inch", slide: "23", sub: true },
  { o: "Form factor: M.2", slide: "24", sub: true },
  { o: "Form factors naast elkaar", slide: "25", sub: true },
  { o: "U.2: SSD's voor servers", slide: "26", sub: true },
  { o: "Form factors vergeleken", slide: "27", sub: true },
];
