# Übung Lampe

Lösung zu den Übungen Lampe und Ampel, einmal mit den minimalen Anforderungen und einmal mit allen optionalen Anforderungen.

[Software starten](https://tschuegge.github.io/Lampe-Ampel/dist/)

## Aufgabenstellung "Lampe"
Programmiere eine Component welche eine Lampe darstellt.

### Anforderungen
- Die Component muss einen Kreis als Lampe darstellen.
- Die Lampe muss angezündet und abgelöscht werden können.
- Die Component muss eine Schaltfläche besitzen mit der die Lampe angezündet und abgelöscht werden kann.

### Optionale Anforderungen ("Lampenfassung")
- Die Lampe besitzt keine Schaltfläche zum ein oder ausschalten
- Der Status der Lampe kann über ein Property Binding von einer übergeordneten Component (Lampenfassung) mit einem Lichtschalter gesetzt werden.
- Die Farbe (mind. die vier Grundfarben) der Lampe kann über ein Property Binding von einer übergeordneten Component gesetzt werden.
- Die Lampe geht mit einer Wahrscheinlichkeit von 5% beim Einschalten kaputt.
- Über ein Event Binding wird eine übergeordnete Component informiert, wenn die Lampe kaputt ging.
- Beim ausgelösten Event wird eine Referenz auf die defekte Lampe mitgegeben.
- Über eine öffentliche Methode kann die Lampe wieder repariert werden.

## Aufgabenstellung "Ampel"
- Die bereits programmierte Component „Lampe“ muss wiederverwendet werden und übernimmt die Visualisierung der einzelnen Lampen.
- alle optionalen Anforderungen sind notwendig, ausser dass die Lampe zufällig einen Defekt aufweist
- die Lampen werden ohne Schaltﬂächen und in der korrekten Farbe dargestellt
- die Klasse „Ampel“ muss eine öffentliche Methode mit dem Namen „tick“ besitzen
- jedesmal wenn diese Methode über eine Schaltﬂäche aufgerufen wird, schaltet die Ampel einen Zustand weiter
- der aktuelle Zustand muss graﬁsch angezeigt werden

### Hilfestellung
Die Lampe kann mit der Component `acr-colored-circle` aus den Angular Coding Resources erzeugt werden: https://github.com/tschuegge/angular-coding-resources