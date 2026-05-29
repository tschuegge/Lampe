import { Component, effect, input, output, signal } from '@angular/core';
import { ColoredCircle } from '@tschuegge/angular-coding-resources';

/**
 * Komplette Lösung der Lampe
 */
@Component({
  selector: 'app-lampe-komplett',
  imports: [ColoredCircle],
  templateUrl: './lampe-komplett.html'
})
export class LampeKomplett {

  /**
   * Gibt an, ob die Lampe defekt ist (private Instanzvariable zum Speichern des Status ob die Lampe defekt ist)
   */
  private defekt = false;

  /**
   * Gibt an, ob die Lampe brennen sollte (von aussen gesteuert)
   */
  lampeBrennt = input(false);

  /**
   * Event welches gefeuert wird, wenn die Lampe kaputt ging.
   * Der EventEmitter transportiert ein Objekt des Typs "LampeKomplett", damit im Event eine Referenz auf die
   * kaputte Lampe mitgegeben werden kann
   */
  gingDefekt = output<LampeKomplett>();

  /**
   * Eigenschaft die angibt in welcher Farbe die Lampe leuchten soll
   */
  lampenFarbe = input('yellow');

  /**
   * Eigenschaft, welche nur von der View gelesen werden kann (protected), welche Farbe die Lampe gerade hat.
   */
  protected kreisFarbe = signal('black');

  /**
   * Konstruktor, wird ausgeführt, wenn die Component erstellt wird
   */
  constructor() {

    // Ein Effect wird jedesmal ausgeführt, wenn sich ein Wert in einem Signal ändert.
    // Effects werden im Konstruktor registriert
    effect(() => {

      if (!this.defekt && this.lampeBrennt()) { // Prüfung die Lampe nicht defekt ist und brennen sollte

        // Lampe sollte brennen, nun muss mittels Zufall bestimmt werden ob sie kaputt ging.
        const zufallszahl = Math.ceil(Math.random() * 100); // Zufallszahl von 1 - 100 generieren
        if (zufallszahl <= 5) { // Wenn zufällig eine Zahl zwischen 1 und 5 generiert wurde (5% Wahrscheinlichkeit)...

          // ... dann geht die Lampe kaputt
          this.defekt = true; // Lampe auf defekt schalten
          this.gingDefekt.emit(this); // "gingDefekt"-Event feuern und Referenz auf die eigene Lampe mitgeben (da diese defekt ist)
          this.kreisFarbe.set('black'); // Lampe brennt nicht, da defekt (schwarze Farbe wird gesetzt)

        } else { // wenn die Lampe nicht kaputt ging...
          this.kreisFarbe.set(this.lampenFarbe()); // ...dann brennt sie (von aussen eingestellte Farbe wird gesetzt)
        }

      } else { // Lampe ist ausgeschaltet
        this.kreisFarbe.set('black'); // Lampe brennt nicht, da ausgeschaltet (schwarze Farbe wird gesetzt)
      }

    });
  }

  /**
   * Repariert die Lampe
   */
  reparieren(): void {
    this.defekt = false;
  }

}
