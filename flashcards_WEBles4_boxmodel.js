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
  { v: "Waarom staat img, video, svg { display: block; max-width: 100%; } in de reset?", a: "Het voorkomt overflow (media worden nooit breder dan hun ouder) en laat media als blokelement uitlijnen.\n\nimg, video, svg {\n  display: block;\n  max-width: 100%;\n}", o: "5.2 box-sizing & de universele reset" },

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
  { v: "Wat is margin collapsing?", a: "Wanneer een ondermarge en een bovenmarge van opeenvolgende block-elementen elkaar raken, tellen ze niet op, maar smelten ze samen tot de grootste van de twee.\n\nh2 { margin-bottom: 30px; }\np { margin-top: 20px; }\n/* ruimte ertussen: 30px, niet 50px */", o: "6.3 Margin collapsing" },
  { v: "h2 { margin-bottom: 30px; } en p { margin-top: 20px; }. Hoeveel ruimte is er tussen de h2 en de p eronder?", a: "30px (de grootste van de twee), niet 50px.\n\nh2 { margin-bottom: 30px; }\np { margin-top: 20px; }", o: "6.3 Margin collapsing" },
  { v: "Geldt margin collapsing voor horizontale of verticale marges?", a: "Voor verticale marges (boven en onder) van block-elementen.\n\np {\n  margin-top: 20px;      /* kan samensmelten */\n  margin-bottom: 20px;   /* kan samensmelten */\n}", o: "6.3 Margin collapsing" },
  { v: "Twee paragrafen met margin: 20px in een blauwe parent. Waarom zit de bovenste marge niet binnen de blauwe parent?", a: "Margin collapsing: de bovenmarge van het eerste kind smelt samen met de bovenmarge van de parent en steekt erbuiten.\n\n.parent { background-color: #2563eb; }\n.parent p { margin: 20px; }", o: "6.3 Margin collapsing", img: "afbeeldingen/WEBles4_boxmodel/we4_margin_collapse.png" },
  { v: "Hier zit de marge wél binnen de blauwe parent. Wat werd er toegevoegd aan de parent?", a: "padding (bv. padding: 1px;). Daardoor kan de marge van het kind niet meer samensmelten met die van de parent.", o: "6.3 Margin collapsing", img: "afbeeldingen/WEBles4_boxmodel/we4_margin_padding.png" },
  { v: "Hoe voorkom je dat de marge van het eerste kind buiten de parent steekt?", a: "Geef de parent padding, bv. .parent { padding: 1px; }.", o: "6.3 Margin collapsing" },

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
