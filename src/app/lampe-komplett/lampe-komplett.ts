import { Component, computed, effect, input, Input, output, signal } from '@angular/core';
import { ColoredCircle } from '@tschuegge/angular-coding-resources';

@Component({
  selector: 'app-lampe-komplett',
  imports: [ColoredCircle],
  templateUrl: './lampe-komplett.html'
})
export class LampeKomplett {

  /**
   * Gibt an, ob die Lampe defekt ist (private Instanzvariable zum Speichern des Werts)
   */
  private defekt = false;

  /**
   * Gibt an, ob die Lampe brennen sollte (von aussen gesteuert)
   */
  lampeBrennt = input(false);

  /**
   * Effektiver Wert ob die Lampe brennt
   */
  lampeBrenntReal = computed(() => {

    if (this.defekt) { // Auswerten ob Lampe defekt ist...
      return false; // ...wenn defekt, dann brennt sie nicht.
    } else { // ...wenn sie nicht defekt ist...
      if (this.lampeBrennt()) { // Auswerten ob Lampe brennen sollte...

        // Lampe sollte brennen, nun muss mittels Zufall bestimmt werden ob sie kaputt ging.
        const zufallszahl = Math.ceil(Math.random() * 100); // Zufallszahl von 1 - 100 generieren
        if (zufallszahl <= 5) { // wenn die Lampe kaputt ging, mit 5% Wahrscheinlichkeit
          this.defekt = true; // Lampe auf defekt schalten
          this.gingDefekt.emit(this); // "gingDefekt"-Event feuern und Referenz auf die eigene Lampe mitgeben (da diese defekt ist)
          return false; // Lampe brennt nicht, da defekt
        } else { // wenn die Lampe nicht kaputt ging...
          return true; // ...dann brennt si
        }
      } else { // ...wenn die Kamoe
        return false;
      }

    }
  });

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
   * Repariert die Lampe
   */
  reparieren(): void {
    this.defekt = false;
  }

}
