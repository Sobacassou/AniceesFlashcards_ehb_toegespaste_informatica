// Desktop OS – Deel I: Linux – Introductie (slides)
// v = vraag, a = antwoord, o = onderwerp, uitleg = extra uitleg, img/imgAntwoord = afbeelding (map afbeeldingen/)
// De structuur onderaan bepaalt het overzicht rechts.

const kaarten_DOS_linux_intro = [
  // ===== POSIX en de Linux-familie =====
  { v: "Wat is POSIX?", a: "Een standaard gebaseerd op Unix, met verschillende aftakkingen, waaronder Linux.", o: "POSIX en de Linux-familie",
    uitleg: "Besturingssystemen die op Unix lijken heten 'Unix-like': Linux, macOS, de BSD's, … Daarom werken de meeste Linux-commando's ook in de terminal van een Mac." },
  { v: "🖼️ Wat toont deze figuur?", a: "De stamboom van de Unix-like besturingssystemen (Unix en zijn aftakkingen) door de jaren heen: de BSD-familie (FreeBSD, NetBSD, OpenBSD, …), macOS (via NextStep en Darwin), GNU/Linux, Minix, en de commerciële System III & V-familie (Solaris, HP-UX, AIX, …).", o: "POSIX en de Linux-familie", img: "afbeeldingen/DesktopOS_linux_intro/lx_unixlike.png",
    uitleg: "Alles begint bij Research UNIX van Bell Labs (Ken Thompson, Dennis Ritchie). Linux (Linus Torvalds) is niet rechtstreeks van Unix afgeleid, maar werkt wel volgens dezelfde principes (POSIX). macOS komt uit de BSD-tak. Bron: Wikipedia 'Unix-like'. Je hoeft de jaartallen niet te kennen." },
  { v: "Waar wordt Linux gebruikt? Geef 3 contexten.", a: "Mobile: Android. Netwerkdevices: routers, switches, … Servers: webservers (LAMP), …", o: "POSIX en de Linux-familie",
    uitleg: "Linux is zeer populair, maar niet het bekendste besturingssysteem op de desktop: daar is Windows de grootste. LAMP = Linux, Apache (webserver), MySQL (database) en PHP: een klassieke combinatie voor webservers." },
  { v: "Wat is Linux eigenlijk (strikt genomen)?", a: "Linux is enkel de kernel.", o: "POSIX en de Linux-familie",
    uitleg: "De kernel is het hart van het besturingssysteem: hij praat met de hardware en verdeelt geheugen en processortijd over de programma's. Alles errond (shell, programma's, grafische omgeving) komt uit andere pakketten." },
  { v: "Wat is het verschil tussen een GUI en een CLI? Geef het voorbeeld uit de cursus.", a: "GUI = grafische gebruikersomgeving met vensters en muis (bv. X Windows). CLI = command line interface: je typt commando's (bv. Bash).", o: "POSIX en de Linux-familie",
    uitleg: "In de werkcolleges werken we enkel in de CLI: 'achter de vensters'." },
  { v: "Is Linux de gekendste desktopomgeving?", a: "Nee. Linux is zeer populair in veel verschillende contexten, maar niet in de gekendste: de desktopomgevingen (daar is Windows het gekendst).", o: "POSIX en de Linux-familie",
    uitleg: "Op desktops is Linux een kleine speler; op smartphones, netwerktoestellen en servers is het wel dominant." },
  { v: "Is macOS ook een Unix-achtig systeem volgens de tijdlijn?", a: "Ja: via de BSD-tak (NextStep → Darwin → macOS).", o: "POSIX en de Linux-familie",
    uitleg: "Daarom werken veel Linux-commando's ook in de Mac-terminal." },
  { v: "Welke soorten extra pakketten kan een distributie bevatten (voorbeelden van de slide)?", a: "– Services of desktopapplicaties\n– GUI: X(Windows)\n– CLI: Bash\n– …", o: "POSIX en de Linux-familie",
    uitleg: "Services = programma's die op de achtergrond draaien (bv. een webserver). X (X Window System) is de basis van de grafische omgeving in Linux, niet te verwarren met Microsoft Windows. Bash is de commandoshell." },
  // ===== Bash en CLI =====
  { v: "Waarom is CLI-only populair in serveromgevingen? Geef 5 redenen.", a: "Stabieler, minder resources, minder updates (dus minder downtime), makkelijker te scripten, veiliger.", o: "Bash en CLI",
    uitleg: "Zonder grafische omgeving draait er minder software: dat verbruikt minder geheugen, er zijn minder updates nodig (en dus minder herstarts) en er is een kleinere 'attack surface' (minder plaatsen waar een aanvaller binnen kan)." },
  { v: "Wat is de algemene vorm van een Bash-commando?", a: "commando -optie parameter (bv. ls -l /home/student)", o: "Bash en CLI",
    uitleg: "De parameter wordt ook argument genoemd. Opties zeggen HOE het commando werkt, het argument zegt WAAROP het werkt." },
  { v: "Waar is CLI-only populair?", a: "In een serveromgeving.", o: "Bash en CLI",
    uitleg: "CLI-only = enkel een commandoregel, geen grafische omgeving." },
  { v: "Wat betekent 'minder resources'?", a: "Een CLI-only systeem gebruikt minder systeembronnen.", o: "Bash en CLI",
    uitleg: "Resources = geheugen (RAM), processorkracht en schijfruimte. Een grafische omgeving neemt veel geheugen in." },
  { v: "Waarom leiden minder updates tot minder downtime?", a: "Minder software betekent minder updates, en dus minder momenten waarop de server (opnieuw) moet opstarten of niet beschikbaar is.", o: "Bash en CLI",
    uitleg: "Downtime = de tijd dat een server niet werkt of niet bereikbaar is." },
  { v: "Waarom is een CLI makkelijker te scripten?", a: "Commando's zijn tekst die je in een script kan zetten en automatisch laten uitvoeren.", o: "Bash en CLI",
    uitleg: "Een script is een tekstbestand met commando's die na elkaar worden uitgevoerd, bv. om 100 gebruikers aan te maken." },
  // ===== Hulp in Linux =====
  { v: "Welke 4 manieren om hulp te krijgen in Linux noemt de cursus?", a: "man (manual pages), info, whatis en de optie --help.", o: "Hulp in Linux",
    uitleg: "man = uitgebreide handleiding van commando's en concepten; info = ook algemene concepten; whatis = een beknopte uitleg (1 regel); --help = snel overzicht van de syntax en de voornaamste opties." },
  { v: "Wat is het verschil tussen man en whatis?", a: "man toont de volledige handleiding (manual page) van een commando of concept. whatis geeft een veel beknoptere uitleg, meestal in 1 regel.", o: "Hulp in Linux",
    uitleg: "Bv. whatis ls geeft: 'ls (1) - list directory contents'. Handig om snel te weten wat een commando doet; voor de opties heb je man nodig." },
  { v: "Waarvoor dient info?", a: "Ook een hulpbron in Linux, die naast commando's ook algemene concepten uitlegt.", o: "Hulp in Linux",
    uitleg: "info ls toont de documentatie van ls, vaak met meer uitleg en voorbeelden dan de man-page." },
];

kaarten_DOS_linux_intro.structuur = [
  { o: "POSIX en de Linux-familie", slide: "5–7" },
  { o: "Bash en CLI", slide: "8" },
  { o: "Hulp in Linux", slide: "9" },
];
