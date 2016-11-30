# webapplications
Nur ein paar Spielprojekte zum Ausprobieren
Eine README ist eine reine Textdatei, die Informationen zu unserem Projekt enthält


Benutzung des Vokabel-Converters:


- Erstellen einer Datei mit Endung .properties im zugehörigen Sprach-Verzeichnis
- Die Datei ist einfacher zu schreiben als die JSON, nämlich Wort Deutsch:Wort Fremdsprache. Also z.B. Freund:amicus
- Jedes Wort kommt in eine neue Zeile
- Nach erfolgter Eingabe Speichern der Datei
- Öffnen eines Terminals
- Wechseln in das Verzeichnis mit den webapplications
- Aufrufen des Konverters durch Eintippen des Befehls
  node vokabel-werkzeug.js <sprache>/NameDerPropertiesOhneEndung

  Beispiel

  node vokabel_werkzeug.js swahili/Swahili.29.11.2016

  Als Ergebnis wird die .json-Datei generiert und kann dann sofort eingebunden werden
