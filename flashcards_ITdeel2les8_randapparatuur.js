// IT Essentials – Deel II: Hardwarecomponenten – 8: Randapparatuur
// v = vraag, a = antwoord, o = onderwerp (bovenaan de kaart), uitleg = extra uitleg onder het antwoord
// img = afbeelding op de voorkant (map afbeeldingen/ITdeel2les8_randapparatuur/), imgAntwoord = afbeelding op de achterkant (optioneel)
// wit: true = witte kaart die de cursus voorstelt · extra: true = extra info, niet uit de cursus (turquoise rand)
// tabel = kleine overzichtstabel (eerste rij = kolomkoppen)
// De structuur onderaan bepaalt het overzicht rechts (volgorde van de slides).

const kaarten_IT_deel2_les8 = [

  // ===== Inhoud (slide 2) =====
  { v: "Randapparatuur: inhoud (slide 2)", a: "• Toetsenbord\n• Muis\n• Scherm\n• Projector\n• Geluid\n• Netwerken en modems\n• Scanner\n• Printer\n• Stroomvoorziening", o: "Inhoud", wit: true,
    uitleg: "Randapparatuur (in het Engels: peripherals) zijn de toestellen rond de computer zelf. Sommige dienen om iets in te geven (toetsenbord, muis, scanner), andere om iets te tonen of af te drukken (scherm, projector, luidsprekers, printer), en de stroomvoorziening zorgt dat alles blijft werken.\n\nLet op: 'Netwerken en modems' staat in de inhoud, maar er is in deze cursus geen slide over." },
  { v: "Welke onderwerpen komen aan bod in hoofdstuk 8, Randapparatuur?", a: "Toetsenbord, muis, scherm, projector, geluid, netwerken en modems, scanner, printer en stroomvoorziening.", o: "Inhoud" },
  { v: "Welk onderwerp uit de inhoud heeft geen eigen slide in de cursus?", a: "Netwerken en modems.", o: "Inhoud" },

  // ===== Toetsenbord (slide 3) =====
  { v: "Toetsenbord: geschiedenis (slide 3)", a: "• Belangrijkste invoerapparaat\n• Alfabetische en numerieke tekens, controletoetsen en functietoetsen\n• Verschillende soorten layouts\n– Azerty\n– Qwerty\n– Dvorak...", o: "Toetsenbord", wit: true,
    uitleg: "Een invoerapparaat is een toestel waarmee je iets in de computer ingeeft.\n\nDe soorten toetsen:\n– alfabetische tekens = letters\n– numerieke tekens = cijfers\n– controletoetsen = bv. Ctrl, Alt en Shift\n– functietoetsen = F1 tot F12\n\nEen layout is de volgorde van de letters op het toetsenbord. De naam komt van de eerste letters linksboven: A-Z-E-R-T-Y of Q-W-E-R-T-Y." },
  { v: "Wat is het belangrijkste invoerapparaat?", a: "Het toetsenbord.", o: "Toetsenbord" },
  { v: "Welke soorten toetsen heeft een toetsenbord?", a: "Alfabetische en numerieke tekens, controletoetsen en functietoetsen.", o: "Toetsenbord" },
  { v: "Geef de 3 toetsenbordlayouts uit de cursus.", a: "Azerty, Qwerty en Dvorak.", o: "Toetsenbord" },
  { v: "Azerty, Qwerty en Dvorak", a: "Azerty gebruiken we in België en Frankrijk; Qwerty gebruiken de meeste andere landen.\n\nDvorak zet de letters die je het vaakst gebruikt op de middelste rij, zodat je sneller en met minder bewegingen kan typen. Weinig mensen gebruiken het.", o: "Toetsenbord", extra: true },

  // ===== Muis: optische muizen (slide 11) =====
  { v: "Muis: optische muizen (slide 11)", a: "• Geen roterende onderdelen meer\n• Werking\n– Licht-uitstralende diode (LED)\n– Licht botst op oppervlakte en wordt weerkaatst naar een CMOS sensor\n– CMOS sensor zendt weerkaatste \"afbeelding\" naar een DSP (digital signal processor) voor analyse\n– DSP herkent patronen en hoe een patroon is verplaatst tegenover het vorige patroon", o: "Muis: optische muizen", wit: true, img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s11_optische_muis.jpg",
    uitleg: "Oudere muizen hadden onderaan een bal met rolletjes die meedraaiden (roterende onderdelen). Die werden vuil en haperden.\n\nEen optische muis werkt met licht, zoals een heel kleine camera:\n1. Een LED schijnt licht op de tafel.\n2. Het licht weerkaatst naar een CMOS-sensor; die maakt er een klein beeldje van.\n3. Dat beeldje gaat naar een DSP, een chip die beelden analyseert.\n4. De DSP vergelijkt elk beeldje met het vorige. Zo weet hij in welke richting en hoe ver je de muis bewogen hebt.\n\nOp de foto zie je de onderkant van een optische muis met het rode licht van de LED." },
  { v: "Wat heeft een optische muis niet meer?", a: "Roterende onderdelen.", o: "Muis: optische muizen" },
  { v: "Welke lichtbron gebruikt een optische muis?", a: "Een licht-uitstralende diode (LED).", o: "Muis: optische muizen" },
  { v: "Waar wordt het licht naartoe weerkaatst nadat het op de oppervlakte botst?", a: "Naar een CMOS sensor.", o: "Muis: optische muizen" },
  { v: "Waar zendt de CMOS sensor de weerkaatste \"afbeelding\" naartoe?", a: "Naar een DSP (digital signal processor), voor analyse.", o: "Muis: optische muizen" },
  { v: "Waarvoor staat DSP?", a: "Digital signal processor.", o: "Muis: optische muizen" },
  { v: "Wat doet de DSP in een optische muis?", a: "Hij herkent patronen en hoe een patroon is verplaatst tegenover het vorige patroon.", o: "Muis: optische muizen" },
  { v: "Beschrijf de werking van een optische muis in 4 stappen.", a: "1. Een licht-uitstralende diode (LED) geeft licht.\n2. Het licht botst op de oppervlakte en wordt weerkaatst naar een CMOS sensor.\n3. De CMOS sensor zendt de weerkaatste \"afbeelding\" naar een DSP voor analyse.\n4. De DSP herkent patronen en hoe een patroon is verplaatst tegenover het vorige patroon.", o: "Muis: optische muizen" },
  { v: "Wat toont deze foto van een muis?", a: "De onderkant van een optische muis, met het licht van de LED.", o: "Muis: optische muizen", img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s11_optische_muis.jpg" },
  { v: "Optische muis op glas", a: "Een optische muis werkt slecht op glas of een spiegel: daar ziet de sensor geen patroon om te vergelijken. Een muismat of een tafel met wat structuur werkt het best.", o: "Muis: optische muizen", extra: true },

  // ===== Muis: RSI (slide 12) =====
  { v: "Muis: RSI (slide 12)", a: "• Repetitive Strain Injury\n– 50% 2de jaarsstudenten en 66% derdejaarsstudenten hebben er last van!\n• Voorzorgen\n– Regelmatig breaks nemen\n– Typen, niet rammen\n– Aangepaste hardware\n– Goed houding gebruiken", o: "Muis: RSI", wit: true, img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s12_rsi_pols.jpg",
    uitleg: "RSI zijn klachten (pijn, tintelingen, stijfheid) in pols, arm, nek of schouders. Je krijgt ze door heel vaak dezelfde kleine beweging te herhalen, zoals typen en klikken. Repetitive = herhalend, strain = belasting, injury = letsel.\n\n'Typen, niet rammen' betekent: niet te hard op de toetsen slaan.\nAangepaste hardware is bv. een ergonomische muis of een polssteun.\n\nOp de foto houdt iemand zijn pijnlijke pols vast boven een toetsenbord." },
  { v: "Waarvoor staat RSI?", a: "Repetitive Strain Injury.", o: "Muis: RSI" },
  { v: "Hoeveel studenten hebben last van RSI volgens de cursus?", a: "50% van de tweedejaarsstudenten en 66% van de derdejaarsstudenten.", o: "Muis: RSI" },
  { v: "Geef de 4 voorzorgen tegen RSI.", a: "1. Regelmatig breaks nemen.\n2. Typen, niet rammen.\n3. Aangepaste hardware.\n4. Een goede houding gebruiken.", o: "Muis: RSI" },
  { v: "Wat betekent de voorzorg 'typen, niet rammen'?", a: "Niet te hard op de toetsen slaan.", o: "Muis: RSI" },
  { v: "Welke klacht toont deze foto?", a: "RSI (Repetitive Strain Injury): pijn in de pols door veel typen.", o: "Muis: RSI", img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s12_rsi_pols.jpg" },

  // ===== Muis: RSI, de ideale beeldschermwerkplek (slide 13) =====
  { v: "Muis: RSI, de ideale beeldschermwerkplek (slide 13)", a: "De slide toont de ideale beeldschermwerkplek:\n• Scherm: min. 50 cm van je ogen\n• Kijkhoek naar het scherm: ±30°\n• Ellebogen: ≥90°\n• Knieën: ≥90°\n• Zithoogte: instelbaar 39 - 51 cm\n• Bureau: instelbaar 62 - 82 cm, of vast 74 - 76 cm\n• Beenruimte onder het bureau: min. 80 cm", o: "Muis: RSI, de ideale beeldschermwerkplek", wit: true, img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s13_werkplek.jpg",
    uitleg: "Zo zit je goed om RSI te voorkomen.\n\n±30° = ongeveer 30°: je kijkt een beetje naar beneden naar het scherm, niet recht vooruit en niet omhoog.\n≥90° = 90° of meer: je armen en knieën zijn niet scherper geplooid dan een rechte hoek.\n\nInstelbaar = je kan de hoogte aanpassen; vast = de hoogte ligt vast." },
  { v: "Welke maten horen op plaats 1 tot 7 van de ideale beeldschermwerkplek?", a: "1. min. 50 cm (afstand ogen – scherm)\n2. ±30° (kijkhoek naar het scherm)\n3. ≥90° (ellebogen)\n4. ≥90° (knieën)\n5. instelbaar 39 - 51 cm (zithoogte)\n6. instelbaar 62 - 82 cm, vast 74 - 76 cm (bureauhoogte)\n7. min. 80 cm (beenruimte)", o: "Muis: RSI, de ideale beeldschermwerkplek", img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s13_werkplek_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s13_werkplek.jpg" },
  { v: "Hoe ver staat het scherm minstens van je ogen op de ideale werkplek?", a: "Minstens 50 cm.", o: "Muis: RSI, de ideale beeldschermwerkplek" },
  { v: "Onder welke hoek kijk je naar het scherm op de ideale werkplek?", a: "±30° (ongeveer 30°) naar beneden.", o: "Muis: RSI, de ideale beeldschermwerkplek" },
  { v: "Welke hoek maken je ellebogen en je knieën op de ideale werkplek?", a: "≥90° (90° of meer).", o: "Muis: RSI, de ideale beeldschermwerkplek" },
  { v: "Hoe hoog is de zitting op de ideale werkplek?", a: "Instelbaar tussen 39 en 51 cm.", o: "Muis: RSI, de ideale beeldschermwerkplek" },
  { v: "Hoe hoog is het bureau op de ideale werkplek?", a: "Instelbaar 62 - 82 cm, of vast 74 - 76 cm.", o: "Muis: RSI, de ideale beeldschermwerkplek" },
  { v: "Hoeveel beenruimte is er minstens onder het bureau op de ideale werkplek?", a: "Minstens 80 cm.", o: "Muis: RSI, de ideale beeldschermwerkplek" },

  // ===== Scherm: verschillende varianten (slide 14) =====
  { v: "Scherm: verschillende varianten (slide 14)", a: "• CRT\n– Zo goed als compleet van de markt verdwenen\n– Groot\n– Hoog stroomverbruik\n• LCD\n– Markt bijna volledig overgenomen\n– Smal\n– Laag stroomverbruik\n• Projectie\n– Lumen\n– Hoge kostprijs vervanging lamp", o: "Scherm: verschillende varianten", wit: true,
    uitleg: "CRT is het oude, diepe scherm met een beeldbuis (zoals oude televisies). LCD is het platte scherm dat je nu overal ziet.\n\nBij projectie werpt een projector (beamer) het beeld op een muur of doek. Lumen is de eenheid waarin je uitdrukt hoe fel het licht van een projector is: hoe meer lumen, hoe helderder het beeld. De lamp van een projector slijt en is duur om te vervangen." },
  { v: "Welke 3 varianten van schermen bespreekt de cursus?", a: "CRT, LCD en projectie.", o: "Scherm: verschillende varianten" },
  { v: "Geef de 3 kenmerken van een CRT-scherm.", a: "Zo goed als compleet van de markt verdwenen, groot en hoog stroomverbruik.", o: "Scherm: verschillende varianten" },
  { v: "Geef de 3 kenmerken van een LCD-scherm.", a: "Markt bijna volledig overgenomen, smal en laag stroomverbruik.", o: "Scherm: verschillende varianten" },
  { v: "Welk schermtype is zo goed als compleet van de markt verdwenen?", a: "CRT.", o: "Scherm: verschillende varianten" },
  { v: "Welk schermtype heeft de markt bijna volledig overgenomen?", a: "LCD.", o: "Scherm: verschillende varianten" },
  { v: "Welk schermtype heeft een hoog stroomverbruik: CRT of LCD?", a: "CRT. (LCD heeft een laag stroomverbruik.)", o: "Scherm: verschillende varianten" },
  { v: "Geef de 2 punten over projectie uit de cursus.", a: "Lumen en de hoge kostprijs om de lamp te vervangen.", o: "Scherm: verschillende varianten" },
  { v: "Wat drukt lumen uit bij projectie?", a: "Hoe fel het licht is: hoe meer lumen, hoe helderder het beeld.", o: "Scherm: verschillende varianten" },
  { v: "CRT en LCD voluit", a: "CRT = Cathode Ray Tube (beeldbuis). Een elektronenstraal tekent het beeld op het glas; daarom is het scherm zo diep.\nLCD = Liquid Crystal Display (scherm met vloeibare kristallen).", o: "Scherm: verschillende varianten", extra: true },

  // ===== Scherm: eigenschappen (slide 15) =====
  { v: "Scherm: eigenschappen van schermen (slide 15)", a: "• Schermgrootte en aspect ratio\n– Aspect ratio: 4:3 vs. 16:9 vs. 16:10\n• Resolutie en dot pitch\n– Resolutie: hoeveel aanstuurbare kleurstippen? (pixels), bv. 1024x768, 1600x1200\n– Dot pitch: plaats tussen 2 pixels (hoe kleiner hoe beter)", o: "Scherm: eigenschappen", wit: true, img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s15_lcd_scherm.jpg",
    uitleg: "De aspect ratio is de verhouding tussen de breedte en de hoogte van het scherm. 4:3 is bijna vierkant (oude schermen), 16:9 is breedbeeld (tv's en de meeste schermen), 16:10 is iets hoger dan 16:9.\n\nEen pixel is één kleurstipje op het scherm. De resolutie zegt hoeveel pixels er zijn: 1024x768 = 1024 pixels breed en 768 pixels hoog.\n\nDe dot pitch is de afstand tussen 2 pixels. Hoe kleiner die afstand, hoe dichter de pixels bij elkaar staan en hoe scherper het beeld." },
  { v: "Welke 2 paren eigenschappen van schermen bespreekt de cursus?", a: "Schermgrootte en aspect ratio, en resolutie en dot pitch.", o: "Scherm: eigenschappen" },
  { v: "Wat is de aspect ratio van een scherm?", a: "De verhouding tussen de breedte en de hoogte van het scherm.", o: "Scherm: eigenschappen" },
  { v: "Geef de 3 aspect ratio's uit de cursus.", a: "4:3, 16:9 en 16:10.", o: "Scherm: eigenschappen" },
  { v: "Wat is de resolutie van een scherm?", a: "Hoeveel aanstuurbare kleurstippen (pixels) het scherm heeft.", o: "Scherm: eigenschappen" },
  { v: "Geef de 2 voorbeelden van resoluties uit de cursus.", a: "1024x768 en 1600x1200.", o: "Scherm: eigenschappen" },
  { v: "Wat is de dot pitch?", a: "De plaats (afstand) tussen 2 pixels.", o: "Scherm: eigenschappen" },
  { v: "Is een kleine of een grote dot pitch beter?", a: "Hoe kleiner, hoe beter.", o: "Scherm: eigenschappen" },
  { v: "Wat betekent 1024x768?", a: "1024 pixels in de breedte en 768 pixels in de hoogte.", o: "Scherm: eigenschappen" },
  { v: "Welk soort scherm zie je op deze foto?", a: "Een LCD-scherm (plat scherm).", o: "Scherm: eigenschappen", img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s15_lcd_scherm.jpg" },
  { v: "Schermgrootte", a: "De schermgrootte meet je schuin, van hoek tot hoek (de diagonaal), in inch. 1 inch = 2,54 cm. Een scherm van 24 inch is dus ongeveer 61 cm schuin gemeten.", o: "Scherm: eigenschappen", extra: true },

  // ===== Scherm: populaire schermresoluties (slide 16) =====
  { v: "Scherm: overzicht populaire schermresoluties (slide 16)", a: "Van groot naar klein (bron: tomshardware.com):", o: "Scherm: populaire schermresoluties", wit: true,
    uitleg: "Typical monitor resolution = de gewone resolutie van computerschermen.\nOfficial cinema resolution = de officiële resolutie voor de bioscoop.\n\n'aka' = also known as (ook gekend als).\n\nDe 'p' in 720p en 1080p staat voor progressive; het getal is het aantal pixels in de hoogte.",
    tabel: [
      ["Naam", "Resolutie"],
      ["5K", "5120 x 2880"],
      ["4K", "3840 x 2160 (typical monitor resolution)"],
      ["4K", "4096 x 2160 (official cinema resolution)"],
      ["Ultra HD (UHD)", "3840 x 2160"],
      ["Quad HD (QHD) aka Wide Quad HD (WQHD)", "2560 x 1440"],
      ["2K", "2560 x 1440 (typical monitor resolution)"],
      ["2K", "2048 x 1080 (official cinema resolution)"],
      ["WUXGA", "1920 x 1200"],
      ["Full HD (FHD) aka 1080p aka HD", "1920 x 1080"],
      ["HD aka 720p", "1280 x 720"]
    ] },
  { v: "Wat is de resolutie van 5K?", a: "5120 x 2880.", o: "Scherm: populaire schermresoluties" },
  { v: "Geef de 2 resoluties van 4K.", a: "3840 x 2160 (typical monitor resolution) en 4096 x 2160 (official cinema resolution).", o: "Scherm: populaire schermresoluties" },
  { v: "Wat is de resolutie van Ultra HD (UHD)?", a: "3840 x 2160.", o: "Scherm: populaire schermresoluties" },
  { v: "Wat is de resolutie van Quad HD (QHD), en hoe heet het nog?", a: "2560 x 1440. Het heet ook Wide Quad HD (WQHD).", o: "Scherm: populaire schermresoluties" },
  { v: "Geef de 2 resoluties van 2K.", a: "2560 x 1440 (typical monitor resolution) en 2048 x 1080 (official cinema resolution).", o: "Scherm: populaire schermresoluties" },
  { v: "Wat is de resolutie van WUXGA?", a: "1920 x 1200.", o: "Scherm: populaire schermresoluties" },
  { v: "Wat is de resolutie van Full HD (FHD), en welke 2 andere namen heeft het?", a: "1920 x 1080. Het heet ook 1080p en HD.", o: "Scherm: populaire schermresoluties" },
  { v: "Wat is de resolutie van HD aka 720p?", a: "1280 x 720.", o: "Scherm: populaire schermresoluties" },
  { v: "Welke naam hoort bij 3840 x 2160?", a: "4K (typical monitor resolution) of Ultra HD (UHD).", o: "Scherm: populaire schermresoluties" },
  { v: "Welke naam hoort bij 2560 x 1440?", a: "Quad HD (QHD), aka Wide Quad HD (WQHD). Ook 2K (typical monitor resolution).", o: "Scherm: populaire schermresoluties" },
  { v: "Welke naam hoort bij 1920 x 1200?", a: "WUXGA.", o: "Scherm: populaire schermresoluties" },
  { v: "Zet van groot naar klein: Full HD, 5K, WUXGA, Ultra HD, HD (720p), Quad HD.", a: "5K → Ultra HD → Quad HD → WUXGA → Full HD → HD (720p).", o: "Scherm: populaire schermresoluties" },

  // ===== Scherm: resoluties vergeleken (slide 17) =====
  { v: "Scherm: overzicht populaire schermresoluties vergeleken (slide 17)", a: "De afbeelding (bron: wccftech.com) toont de resoluties als vakken in elkaar, zodat je ziet hoe groot ze zijn tegenover elkaar.", o: "Scherm: resoluties vergeleken", wit: true, img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s17_resoluties.jpg",
    uitleg: "Het aantal pixels = breedte × hoogte. Bv. 1920 × 1080 = 2 073 600 pixels ≈ 2,07 MP. MP = megapixel = 1 miljoen pixels.\n\nIn de afbeelding staat bij 800p '1.2MP'. Dat klopt niet: 1 024 000 pixels is 1,02 MP." },
  { v: "Scherm: resoluties vergeleken, de waarden (slide 17)", a: "De waarden uit de afbeelding:", o: "Scherm: resoluties vergeleken", wit: true,
    tabel: [
      ["Naam", "Resolutie", "Verhouding", "Pixels"],
      ["4K", "3840x2160", "16:9", "8 294 400 (8,29 MP)"],
      ["1600p", "2560x1600", "16:10", "4 096 000 (4,09 MP)"],
      ["1440p", "2560x1440", "16:9", "3 686 400 (3,69 MP)"],
      ["1200p", "1920x1200", "16:10", "2 304 000 (2,3 MP)"],
      ["1080p", "1920x1080", "16:9", "2 073 600 (2,07 MP)"],
      ["900p", "1600x900", "16:9", "1 440 000 (1,44 MP)"],
      ["800p", "1280x800", "16:10", "1 024 000 (1,02 MP)"],
      ["720p", "1280x720", "16:9", "921 600 (0,92 MP)"]
    ] },
  { v: "Welke resolutie hoort bij vak 1 tot 8?", a: "1. 4K (3840x2160) [16:9]\n2. 1600p (2560x1600) [16:10]\n3. 1440p (2560x1440) [16:9]\n4. 1200p (1920x1200) [16:10]\n5. 1080p (1920x1080) [16:9]\n6. 900p (1600x900) [16:9]\n7. 800p (1280x800) [16:10]\n8. 720p (1280x720) [16:9]", o: "Scherm: resoluties vergeleken", img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s17_resoluties_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s17_resoluties.jpg" },
  { v: "Hoeveel pixels heeft 4K (3840x2160)?", a: "8 294 400 pixels (8,29 MP).", o: "Scherm: resoluties vergeleken" },
  { v: "Hoeveel pixels heeft 1080p (1920x1080)?", a: "2 073 600 pixels (2,07 MP).", o: "Scherm: resoluties vergeleken" },
  { v: "Welke resoluties in het overzicht hebben de verhouding 16:10?", a: "1600p (2560x1600), 1200p (1920x1200) en 800p (1280x800).", o: "Scherm: resoluties vergeleken" },
  { v: "Wat is de resolutie van 900p, 1600p en 800p?", a: "900p = 1600x900\n1600p = 2560x1600\n800p = 1280x800", o: "Scherm: resoluties vergeleken" },
  { v: "Hoe bereken je het aantal pixels van een resolutie?", a: "Breedte × hoogte.", o: "Scherm: resoluties vergeleken" },

  // ===== Projector (slide 18) =====
  { v: "Projector: verschillende technologie (slide 18)", a: "• DLP-beamer: gebruikt een chip gemaakt van kleine microscopische spiegels en een ronddraaiend kleurenwiel om een afbeelding te maken.\n• LCD-beamer: gebruikt dezelfde liquid crystal display-technologie die in elektronische horloges te vinden is.\n• LED-beamer: maakt gebruik van DLP of LCD technologie, maar vervangt de traditionele beamerlampen (kan tot 20 000 uren werken!).", o: "Projector", wit: true, img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s18_projector.jpg",
    uitleg: "Een beamer is een projector: hij werpt het beeld groot op een muur of doek.\n\nBij een DLP-beamer kantelen duizenden piepkleine spiegeltjes het licht naar het doek of ervan weg; het draaiende kleurenwiel geeft er kleur aan.\n\nEen LED-beamer is geen aparte techniek voor het beeld: hij werkt met DLP of LCD, maar het licht komt van LED's in plaats van een klassieke lamp. Die gaan veel langer mee, dus je moet geen dure lamp vervangen (zie slide 14)." },
  { v: "Welke 3 projectortechnologieën bespreekt de cursus?", a: "DLP-beamer, LCD-beamer en LED-beamer.", o: "Projector" },
  { v: "Hoe maakt een DLP-beamer een afbeelding?", a: "Met een chip gemaakt van kleine microscopische spiegels en een ronddraaiend kleurenwiel.", o: "Projector" },
  { v: "Welke technologie gebruikt een LCD-beamer?", a: "Dezelfde liquid crystal display-technologie die in elektronische horloges te vinden is.", o: "Projector" },
  { v: "Welke beamer gebruikt een ronddraaiend kleurenwiel?", a: "De DLP-beamer.", o: "Projector" },
  { v: "Wat is het verschil tussen een LED-beamer en een DLP- of LCD-beamer?", a: "Een LED-beamer gebruikt DLP- of LCD-technologie, maar vervangt de traditionele beamerlampen.", o: "Projector" },
  { v: "Hoe lang kan een LED-beamer werken?", a: "Tot 20 000 uren.", o: "Projector" },
  { v: "Welk toestel zie je op deze foto?", a: "Een projector (beamer).", o: "Projector", img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s18_projector.jpg" },
  { v: "DLP voluit", a: "DLP = Digital Light Processing. Elk spiegeltje op de chip is één pixel en kantelt duizenden keren per seconde.", o: "Projector", extra: true },

  // ===== Geluid (slide 19) =====
  { v: "Geluid: geluidskaart (slide 19)", a: "• Omzetten digitaal -> analoog: DAC\n• Extra in-uitgangen\n– Microfoon (ADC)\n– Hoofdtelefoon\n– Midi\n• Surround systemen\n– 5.1\n– 6.1\n– 7.1\n– ...", o: "Geluid", wit: true,
    uitleg: "De computer werkt digitaal (enen en nullen), maar een luidspreker heeft een analoog signaal nodig (een spanning die vloeiend op en neer gaat). De DAC (Digital-to-Analog Converter) doet die omzetting.\n\nBij een microfoon is het omgekeerd: het geluid is analoog en moet digitaal worden. Dat doet de ADC (Analog-to-Digital Converter).\n\nMIDI is een aansluiting voor elektronische muziekinstrumenten, zoals een keyboard.\n\nBij surround is het eerste getal het aantal luidsprekers en '.1' de subwoofer voor de lage tonen. 5.1 = 5 luidsprekers + 1 subwoofer." },
  { v: "Wat doet de DAC op een geluidskaart?", a: "Omzetten van digitaal naar analoog.", o: "Geluid" },
  { v: "Welke omzetting gebruikt de microfooningang van een geluidskaart?", a: "Een ADC (analoog naar digitaal).", o: "Geluid" },
  { v: "Wat is het verschil tussen een DAC en een ADC?", a: "DAC: digitaal → analoog (voor de luidsprekers).\nADC: analoog → digitaal (voor de microfoon).", o: "Geluid" },
  { v: "Geef de 3 extra in-uitgangen van een geluidskaart uit de cursus.", a: "Microfoon (ADC), hoofdtelefoon en Midi.", o: "Geluid" },
  { v: "Geef 3 surroundsystemen uit de cursus.", a: "5.1, 6.1 en 7.1.", o: "Geluid" },
  { v: "Wat betekent 5.1 bij surround?", a: "5 luidsprekers en 1 subwoofer (lage tonen).", o: "Geluid" },

  // ===== Scanner (slide 20) =====
  { v: "Scanner (slide 20)", a: "De slide toont een schema van een scanner:\n• document to be scanned\n• glass plate\n• movable light source\n• fixed mirror\n• movable mirror\n• CCD capture device", o: "Scanner", wit: true, img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s20_scanner.jpg",
    uitleg: "Zo werkt een flatbedscanner (een scanner met een glasplaat, zoals op een kopieertoestel):\n1. Je legt het document op de glasplaat (glass plate).\n2. Een beweegbare lichtbron (movable light source) schuift onder het glas en verlicht het document lijn per lijn.\n3. Het weerkaatste licht gaat via de beweegbare spiegel (movable mirror) naar de vaste spiegel (fixed mirror).\n4. De vaste spiegel stuurt het licht naar de CCD-sensor (CCD capture device). Die meet rood, groen en blauw licht en maakt er een digitaal beeld van." },
  { v: "Welke onderdelen van de scanner staan op plaats 1 tot 6?", a: "1. document to be scanned (het document)\n2. glass plate (glasplaat)\n3. movable light source (beweegbare lichtbron)\n4. fixed mirror (vaste spiegel)\n5. movable mirror (beweegbare spiegel)\n6. CCD capture device (sensor)", o: "Scanner", img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s20_scanner_vraag.jpg", imgAntwoord: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s20_scanner.jpg" },
  { v: "Welke onderdelen van een scanner bewegen, volgens het schema?", a: "De movable light source (lichtbron) en de movable mirror (beweegbare spiegel).", o: "Scanner" },
  { v: "Welke spiegel in de scanner beweegt niet?", a: "De fixed mirror.", o: "Scanner" },
  { v: "Welk onderdeel vangt het licht op in de scanner?", a: "Het CCD capture device.", o: "Scanner" },
  { v: "Welke 3 kleuren toont het CCD capture device in het schema?", a: "Rood, groen en blauw.", o: "Scanner" },
  { v: "Beschrijf de weg van het licht in de scanner.", a: "Movable light source → document op de glass plate → movable mirror → fixed mirror → CCD capture device.", o: "Scanner", img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s20_scanner.jpg" },
  { v: "CCD voluit", a: "CCD = Charge-Coupled Device: een lichtgevoelige sensor, zoals in oudere fotocamera's.", o: "Scanner", extra: true },

  // ===== Printer: matrix, thermisch en inkjet (slide 21) =====
  { v: "Printer: matrixprinter (slide 21)", a: "• Printkop met pennetjes\n• Nog steeds gebruikt!!!\n– Rekeningen\n– Stoffige omgevingen\n– Kettingpapier\n– Doordrukken", o: "Printer: matrix, thermisch en inkjet", wit: true,
    uitleg: "De printkop van een matrixprinter heeft kleine pennetjes die door een inktlint op het papier slaan, zoals een typemachine. Elk teken is een patroon van puntjes.\n\nKettingpapier is één lange strook papier met gaatjes aan de zijkanten, die aan elkaar hangt.\nDoordrukken: omdat de pennetjes hard slaan, komt de afdruk ook op de vellen eronder (doorslagpapier). Zo maak je in één keer een kopie, bv. van een rekening." },
  { v: "Hoe drukt een matrixprinter af?", a: "Met een printkop met pennetjes.", o: "Printer: matrix, thermisch en inkjet" },
  { v: "Waarvoor wordt een matrixprinter nog steeds gebruikt?", a: "Rekeningen, stoffige omgevingen, kettingpapier en doordrukken.", o: "Printer: matrix, thermisch en inkjet" },
  { v: "Welke printer kan doordrukken?", a: "De matrixprinter.", o: "Printer: matrix, thermisch en inkjet" },
  { v: "Printer: thermische printers en inkjetprinters (slide 21)", a: "• Thermische printers\n– Speciaal papier\n– Kastickets\n• Inkjetprinters\n– Kleine spuitmondjes\n– Goedkoop in aankoop, duur in inkt\n– Goed voor kleine hoeveelheden (bijvoorbeeld thuisgebruik)", o: "Printer: matrix, thermisch en inkjet", wit: true,
    uitleg: "Een thermische printer werkt met warmte. Het speciale papier wordt zwart waar het warm wordt; er is geen inkt nodig. Daarom vervagen kastickets na een tijd.\n\nEen inkjetprinter spuit kleine druppeltjes inkt door kleine spuitmondjes op het papier. De printer zelf is goedkoop, maar de inktpatronen zijn duur." },
  { v: "Wat heeft een thermische printer nodig, en waarvoor wordt hij gebruikt?", a: "Speciaal papier. Hij wordt gebruikt voor kastickets.", o: "Printer: matrix, thermisch en inkjet" },
  { v: "Hoe drukt een inkjetprinter af?", a: "Met kleine spuitmondjes.", o: "Printer: matrix, thermisch en inkjet" },
  { v: "Wat is het voordeel en het nadeel van een inkjetprinter?", a: "Goedkoop in aankoop, maar duur in inkt.", o: "Printer: matrix, thermisch en inkjet" },
  { v: "Waarvoor is een inkjetprinter goed?", a: "Voor kleine hoeveelheden, bijvoorbeeld thuisgebruik.", o: "Printer: matrix, thermisch en inkjet" },
  { v: "Welk printertype kies je voor: 1. kastickets, 2. een rekening met doorslag, 3. af en toe thuis printen?", a: "1. Thermische printer\n2. Matrixprinter\n3. Inkjetprinter", o: "Printer: matrix, thermisch en inkjet" },
  { v: "Geef de 3 printertypes van slide 21.", a: "Matrixprinter, thermische printer en inkjetprinter.", o: "Printer: matrix, thermisch en inkjet" },

  // ===== Printer: laserprinter in 7 stappen (slide 22) =====
  { v: "Printer: laserprinters in 7 stappen (slide 22)", a: "1. Kuisen van de rol (cleaning)\n2. Drum elektrisch neutraal maken (erasing)\n3. Negatief laden (conditioning)\n4. Laser laten schrijven -> positieve ladingen (writing)\n5. Drum neemt op positieve ladingen inkt op (developing)\n6. Papier rollen (transferring): waar positieve ladingen zaten komt nu poeder op papier\n7. Papier verwarmen om te fixeren (fusing)", o: "Printer: laserprinter in 7 stappen", wit: true,
    uitleg: "De drum (rol) is een cilinder die elektrisch geladen kan worden.\n\nHet idee: eerst maak je de drum proper en neutraal (1-2), dan geef je hem overal een negatieve lading (3). De laser 'tekent' de tekst op de drum: waar hij komt, wordt de lading positief (4). De inkt (een fijn poeder, toner) blijft alleen hangen op die positieve plekken (5). Het papier rolt langs de drum en neemt het poeder over (6). Tot slot smelt warmte het poeder vast op het papier (7). Daarom is papier uit een laserprinter warm." },
  { v: "Geef de 7 stappen van een laserprinter in volgorde, met de Engelse naam.", a: "1. Kuisen van de rol (cleaning)\n2. Drum elektrisch neutraal maken (erasing)\n3. Negatief laden (conditioning)\n4. Laser laten schrijven → positieve ladingen (writing)\n5. Drum neemt op positieve ladingen inkt op (developing)\n6. Papier rollen (transferring)\n7. Papier verwarmen om te fixeren (fusing)", o: "Printer: laserprinter in 7 stappen" },
  { v: "Wat gebeurt er bij cleaning?", a: "De rol wordt gekuist.", o: "Printer: laserprinter in 7 stappen" },
  { v: "Wat gebeurt er bij erasing?", a: "De drum wordt elektrisch neutraal gemaakt.", o: "Printer: laserprinter in 7 stappen" },
  { v: "Wat gebeurt er bij conditioning?", a: "De drum wordt negatief geladen.", o: "Printer: laserprinter in 7 stappen" },
  { v: "Wat gebeurt er bij writing?", a: "De laser schrijft: er ontstaan positieve ladingen.", o: "Printer: laserprinter in 7 stappen" },
  { v: "Wat gebeurt er bij developing?", a: "De drum neemt op de positieve ladingen inkt op.", o: "Printer: laserprinter in 7 stappen" },
  { v: "Wat gebeurt er bij transferring?", a: "Het papier rolt; waar positieve ladingen zaten, komt nu poeder op het papier.", o: "Printer: laserprinter in 7 stappen" },
  { v: "Wat gebeurt er bij fusing?", a: "Het papier wordt verwarmd om te fixeren.", o: "Printer: laserprinter in 7 stappen" },
  { v: "Welke stap van de laserprinter is stap 4, en welke stap 6?", a: "4. Writing (laser laten schrijven)\n6. Transferring (papier rollen)", o: "Printer: laserprinter in 7 stappen" },
  { v: "Welke stap komt na conditioning?", a: "Writing (laser laten schrijven).", o: "Printer: laserprinter in 7 stappen" },
  { v: "Op welke ladingen neemt de drum inkt op: positieve of negatieve?", a: "Op de positieve ladingen.", o: "Printer: laserprinter in 7 stappen" },
  { v: "Toner", a: "De 'inkt' van een laserprinter heet toner: een heel fijn poeder. Bij fusing smelt de warmte de toner vast in het papier.", o: "Printer: laserprinter in 7 stappen", extra: true },

  // ===== Stroomvoorziening (slide 23) =====
  { v: "Stroomvoorziening (slide 23)", a: "• Wegvallen van stroom\n– RAM-geheugen verliest inhoud\n– Meestal betekent dit dataverlies (tenzij recovery)\n• Reguleren van stroominput (spikes opvangen)\n• Bij servers (of soms ook thuiscomputers)\n– UPS (Uninterruptable Power Supply)\n– Stroomvoorziening dmv batterij voor ongeveer 1u\n– Soms ook met dieselgenerator (grote serverparken)", o: "Stroomvoorziening", wit: true, img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s23_ups.jpg",
    uitleg: "RAM heeft stroom nodig om zijn inhoud te bewaren (zie hoofdstuk II.2, werkgeheugen). Valt de stroom weg, dan ben je alles kwijt wat nog niet opgeslagen was. Recovery = een manier om toch iets terug te halen, bv. een automatisch opgeslagen kopie.\n\nEen spike is een korte, plotse piek in de spanning, bv. door bliksem. Die kan onderdelen beschadigen.\n\nEen UPS is een kast met een batterij tussen het stopcontact en de computer. Valt de stroom weg, dan neemt de batterij het over. Uninterruptable = niet te onderbreken.\n\nOp de foto zie je een UPS." },
  { v: "Wat gebeurt er met het RAM-geheugen als de stroom wegvalt?", a: "Het verliest zijn inhoud.", o: "Stroomvoorziening" },
  { v: "Wat betekent het wegvallen van stroom meestal?", a: "Dataverlies (tenzij recovery).", o: "Stroomvoorziening" },
  { v: "Wat moet de stroomvoorziening opvangen bij het reguleren van de stroominput?", a: "Spikes.", o: "Stroomvoorziening" },
  { v: "Waarvoor staat UPS?", a: "Uninterruptable Power Supply.", o: "Stroomvoorziening" },
  { v: "Hoe en hoe lang levert een UPS stroom?", a: "Met een batterij, voor ongeveer 1 uur.", o: "Stroomvoorziening" },
  { v: "Waar wordt een UPS gebruikt?", a: "Bij servers (of soms ook bij thuiscomputers).", o: "Stroomvoorziening" },
  { v: "Wat gebruiken grote serverparken soms naast een UPS?", a: "Een dieselgenerator.", o: "Stroomvoorziening" },
  { v: "Welk toestel zie je op deze foto, en waarvoor dient het?", a: "Een UPS (Uninterruptable Power Supply): die levert met een batterij ongeveer 1 uur stroom als de stroom wegvalt.", o: "Stroomvoorziening", img: "afbeeldingen/ITdeel2les8_randapparatuur/l8_s23_ups.jpg" },
];

kaarten_IT_deel2_les8.structuur = [
  { o: "Inhoud", slide: "2" },
  { o: "Toetsenbord", slide: "3" },
  { kop: "Muis", slide: "11–13" },
  { o: "Muis: optische muizen", slide: "11", sub: true },
  { o: "Muis: RSI", slide: "12", sub: true },
  { o: "Muis: RSI, de ideale beeldschermwerkplek", slide: "13", sub: true },
  { kop: "Scherm", slide: "14–17" },
  { o: "Scherm: verschillende varianten", slide: "14", sub: true },
  { o: "Scherm: eigenschappen", slide: "15", sub: true },
  { o: "Scherm: populaire schermresoluties", slide: "16", sub: true },
  { o: "Scherm: resoluties vergeleken", slide: "17", sub: true },
  { o: "Projector", slide: "18" },
  { o: "Geluid", slide: "19" },
  { o: "Scanner", slide: "20" },
  { kop: "Printer", slide: "21–22" },
  { o: "Printer: matrix, thermisch en inkjet", slide: "21", sub: true },
  { o: "Printer: laserprinter in 7 stappen", slide: "22", sub: true },
  { o: "Stroomvoorziening", slide: "23" },
];
