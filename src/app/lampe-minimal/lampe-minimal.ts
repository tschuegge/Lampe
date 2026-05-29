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
    let lampeBrenntLokal = this.lampeBrennt(); // Status der Lampe wird ausgelesen
    lampeBrenntLokal = !lampeBrenntLokal; // Status wird "umgedreht", false wird zu true und umgekehrt

    if (lampeBrenntLokal) { // Wenn die Lampe brennt...
      this.kreisFarbe.set('yellow'); // ... dann soll der Kreis gelb sein
    } else {
      this.kreisFarbe.set('black'); // ... sonst soll der Kreis schwarz sein
    }

    this.lampeBrennt.set(lampeBrenntLokal); // Wert zurück ins Signal schreiben
  }

}
