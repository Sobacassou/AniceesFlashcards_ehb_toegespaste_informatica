// IT Essentials – Deel II: Hardwarecomponenten – 7: Poorten
// v = vraag, a = antwoord, o = onderwerp (bovenaan de kaart), uitleg = extra uitleg onder het antwoord
// img = afbeelding op de voorkant (map afbeeldingen/ITdeel2les7_poorten/), imgAntwoord = afbeelding op de achterkant (optioneel)
// wit: true = witte kaart die de cursus voorstelt · extra: true = extra info, niet uit de cursus (turquoise rand)
// tabel = kleine overzichtstabel (eerste rij = kolomkoppen)
// De structuur onderaan bepaalt het overzicht rechts (volgorde van de slides).

const kaarten_IT_deel2_les7 = [

  // ===== Inhoud (slide 2) =====
  { v: "Poorten: inhoud (slide 2)", a: "• De seriële poort\n• PS/2\n• USB\n– Ontwerp, topologie en connectoren\n– USB 2 en USB 3 in gewone taal, en de huidige benamingen\n– Apparaatklassen en stroomvoorziening\n• FireWire en eSATA\n• Beeldschermpoorten: VGA, DVI, HDMI en DisplayPort\n• Overzicht van de externe poorten", o: "Inhoud", wit: true,
    uitleg: "Een poort is een aansluiting op de computer waar je een toestel of kabel in steekt: een muis, een toetsenbord, een usb-stick, een scherm... Dit hoofdstuk overloopt de poorten van oud (serieel, PS/2) naar nieuw (USB-C, HDMI, DisplayPort)." },
  { v: "Welke onderwerpen komen aan bod in hoofdstuk 7, Poorten?", a: "De seriële poort, PS/2, USB, FireWire en eSATA, de beeldschermpoorten (VGA, DVI, HDMI en DisplayPort) en een overzicht van de externe poorten.", o: "Inhoud" },
  { v: "Welke 3 deelonderwerpen van USB komen aan bod?", a: "1. Ontwerp, topologie en connectoren.\n2. USB 2 en USB 3 in gewone taal, en de huidige benamingen.\n3. Apparaatklassen en stroomvoorziening.", o: "Inhoud" },
  { v: "Welke 4 beeldschermpoorten komen aan bod?", a: "VGA, DVI, HDMI en DisplayPort.", o: "Inhoud" },

  // ===== De seriële poort (slide 3) =====
  { v: "De seriële poort: aansluitingen en gebruik (slide 3)", a: "• Steeds minder courant, in tegenstelling tot seriële bussen\n• Komt wel nog frequent voor op networking devices (routers, switches…)\n– Consolekabel nodig\n• Poort op het moederbord doorgaans mannelijk (in tegenstelling tot vga)", o: "De seriële poort", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s03_db9_foto.jpg",
    uitleg: "Serieel betekent: de bits gaan één voor één achter elkaar over de draad. De oude seriële poort (de 9-pins stekker op de foto) zie je op gewone pc's bijna niet meer. Maar 'serieel' als techniek is net heel populair: USB, SATA en PCIe zijn allemaal seriële bussen.\n\nOp routers en switches vind je wel nog een seriële poort: de consolepoort. Daarop sluit je met een consolekabel een computer aan om het toestel in te stellen.\n\nMannelijk = met pinnetjes, vrouwelijk = met gaatjes. De seriële poort op het moederbord heeft pinnetjes; de vga-poort heeft gaatjes." },
  { v: "Is de seriële poort nog courant?", a: "Steeds minder courant, in tegenstelling tot seriële bussen.", o: "De seriële poort" },
  { v: "Op welke toestellen komt de seriële poort nog frequent voor?", a: "Op networking devices, zoals routers en switches.", o: "De seriële poort" },
  { v: "Welke kabel heb je nodig om een seriële poort van een router of switch te gebruiken?", a: "Een consolekabel.", o: "De seriële poort" },
  { v: "Is de seriële poort op het moederbord mannelijk of vrouwelijk? En de vga-poort?", a: "De seriële poort is doorgaans mannelijk; de vga-poort niet (vrouwelijk).", o: "De seriële poort",
    uitleg: "Mannelijk = met pinnetjes, vrouwelijk = met gaatjes." },
  { v: "Welke poort zie je op deze foto?", a: "De seriële poort (mannelijk, met pinnetjes).", o: "De seriële poort", img: "afbeeldingen/ITdeel2les7_poorten/l7_s03_db9_foto.jpg" },
  { v: "Waarvoor staat dit symbool en deze tekening?", a: "Voor de seriële poort.", o: "De seriële poort", img: "afbeeldingen/ITdeel2les7_poorten/l7_s03_serieel_symbool.jpg", imgAntwoord: "afbeeldingen/ITdeel2les7_poorten/l7_s03_db9_tekening.jpg",
    uitleg: "Het symbool IOIOI toont bits die één voor één achter elkaar gaan." },
  { v: "RS-232 en DB-9", a: "De klassieke seriële poort heet RS-232 (op Windows: COM-poort). De stekker heeft meestal 9 pinnen en heet DB-9 of DE-9.\n\nIn de netwerklessen gebruik je een consolekabel om een Cisco-router of -switch in te stellen; vandaag heeft die vaak aan de andere kant een USB-stekker.", o: "De seriële poort", extra: true },

  // ===== PS/2 (slide 4) =====
  { v: "PS/2 (slide 4)", a: "• Aansluiting muis/keyboard\n• 6-polige mini-DIN-poort\n– DIN: Deutsches Institut für Normung\n– Paars voor het toetsenbord, groen voor de muis", o: "PS/2", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s04_ps2_poorten.jpg",
    uitleg: "6-polig = met 6 contactpunten (pinnetjes), zie de tekening met de nummers 1 tot 6. Mini-DIN is de ronde stekkervorm.\n\nDe kleuren helpen je de twee poorten niet te verwisselen: ze zien er verder hetzelfde uit." },
  { v: "Waarvoor dient de PS/2-poort?", a: "Voor de aansluiting van een muis of een keyboard.", o: "PS/2" },
  { v: "Welk soort poort is PS/2?", a: "Een 6-polige mini-DIN-poort.", o: "PS/2" },
  { v: "Waarvoor staat DIN?", a: "Deutsches Institut für Normung.", o: "PS/2" },
  { v: "Welke kleur heeft de PS/2-poort voor het toetsenbord, en welke voor de muis?", a: "Paars voor het toetsenbord, groen voor de muis.", o: "PS/2" },
  { v: "Welke poorten zie je op deze foto? Welke is voor de muis?", a: "Twee PS/2-poorten: de paarse voor het toetsenbord, de groene voor de muis.", o: "PS/2", img: "afbeeldingen/ITdeel2les7_poorten/l7_s04_ps2_poorten.jpg" },
  { v: "Hoeveel polen (pinnen) heeft deze aansluiting, en hoe heet ze?", a: "6 polen: een 6-polige mini-DIN, de PS/2-aansluiting.", o: "PS/2", img: "afbeeldingen/ITdeel2les7_poorten/l7_s04_minidin_pinout.jpg", imgAntwoord: "afbeeldingen/ITdeel2les7_poorten/l7_s04_ps2_stekker.jpg" },
  { v: "PS/2 en hot-swappen", a: "PS/2 is niet hot-swappable: je mag een PS/2-muis of -toetsenbord eigenlijk niet in- of uitpluggen terwijl de computer aanstaat. Daarom en door het gemak verdrong USB de PS/2-poort.", o: "PS/2", extra: true },

  // ===== USB: waarom universeel? (slide 5) =====
  { v: "USB: waarom universeel? (slide 5)", a: "Eén aansluiting voor bijna alles:\n• Lage productiekost, geen schroeven\n• Stekker kan niet verkeerd ingestoken worden\n• Connectoren dwingen de juiste topologie af\n• Goede aarding\n• Plug and play: het toestel meldt zelf wat het is\n• Hot-swappable: in- en uitpluggen terwijl de computer aanstaat\n• Stroomvoorziening over dezelfde kabel", o: "USB: waarom universeel?", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s05_hub.jpg",
    uitleg: "USB staat voor Universal Serial Bus. Vroeger had je voor elk soort toestel een andere poort (serieel, PS/2, printerpoort...). USB verving die allemaal door één soort aansluiting.\n\n'Connectoren dwingen de juiste topologie af': de stekker aan de computerkant (type A) is anders dan die aan de toestelkant (type B). Zo kan je niet per ongeluk twee computers of twee toestellen rechtstreeks met elkaar verbinden." },
  { v: "Waarom heet USB 'universeel'?", a: "Het is één aansluiting voor bijna alles.", o: "USB: waarom universeel?" },
  { v: "Geef de 7 voordelen van USB uit de cursus.", a: "1. Lage productiekost, geen schroeven.\n2. De stekker kan niet verkeerd ingestoken worden.\n3. Connectoren dwingen de juiste topologie af.\n4. Goede aarding.\n5. Plug and play.\n6. Hot-swappable.\n7. Stroomvoorziening over dezelfde kabel.", o: "USB: waarom universeel?" },
  { v: "Wat betekent plug and play?", a: "Het toestel meldt zelf wat het is.", o: "USB: waarom universeel?" },
  { v: "Wat betekent hot-swappable?", a: "In- en uitpluggen terwijl de computer aanstaat.", o: "USB: waarom universeel?" },
  { v: "Waarom heb je voor een usb-muis geen aparte stroomkabel nodig?", a: "USB levert stroomvoorziening over dezelfde kabel.", o: "USB: waarom universeel?" },
  { v: "Van welke technologie is dit het logo?", a: "USB.", o: "USB: waarom universeel?", img: "afbeeldingen/ITdeel2les7_poorten/l7_s05_usb_logo.jpg" },
  { v: "Waarvoor staat USB?", a: "Universal Serial Bus. Het is dus ook een seriële bus: de bits gaan één voor één over de kabel.", o: "USB: waarom universeel?", extra: true },

  // ===== USB: getrapte stertopologie (slide 6) =====
  { v: "USB: getrapte stertopologie (slide 6)", a: "• Host controller met roothub als vertrekpunt\n• Maximaal 7 lagen (tiers)\n– Roothub, tot 5 hubs na elkaar, dan het apparaat\n• Maximaal 127 apparaten\n– Hubs tellen ook mee", o: "USB: getrapte stertopologie", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s06_tiers.jpg",
    uitleg: "Topologie = hoe de toestellen met elkaar verbonden zijn. Ster: alles vertrekt vanuit één punt. Getrapt: op een hub kan je een volgende hub steken, en daarop weer een, zoals een trap of een boom (zie de piramide).\n\nDe 7 lagen tellen zo: laag 1 is de roothub, dan maximaal 5 hubs na elkaar (laag 2 tot 6), en op laag 7 kan alleen nog een apparaat staan. Onder laag 7 kan niets meer." },
  { v: "Welke topologie heeft USB?", a: "Een getrapte stertopologie.", o: "USB: getrapte stertopologie" },
  { v: "Wat is het vertrekpunt van de USB-topologie?", a: "De host controller met de roothub.", o: "USB: getrapte stertopologie" },
  { v: "Hoeveel lagen (tiers) heeft USB maximaal?", a: "7.", o: "USB: getrapte stertopologie" },
  { v: "Hoe zijn de 7 lagen van USB opgebouwd?", a: "De roothub, tot 5 hubs na elkaar, en dan het apparaat.", o: "USB: getrapte stertopologie" },
  { v: "Hoeveel USB-apparaten kan je maximaal aansluiten? Tellen hubs mee?", a: "Maximaal 127. Ja, hubs tellen ook mee.", o: "USB: getrapte stertopologie" },
  { v: "Wat toont deze piramide?", a: "De getrapte stertopologie van USB: 7 lagen (tiers), met hubs na elkaar; onder tier 7 kunnen geen apparaten meer.", o: "USB: getrapte stertopologie", img: "afbeeldingen/ITdeel2les7_poorten/l7_s06_tiers.jpg" },
  { v: "Waarom precies 127 apparaten?", a: "Elk USB-apparaat krijgt een adres van 7 bits. Met 7 bits heb je 128 waarden; adres 0 wordt gebruikt voor een toestel dat net ingeplugd is en nog geen adres kreeg. Blijven er 127 over.", o: "USB: getrapte stertopologie", extra: true },

  // ===== USB: roothub en hubs (slide 7) =====
  { v: "USB: roothub en hubs (slide 7)", a: "• Eén centrale vertrekplek: de USB-roothub op het moederbord\n– De roothub is zelf een hub\n– De chipset stuurt de roothub aan\n– Tegenwoordig tot 3 roothubs op een moederbord\n• Hubs kunnen aan elkaar gekoppeld worden\n– Zo ontstaat de laagstructuur van de vorige slide\n– Hubs zitten soms ook in schermen en toetsenborden", o: "USB: roothub en hubs", wit: true,
    uitleg: "Een hub is een verdeelstekker voor USB: één aansluiting erin, meerdere eruit. De roothub is de eerste hub, ingebouwd op het moederbord. De chipset (hoofdstuk 4) stuurt hem aan.\n\nHeeft je scherm of toetsenbord zelf usb-poorten, dan zit daar een hub in: dat is dan een extra laag." },
  { v: "Waar zit de USB-roothub?", a: "Op het moederbord: het is de centrale vertrekplek.", o: "USB: roothub en hubs" },
  { v: "Is de roothub zelf een hub?", a: "Ja.", o: "USB: roothub en hubs" },
  { v: "Wat stuurt de roothub aan?", a: "De chipset.", o: "USB: roothub en hubs" },
  { v: "Hoeveel roothubs zitten er tegenwoordig op een moederbord?", a: "Tot 3.", o: "USB: roothub en hubs" },
  { v: "Hoe ontstaat de laagstructuur (tiers) van USB?", a: "Door hubs aan elkaar te koppelen.", o: "USB: roothub en hubs" },
  { v: "Waar zitten soms ook USB-hubs in, behalve in losse hubs?", a: "In schermen en toetsenborden.", o: "USB: roothub en hubs" },

  // ===== USB: connectoren (slide 8) =====
  { v: "USB: connectoren (slide 8)", a: "• USB-A en USB-B: grote toestellen\n• Mini en micro: vroeger voor portable devices\n• Nu USB-C, in de EU verplicht", o: "USB: connectoren", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s08_usb_a.jpg",
    uitleg: "USB-A is de platte, rechthoekige stekker die je in de computer steekt. USB-B is de bijna vierkante stekker aan de kant van bijvoorbeeld een printer. Mini en micro zijn kleinere versies voor draagbare toestellen, zoals oude gsm's en camera's. Vandaag gebruiken nieuwe toestellen USB-C." },
  { v: "Voor welke toestellen zijn USB-A en USB-B bedoeld?", a: "Voor grote toestellen.", o: "USB: connectoren" },
  { v: "Waarvoor werden mini- en micro-USB vroeger gebruikt?", a: "Voor portable devices (draagbare toestellen).", o: "USB: connectoren" },
  { v: "Welke USB-connector is nu in de EU verplicht?", a: "USB-C.", o: "USB: connectoren" },
  { v: "Welke USB-connector zie je op deze foto?", a: "USB A.", o: "USB: connectoren", img: "afbeeldingen/ITdeel2les7_poorten/l7_s08_usb_a.jpg" },
  { v: "Welk type USB-stekker is dit?", a: "USB B.", o: "USB: connectoren", img: "afbeeldingen/ITdeel2les7_poorten/l7_s08_usb_b.jpg" },
  { v: "Welke twee USB-connectoren zie je op deze foto?", a: "Links USB mini A, rechts USB mini B.", o: "USB: connectoren", img: "afbeeldingen/ITdeel2les7_poorten/l7_s08_mini.jpg" },
  { v: "Welke USB-connector is dit?", a: "USB micro B.", o: "USB: connectoren", img: "afbeeldingen/ITdeel2les7_poorten/l7_s08_micro_b.jpg" },
  { v: "USB-C verplicht in de EU", a: "Sinds eind 2024 moeten nieuwe smartphones, tablets, camera's, oortjes en andere kleine toestellen die in de EU verkocht worden een USB-C-laadpoort hebben; sinds 2026 geldt dat ook voor laptops. Zo kan je één lader voor alles gebruiken.", o: "USB: connectoren", extra: true },

  // ===== USB 3-connectoren (slide 9) =====
  { v: "USB 3-connectoren (slide 9)", a: "• USB 3-stekkers van type A, B en micro-B\n– In een USB 3-poort past ook een USB 2.0- of 1.1-stekker\n– Verbinding werkt op de lagere snelheid", o: "USB 3-connectoren", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s09_usb3.jpg",
    uitleg: "USB 3 is achterwaarts compatibel: oude stekkers passen nog. Maar de snelheid is dan die van de oudste stekker. De USB 3-stekkers op de foto zijn blauw." },
  { v: "Van welke types bestaan er USB 3-stekkers?", a: "Type A, B en micro-B.", o: "USB 3-connectoren" },
  { v: "Past een USB 2.0- of 1.1-stekker in een USB 3-poort?", a: "Ja.", o: "USB 3-connectoren" },
  { v: "Op welke snelheid werkt een USB 2.0-stekker in een USB 3-poort?", a: "Op de lagere snelheid (die van USB 2.0).", o: "USB 3-connectoren" },
  { v: "Welke USB 3-stekkers staan op plaats 1, 2 en 3?", a: "1 = USB 3.0 type A\n2 = USB 3.0 type B\n3 = USB micro type B", o: "USB 3-connectoren", img: "afbeeldingen/ITdeel2les7_poorten/l7_s09_usb3_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les7_poorten/l7_s09_usb3.jpg" },

  // ===== USB-C (slide 10) =====
  { v: "USB-C (slide 10)", a: "• Symmetrische stekker, iets groter dan micro-B\n• Kan veel, maar niet elk toestel doet alles:\n– Tot USB4\n– Stroom in beide richtingen (3 A tot 5 A)\n– Alternate mode: Thunderbolt, DisplayPort, HDMI\n• USB-C is een stekker, geen snelheid", o: "USB-C", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s10_usbc.jpg",
    uitleg: "Symmetrisch: je kan de stekker in beide richtingen insteken, er is geen boven- of onderkant.\n\nStroom in beide richtingen: je laptop kan je telefoon opladen, maar een lader kan ook je laptop opladen.\n\nAlternate mode: via dezelfde stekker kan ook een ander signaal lopen, bijvoorbeeld beeld naar een scherm (DisplayPort of HDMI).\n\n'Een stekker, geen snelheid': USB-C zegt alleen hoe de stekker eruitziet. Een USB-C-poort kan traag zijn (USB 2.0) of heel snel (USB4). Kijk dus naar de snelheid op de verpakking." },
  { v: "Welke vorm heeft de USB-C-stekker?", a: "Een symmetrische stekker, iets groter dan micro-B.", o: "USB-C" },
  { v: "Tot welke USB-versie gaat USB-C?", a: "Tot USB4.", o: "USB-C" },
  { v: "Hoeveel stroom kan USB-C leveren, en in welke richting?", a: "3 A tot 5 A, in beide richtingen.", o: "USB-C" },
  { v: "Welke signalen kunnen via de alternate mode van USB-C lopen?", a: "Thunderbolt, DisplayPort en HDMI.", o: "USB-C" },
  { v: "Is USB-C een snelheid?", a: "Nee: USB-C is een stekker, geen snelheid.", o: "USB-C" },
  { v: "Doet elk toestel met USB-C alles (USB4, stroom, alternate mode)?", a: "Nee: USB-C kan veel, maar niet elk toestel doet alles.", o: "USB-C" },
  { v: "Welke stekker zie je op deze foto?", a: "USB-C.", o: "USB-C", img: "afbeeldingen/ITdeel2les7_poorten/l7_s10_usbc.jpg" },
  { v: "Wat is Thunderbolt?", a: "Thunderbolt is een snelle aansluiting van Intel en Apple die over een USB-C-stekker loopt. Thunderbolt 3 en 4 halen 40 Gbit/s en kunnen tegelijk data, beeld en stroom doorgeven.", o: "USB-C", extra: true },

  // ===== USB-connectoren: overzicht (slide 11) =====
  { v: "USB-connectoren: overzicht (slide 11)", a: "Links de connectoren van USB 1.0 tot 2.0: A, B, mini-A, mini-B, micro-A en micro-B. Rechts die van USB 3.0 tot 3.1: A, B, micro-B en C.", o: "USB-connectoren: overzicht", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s11_overzicht.jpg",
    uitleg: "De USB 3-versies hebben extra contacten (de extra gele vakjes op de tekening). Daarom is de USB 3 micro-B breder: hij bestaat uit twee delen." },
  { v: "Welke USB-connector staat op plaats 1 tot 10?", a: "USB 1.0 – 2.0: 1 = A · 2 = B · 3 = mini-A · 4 = mini-B · 5 = micro-A · 6 = micro-B\nUSB 3.0 – 3.1: 7 = A · 8 = B · 9 = micro-B · 10 = C", o: "USB-connectoren: overzicht", img: "afbeeldingen/ITdeel2les7_poorten/l7_s11_overzicht_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les7_poorten/l7_s11_overzicht.jpg" },
  { v: "Welke USB-connectoren bestaan er voor USB 1.0 tot 2.0?", a: "A, B, mini-A, mini-B, micro-A en micro-B.", o: "USB-connectoren: overzicht" },
  { v: "Welke USB-connectoren staan bij USB 3.0 tot 3.1 in het overzicht?", a: "A, B, micro-B en C.", o: "USB-connectoren: overzicht" },

  // ===== USB 2 en USB 3 (slide 12) =====
  { v: "USB 2.0 (slide 12)", a: "USB 2.0 (2000): 480 Mbit/s\n• Genoeg voor muis, toetsenbord, printer en webcam\n• Door de lage kostprijs en voldoende snelheid voor veel devices nog steeds zeer courant\n• Te traag voor een snelle externe schijf", o: "USB 2 en USB 3", wit: true,
    uitleg: "480 Mbit/s = 480 miljoen bits per seconde. Een muis of toetsenbord stuurt maar heel weinig data, dus daarvoor is dat ruim voldoende. Voor het kopiëren van grote bestanden naar een externe schijf is het te traag." },
  { v: "USB 3 en daarna (slide 12)", a: "USB 3 (2008): 5 Gbit/s, ruim tien keer sneller\n• Extra draden in kabel en stekker, poort/connector vaak blauw\n• Externe schijven en snelle usb-sticks\nDaarna nog snellere varianten: 10, 20, 40 en 80 Gbit/s", o: "USB 2 en USB 3", wit: true,
    uitleg: "5 Gbit/s = 5000 Mbit/s, dus ruim tien keer de 480 Mbit/s van USB 2.0. Die extra snelheid komt van extra draden in de kabel. Een blauwe poort of stekker is meestal USB 3." },
  { v: "Wanneer kwam USB 2.0, en hoe snel is het?", a: "In 2000, 480 Mbit/s.", o: "USB 2 en USB 3" },
  { v: "Waarvoor is USB 2.0 snel genoeg?", a: "Voor een muis, toetsenbord, printer en webcam.", o: "USB 2 en USB 3" },
  { v: "Waarom is USB 2.0 nog steeds zeer courant?", a: "Door de lage kostprijs en voldoende snelheid voor veel devices.", o: "USB 2 en USB 3" },
  { v: "Waarvoor is USB 2.0 te traag?", a: "Voor een snelle externe schijf.", o: "USB 2 en USB 3" },
  { v: "Wanneer kwam USB 3, en hoe snel is het?", a: "In 2008, 5 Gbit/s: ruim tien keer sneller dan USB 2.0.", o: "USB 2 en USB 3" },
  { v: "Waaraan herken je vaak een USB 3-poort of -connector?", a: "Hij is vaak blauw.", o: "USB 2 en USB 3" },
  { v: "Wat is er anders aan de kabel en stekker van USB 3?", a: "Er zitten extra draden in.", o: "USB 2 en USB 3" },
  { v: "Waarvoor gebruik je USB 3?", a: "Voor externe schijven en snelle usb-sticks.", o: "USB 2 en USB 3" },
  { v: "Welke snelheden kwamen er na USB 3 (5 Gbit/s)?", a: "10, 20, 40 en 80 Gbit/s.", o: "USB 2 en USB 3" },

  // ===== USB: de huidige benamingen (slide 13) =====
  { v: "USB: de huidige benamingen (slide 13)", a: "• Oudere benamingen waren verwarrend, zoals USB 3.2 gen 2\n• Vervangen door een nieuwe benaming: de naam is de snelheid\n• USB 2.0 heet nog steeds gewoon USB 2.0 (480 Mbit/s)", o: "USB: de huidige benamingen", wit: true,
    uitleg: "Gbps = Gbit/s, gigabit per seconde.",
    tabel: [
      ["Naam op de verpakking", "Snelheid", "Opmerking"],
      ["USB 5Gbps", "5 Gbit/s", ""],
      ["USB 10Gbps", "10 Gbit/s", ""],
      ["USB 20Gbps", "20 Gbit/s", "enkel met USB-C"],
      ["USB 40Gbps", "40 Gbit/s", "USB4"],
      ["USB 80Gbps", "80 Gbit/s", "USB4 Version 2.0, in één richting tot 120 Gbit/s"]
    ] },
  { v: "Waarom kwam er een nieuwe benaming voor USB?", a: "De oudere benamingen waren verwarrend, zoals USB 3.2 gen 2.", o: "USB: de huidige benamingen" },
  { v: "Wat is het principe van de nieuwe USB-benaming?", a: "De naam is de snelheid.", o: "USB: de huidige benamingen" },
  { v: "Hoe heet USB 2.0 in de nieuwe benaming?", a: "Nog steeds gewoon USB 2.0 (480 Mbit/s).", o: "USB: de huidige benamingen" },
  { v: "Welke 5 namen staan in de nieuwe benaming op de verpakking?", a: "USB 5Gbps, USB 10Gbps, USB 20Gbps, USB 40Gbps en USB 80Gbps.", o: "USB: de huidige benamingen" },
  { v: "Welke USB-snelheid werkt enkel met USB-C?", a: "USB 20Gbps.", o: "USB: de huidige benamingen" },
  { v: "Welke USB-snelheid hoort bij USB4? En bij USB4 Version 2.0?", a: "USB4: USB 40Gbps.\nUSB4 Version 2.0: USB 80Gbps.", o: "USB: de huidige benamingen" },
  { v: "Hoe snel kan USB 80Gbps in één richting gaan?", a: "Tot 120 Gbit/s.", o: "USB: de huidige benamingen" },
  { v: "Oude en nieuwe USB-namen naast elkaar", a: "USB 5Gbps = vroeger USB 3.0, USB 3.1 Gen 1 of USB 3.2 Gen 1.\nUSB 10Gbps = vroeger USB 3.1 Gen 2 of USB 3.2 Gen 2.\nUSB 20Gbps = vroeger USB 3.2 Gen 2x2.\n\nJe ziet waarom de oude namen verwarrend waren: hetzelfde kreeg telkens een nieuwe naam.", o: "USB: de huidige benamingen", extra: true },

  // ===== Op de verpakking en de poort (slide 14) =====
  { v: "Op de verpakking en de poort (slide 14)", a: "De logo's voor USB 40Gbps, 20Gbps, 10Gbps en 5Gbps: telkens een logo voor de verpakking, een logo voor de poort en een logo voor een poort die ook stroom levert (device power port).", o: "Op de verpakking en de poort", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s14_logos.jpg",
    uitleg: "Het getal in het logo is de snelheid. Zo zie je meteen op de doos en naast de poort hoe snel ze zijn. Een logo met een batterijtje erbij betekent dat de poort ook stroom kan leveren om iets op te laden." },
  { v: "Wat betekent het getal in deze USB-logo's?", a: "De snelheid: 40, 20, 10 of 5 Gbps.", o: "Op de verpakking en de poort", img: "afbeeldingen/ITdeel2les7_poorten/l7_s14_logos.jpg" },
  { v: "Welke 3 soorten logo's bestaan er per USB-snelheid (slide 14)?", a: "Een logo voor de verpakking (packaging), voor de poort (port) en voor een poort die ook stroom levert (device power port).", o: "Op de verpakking en de poort" },

  // ===== Op de kabel (slide 15) =====
  { v: "Op de kabel (slide 15)", a: "Ook kabels krijgen een logo: USB 40Gbps-, 20Gbps- en 5Gbps-kabels en Hi-Speed USB-kabels, telkens met hoeveel vermogen ze aankunnen: 240 W of 60 W.", o: "Op de kabel", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s15_kabel.jpg",
    uitleg: "Op het kabellogo staan twee dingen: de snelheid (bijvoorbeeld 40 Gbps) en het vermogen dat de kabel veilig kan doorgeven (240 W of 60 W). Hi-Speed USB is de naam voor USB 2.0." },
  { v: "Welke 2 dingen lees je af op het logo van een USB-kabel?", a: "De snelheid (bv. 40 Gbps) en het vermogen dat de kabel aankan (240 W of 60 W).", o: "Op de kabel", img: "afbeeldingen/ITdeel2les7_poorten/l7_s15_kabel.jpg" },
  { v: "Welke vermogens staan op de kabellogo's?", a: "240 W of 60 W.", o: "Op de kabel" },

  // ===== De zwakste schakel (slide 16) =====
  { v: "De zwakste schakel (slide 16)", a: "• Als één onderdeel in de keten van een lagere (maar compatibele) standaard is, dan werkt de hele keten op die lagere snelheid\n• Voorbeeld:\n– Laptop met een USB 10Gbps-poort\n– Kabel die enkel USB 5Gbps aankan\n– Externe SSD van USB 10Gbps\n– Resultaat: 5 Gbit/s\n• Zorg dus voor compatibele componenten in de hele keten op de hoogste snelheid", o: "De zwakste schakel", wit: true,
    uitleg: "De keten = alles tussen de twee toestellen: de poort, de kabel en het toestel zelf. Zoals water door buizen: de smalste buis bepaalt hoeveel er door kan. Een snelle SSD en een snelle laptop helpen niets als de kabel traag is." },
  { v: "Wat gebeurt er als één onderdeel van de USB-keten een lagere (compatibele) standaard heeft?", a: "De hele keten werkt op die lagere snelheid.", o: "De zwakste schakel" },
  { v: "Laptop USB 10Gbps, kabel USB 5Gbps, externe SSD USB 10Gbps. Welke snelheid haal je?", a: "5 Gbit/s: de kabel is de zwakste schakel.", o: "De zwakste schakel" },
  { v: "Waarvoor moet je zorgen om de hoogste USB-snelheid te halen?", a: "Compatibele componenten in de hele keten op de hoogste snelheid.", o: "De zwakste schakel" },

  // ===== Een HD-film van 25 GB kopiëren (slide 17) =====
  { v: "Een HD-film van 25 GB kopiëren (slide 17)", a: "25 GB = 200 Gbit. Dit is de theoretische minimumtijd; in de praktijk kosten protocol en schijf ook tijd.", o: "Een HD-film van 25 GB kopiëren", wit: true,
    uitleg: "Waarom 200 Gbit? 1 byte = 8 bits, dus 25 GB × 8 = 200 Gbit.\nDan deel je door de snelheid: 200 Gbit ÷ 5 Gbit/s = 40 seconden. Bij USB 2.0: 200 000 Mbit ÷ 480 Mbit/s ≈ 417 seconden ≈ 7 minuten.\n\nIn de praktijk duurt het langer, omdat het protocol (de afspraken om data te versturen) en de schijf zelf ook tijd kosten.",
    tabel: [
      ["Standaard", "Snelheid", "Duur"],
      ["USB 2.0", "480 Mbit/s", "ongeveer 7 minuten"],
      ["USB 5Gbps", "5 Gbit/s", "40 seconden"],
      ["USB 10Gbps", "10 Gbit/s", "20 seconden"],
      ["USB 20Gbps", "20 Gbit/s", "10 seconden"],
      ["USB 40Gbps", "40 Gbit/s", "5 seconden"]
    ] },
  { v: "Hoeveel Gbit is 25 GB?", a: "200 Gbit.", o: "Een HD-film van 25 GB kopiëren",
    uitleg: "1 byte = 8 bits: 25 × 8 = 200." },
  { v: "Hoe lang duurt het minstens om 25 GB te kopiëren over USB 2.0?", a: "Ongeveer 7 minuten.", o: "Een HD-film van 25 GB kopiëren" },
  { v: "Hoe lang duurt het minstens om 25 GB te kopiëren over USB 5Gbps en USB 10Gbps?", a: "USB 5Gbps: 40 seconden.\nUSB 10Gbps: 20 seconden.", o: "Een HD-film van 25 GB kopiëren" },
  { v: "Hoe lang duurt het minstens om 25 GB te kopiëren over USB 20Gbps en USB 40Gbps?", a: "USB 20Gbps: 10 seconden.\nUSB 40Gbps: 5 seconden.", o: "Een HD-film van 25 GB kopiëren" },
  { v: "Waarom duurt het kopiëren in de praktijk langer dan de tijden in de tabel?", a: "Het is de theoretische minimumtijd: in de praktijk kosten het protocol en de schijf ook tijd.", o: "Een HD-film van 25 GB kopiëren" },

  // ===== USB: apparaatklassen (slide 18–19) =====
  { v: "USB: apparaatklassen, deel 1 (slide 18)", a: "• HID (Human Interface Device): muis, toetsenbord\n• Mass storage: harde schijf, kaartlezer, digitale camera, mp3-speler, ...\n– Verschijnt als bestandssysteem\n• Communications device: modem, netwerkkaart, fax, ...", o: "USB: apparaatklassen", wit: true,
    uitleg: "Een apparaatklasse is een groep toestellen die op dezelfde manier met de computer praten. Daardoor heeft het besturingssysteem één standaarddriver per klasse, en werkt een nieuwe muis meteen zonder dat je iets moet installeren (plug and play).\n\n'Verschijnt als bestandssysteem': een usb-stick verschijnt als een gewone schijf (bv. E:), waarop je mappen en bestanden ziet." },
  { v: "USB: apparaatklassen, deel 2 (slide 19)", a: "• Printer device: printers\n• Audio device class: geluidskaarten\n• Video device class: webcams, capturekaarten", o: "USB: apparaatklassen", wit: true,
    uitleg: "Een capturekaart neemt beeld op van een ander toestel, bijvoorbeeld van een spelconsole of camera." },
  { v: "Geef de 6 USB-apparaatklassen uit de cursus.", a: "HID, mass storage, communications device, printer device, audio device class en video device class.", o: "USB: apparaatklassen" },
  { v: "Waarvoor staat HID? Geef voorbeelden.", a: "Human Interface Device: muis, toetsenbord.", o: "USB: apparaatklassen" },
  { v: "Welke toestellen horen bij de klasse mass storage?", a: "Harde schijf, kaartlezer, digitale camera, mp3-speler, ...", o: "USB: apparaatklassen" },
  { v: "Hoe verschijnt een mass storage-toestel op de computer?", a: "Als bestandssysteem.", o: "USB: apparaatklassen" },
  { v: "Welke toestellen horen bij de klasse communications device?", a: "Modem, netwerkkaart, fax, ...", o: "USB: apparaatklassen" },
  { v: "Welke toestellen horen bij de audio device class? En bij de video device class?", a: "Audio: geluidskaarten.\nVideo: webcams, capturekaarten.", o: "USB: apparaatklassen" },
  { v: "Tot welke USB-apparaatklasse hoort een webcam?", a: "De video device class.", o: "USB: apparaatklassen" },
  { v: "Tot welke USB-apparaatklasse hoort een usb-stick of kaartlezer?", a: "Mass storage.", o: "USB: apparaatklassen" },

  // ===== USB: stroomvoorziening (slide 20) =====
  { v: "USB: stroomvoorziening (slide 20)", a: "• USB 2.0: 5 V × 0,5 A = 2,5 W\n– Te weinig voor de meeste externe harde schijven\n• USB 3: 5 V × 0,9 A = 4,5 W\n• USB-C: tot 5 V × 3 A = 15 W\n• USB Power Delivery: tot 100 W, intussen tot 240 W", o: "USB: stroomvoorziening", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s20_chargers.jpg",
    uitleg: "Vermogen (W, watt) = spanning (V, volt) × stroom (A, ampère). Hoe meer watt, hoe meer een poort kan voeden of hoe sneller ze iets kan opladen.\n\nEen externe harde schijf heeft een draaiende motor en heeft meer nodig dan de 2,5 W van USB 2.0. Met USB Power Delivery kan je zelfs een laptop opladen. De afbeelding toont de logo's voor een gecertificeerde USB-lader en snellader." },
  { v: "Hoeveel vermogen levert USB 2.0? Toon de berekening.", a: "5 V × 0,5 A = 2,5 W.", o: "USB: stroomvoorziening" },
  { v: "Waarvoor is het vermogen van USB 2.0 te weinig?", a: "Voor de meeste externe harde schijven.", o: "USB: stroomvoorziening" },
  { v: "Hoeveel vermogen levert USB 3? Toon de berekening.", a: "5 V × 0,9 A = 4,5 W.", o: "USB: stroomvoorziening" },
  { v: "Hoeveel vermogen levert USB-C? Toon de berekening.", a: "Tot 5 V × 3 A = 15 W.", o: "USB: stroomvoorziening" },
  { v: "Hoeveel vermogen kan USB Power Delivery leveren?", a: "Tot 100 W, intussen tot 240 W.", o: "USB: stroomvoorziening" },
  { v: "Hoe bereken je het vermogen van een USB-poort?", a: "Spanning × stroom: bijvoorbeeld 5 V × 0,5 A = 2,5 W.", o: "USB: stroomvoorziening" },
  { v: "Hoe haalt Power Delivery 100 W of 240 W?", a: "Power Delivery verhoogt de spanning: 20 V × 5 A = 100 W, en sinds de nieuwe versie 48 V × 5 A = 240 W. De lader en het toestel spreken eerst af hoeveel spanning veilig is. Voor 5 A heb je een geschikte kabel nodig (zie het logo met 240 W).", o: "USB: stroomvoorziening", extra: true },

  // ===== FireWire (slide 21–22) =====
  { v: "FireWire (slide 21)", a: "• Apple\n– IEEE 1394, later 1394a en 1394b\n– Bedoeld als opvolger van SCSI\n• Sony: i.Link-benaming\n• Royalties voor fabrikanten\n• Stroom: tot 45 W\n• Hot-swap gevaar...\n– Enkel uittrekken indien pc uitgeschakeld", o: "FireWire", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s21_firewire_kabel.jpg",
    uitleg: "FireWire is de naam die Apple gaf; IEEE 1394 is de officiële naam van de standaard, en i.Link de naam bij Sony: drie namen voor hetzelfde.\n\nRoyalties = fabrikanten moesten betalen per toestel om FireWire te mogen gebruiken. Dat maakte het duurder dan USB.\n\nSCSI is een oudere aansluiting voor schijven en scanners. De foto's tonen FireWire-poorten en -stekkers." },
  { v: "FireWire: opkomst en einde (slide 22)", a: "• Ten tijde van USB 2 populair wegens hogere snelheden en hogere stroom\n• Intussen ingehaald door USB 3\n• Ontwikkeling stopgezet", o: "FireWire", wit: true,
    uitleg: "FireWire werd vooral gebruikt voor videocamera's en externe schijven." },
  { v: "Welk bedrijf maakte FireWire?", a: "Apple.", o: "FireWire" },
  { v: "Wat is de officiële naam van FireWire? Welke versies kwamen later?", a: "IEEE 1394, later 1394a en 1394b.", o: "FireWire" },
  { v: "Waarvan was FireWire bedoeld als opvolger?", a: "Van SCSI.", o: "FireWire" },
  { v: "Hoe heette FireWire bij Sony?", a: "i.Link.", o: "FireWire" },
  { v: "Wat moesten fabrikanten betalen om FireWire te gebruiken?", a: "Royalties.", o: "FireWire" },
  { v: "Hoeveel stroom kan FireWire leveren?", a: "Tot 45 W.", o: "FireWire" },
  { v: "Wat is het gevaar van FireWire bij hot-swappen?", a: "Je mag de kabel enkel uittrekken als de pc uitgeschakeld is.", o: "FireWire" },
  { v: "Waarom was FireWire populair ten tijde van USB 2?", a: "Door hogere snelheden en hogere stroom.", o: "FireWire" },
  { v: "Waarom is FireWire verdwenen?", a: "Het werd ingehaald door USB 3, en de ontwikkeling is stopgezet.", o: "FireWire" },
  { v: "Welke aansluiting zie je op deze foto?", a: "FireWire (IEEE 1394).", o: "FireWire", img: "afbeeldingen/ITdeel2les7_poorten/l7_s21_firewire_kabel.jpg", imgAntwoord: "afbeeldingen/ITdeel2les7_poorten/l7_s21_firewire_poorten.jpg" },

  // ===== eSATA (slide 23) =====
  { v: "eSATA (slide 23)", a: "• Gestandaardiseerd in 2004\n• Aansluiten externe harde schijven\n• Weinig ondersteuning", o: "eSATA", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s23_esata.jpg",
    uitleg: "eSATA = external SATA: dezelfde SATA-aansluiting als voor interne schijven (hoofdstuk 5 en 6), maar met een stevigere stekker voor buiten de computer." },
  { v: "Wanneer werd eSATA gestandaardiseerd?", a: "In 2004.", o: "eSATA" },
  { v: "Waarvoor dient eSATA?", a: "Om externe harde schijven aan te sluiten.", o: "eSATA" },
  { v: "Is eSATA vandaag veel ondersteund?", a: "Nee, er is weinig ondersteuning.", o: "eSATA" },
  { v: "Welke connector staat op plaats 1?", a: "De eSATA-connector.", o: "eSATA", img: "afbeeldingen/ITdeel2les7_poorten/l7_s23_esata_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les7_poorten/l7_s23_esata.jpg" },
  { v: "eSATA en stroom", a: "Een gewone eSATA-kabel levert geen stroom: de externe schijf heeft dus een eigen adapter nodig. Dat is een van de redenen waarom USB 3 het won.", o: "eSATA", extra: true },

  // ===== Beeldschermpoorten: VGA en DVI (slide 24) =====
  { v: "VGA (slide 24)", a: "VGA (Video Graphics Array)\n• Nog te vinden op oudere projectors\n• 15-pins D-SUB-connector\n• Analoog, dus minder scherp bij hoge resoluties", o: "Beeldschermpoorten: VGA en DVI", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s24_vga.jpg",
    uitleg: "Analoog = het beeld gaat als een golvend elektrisch signaal over de kabel, niet als 1'en en 0'en. Onderweg kan dat signaal wat vervormen, en bij veel pixels zie je dat: het beeld wordt minder scherp.\n\nDe vga-poort is vaak blauw en heeft 15 gaatjes in 3 rijen (zie de foto)." },
  { v: "DVI (slide 24)", a: "DVI (Digital Visual Interface)\n• Digitaal beeld voor flatscreens en projectors\n• Single link tot 1920×1200, dual link tot 2560×1600", o: "Beeldschermpoorten: VGA en DVI", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s24_dvi.jpg",
    uitleg: "Digitaal: het beeld gaat als 1'en en 0'en over de kabel en komt dus perfect aan.\n\nDual link gebruikt dubbel zoveel draden als single link, en kan dus een hogere resolutie aan." },
  { v: "Waarvoor staat VGA?", a: "Video Graphics Array.", o: "Beeldschermpoorten: VGA en DVI" },
  { v: "Waar vind je VGA nog?", a: "Op oudere projectors.", o: "Beeldschermpoorten: VGA en DVI" },
  { v: "Welke connector gebruikt VGA?", a: "Een 15-pins D-SUB-connector.", o: "Beeldschermpoorten: VGA en DVI" },
  { v: "Waarom is VGA minder scherp bij hoge resoluties?", a: "Het is analoog.", o: "Beeldschermpoorten: VGA en DVI" },
  { v: "Waarvoor staat DVI?", a: "Digital Visual Interface.", o: "Beeldschermpoorten: VGA en DVI" },
  { v: "Waarvoor dient DVI?", a: "Digitaal beeld voor flatscreens en projectors.", o: "Beeldschermpoorten: VGA en DVI" },
  { v: "Tot welke resolutie gaan DVI single link en dual link?", a: "Single link: tot 1920×1200.\nDual link: tot 2560×1600.", o: "Beeldschermpoorten: VGA en DVI" },
  { v: "Wat is het grote verschil tussen VGA en DVI?", a: "VGA is analoog, DVI is digitaal.", o: "Beeldschermpoorten: VGA en DVI" },
  { v: "Welke beeldschermpoort zie je op deze foto?", a: "VGA (15-pins D-SUB, blauw).", o: "Beeldschermpoorten: VGA en DVI", img: "afbeeldingen/ITdeel2les7_poorten/l7_s24_vga.jpg" },
  { v: "Welke beeldschermaansluiting is dit?", a: "DVI.", o: "Beeldschermpoorten: VGA en DVI", img: "afbeeldingen/ITdeel2les7_poorten/l7_s24_dvi.jpg" },

  // ===== Beeldschermpoorten: HDMI (slide 25) =====
  { v: "HDMI (slide 25)", a: "HDMI (High-Definition Multimedia Interface)\n• Zeer populaire connector, ook voor tv's\n• Opvolger van DVI (zelfde digitaal signaal), met hogere resoluties\n• Draagt ook audio\n• Versies 1.0 tot 2.1, en sinds 2025 2.2\n– HDMI 2.1: 4K en 8K op 120 Hz\n– HDMI 2.2 (2025): tot 96 Gbit/s, 16K op 60 Hz", o: "Beeldschermpoorten: HDMI", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s25_hdmi.jpg",
    uitleg: "Met HDMI heb je één kabel voor beeld én geluid. Daarom zit het op bijna elke tv, spelconsole en laptop.\n\n4K, 8K en 16K zeggen hoeveel pixels breed het beeld ongeveer is (4K ≈ 4000 pixels). Hz = hoeveel keer per seconde het beeld ververst: 120 Hz is vloeiender dan 60 Hz." },
  { v: "Waarvoor staat HDMI?", a: "High-Definition Multimedia Interface.", o: "Beeldschermpoorten: HDMI" },
  { v: "Van welke poort is HDMI de opvolger? Wat is er hetzelfde, en wat beter?", a: "Van DVI: hetzelfde digitaal signaal, maar met hogere resoluties.", o: "Beeldschermpoorten: HDMI" },
  { v: "Wat draagt HDMI behalve beeld?", a: "Audio.", o: "Beeldschermpoorten: HDMI" },
  { v: "Welke HDMI-versies bestaan er?", a: "1.0 tot 2.1, en sinds 2025 2.2.", o: "Beeldschermpoorten: HDMI" },
  { v: "Wat kan HDMI 2.1?", a: "4K en 8K op 120 Hz.", o: "Beeldschermpoorten: HDMI" },
  { v: "Wat kan HDMI 2.2 (2025)?", a: "Tot 96 Gbit/s, 16K op 60 Hz.", o: "Beeldschermpoorten: HDMI" },
  { v: "Welke connector zie je op deze foto?", a: "HDMI.", o: "Beeldschermpoorten: HDMI", img: "afbeeldingen/ITdeel2les7_poorten/l7_s25_hdmi.jpg" },

  // ===== Beeldschermpoorten: DisplayPort (slide 26) =====
  { v: "DisplayPort (slide 26)", a: "DisplayPort en mini-DisplayPort\n• Vooral voor monitors in professionele context (beeldbewerking)\n• Kan daisychainen voor meerdere monitors\n• Draagt ook audio, ook over USB-C (alternate mode)\n• Versies 1.0 tot 1.4, 2.0 en 2.1\n– Laatste versie: 2.1 (2022), tot 80 Gbit/s\n– Bv. 3 4K-schermen op 90 Hz, of 1 16K-scherm op 60 Hz", o: "Beeldschermpoorten: DisplayPort", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s26_dp.jpg",
    uitleg: "Daisychainen = schermen aan elkaar koppelen: de computer gaat naar scherm 1, scherm 1 naar scherm 2, enzovoort. Zo heb je maar één kabel naar de computer nodig.\n\nMini-DisplayPort is een kleinere versie van dezelfde aansluiting, vroeger veel op laptops (rechts op de foto)." },
  { v: "Waarvoor wordt DisplayPort vooral gebruikt?", a: "Voor monitors in een professionele context (beeldbewerking).", o: "Beeldschermpoorten: DisplayPort" },
  { v: "Wat is een speciale mogelijkheid van DisplayPort voor meerdere monitors?", a: "Daisychainen.", o: "Beeldschermpoorten: DisplayPort" },
  { v: "Draagt DisplayPort ook audio? Ook over USB-C?", a: "Ja, ook over USB-C (alternate mode).", o: "Beeldschermpoorten: DisplayPort" },
  { v: "Welke DisplayPort-versies bestaan er?", a: "1.0 tot 1.4, 2.0 en 2.1.", o: "Beeldschermpoorten: DisplayPort" },
  { v: "Wat is de laatste DisplayPort-versie, en hoe snel is ze?", a: "2.1 (2022), tot 80 Gbit/s.", o: "Beeldschermpoorten: DisplayPort" },
  { v: "Geef een voorbeeld van wat DisplayPort 2.1 kan.", a: "3 4K-schermen op 90 Hz, of 1 16K-scherm op 60 Hz.", o: "Beeldschermpoorten: DisplayPort" },
  { v: "Welke 2 vormen van DisplayPort bestaan er?", a: "DisplayPort en mini-DisplayPort.", o: "Beeldschermpoorten: DisplayPort" },
  { v: "Welke connector is dit?", a: "DisplayPort.", o: "Beeldschermpoorten: DisplayPort", img: "afbeeldingen/ITdeel2les7_poorten/l7_s26_dp.jpg" },
  { v: "Welke kleine connector zie je op deze foto?", a: "Mini-DisplayPort.", o: "Beeldschermpoorten: DisplayPort", img: "afbeeldingen/ITdeel2les7_poorten/l7_s26_minidp.jpg" },

  // ===== Externe poorten overzicht (slide 27) =====
  { v: "Externe poorten overzicht (slide 27)", a: "Het achterpaneel van een moederbord met de externe poorten: PS/2-poort, D-SUB-poort, Optical Digital Audio Output, USB 2.0, USB 3.0, GbE LAN, Dual-link DVI, DisplayPort, HDMI, eSATA-connector en HD Audio.", o: "Externe poorten overzicht", wit: true, img: "afbeeldingen/ITdeel2les7_poorten/l7_s27_overzicht.jpg",
    uitleg: "D-SUB-poort = de vga-poort. GbE LAN = gigabit-ethernet, de netwerkpoort. Optical Digital Audio Output = een uitgang voor digitaal geluid over een lichtkabel. HD Audio = de gekleurde geluidsaansluitingen (luidsprekers, microfoon)." },
  { v: "Welke poort staat op plaats 1 tot 12 van dit achterpaneel?", a: "1 = PS/2-poort · 2 = D-SUB-poort (vga) · 3 = Optical Digital Audio Output · 4 = USB 2.0 · 5 = USB 3.0 · 6 = GbE LAN\n7 = USB 3.0 · 8 = Dual-link DVI · 9 = DisplayPort · 10 = HDMI · 11 = eSATA-connector · 12 = HD Audio", o: "Externe poorten overzicht", img: "afbeeldingen/ITdeel2les7_poorten/l7_s27_overzicht_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les7_poorten/l7_s27_overzicht.jpg" },
  { v: "Hoe heet de vga-poort op het overzicht van de externe poorten?", a: "De D-SUB-poort.", o: "Externe poorten overzicht" },
];

