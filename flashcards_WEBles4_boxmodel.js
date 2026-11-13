// Web Essentials – Les 4: CSS media, tabellen, formulieren & het box model
// v = vraag, a = antwoord, o = onderwerp (bovenaan de kaart), uitleg = extra uitleg onder het antwoord
// img = tekening op de voorkant (map afbeeldingen/WEBles4_boxmodel/), imgAntwoord = tekening op de achterkant (optioneel)
// De structuur onderaan bepaalt het overzicht naast de kaart (volgorde en nummering van de cursus).

const kaarten_WEB_les4 = [

  // ===== 1. Waarom media stijlen? (1) =====
  { v: "Wat gebeurt er met afbeeldingen, video's en iframes zonder CSS?", a: "Ze worden getoond op hun originele (vaak reusachtige) resolutie of met strakke browserranden. Met CSS maak je ze responsief, schaalbaar en visueel aantrekkelijk.\n\nimg {\n  max-width: 100%;\n  height: auto;\n}", o: "1. Waarom media stijlen?" },

  // ===== 1.1 Responsieve afbeeldingen (1.1) =====
  { v: "Geef de standaard CSS-regel voor responsieve afbeeldingen.", a: "img {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}", o: "1.1 Responsieve afbeeldingen" },
  { v: "Waarom max-width: 100% op een afbeelding?", a: "De afbeelding wordt nooit breder dan haar ouder-element; als het scherm kleiner wordt, schaalt ze automatisch mee.\n\nimg {\n  max-width: 100%;\n}", o: "1.1 Responsieve afbeeldingen" },
  { v: "Waarom height: auto op een afbeelding?", a: "De hoogte past zich evenredig aan, zodat de beeldverhouding (aspect ratio) behouden blijft en de foto niet vervormt.\n\nimg {\n  max-width: 100%;\n  height: auto;\n}", o: "1.1 Responsieve afbeeldingen" },
  { v: "Waarom display: block op een afbeelding?", a: "Een <img> is standaard inline; inline-elementen laten onderaan een kleine ongewenste witruimte (typografische whitespace). Als block-element verdwijnt die.", o: "1.1 Responsieve afbeeldingen" },
  { v: "Waarom laat een afbeelding soms een klein wit randje onderaan in haar container?", a: "Omdat <img> standaard inline is en de tekstbasislijn volgt; onder de basislijn blijft ruimte over. Oplossing: display: block.", o: "1.1 Responsieve afbeeldingen" },

  // ===== 1.2 object-fit & object-position (1.2) =====
  // -- overzichtstabel uit de cursus --
  { v: "object-fit-waarden (overzicht 1.2)", a: "Hoe een afbeelding zich gedraagt binnen een kader met vaste afmetingen.", o: "1.2 object-fit & object-position", wit: true,
    tabel: [
      ["Waarde", "Gedrag"],
      ["fill", "(Standaard) Rekt de afbeelding uit om het kader exact te vullen: vervormt."],
      ["contain", "Volledig zichtbaar binnen het kader, mogelijk met lege randen."],
      ["cover", "Vult het kader volledig met behoud van de verhoudingen; snijdt randen af."],
      ["scale-down", "Kiest automatisch de kleinste van none en contain."]
    ] },
  { v: "Waarvoor dient object-fit?", a: "Het bepaalt hoe de inhoud van een afbeelding zich gedraagt binnen een kader met vaste afmetingen, zodat ze niet vervormt.\n\n.foto {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;\n}", o: "1.2 object-fit & object-position" },
  { v: "Wat doet object-fit: fill?", a: "De standaard: de afbeelding wordt uitgerekt/vervormd om het kader exact te vullen.\n\n.foto { object-fit: fill; }", o: "1.2 object-fit & object-position" },
  { v: "Wat doet object-fit: contain?", a: "De afbeelding wordt zo geschaald dat ze volledig zichtbaar is binnen het kader (mogelijk met lege randen).\n\n.foto { object-fit: contain; }", o: "1.2 object-fit & object-position" },
  { v: "Wat doet object-fit: cover?", a: "Het kader wordt volledig gevuld met behoud van de verhoudingen; randen worden eventueel afgesneden.\n\n.foto { object-fit: cover; }", o: "1.2 object-fit & object-position" },
  { v: "Wat doet object-fit: scale-down?", a: "Het kiest automatisch de kleinste van none en contain.\n\n.foto { object-fit: scale-down; }", o: "1.2 object-fit & object-position" },
  { v: "Geef de 4 waarden van object-fit uit de cursus.", a: "fill (standaard), contain, cover en scale-down.\n\n.a { object-fit: fill; }\n.b { object-fit: contain; }\n.c { object-fit: cover; }\n.d { object-fit: scale-down; }", o: "1.2 object-fit & object-position" },
  { v: "Wat doet object-position: center top?", a: "Het bepaalt welk deel van de afbeelding zichtbaar blijft: hier het bovenste deel (focus bovenaan), horizontaal gecentreerd.\n\n.foto {\n  object-fit: cover;\n  object-position: center top;\n}", o: "1.2 object-fit & object-position" },
  { v: "Hoe maak je van een vierkante profielfoto van 150×150 een perfecte cirkel zonder vervorming?", a: ".profile-avatar {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  object-fit: cover;\n}", o: "1.2 object-fit & object-position" },
  { v: "Wat is het verschil tussen object-fit: contain en cover?", a: "contain: de hele afbeelding is zichtbaar, maar er kunnen lege randen zijn.\ncover: het kader is volledig gevuld, maar er kan iets afgesneden worden.\n\n.heel-zichtbaar { object-fit: contain; }\n.kader-vol { object-fit: cover; }", o: "1.2 object-fit & object-position" },

  // ===== 1.3 aspect-ratio (1.3) =====
  { v: "Wat doet aspect-ratio?", a: "Het legt de verhouding van een kader vast, ongeacht de breedte.\n\n.video-kader {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n}", o: "1.3 aspect-ratio" },
  { v: "Hoe maak je een kader met een vaste 16:9-verhouding?", a: "aspect-ratio: 16 / 9;", o: "1.3 aspect-ratio" },
  { v: "Hoe maak je een perfect vierkant kader met aspect-ratio?", a: "aspect-ratio: 1 / 1;", o: "1.3 aspect-ratio" },

  // ===== 1.4 Filters & schaduwen (1.4) =====
  { v: "Waarvoor dienen CSS-filters?", a: "Om visuele effecten toe te passen op afbeeldingen zonder Photoshop.\n\nimg {\n  filter: grayscale(80%);\n}", o: "1.4 Filters & schaduwen" },
  { v: "Wat doet filter: grayscale(80%)?", a: "Het maakt de afbeelding voor 80% grijs (bijna zwart-wit). Met grayscale(0%) herstel je de kleur, bv. bij :hover.\n\nimg { filter: grayscale(80%); }\nimg:hover { filter: grayscale(0%); }", o: "1.4 Filters & schaduwen" },
  { v: "Wat doet transition: filter 0.3s ease?", a: "De verandering van het filter (bv. bij hover) gebeurt vloeiend in 0,3 seconden.\n\nimg {\n  filter: grayscale(80%);\n  transition: filter 0.3s ease;\n}\nimg:hover {\n  filter: grayscale(0%);\n}", o: "1.4 Filters & schaduwen" },
  { v: "Wat is het verschil tussen box-shadow en filter: drop-shadow()?", a: "box-shadow werpt een schaduw rond de rechthoekige buitenrand van het element (ook bij transparante PNG's of SVG's).\nfilter: drop-shadow() volgt de transparante contouren van de afbeelding.\n\n.kaart { box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4); }\n.logo { filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.4)); }", o: "1.4 Filters & schaduwen" },
  { v: "Je wil een schaduw onder een transparant PNG-logo. Wat gebruik je, en waarom?", a: "filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.4)); de schaduw volgt de vorm van het logo. Met box-shadow krijg je een lelijk zwart vierkant.\n\n.logo {\n  filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.4));\n}", o: "1.4 Filters & schaduwen" },

  // ===== 1.5 Video & iframes responsief (1.5) =====
  { v: "Hoe maak je video's en iframes (YouTube, Google Maps) responsief en strak?", a: "iframe, video {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  border: none;\n  border-radius: 8px;\n}", o: "1.5 Video & iframes responsief" },

  // ===== 2.1 Achtergrondafbeeldingen (2.1) =====
  { v: "Met welke eigenschap plaats je een afbeelding als achtergrond?", a: "background-image: url(\"../images/hero-bg.jpg\");", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Geef de 4 kerneigenschappen voor achtergronden.", a: "background-repeat, background-position, background-size en background-attachment.\n\n.hero {\n  background-image: url(\"../images/hero.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed;\n}", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Wat doet een achtergrondafbeelding standaard qua herhaling?", a: "Ze herhaalt zich horizontaal én verticaal (repeat).\n\n.patroon {\n  background-image: url(\"../images/tegel.png\");   /* herhaalt in x en y */\n}", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Wat doen no-repeat, repeat-x en repeat-y?", a: "no-repeat: niet herhalen\nrepeat-x: alleen horizontaal herhalen (X-as, van links naar rechts)\nrepeat-y: alleen verticaal herhalen (Y-as, van boven naar onder)\n\n.a { background-repeat: no-repeat; }\n.b { background-repeat: repeat-x; }\n.c { background-repeat: repeat-y; }", o: "2.1 Achtergrondafbeeldingen" },
  { v: "background-position: X Y — welke waarde is eerst?", a: "Eerst horizontaal (X), daarna verticaal (Y).\n\n.hero { background-position: right top; }   /* X = right, Y = top */", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Wat betekent background-position: right top?", a: "Horizontaal rechts, verticaal boven.\n\n.hero { background-position: right top; }", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Wat betekent background-position: 50% 20%?", a: "Horizontaal 50%, verticaal 20%.\n\n.hero { background-position: 50% 20%; }", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Wat doet background-size: cover?", a: "De afbeelding wordt geschaald zodat het hele element bedekt is (er kan iets afgesneden worden).\n\n.hero { background-size: cover; }", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Wat doet background-size: contain?", a: "De afbeelding wordt geschaald zodat ze volledig zichtbaar blijft.\n\n.hero { background-size: contain; }", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Wat betekent background-size: 200px 100px?", a: "Eerst de breedte (200px), dan de hoogte (100px).\n\n.logo { background-size: 200px 100px; }", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Wat betekent background-size: 100% auto?", a: "De afbeelding is 100% van de breedte van het element; de hoogte wordt automatisch berekend.\n\n.banner { background-size: 100% auto; }", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Wat doet background-attachment: scroll?", a: "De standaard: de achtergrond scrolt mee met de pagina.\n\nbody { background-attachment: scroll; }", o: "2.1 Achtergrondafbeeldingen" },
  { v: "Wat doet background-attachment: fixed?", a: "De achtergrond blijft vast op het scherm terwijl de inhoud eroverheen scrolt (eenvoudig parallax-effect).\n\n.hero {\n  background-image: url(\"../images/hero.jpg\");\n  background-attachment: fixed;\n}", o: "2.1 Achtergrondafbeeldingen" },
  { v: "In welke volgorde staan de waarden in de background-shorthand?", a: "background: color image repeat position / size attachment;", o: "2.1 Achtergrondafbeeldingen",
    uitleg: "Voorbeeld: background: #1e293b url(\"../images/hero-bg.jpg\") no-repeat center / cover fixed;" },
  { v: "Wat staat er tussen position en size in de background-shorthand?", a: "Een schuine streep /, bv. center / cover.\n\n.hero {\n  background: url(\"../images/hero.jpg\") no-repeat center / cover;\n}", o: "2.1 Achtergrondafbeeldingen" },

  // ===== 2.2 Kleurverlopen (gradients) (2.2) =====
  { v: "Hoe behandelt CSS een gradient?", a: "Als een achtergrondafbeelding, gegenereerd door de CSS-engine. Daarom gebruik je background-image.\n\n.banner {\n  background-image: linear-gradient(to right, #2563eb, #9333ea);\n}", o: "2.2 Kleurverlopen (gradients)" },
  { v: "Wat doet linear-gradient(to right, #2563eb, #9333ea)?", a: "Een lineair kleurverloop van links naar rechts, van blauw naar paars.\n\n.banner {\n  background-image: linear-gradient(to right, #2563eb, #9333ea);\n}", o: "2.2 Kleurverlopen (gradients)" },
  { v: "Hoe maak je een lineair kleurverloop onder een hoek van 135 graden?", a: "background-image: linear-gradient(135deg, #2563eb, #9333ea);", o: "2.2 Kleurverlopen (gradients)" },
  { v: "Wat doet radial-gradient(circle, #fde047, #ca8a04)?", a: "Een cirkelvormig kleurverloop vanuit het centrum.\n\n.zon {\n  background-image: radial-gradient(circle, #fde047, #ca8a04);\n}", o: "2.2 Kleurverlopen (gradients)" },
  { v: "Geef de 2 soorten gradients uit de cursus.", a: "linear-gradient (lineair) en radial-gradient (radiaal, cirkelvormig).\n\n.a { background-image: linear-gradient(to right, #2563eb, #9333ea); }\n.b { background-image: radial-gradient(circle, #fde047, #ca8a04); }", o: "2.2 Kleurverlopen (gradients)" },
  { v: "Hoe leg je een donkere, transparante laag over een achtergrondfoto?", a: "Combineer twee achtergrondlagen: eerst een gradient tussen 2 keer dezelfde transparante kleur, dan de foto:\nbackground-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(\"../images/hero-bg.jpg\");", o: "2.2 Kleurverlopen (gradients)",
    uitleg: "Door de gradient tussen twee keer dezelfde kleur te maken, krijg je een overlay in één kleur. De eerste laag in de lijst ligt bovenaan." },

  // ===== 3.1 border-collapse (3.1) =====
  { v: "Waarom zie je zonder CSS dubbele lijnen in een tabel met randen?", a: "De browser tekent rond elke afzonderlijke cel een eigen rand.\n\ntable, th, td {\n  border: 1px solid #cccccc;   /* dubbele lijnen */\n}", o: "3.1 border-collapse" },
  { v: "Wat doet border-collapse: collapse?", a: "Het smelt de dubbele randen van de cellen samen tot één strakke lijn.\n\ntable {\n  border-collapse: collapse;\n}", o: "3.1 border-collapse" },
  { v: "Op welk element zet je border-collapse?", a: "Op de <table>.", o: "3.1 border-collapse" },
  { v: "Waarop zet je de randen en padding in een gestijlde tabel?", a: "Op de cellen: th, td { border-bottom: 1px solid #cbd5e1; padding: 12px 16px; text-align: left; }", o: "3.1 border-collapse" },
  { v: "Wat doet margin-block: 20px?", a: "Een marge van 20px boven en onder (in de blokrichting).\n\ntable {\n  margin-block: 20px;\n}", o: "3.1 border-collapse" },

  // ===== 3.2 Zebra striping & hover (3.2) =====
  { v: "Hoe geef je elke even rij in een tabel een andere achtergrond (zebra striping)?", a: "tbody tr:nth-child(even) { background-color: #f8fafc; }", o: "3.2 Zebra striping & hover" },
  { v: "Hoe laat je de rij oplichten waar de muis over zweeft?", a: "tbody tr:hover { background-color: #e2e8f0; }", o: "3.2 Zebra striping & hover" },
  { v: "Wat doet transition: background-color 0.2s ease bij een tabelrij?", a: "De kleurverandering bij hover gebeurt vloeiend in plaats van in één keer.\n\ntr {\n  transition: background-color 0.2s ease;\n}\ntr:hover {\n  background-color: #e0e7ff;\n}", o: "3.2 Zebra striping & hover" },

  // ===== 3.3 Responsieve tabellen (3.3) =====
  { v: "Wat is het probleem met brede tabellen op mobiel?", a: "Ze zijn breder dan het scherm; als een tabel buiten de viewport steekt, breekt de hele pagina-layout.\n\n<div class=\"tabel-wrapper\">\n  <table>...</table>\n</div>", o: "3.3 Responsieve tabellen" },
  { v: "Hoe maak je een brede tabel responsief?", a: "Wikkel de <table> in een <div class=\"table-container\"> met:\n.table-container { width: 100%; overflow-x: auto; }", o: "3.3 Responsieve tabellen" },
  { v: "Wat doet overflow-x: auto?", a: "Het voegt automatisch een horizontale scrollbar toe wanneer de inhoud te breed is.\n\n.tabel-wrapper {\n  overflow-x: auto;\n}", o: "3.3 Responsieve tabellen" },

  // ===== 4.1 Invoervelden & textareas (4.1) =====
  { v: "Waarom stijl je formulieren met CSS?", a: "Ongestijlde formulieren zien er op elk besturingssysteem anders uit (verouderde randen, eigen lettertypen). Met CSS trek je alles in één uniforme huisstijl.", o: "4.1 Invoervelden & textareas" },
  { v: "Waarom zet je font-family: inherit op invoervelden?", a: "Dan nemen ze het lettertype van de pagina over in plaats van het eigen lettertype van de browser.\n\ninput, textarea, select, button {\n  font-family: inherit;\n}", o: "4.1 Invoervelden & textareas" },
  { v: "Hoe selecteer je in één regel alle tekstgerelateerde invoervelden?", a: "input[type=\"text\"], input[type=\"email\"], input[type=\"password\"], input[type=\"number\"], input[type=\"date\"], select, textarea { … }", o: "4.1 Invoervelden & textareas" },
  { v: "Hoe geef je een textarea een minimale hoogte van 100px?", a: "textarea { min-height: 100px; }", o: "4.1 Invoervelden & textareas" },

  // ===== 4.2 Focus states (4.2) =====
  { v: "Wat is de gouden regel voor toegankelijkheid bij focus?", a: "Gebruik nooit outline: none; zonder een duidelijk visueel alternatief. Anders weten toetsenbordgebruikers niet waar ze zijn op de pagina.", o: "4.2 Focus states" },
  { v: "Wanneer krijgt een veld de toestand :focus?", a: "Wanneer de gebruiker het selecteert, met de muis of via de Tab-toets.\n\ninput:focus {\n  border-color: #2563eb;\n}", o: "4.2 Focus states" },
  { v: "Wat doet deze code?\ninput:focus { outline: none; border-color: #2563eb; }", a: "Bij focus verdwijnt de standaard browseromranding, maar de rand wordt blauw: een duidelijk visueel alternatief.", o: "4.2 Focus states" },

  // ===== 4.3 Formulier-pseudo-classes (4.3) =====
  { v: "Wat stijlt input:required?", a: "Verplichte velden (met het attribuut required).\n\ninput:required {\n  border-left: 4px solid #2563eb;\n}", o: "4.3 Formulier-pseudo-classes" },
  { v: "Wat stijlt input:user-invalid?", a: "Een veld met een ongeldige waarde (bv. een fout e-mailadres), nadat de gebruiker het veld verlaten heeft.\n\ninput:user-invalid {\n  border-color: red;\n}", o: "4.3 Formulier-pseudo-classes" },
  { v: "Wat stijlt input:disabled?", a: "Uitgeschakelde velden (en button:disabled uitgeschakelde knoppen).\n\ninput:disabled,\nbutton:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}", o: "4.3 Formulier-pseudo-classes" },
  { v: "Welke cursor geef je aan een uitgeschakelde knop?", a: "cursor: not-allowed;", o: "4.3 Formulier-pseudo-classes" },
  { v: "Geef 3 formulier-pseudo-classes uit de cursus.", a: ":required, :user-invalid (:invalid) en :disabled.\n\ninput:required { border-left: 4px solid #2563eb; }\ninput:user-invalid { border-color: red; }\ninput:disabled { opacity: 0.5; }", o: "4.3 Formulier-pseudo-classes" },

  // ===== 4.4 Knoppen stijlen (4.4) =====
  { v: "Welke cursor toont een handje bij hover?", a: "cursor: pointer;", o: "4.4 Knoppen stijlen" },
  { v: "Wat doet button:active { transform: scale(0.96); }?", a: "De knop wordt heel even iets kleiner op het moment dat je klikt: een lichte \"indruk\"-reactie.\n\nbutton:active {\n  transform: scale(0.96);\n}", o: "4.4 Knoppen stijlen" },
  { v: "Hoe verwijder je de standaardrand van een knop?", a: "border: none;", o: "4.4 Knoppen stijlen" },
  { v: "Wat doet transition: background-color 0.2s ease, transform 0.1s ease bij een knop?", a: "De kleurverandering (0,2 s) en de schaalverandering (0,1 s) gebeuren vloeiend.\n\nbutton {\n  transition: background-color 0.2s ease, transform 0.1s ease;\n}", o: "4.4 Knoppen stijlen" },

  // ===== 5. Elk element is een box (5) =====
  { v: "Wat is elk HTML-element op een webpagina in essentie?", a: "Een rechthoekige box.", o: "5. Elk element is een box" },
  { v: "Benoem de 4 lagen van het box model.", a: "1 = margin (marge)\n2 = border (rand)\n3 = padding (opvulling)\n4 = content (inhoud)\n\n.box {\n  margin: 20px;              /* 1 */\n  border: 2px solid #333333; /* 2 */\n  padding: 15px;             /* 3 */\n  width: 300px;              /* 4 = content */\n}", o: "5. Elk element is een box", img: "afbeeldingen/WEBles4_boxmodel/we4_boxmodel_vraag.png", imgAntwoord: "afbeeldingen/WEBles4_boxmodel/we4_boxmodel.png" },

  // ===== 5.1 De 4 lagen van het box model (5.1) =====
  { v: "Geef de 4 lagen van het box model, van binnen naar buiten.", a: "Content → padding → border → margin.\n\n.box {\n  width: 300px;              /* content */\n  padding: 15px;\n  border: 2px solid #333333;\n  margin: 20px;\n}", o: "5.1 De 4 lagen van het box model" },
  { v: "Wat is de content van een box, en waardoor wordt ze bepaald?", a: "De werkelijke inhoud (tekst, afbeelding, kind-elementen), bepaald door width en height.\n\n.box {\n  width: 300px;\n  height: 150px;\n}", o: "5.1 De 4 lagen van het box model" },
  { v: "Wat is padding?", a: "De ruimte tussen de content en de border: ademruimte binnen het element. Ze neemt de achtergrondkleur van het element over.\n\n.box {\n  padding: 15px;\n  background-color: #e0e7ff;   /* ook onder de padding */\n}", o: "5.1 De 4 lagen van het box model" },
  { v: "Wat is border?", a: "De rand rond de padding en de content.\n\n.box {\n  border: 2px solid #333333;\n}", o: "5.1 De 4 lagen van het box model" },
  { v: "Wat is margin?", a: "De transparante ruimte buiten de border: afstand ten opzichte van omringende elementen.\n\n.box {\n  margin: 20px;\n}", o: "5.1 De 4 lagen van het box model" },
  { v: "Wat is het verschil tussen padding en margin?", a: "Padding = ruimte binnen de rand (krijgt de achtergrondkleur van het element).\nMargin = ruimte buiten de rand (transparant), afstand tot andere elementen.\n\n.box {\n  padding: 15px;   /* binnen de rand */\n  margin: 20px;    /* buiten de rand */\n}", o: "5.1 De 4 lagen van het box model" },
  { v: "Neemt padding de achtergrondkleur van het element over? En margin?", a: "Padding wel, margin niet (margin is transparant).\n\n.box {\n  background-color: #e0e7ff;\n  padding: 15px;   /* blauw */\n  margin: 20px;    /* transparant */\n}", o: "5.1 De 4 lagen van het box model" },

  // ===== 5.2 box-sizing & de universele reset (5.2) =====
  { v: "Hoe berekent de browser standaard (box-sizing: content-box) de totale breedte van een box?", a: "width + padding-left + padding-right + border-left + border-right.\n\n.box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid #333333;\n}\n/* totaal: 200 + 40 + 10 = 250px */", o: "5.2 box-sizing & de universele reset" },
  { v: "Een input heeft width: 100% en padding: 15px (content-box). Wat is het probleem?", a: "De totale box wordt 100% + 30px breed, waardoor het veld gedeeltelijk buiten beeld valt en de layout kan breken.\n\ninput {\n  width: 100%;\n  padding: 15px;   /* totaal 100% + 30px */\n}", o: "5.2 box-sizing & de universele reset" },
  { v: "Wat doet box-sizing: border-box?", a: "De opgegeven width blijft de totale breedte; padding en border worden naar binnen toe verrekend.\n\n* {\n  box-sizing: border-box;\n}", o: "5.2 box-sizing & de universele reset" },
  { v: "Hoe pas je box-sizing: border-box toe op alle elementen?", a: "* { box-sizing: border-box; }", o: "5.2 box-sizing & de universele reset" },
  { v: "Een box heeft width: 200px, padding: 20px en border: 5px. Hoe breed is ze met content-box, en met border-box?", a: "content-box: 200 + 2×20 + 2×5 = 250px.\nborder-box: 200px (de content wordt 150px).\n\n.box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid #333333;\n  box-sizing: border-box;   /* totaal 200px */\n}", o: "5.2 box-sizing & de universele reset" },
  { v: "Waarom start je een CSS-bestand met een universele reset?", a: "Browsers hanteren standaard eigen marges en padding. Een reset geeft een consistente basis op alle apparaten.\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}", o: "5.2 box-sizing & de universele reset" },
  { v: "Geef de eenvoudige CSS-reset uit de cursus.", a: "*, *::before, *::after { box-sizing: border-box; }\nbody { margin: 0; line-height: 1.5; }\nimg, video, svg { display: block; max-width: 100%; }", o: "5.2 box-sizing & de universele reset" },
  { v: "Waarom staat img, video, svg { display: block; max-width: 100%; } in de reset?", a: "Het voorkomt overflow (media worden nooit breder dan hun ouder) en laat media als blokelement uitlijnen.\n\nimg, video, svg {\n  display: block;\n  max-width: 100%;\n}", o: "5.2 box-sizing & de universele reset",
    uitleg: "Overflow = iets steekt uit zijn vak. Een foto van 1200px breed in een kolom van 400px steekt 800px uit; op een gsm krijg je dan een horizontale scrollbalk.\n\nmax-width: 100% = nooit breder dan het element waar het in staat (de ouder). Die foto van 1200px wordt dus 400px breed (de hoogte schaalt mee). Een kleine foto van 300px blijft 300px: ze wordt niet uitgerekt.\n\ndisplay: block: een img is standaard inline. Ze staat dan op een tekstregel, zoals een woord, en onder de foto blijft een klein strookje: de ruimte die de regel reserveert voor letters die onder de lijn hangen (g, p, y). Met display: block krijgt de foto een eigen regel, verdwijnt dat strookje, en kan je ze centreren met margin: 0 auto.\n\nVideo en svg gedragen zich op dezelfde manier, daarom staan ze mee in de regel." },

  // ===== 5.3 Display types (5.3) =====
  // -- overzichtstabel uit de cursus --
  { v: "Display-types (overzicht 5.3)", a: "Hoe het box model reageert, hangt af van het display-type.", o: "5.3 Display types", wit: true,
    tabel: [
      ["Display", "Elementen", "Gedrag in het box model"],
      ["block", "<div>, <p>, <h1>, <header>, <article>", "Nieuwe regel, standaard 100% breed; accepteert width, height, padding en margin aan alle zijden."],
      ["inline", "<span>, <a>, <strong>, <em>", "Zelfde regel, grootte volgens inhoud; negeert width/height en boven-/ondermarges."],
      ["inline-block", "<button>, <input>, <img>", "Op de regel zoals inline, maar reageert volledig op width, height, padding en margin."],
      ["none", "elk element", "Volledig weg uit de weergave (neemt 0px ruimte in)."]
    ] },
  { v: "Geef de 4 display-types uit de cursus.", a: "block, inline, inline-block en none.\n\n.a { display: block; }\n.b { display: inline; }\n.c { display: inline-block; }\n.d { display: none; }", o: "5.3 Display types" },
  { v: "Hoe gedraagt een block-element zich in het box model?", a: "Het begint op een nieuwe regel, neemt standaard 100% van de breedte in en accepteert width, height, padding en margin aan alle zijden.\n\ndiv {\n  display: block;\n  width: 300px;\n  margin: 20px;\n}", o: "5.3 Display types",
    uitleg: "Voorbeelden: <div>, <p>, <h1>, <header>, <article>." },
  { v: "Hoe gedraagt een inline-element zich in het box model?", a: "Het blijft op dezelfde regel; breedte en hoogte worden bepaald door de inhoud. Het negeert width en height, en boven- en ondermarges worden genegeerd.\n\nspan {\n  display: inline;   /* width en height worden genegeerd */\n}", o: "5.3 Display types",
    uitleg: "Voorbeelden: <span>, <a>, <strong>, <em>." },
  { v: "Hoe gedraagt een inline-block-element zich?", a: "Het blijft op de regel staan zoals een inline-element, maar reageert wél volledig op width, height, padding en margin.\n\n.knop {\n  display: inline-block;\n  width: 150px;\n  padding: 10px;\n}", o: "5.3 Display types",
    uitleg: "Voorbeelden: <button>, <input>, <img> (of een eigen element met display: inline-block)." },
  { v: "Wat doet display: none?", a: "Het verwijdert het element volledig uit de weergave; het neemt 0px ruimte in.\n\n.verborgen {\n  display: none;\n}", o: "5.3 Display types" },
  { v: "Welk display-type hebben <span>, <a>, <strong> en <em> standaard?", a: "inline.\n\n<p>Tekst met <span>span</span>, <a href=\"#\">link</a>, <strong>vet</strong> en <em>nadruk</em>.</p>", o: "5.3 Display types" },
  { v: "Welk display-type hebben <button>, <input> en <img> volgens de cursus?", a: "inline-block.\n\n<button>Klik</button> <input type=\"text\"> <img src=\"images/icoon.png\" alt=\"Icoon\">", o: "5.3 Display types" },
  { v: "Je wil een link eruit laten zien als een knop met padding aan alle kanten. Welke display gebruik je?", a: "display: inline-block; (nodig om width, padding boven/onder en margin te ondersteunen).", o: "5.3 Display types",
    uitleg: "a.custom-button { display: inline-block; padding: 10px 20px; background-color: #2563eb; color: white; text-decoration: none; }" },
  { v: "Je geeft een <span> width: 200px en margin-top: 20px. Wat gebeurt er?", a: "Niets: een inline-element negeert width en height, en boven- en ondermarges.\n\nspan {\n  width: 200px;       /* genegeerd */\n  margin-top: 20px;   /* genegeerd */\n}", o: "5.3 Display types" },
  { v: "Welke layout-technieken komen later in de cursus voor meer controle over positie en uitlijning?", a: "Flexbox en CSS Grid (display: flex en display: grid).\n\n.rij { display: flex; }\n.raster { display: grid; }", o: "5.3 Display types" },

  // ===== 6.1 Padding & margin shorthands (6.1) =====
  { v: "In welke volgorde werken de padding- en margin-shorthands met 4 waarden?", a: "Met de klok mee: boven → rechts → onder → links (top, right, bottom, left).\n\n.box {\n  padding: 10px 20px 15px 5px;   /* boven rechts onder links */\n}", o: "6.1 Padding & margin shorthands" },
  { v: "padding: 10px 20px 15px 5px; — wat is elke waarde?", a: "Boven 10px, rechts 20px, onder 15px, links 5px.\n\n.box {\n  padding: 10px 20px 15px 5px;\n}", o: "6.1 Padding & margin shorthands" },
  { v: "padding: 10px 20px 15px; — welke waarde geldt voor links?", a: "20px. Bij 3 waarden: boven | links & rechts | onder.\n\n.box {\n  padding: 10px 20px 15px;   /* links = 20px */\n}", o: "6.1 Padding & margin shorthands" },
  { v: "padding: 20px 40px; — wat betekent dit?", a: "Boven & onder 20px, links & rechts 40px.\n\n.box {\n  padding: 20px 40px;\n}", o: "6.1 Padding & margin shorthands" },
  { v: "padding: 24px; — wat betekent dit?", a: "Alle 4 de zijden 24px.\n\n.box {\n  padding: 24px;\n}", o: "6.1 Padding & margin shorthands" },
  { v: "Hoe schrijf je in één regel: boven 0, rechts 10px, onder 20px, links 10px?", a: "margin: 0 10px 20px; (of voluit: margin: 0 10px 20px 10px;)\n\n.box {\n  margin: 0 10px 20px;\n}", o: "6.1 Padding & margin shorthands" },

  // ===== 6.2 Block-elementen centreren (6.2) =====
  { v: "Hoe centreer je een block-element (bv. een container van max. 1000px) horizontaal?", a: ".container { max-width: 1000px; margin: 0 auto; }", o: "6.2 Block-elementen centreren",
    uitleg: "Automatische linker- en rechtermarge verdelen de vrije ruimte gelijk. Shorthand: margin-inline: auto;" },
  { v: "Wat is de shorthand voor een automatische linker- en rechtermarge?", a: "margin-inline: auto;", o: "6.2 Block-elementen centreren" },
  { v: "Waarom geef je een container ook ruimte aan de zijkanten, bv. padding-inline: 16px?", a: "Zodat de tekst op mobiel niet tegen de schermrand plakt.\n\n.container {\n  max-width: 1000px;\n  margin-inline: auto;\n  padding-inline: 16px;\n}", o: "6.2 Block-elementen centreren",
    uitleg: "In de cursuscode staat margin: 0 16px; met de opmerking \"dit kan ook met padding-inline: 16px\". Let op: een tweede margin-regel zou margin: 0 auto overschrijven, dus gebruik voor die zijruimte padding-inline." },

  // ===== 6.3 Margin collapsing (6.3) =====
  { v: "Wat is margin collapsing?", a: "Wanneer een ondermarge en een bovenmarge van opeenvolgende block-elementen elkaar raken, tellen ze niet op, maar smelten ze samen tot de grootste van de twee.\n\nh2 { margin-bottom: 30px; }\np { margin-top: 20px; }\n/* ruimte ertussen: 30px, niet 50px */", o: "6.3 Margin collapsing",
    uitleg: "Margin = de lege ruimte rond een element, aan de buitenkant van de border. Block-elementen (zoals h2 en p) staan onder elkaar.\n\nStaan twee block-elementen onder elkaar, dan raken de ondermarge van het bovenste en de bovenmarge van het onderste elkaar. De browser telt ze dan niet op, maar neemt enkel de grootste van de twee. De kleinste \"verdwijnt\" in de grootste: ze smelten samen (collapse = samenvallen).\n\nVoorbeeld: h2 met margin-bottom: 30px, daaronder een p met margin-top: 20px. De ruimte ertussen is 30px (de grootste), niet 30 + 20 = 50px.\n\nDit gebeurt enkel boven en onder (verticaal), nooit links en rechts." },
  { v: "h2 { margin-bottom: 30px; } en p { margin-top: 20px; }. Hoeveel ruimte is er tussen de h2 en de p eronder?", a: "30px (de grootste van de twee), niet 50px.\n\nh2 { margin-bottom: 30px; }\np { margin-top: 20px; }", o: "6.3 Margin collapsing",
    uitleg: "De ondermarge van de h2 (30px) en de bovenmarge van de p (20px) raken elkaar, want de p staat net onder de h2.\n\nVerticale marges die elkaar raken, tellen niet op: de browser neemt de grootste van de twee. 30px is groter dan 20px, dus de ruimte is 30px.\n\nDe 20px van de p valt binnen de 30px van de h2." },
  { v: "Geldt margin collapsing voor horizontale of verticale marges?", a: "Voor verticale marges (boven en onder) van block-elementen.\n\np {\n  margin-top: 20px;      /* kan samensmelten */\n  margin-bottom: 20px;   /* kan samensmelten */\n}", o: "6.3 Margin collapsing",
    uitleg: "Enkel voor verticale marges: margin-top en margin-bottom.\n\nBlock-elementen staan onder elkaar, dus hun boven- en ondermarges raken elkaar. Die smelten samen tot de grootste.\n\nHorizontale marges (margin-left en margin-right) smelten nooit samen. Staan twee elementen naast elkaar (bv. inline-block) met margin-right: 20px en margin-left: 30px, dan is de ruimte ertussen 20 + 30 = 50px." },
  { v: "Twee paragrafen met margin: 20px in een blauwe parent. Waarom zit de bovenste marge niet binnen de blauwe parent?", a: "Margin collapsing: de bovenmarge van het eerste kind smelt samen met de bovenmarge van de parent en steekt erbuiten.\n\n.parent { background-color: #2563eb; }\n.parent p { margin: 20px; }", o: "6.3 Margin collapsing", img: "afbeeldingen/WEBles4_boxmodel/we4_margin_collapse.png",
    uitleg: "Parent = het element waar de paragrafen in staan (hier de blauwe div). De eerste p is het eerste kind (child).\n\nJe zou verwachten: bovenaan in het blauw 20px ruimte, dan de groene p. Maar tussen de bovenrand van de blauwe parent en de bovenmarge van de eerste p zit niets: geen padding en geen border.\n\nDan behandelt de browser de bovenrand van de parent en de bovenmarge van het kind alsof ze elkaar raken. Ze smelten samen, en de marge van 20px komt boven de blauwe parent te staan, buiten het blauw. Daarom raakt de groene p de bovenrand van het blauw.\n\nOnderaan gebeurt hetzelfde met de ondermarge van de laatste p.\n\nTussen de twee paragrafen zie je 20px blauw, niet 40px: daar smelten de ondermarge van de eerste p en de bovenmarge van de tweede p samen.\n\nLinks en rechts staat de groene p wel 20px van de rand, want horizontaal gebeurt er geen collapsing." },
  { v: "Hier zit de marge wél binnen de blauwe parent. Wat werd er toegevoegd aan de parent?", a: "padding (bv. padding: 1px;). Daardoor kan de marge van het kind niet meer samensmelten met die van de parent.", o: "6.3 Margin collapsing", img: "afbeeldingen/WEBles4_boxmodel/we4_margin_padding.png",
    uitleg: "Padding = ruimte binnenin een element, tussen de rand en de inhoud.\n\nMet padding: 1px zit er nu iets (1px padding) tussen de bovenrand van de parent en de bovenmarge van het eerste kind. Ze raken elkaar dus niet meer, en kunnen niet meer samensmelten.\n\nDe 20px marge van de p blijft daardoor binnen de parent: je ziet bovenaan 20px blauw (plus de 1px padding).\n\nEen border op de parent (bv. border: 1px solid) werkt op dezelfde manier." },
  { v: "Hoe voorkom je dat de marge van het eerste kind buiten de parent steekt?", a: "Geef de parent padding, bv. .parent { padding: 1px; }.", o: "6.3 Margin collapsing",
    uitleg: "De marge lekt naar buiten omdat er niets zit tussen de rand van de parent en de marge van het kind.\n\nZet er iets tussen, dan raken ze elkaar niet meer:\n• padding op de parent, bv. .parent { padding: 1px; } (de oplossing uit de cursus);\n• of een border op de parent, bv. border: 1px solid.\n\nTer info (wordt niet gevraagd): in een volgende les zie je Flexbox en Grid. Een parent met display: flex of display: grid heeft dit probleem ook niet." },
  { v: "Margin collapsing tussen twee elementen onder elkaar", a: "Block-elementen (zoals h2 en p) staan onder elkaar. De ondermarge van het bovenste en de bovenmarge van het onderste raken elkaar.\n\nh2 {\n  margin-bottom: 30px;\n}\np {\n  margin-top: 20px;\n}\n\nZe tellen niet op (niet 50px). De browser neemt enkel de grootste: 30px.\n\nStap voor stap:\n1. Welke twee marges raken elkaar? De margin-bottom van het bovenste en de margin-top van het onderste.\n2. Neem de grootste van de twee.\n\nDit gebeurt enkel verticaal (boven en onder), nooit links en rechts.", o: "6.3 Margin collapsing", extra: true },
  { v: "Waarom lekt de marge van het eerste kind uit de parent?", a: "<div class=\"parent\">\n  <p>Ik heb een margin van 20px.</p>\n  <p>Ik heb ook een margin van 20px.</p>\n</div>\n\n.parent {\n  background: lightblue;\n}\np {\n  margin: 20px;\n  background: lightgreen;\n}\n\nDe eerste p heeft margin-top: 20px. Tussen de bovenrand van de blauwe parent en die marge zit niets: geen padding en geen border.\n\nDan smelten ze samen: de 20px komt boven het blauw te staan, buiten de parent. De groene p raakt de bovenrand van het blauw.\n\nOnderaan gebeurt hetzelfde met de ondermarge van de laatste p.\n\nOpgelet: de cursus schrijft hier \"de <h2>\", maar in het voorbeeld staan twee <p>'s. Het gaat over het eerste kind, hier de eerste p.", o: "6.3 Margin collapsing", extra: true },
  { v: "Waarom helpt padding op de parent?", a: ".parent {\n  padding: 1px;\n  background: lightblue;\n}\np {\n  margin: 20px;\n  background: lightgreen;\n}\n\nNu zit er 1px padding tussen de bovenrand van de parent en de marge van de eerste p. Ze raken elkaar niet meer, dus ze kunnen niet samensmelten.\n\nDe 20px marge blijft binnen de parent: bovenaan zie je 20px blauw.\n\nEen border op de parent werkt op dezelfde manier:\n\n.parent {\n  border: 1px solid #2563eb;\n}\n\nTussen de twee paragrafen blijft het wel 20px (niet 40px): daar smelten de marges van de twee p's nog altijd samen.", o: "6.3 Margin collapsing", extra: true },
  { v: "<h1>Titel</h1>\n<p>Tekst.</p>\n\nh1 {\n  margin-bottom: 40px;\n}\np {\n  margin-top: 25px;\n}\n\nHoeveel ruimte zit er tussen de h1 en de p?", a: "40px", o: "6.3 Margin collapsing", oefening: true,
    uitleg: "De ondermarge van de h1 (40px) en de bovenmarge van de p (25px) raken elkaar. Verticale marges tellen niet op: de grootste blijft over. 40px is groter dan 25px." },
  { v: "<p>Eerste.</p>\n<p>Tweede.</p>\n\np {\n  margin: 20px;\n}\n\nHoeveel ruimte zit er tussen de twee paragrafen?", a: "20px (niet 40px)", o: "6.3 Margin collapsing", oefening: true,
    uitleg: "Elke p heeft 20px marge boven en onder. Tussen de twee raken de ondermarge van de eerste (20px) en de bovenmarge van de tweede (20px) elkaar. Ze smelten samen tot de grootste: 20px." },
  { v: "<h2>Titel</h2>\n<p>Tekst.</p>\n\nh2 {\n  margin-bottom: 10px;\n}\np {\n  margin-top: 35px;\n}\n\nHoeveel ruimte zit er tussen de h2 en de p?", a: "35px", o: "6.3 Margin collapsing", oefening: true,
    uitleg: "Het maakt niet uit welke van de twee de grootste marge heeft: de browser neemt altijd de grootste. Hier is dat de margin-top van de p: 35px." },
  { v: "<div class=\"vak\">A</div>\n<div class=\"vak\">B</div>\n\n.vak {\n  display: inline-block;\n}\n/* A staat links, B rechts ernaast */\n.vak:first-child {\n  margin-right: 20px;\n}\n.vak:last-child {\n  margin-left: 30px;\n}\n\nHoeveel ruimte zit er tussen A en B?", a: "50px", o: "6.3 Margin collapsing", oefening: true,
    uitleg: "A en B staan naast elkaar (inline-block). Horizontale marges smelten nooit samen: ze tellen gewoon op. 20 + 30 = 50px.\n\nMargin collapsing gebeurt enkel boven en onder." },
  { v: "<div class=\"parent\">\n  <p>Eerste paragraaf.</p>\n  <p>Tweede paragraaf.</p>\n</div>\n\n.parent {\n  background: lightblue;\n}\np {\n  margin-top: 30px;\n}\n\nZie je bovenaan in het blauw 30px ruimte boven de eerste paragraaf?", a: "Nee. De 30px komt boven de blauwe parent te staan, buiten het blauw.", o: "6.3 Margin collapsing", oefening: true,
    uitleg: "Tussen de bovenrand van de parent en de bovenmarge van de eerste p zit niets: geen padding en geen border. Dan smelten ze samen, en de marge lekt uit de parent. De eerste p raakt de bovenrand van het blauw." },
  { v: "<div class=\"parent\">\n  <p>Eerste paragraaf.</p>\n  <p>Tweede paragraaf.</p>\n</div>\n\n.parent {\n  padding: 1px;\n  background: lightblue;\n}\np {\n  margin-top: 30px;\n}\n\nZie je nu bovenaan in het blauw 30px ruimte boven de eerste paragraaf?", a: "Ja.", o: "6.3 Margin collapsing", oefening: true,
    uitleg: "De padding van 1px zit tussen de bovenrand van de parent en de marge van de eerste p. Ze raken elkaar niet meer en smelten niet samen. De 30px blijft binnen het blauw (plus de 1px padding)." },
  { v: "<div class=\"parent\">\n  <p>Eerste paragraaf.</p>\n  <p>Tweede paragraaf.</p>\n</div>\n\n.parent {\n  border: 1px solid #2563eb;\n  background: lightblue;\n}\np {\n  margin-top: 30px;\n}\n\nBlijft de marge van de eerste paragraaf binnen de parent?", a: "Ja.", o: "6.3 Margin collapsing", oefening: true,
    uitleg: "Een border werkt zoals padding: er zit nu iets (de border) tussen de rand van de parent en de marge van het kind. Ze raken elkaar niet meer, dus de marge blijft binnen de parent." },
  { v: "<div class=\"parent\">\n  <p>Eerste paragraaf.</p>\n  <p>Tweede paragraaf.</p>\n</div>\n\n.parent {\n  background: lightblue;\n}\np {\n  margin-bottom: 25px;\n}\n\nWat gebeurt er onderaan met de ondermarge van de laatste paragraaf?", a: "Ze lekt onderaan uit de parent: de 25px komt onder het blauw te staan.", o: "6.3 Margin collapsing", oefening: true,
    uitleg: "Het werkt onderaan net zoals bovenaan. Tussen de ondermarge van het laatste kind en de onderrand van de parent zit niets (geen padding, geen border). Dan smelten ze samen, en de marge steekt onder de parent uit." },
  { v: "<div class=\"parent\">\n  <p>Eerste paragraaf.</p>\n  <p>Tweede paragraaf.</p>\n</div>\n\n.parent {\n  background: lightblue;\n}\np {\n  margin: 20px;\n  background: lightgreen;\n}\n\nStaat de groene paragraaf links ook tegen de rand van het blauw?", a: "Nee. Links (en rechts) staat 20px blauw naast de groene paragraaf.", o: "6.3 Margin collapsing", oefening: true,
    uitleg: "Margin collapsing gebeurt enkel boven en onder. De marge links en rechts van de p blijft gewoon binnen de parent. Daarom zie je in de tekening van de cursus links en rechts blauw, maar bovenaan niet." },
  { v: "Zoek de fout.\n<div class=\"parent\">\n  <p>Eerste paragraaf.</p>\n  <p>Tweede paragraaf.</p>\n</div>\n\nIemand wil bovenaan 20px blauwe ruimte boven de eerste paragraaf, en schrijft:\n\n.parent {\n  background: lightblue;\n}\np {\n  margin-top: 20px;\n}\n\nEr staat bovenaan geen blauw. Waarom niet, en hoe los je het op?", a: "De marge van de eerste p lekt uit de parent (margin collapsing). Geef de parent padding, bv. padding: 1px.", o: "6.3 Margin collapsing", oefening: true,
    uitleg: "Tussen de bovenrand van de parent en de marge van de eerste p zit niets. Dan smelten ze samen, en de 20px komt boven de parent te staan, buiten het blauw.\n\nOplossing: geef de parent padding (padding: 1px) of een border. Nu zit er iets tussen, en blijft de 20px binnen het blauw." },

  // ===== 6.4 Borders & afgeronde hoeken (6.4) =====
  { v: "Geef de 3 border-eigenschappen voluit, en de shorthand.", a: "border-width: 2px; border-style: solid; border-color: #2563eb;\nShorthand: border: 2px solid #2563eb;", o: "6.4 Borders & afgeronde hoeken" },
  { v: "Wat doet border-radius: 8px?", a: "Het maakt de hoeken afgerond.\n\n.kaart {\n  border-radius: 8px;\n}", o: "6.4 Borders & afgeronde hoeken" },
  { v: "Hoe maak je van een vierkant element een cirkel?", a: "border-radius: 50%;", o: "6.4 Borders & afgeronde hoeken" },

  // ===== 6.5 box-shadow (6.5) =====
  { v: "Waarvoor gebruik je box-shadow?", a: "Om schaduwen aan kaders toe te voegen voor hiërarchie en diepte (elevation) in je design.\n\n.kaart {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);\n}", o: "6.5 box-shadow" },
  { v: "In welke volgorde staan de waarden van box-shadow?", a: "offset-x | offset-y | blur-radius | spread-radius | color\n\n.kaart {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);\n  /* offset-x offset-y blur spread kleur */\n}", o: "6.5 box-shadow" },
  { v: "Wat betekent box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2)?", a: "offset-x 0, offset-y 4px (naar onder), blur 6px, spread -1px (iets kleiner), kleur zwart aan 20%.\n\n.kaart {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);\n}", o: "6.5 box-shadow" },
  { v: "Hoe maak je een licht \"zweef-effect\" bij hover op een kaart?", a: ".card:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2); }", o: "6.5 box-shadow",
    uitleg: "De kaart schuift 4px omhoog en krijgt een grotere schaduw. Met transition gebeurt dat vloeiend." },

  // ===== 7.2 Veelgemaakte fouten (7.2) =====
  { v: "Geef de 5 veelgemaakte fouten uit les 4.", a: "1. box-sizing: border-box vergeten.\n2. width: 100% combineren met vaste zijmarges.\n3. outline: none; zonder alternatief.\n4. box-shadow op transparante PNG's.\n5. Afbeeldingen vervormen (geen object-fit: cover).", o: "7.2 Veelgemaakte fouten" },
  { v: "Wat gebeurt er als je box-sizing: border-box vergeet?", a: "Invoervelden of blokken lopen buiten het scherm door de opgetelde padding.\n\ninput {\n  width: 100%;\n  padding: 15px;\n  box-sizing: border-box;   /* niet vergeten */\n}", o: "7.2 Veelgemaakte fouten" },
  { v: "Wat gebruik je liever dan width: 100% met vaste zijmarges?", a: "max-width met margin: 0 auto.\n\n.container {\n  max-width: 1000px;\n  margin: 0 auto;\n}", o: "7.2 Veelgemaakte fouten" },
  { v: "Hoe voorkom je dat foto's vervormen als je vaste breedtes en hoogtes instelt?", a: "object-fit: cover;", o: "7.2 Veelgemaakte fouten" },

  // ===== 7.2 Sneloverzicht (7.2) =====
  { v: "Wat doet box-sizing: border-box (sneloverzicht)?", a: "Het telt padding en border mee binnen de opgegeven breedte.\n\n* { box-sizing: border-box; }", o: "7.2 Sneloverzicht" },
  { v: "Wat doet object-fit: cover (sneloverzicht)?", a: "Het vult het kader zonder de beeldverhouding te schenden.\n\n.foto { object-fit: cover; }", o: "7.2 Sneloverzicht" },
  { v: "Wat doet aspect-ratio: 16 / 9 (sneloverzicht)?", a: "Het legt de beeldverhouding vast.\n\n.video { aspect-ratio: 16 / 9; }", o: "7.2 Sneloverzicht" },
  { v: "Wat doet border-collapse: collapse (sneloverzicht)?", a: "Het smelt dubbele tabelranden samen tot 1 lijn.\n\ntable { border-collapse: collapse; }", o: "7.2 Sneloverzicht" },
  { v: "Wat doet margin-inline: auto (sneloverzicht)?", a: "Het centreert block-elementen horizontaal.\n\n.container {\n  max-width: 1000px;\n  margin-inline: auto;\n}", o: "7.2 Sneloverzicht" },
  { v: "Opdracht uit de cursus: intro met achtergrondafbeelding.\n<header class=\"intro\">\n  <h1>Back to the future trilogy</h1>\n  <p>Tekst hier ....</p>\n</header>\n\nZet header-bttf.jpg als CSS-achtergrondafbeelding van de intro, en stel de grootte zo in dat de afbeelding de hele intro bedekt.", a: ".intro {\n  background-image: url(\"images/header-bttf.jpg\");\n  background-size: cover;\n}", o: "2.1 Achtergrondafbeeldingen", oefening: true,
    uitleg: "background-image zet een afbeelding achter de inhoud van het element. De afbeelding staat in de CSS, niet als <img> in de HTML.\nbackground-size: cover schaalt de afbeelding zodat ze de hele intro bedekt, zonder te vervormen; wat te veel is, wordt afgesneden.\nTer info: het pad (images/...) hangt af van waar je CSS-bestand staat ten opzichte van de afbeelding." },
  { v: "Opdracht uit de cursus: intro met achtergrondafbeelding.\n<header class=\"intro\">\n  <h1>Back to the future trilogy</h1>\n  <p>Tekst hier ....</p>\n</header>\n\nCentreer de tekst in de intro.", a: ".intro {\n  text-align: center;\n}", o: "2.1 Achtergrondafbeeldingen", oefening: true,
    uitleg: "text-align: center centreert de tekst (en andere inline-inhoud) binnen het element. Omdat h1 en p in de intro staan, erven ze dat over: alle tekst staat in het midden." },
  { v: "Opdracht uit de cursus: intro met achtergrondafbeelding.\n<header class=\"intro\">\n  <h1>Back to the future trilogy</h1>\n  <p>Tekst hier ....</p>\n</header>\n\nDe hoofdtitel is 3 keer zo groot als de basislettergrootte. Schrijf de CSS.", a: ".intro h1 {\n  font-size: 3rem;\n}", o: "2.1 Achtergrondafbeeldingen", oefening: true,
    uitleg: "De basislettergrootte is de lettergrootte van het html-element (meestal 16px). rem rekent altijd vanaf die basis: 3rem = 3 × 16px = 48px.\nJe kan ook 3em gebruiken als de ouder de basisgrootte heeft, maar rem is veiliger: het hangt niet af van de ouder." },
  { v: "Opdracht uit de cursus: intro met achtergrondafbeelding.\n<header class=\"intro\">\n  <h1>Back to the future trilogy</h1>\n  <p>Tekst hier ....</p>\n</header>\n\nDe ruimte tussen de letters van de hoofdtitel is 1/5 van de lettergrootte. Schrijf de CSS.", a: ".intro h1 {\n  letter-spacing: 0.2em;\n}", o: "2.1 Achtergrondafbeeldingen", oefening: true,
    uitleg: "letter-spacing is de extra ruimte tussen de letters.\nem rekent vanaf de lettergrootte van het element zelf: 1em = de lettergrootte van de h1. 1/5 = 0,2, dus 0.2em.\nBij een h1 van 48px is dat 0,2 × 48 = 9,6px. Verander je later de lettergrootte, dan schaalt de ruimte vanzelf mee." },
  { v: "Opdracht uit de cursus: intro met achtergrondafbeelding.\n<header class=\"intro\">\n  <h1>Back to the future trilogy</h1>\n  <p>Tekst hier ....</p>\n</header>\n\nZonder margins en paddings neemt de intro heel weinig ruimte in: de afbeelding is maar zo hoog als de tekst. Hoe geef je de intro meer ruimte, zodat je meer van de achtergrond ziet?", a: "Geef de intro padding, bv.:\n.intro {\n  padding: 6rem 2rem;\n}", o: "2.1 Achtergrondafbeeldingen", oefening: true,
    uitleg: "Een achtergrondafbeelding neemt zelf geen plaats in: de intro is maar zo groot als haar inhoud (de h1 en de p) plus padding.\nPadding is ruimte binnenin het element, tussen de rand en de inhoud. De achtergrond loopt door onder de padding, dus meer padding = een grotere intro en meer zichtbare achtergrond.\npadding: 6rem 2rem = 6rem boven en onder, 2rem links en rechts. De exacte waarden mag je zelf kiezen tot het lijkt op het voorbeeld." },
  { v: "Opdracht uit de cursus: polaroid.\n<figure>\n  <img src=\"images/polar_1x1.jpg\" alt=\"Polar Lights over a highway\">\n  <figcaption>Polar Lights</figcaption>\n</figure>\n\nfigure {\n  width: 300px;\n  background-color: #efefef;\n}\n/* de afbeelding is 400px breed */\n\nDe afbeelding is 400px breed en past niet in de figure van 300px. Hoe zorg je dat ze binnen de figure past?", a: "img {\n  max-width: 100%;\n}", o: "5.2 box-sizing & de universele reset", oefening: true,
    uitleg: "max-width: 100% betekent: nooit breder dan de ouder (hier de figure). De afbeelding van 400px wordt dus zo breed als de inhoud van de figure, en de hoogte schaalt mee.\nZonder deze regel steekt de afbeelding 100px uit de figure (overflow)." },
  { v: "Opdracht uit de cursus: polaroid.\n<figure>\n  <img src=\"images/polar_1x1.jpg\" alt=\"Polar Lights over a highway\">\n  <figcaption>Polar Lights</figcaption>\n</figure>\n\nfigure {\n  width: 300px;\n  background-color: #efefef;\n}\n/* de afbeelding is 400px breed */\n\nJe geeft de figure ook padding: 20px en border: 1px solid #ccc. Hoe breed is de figure op het scherm, zonder box-sizing?", a: "342px", o: "5.2 box-sizing & de universele reset", oefening: true,
    uitleg: "Standaard (box-sizing: content-box) geldt width enkel voor de inhoud. Padding en border komen er nog bij:\n300 (inhoud) + 20 + 20 (padding links en rechts) + 1 + 1 (border links en rechts) = 342px." },
  { v: "Opdracht uit de cursus: polaroid.\n<figure>\n  <img src=\"images/polar_1x1.jpg\" alt=\"Polar Lights over a highway\">\n  <figcaption>Polar Lights</figcaption>\n</figure>\n\nfigure {\n  width: 300px;\n  background-color: #efefef;\n}\n/* de afbeelding is 400px breed */\n\nDe figure heeft padding: 20px en border: 1px solid #ccc. Zorg dat de figure in totaal exact 300px breed is.", a: "figure {\n  box-sizing: border-box;\n}", o: "5.2 box-sizing & de universele reset", oefening: true,
    uitleg: "Met box-sizing: border-box geldt width: 300px voor alles samen: inhoud + padding + border. De browser maakt de inhoud kleiner zodat het totaal 300px blijft: 300 − 40 − 2 = 258px voor de inhoud (de foto).\nControleer het in de Property Inspector van je browser: de totale breedte moet 300px zijn." },
  { v: "Opdracht uit de cursus: polaroid.\n<figure>\n  <img src=\"images/polar_1x1.jpg\" alt=\"Polar Lights over a highway\">\n  <figcaption>Polar Lights</figcaption>\n</figure>\n\nfigure {\n  width: 300px;\n  background-color: #efefef;\n}\n/* de afbeelding is 400px breed */\n\nMaak de witte rand rondom de afbeelding, zoals bij een polaroidfoto. Gebruik padding op de figure.", a: "figure {\n  padding: 20px;\n}", o: "6.4 Borders & afgeronde hoeken", oefening: true,
    uitleg: "Padding is ruimte binnenin de figure, tussen de rand en de inhoud (de foto en het onderschrift). De achtergrondkleur van de figure (#efefef) loopt door onder de padding: zo zie je een lichte rand rond de foto.\nDe exacte waarde mag je zelf kiezen tot het lijkt op het voorbeeld." },
  { v: "Opdracht uit de cursus: polaroid.\n<figure>\n  <img src=\"images/polar_1x1.jpg\" alt=\"Polar Lights over a highway\">\n  <figcaption>Polar Lights</figcaption>\n</figure>\n\nfigure {\n  width: 300px;\n  background-color: #efefef;\n}\n/* de afbeelding is 400px breed */\n\nGeef de figure een rand in de kleur #ccc en afgeronde hoeken van 10px.", a: "figure {\n  border: 1px solid #ccc;\n  border-radius: 10px;\n}", o: "6.4 Borders & afgeronde hoeken", oefening: true,
    uitleg: "border: dikte stijl kleur. Hier 1px, een volle lijn (solid), kleur #ccc (lichtgrijs).\nborder-radius: 10px rondt de 4 hoeken af met een straal van 10px. Ook de achtergrondkleur volgt die ronde hoeken." },
  { v: "Opdracht uit de cursus: data-tabel met zebra striping (tabellen-start.html).\nEen table met een thead (rij met <th>-cellen) en een tbody (rijen met <td>-cellen).\n\nVerwijder de dubbele randen tussen de cellen, en geef de tabel een maximumbreedte van 800px.", a: "table {\n  border-collapse: collapse;\n  max-width: 800px;\n}", o: "3.1 border-collapse", oefening: true,
    uitleg: "Standaard heeft elke cel haar eigen rand, met een kleine ruimte ertussen: daardoor zie je dubbele lijnen. border-collapse: collapse laat de randen van aangrenzende cellen samenvallen tot één lijn.\nmax-width: 800px: de tabel wordt nooit breder dan 800px, maar mag wel smaller zijn op een klein scherm." },
  { v: "Opdracht uit de cursus: data-tabel met zebra striping (tabellen-start.html).\nEen table met een thead (rij met <th>-cellen) en een tbody (rijen met <td>-cellen).\n\nGeef alle th- en td-cellen een padding van 12px boven/onder en 16px links/rechts, en een subtiele onderrand van 1px in de kleur #cbd5e1.", a: "th, td {\n  padding: 12px 16px;\n  border-bottom: 1px solid #cbd5e1;\n}", o: "3.1 border-collapse", oefening: true,
    uitleg: "De komma groepeert: de regel geldt voor th én td.\npadding met 2 waarden: de eerste is boven en onder (12px), de tweede links en rechts (16px).\nborder-bottom zet enkel een rand onderaan elke cel: zo krijg je een lijn tussen de rijen." },
  { v: "Opdracht uit de cursus: data-tabel met zebra striping (tabellen-start.html).\nEen table met een thead (rij met <th>-cellen) en een tbody (rijen met <td>-cellen).\n\nGeef de tabelkop een donkere achtergrond (#0f172a) met witte, vette tekst.", a: "th {\n  background-color: #0f172a;\n  color: white;\n  font-weight: bold;\n}", o: "3.1 border-collapse", oefening: true,
    uitleg: "De tabelkop bestaat uit de th-cellen. background-color geeft de achtergrond, color de tekstkleur.\nTer info: th is standaard al vet; font-weight: bold maakt dat expliciet." },
  { v: "Opdracht uit de cursus: data-tabel met zebra striping (tabellen-start.html).\nEen table met een thead (rij met <th>-cellen) en een tbody (rijen met <td>-cellen).\n\nGeef elke even rij in de tbody een lichte achtergrondkleur (#f8fafc).", a: "tbody tr:nth-child(even) {\n  background-color: #f8fafc;\n}", o: "3.2 Zebra striping & hover", oefening: true,
    uitleg: "tbody tr = elke rij in de tbody (de thead telt dus niet mee).\n:nth-child(even) = elk even kind: de 2e, 4e, 6e … rij. Zo wisselen de kleuren af: zebra striping. Dat maakt een lange tabel makkelijker te lezen." },
  { v: "Opdracht uit de cursus: data-tabel met zebra striping (tabellen-start.html).\nEen table met een thead (rij met <th>-cellen) en een tbody (rijen met <td>-cellen).\n\nLaat de rij waar de muis over zweeft oplichten.", a: "tbody tr:hover {\n  background-color: #e2e8f0;\n}", o: "3.2 Zebra striping & hover", oefening: true,
    uitleg: ":hover is een pseudo-class: de regel geldt enkel zolang de muis boven de rij staat. De kleur mag je zelf kiezen; ze moet duidelijk verschillen van de zebra-kleur.\ntbody: zo licht enkel een gewone rij op, niet de tabelkop." },
  { v: "Opdracht uit de cursus: navigatie (navigatie-start.html).\n<ul>\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">Over ons</a></li>\n  <li><a href=\"#\">Contact</a></li>\n</ul>\n\nVerwijder de bolletjes van de lijst, en geef de lijst een breedte van 14rem.", a: "ul {\n  list-style: none;\n  width: 14rem;\n}", o: "5.3 Display types", oefening: true,
    uitleg: "list-style: none haalt de bullets (bolletjes) weg.\nwidth: 14rem = 14 × de basislettergrootte (bij 16px is dat 224px). Een ul is een block-element, dus width werkt.\nTer info: href=\"#\" is een dummy-link (nep-link): ze verwijst nergens naar." },
  { v: "Opdracht uit de cursus: navigatie (navigatie-start.html).\n<ul>\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">Over ons</a></li>\n  <li><a href=\"#\">Contact</a></li>\n</ul>\n\nDe links moeten de volledige breedte van de lijst innemen, met padding rondom. Waarom werkt dat niet zolang de link een gewone link is, en wat moet je toevoegen?", a: "Een link (a) is standaard inline. Maak er een block-element van:\na {\n  display: block;\n}", o: "5.3 Display types", oefening: true,
    uitleg: "Een inline-element is maar zo breed als zijn tekst, en boven- en ondermarges werken er niet op. Een block-element neemt de volledige breedte van zijn ouder in (hier de li in de ul van 14rem) en accepteert width, height, padding en margin aan alle kanten.\nDaardoor wordt de hele balk klikbaar, niet alleen de tekst." },
  { v: "Opdracht uit de cursus: navigatie (navigatie-start.html).\n<ul>\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">Over ons</a></li>\n  <li><a href=\"#\">Contact</a></li>\n</ul>\n\nGeef de links padding, een rand onderaan en ruimte ertussen, zodat het een navigatie wordt.", a: "a {\n  display: block;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid #cccccc;\n  margin-bottom: 0.25rem;\n  text-decoration: none;\n}", o: "5.3 Display types", oefening: true,
    uitleg: "padding geeft ruimte binnenin de link (de klikbare zone wordt groter).\nborder-bottom zet een lijn onder elke link.\nmargin-bottom zet ruimte tussen de links.\ntext-decoration: none haalt de onderstreping weg.\nDe exacte waarden mag je zelf kiezen tot het lijkt op het voorbeeld." },
  { v: "Opdracht uit de cursus: navigatie (navigatie-start.html).\n<ul>\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">Over ons</a></li>\n  <li><a href=\"#\">Contact</a></li>\n</ul>\n\nAls je met de muis over een link gaat, veranderen zowel de tekst- als de achtergrondkleur. Schrijf de CSS.", a: "a:hover {\n  background-color: #333333;\n  color: white;\n}", o: "5.3 Display types", oefening: true,
    uitleg: ":hover geldt enkel zolang de muis boven de link staat. Omdat de link display: block heeft, kleurt de hele balk, niet alleen de tekst.\nDe kleuren mag je zelf kiezen; zorg dat de tekst goed leesbaar blijft op de achtergrond." },
  { v: "Extra opdracht uit de cursus: navigatie met svg-iconen (navigatie-start.html).\n<ul>\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">Over ons</a></li>\n  <li><a href=\"#\">Contact</a></li>\n</ul>\n\nIn elke link staat een embedded svg-icoon (de <svg>-code staat in de HTML, binnen de a). Bij hover moet het zwarte icoon wit worden. Schrijf de CSS.", a: "a:hover svg {\n  fill: white;\n}", o: "5.3 Display types", oefening: true, extra: true,
    uitleg: "fill is de vulkleur van een svg-vorm. a:hover svg = elke svg in een link waar de muis boven staat (spatie = binnenin).\nDit werkt enkel als de svg embedded is: de <svg>-code staat zelf in de HTML. Met <img src=\"icoon.svg\"> kan CSS de vulkleur niet veranderen." },
  { v: "Wat betekent overflow bij afbeeldingen?", a: "Overflow = iets steekt uit zijn vak.\n\nEen foto is standaard zo breed als het bestand zelf. Een foto van 1200px in een kolom van 400px steekt dus 800px uit de kolom.\n\nOp een gsm geeft dat een horizontale scrollbalk: de hele pagina schuift opzij.\n\nDaarom staat in de reset:\nimg, video, svg {\n  max-width: 100%;\n}", o: "5.2 box-sizing & de universele reset", extra: true },
  { v: "Wat doet max-width: 100% bij een afbeelding?", a: "max-width: 100% = nooit breder dan de ouder (het element waar de afbeelding in staat).\n• Grote foto (1200px) in een kolom van 400px: wordt 400px breed. De hoogte schaalt mee, dus de foto vervormt niet.\n• Kleine foto (300px) in een kolom van 400px: blijft 300px.\n\nHet verschil met width: 100%:\n• width: 100% maakt de foto altijd zo breed als de ouder, ook een kleine foto: die wordt dan uitgerekt en wazig.\n• max-width: 100% verkleint enkel als het moet, en vergroot nooit.", o: "5.2 box-sizing & de universele reset", extra: true },
  { v: "Waarom display: block bij img, video en svg in de reset?", a: "Een img is standaard inline: ze staat op een tekstregel, zoals een woord.\n\nOp een tekstregel is er onder de lijn ruimte voor letters die naar onder hangen (g, p, y). Ook onder een inline-foto blijft die ruimte: een klein strookje onder de afbeelding.\n\nMet display: block:\n• krijgt de afbeelding een eigen regel;\n• verdwijnt het strookje eronder;\n• kan je ze centreren met margin: 0 auto (dat werkt enkel bij block-elementen met een breedte).\n\nVideo en svg gedragen zich op dezelfde manier.", o: "5.2 box-sizing & de universele reset", extra: true },
  { v: "<div class=\"kolom\">\n  <img src=\"foto.jpg\" alt=\"Foto\">\n</div>\n\n.kolom {\n  width: 500px;\n}\nimg {\n  max-width: 100%;\n}\n/* foto.jpg is 1200px breed */\n\nHoe breed wordt de foto?", a: "500px", o: "5.2 box-sizing & de universele reset", oefening: true,
    uitleg: "max-width: 100% = nooit breder dan de ouder. De kolom is 500px, dus de foto wordt 500px breed (en de hoogte schaalt mee)." },
  { v: "<div class=\"kolom\">\n  <img src=\"foto.jpg\" alt=\"Foto\">\n</div>\n\n.kolom {\n  width: 500px;\n}\nimg {\n  max-width: 100%;\n}\n/* foto.jpg is 300px breed */\n\nHoe breed wordt de foto?", a: "300px", o: "5.2 box-sizing & de universele reset", oefening: true,
    uitleg: "max-width is een maximum, geen vaste breedte. De foto van 300px is al smaller dan de kolom van 500px, dus ze blijft 300px. Ze wordt niet uitgerekt." },
  { v: "<div class=\"kolom\">\n  <img src=\"foto.jpg\" alt=\"Foto\">\n</div>\n\n.kolom {\n  width: 500px;\n}\nimg {\n  width: 100%;\n}\n/* foto.jpg is 300px breed */\n\nHoe breed wordt de foto?", a: "500px: ze wordt uitgerekt (en kan wazig worden).", o: "5.2 box-sizing & de universele reset", oefening: true,
    uitleg: "width: 100% maakt de foto altijd zo breed als de ouder, ook als ze kleiner is. Daarom gebruikt de reset max-width: 100%: verkleinen als het moet, nooit vergroten." },
  { v: "Zoek de fout.\n<div class=\"kolom\">\n  <img src=\"foto.jpg\" alt=\"Foto\">\n</div>\n\n.kolom {\n  width: 500px;\n}\n\nOnder de foto zie je een klein strookje lege ruimte. Waar komt dat vandaan, en hoe los je het op?", a: "De img is inline en staat op een tekstregel. Oplossing:\nimg {\n  display: block;\n}", o: "5.2 box-sizing & de universele reset", oefening: true,
    uitleg: "Op een tekstregel is er onder de lijn ruimte voor letters die naar onder hangen (g, p, y). Een inline-afbeelding staat op die lijn, dus die ruimte blijft eronder. Met display: block krijgt de foto een eigen regel, en verdwijnt het strookje." },
  { v: "Zoek de fout.\n<div class=\"kolom\">\n  <img src=\"foto.jpg\" alt=\"Foto\">\n</div>\n\n.kolom {\n  width: 500px;\n}\nimg {\n  width: 300px;\n  margin: 0 auto;\n}\n\nDe foto staat niet in het midden van de kolom. Waarom niet?", a: "De img is inline; margin: 0 auto centreert enkel block-elementen. Voeg toe:\nimg {\n  display: block;\n}", o: "5.2 box-sizing & de universele reset", oefening: true,
    uitleg: "margin: 0 auto verdeelt de lege ruimte links en rechts gelijk, maar dat werkt enkel bij een block-element met een breedte. Een inline-element (zoals een img standaard) negeert dat." },
  { v: "Wat doet object-fit: none?", a: "object-fit: none = de afbeelding wordt helemaal niet geschaald. Ze blijft op haar originele (natuurlijke) pixelgrootte, hoe groot of klein het vak ook is.\n• Is de foto kleiner dan het vak, dan zie je lege ruimte eromheen.\n• Is de foto groter dan het vak, dan wordt ze bijgesneden: je ziet enkel het middelste stuk. Dat stuk staat standaard in het midden; je kan het verschuiven met object-position.\n\nTer info: none staat niet in de cursus (die noemt fill, contain, cover en scale-down), maar je hebt het nodig om scale-down te begrijpen.", o: "1.2 object-fit & object-position", extra: true },
  { v: "Waarom is object-fit: scale-down handig?", a: "object-fit: scale-down vergelijkt none en contain, en kiest wat de kleinste afbeelding geeft:\n• Kleine foto: gedraagt zich als none. Ze blijft op haar originele grootte en wordt nooit uitvergroot (dus geen wazige pixels).\n• Grote foto: gedraagt zich als contain. Ze wordt verkleind tot ze volledig in het vak past, zonder bijsnijden.\n\nKort: scale-down = verklein als het moet, maar vergroot nooit.", o: "1.2 object-fit & object-position", extra: true },

];

kaarten_WEB_les4.structuur = [
  { kop: "Module 1: Vormgeving van afbeeldingen & media", slide: "M1" },
  { o: "1. Waarom media stijlen?", slide: "1", sub: true },
  { o: "1.1 Responsieve afbeeldingen", slide: "1.1", sub: true },
  { o: "1.2 object-fit & object-position", slide: "1.2", sub: true },
  { o: "1.3 aspect-ratio", slide: "1.3", sub: true },
  { o: "1.4 Filters & schaduwen", slide: "1.4", sub: true },
  { o: "1.5 Video & iframes responsief", slide: "1.5", sub: true },
  { kop: "Module 2: CSS-achtergronden", slide: "M2" },
  { o: "2.1 Achtergrondafbeeldingen", slide: "2.1", sub: true },
  { o: "2.2 Kleurverlopen (gradients)", slide: "2.2", sub: true },
  { kop: "Module 3: Vormgeving van tabellen", slide: "M3" },
  { o: "3.1 border-collapse", slide: "3.1", sub: true },
  { o: "3.2 Zebra striping & hover", slide: "3.2", sub: true },
  { o: "3.3 Responsieve tabellen", slide: "3.3", sub: true },
  { kop: "Module 4: Vormgeving van formulieren", slide: "M4" },
  { o: "4.1 Invoervelden & textareas", slide: "4.1", sub: true },
  { o: "4.2 Focus states", slide: "4.2", sub: true },
  { o: "4.3 Formulier-pseudo-classes", slide: "4.3", sub: true },
  { o: "4.4 Knoppen stijlen", slide: "4.4", sub: true },
  { kop: "Module 5: Het CSS box model", slide: "M5" },
  { o: "5. Elk element is een box", slide: "5", sub: true },
  { o: "5.1 De 4 lagen van het box model", slide: "5.1", sub: true },
  { o: "5.2 box-sizing & de universele reset", slide: "5.2", sub: true },
  { o: "5.3 Display types", slide: "5.3", sub: true },
  { kop: "Module 6: Marges, opvulling, randen & schaduwen", slide: "M6" },
  { o: "6.1 Padding & margin shorthands", slide: "6.1", sub: true },
  { o: "6.2 Block-elementen centreren", slide: "6.2", sub: true },
  { o: "6.3 Margin collapsing", slide: "6.3", sub: true },
  { o: "6.4 Borders & afgeronde hoeken", slide: "6.4", sub: true },
  { o: "6.5 box-shadow", slide: "6.5", sub: true },
  { kop: "Module 7: Veelgemaakte fouten & kernoverzicht", slide: "M7" },
  { o: "7.2 Veelgemaakte fouten", slide: "7.2", sub: true },
  { o: "7.2 Sneloverzicht", slide: "7.2", sub: true },
];
