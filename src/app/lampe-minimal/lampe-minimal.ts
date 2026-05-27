import { Component, signal } from '@angular/core';
import { ColoredCircle } from '@tschuegge/angular-coding-resources'

/**
 * Mögliche Minimallösung der Lampe (ohne Zusatzaufgaben)
 */
@Component({
  selector: 'app-lampe-minimal',
  imports: [ColoredCircle],
  templateUrl: './lampe-minimal.html'
})
export class LampeMinimal {

  /**
   * Eigenschaft die angibt ob die Lampe brennt
   */
  lampeBrennt = signal(false);

  /**
   * Eigenschaft die angibt welche Farbe der Kreis gerade hat
   */
  kreisFarbe = signal('black');

  /**
   * Methode die aufgerufen wird, wenn der Lichtschalter gedrückt wird
   */
  lichtschalterGedrueckt(): void {
    let lampeBrennt = !this.lampeBrennt(); // Status wird "umgedreht", false wird zu true und umgekehrt

    if (lampeBrennt) { // Wenn die Lampe brennt... (this.lampeBrennt == true)
      this.kreisFarbe.set('yellow'); // ... dann soll der Kreis gelb sein
    } else {
      this.kreisFarbe.set('black'); // ... sonst soll der Kreis schwarz sein
    }

    this.lampeBrennt.set(lampeBrennt); // Wert zurück ins Signal schreiben
  }

}