kaarten_IT_deel2_les7.structuur = [
  { o: "Inhoud", slide: "2" },
  { o: "De seriële poort", slide: "3" },
  { o: "PS/2", slide: "4" },
  { kop: "USB", slide: "5–20" },
  { o: "USB: waarom universeel?", slide: "5", sub: true },
  { o: "USB: getrapte stertopologie", slide: "6", sub: true },
  { o: "USB: roothub en hubs", slide: "7", sub: true },
  { o: "USB: connectoren", slide: "8", sub: true },
  { o: "USB 3-connectoren", slide: "9", sub: true },
  { o: "USB-C", slide: "10", sub: true },
  { o: "USB-connectoren: overzicht", slide: "11", sub: true },
  { o: "USB 2 en USB 3", slide: "12", sub: true },
  { o: "USB: de huidige benamingen", slide: "13", sub: true },
  { o: "Op de verpakking en de poort", slide: "14", sub: true },
  { o: "Op de kabel", slide: "15", sub: true },
  { o: "De zwakste schakel", slide: "16", sub: true },
  { o: "Een HD-film van 25 GB kopiëren", slide: "17", sub: true },
  { o: "USB: apparaatklassen", slide: "18–19", sub: true },
  { o: "USB: stroomvoorziening", slide: "20", sub: true },
  { kop: "FireWire en eSATA", slide: "21–23" },
  { o: "FireWire", slide: "21–22", sub: true },
  { o: "eSATA", slide: "23", sub: true },
  { kop: "Beeldschermpoorten", slide: "24–26" },
  { o: "Beeldschermpoorten: VGA en DVI", slide: "24", sub: true },
  { o: "Beeldschermpoorten: HDMI", slide: "25", sub: true },
  { o: "Beeldschermpoorten: DisplayPort", slide: "26", sub: true },
  { o: "Externe poorten overzicht", slide: "27" },
];
