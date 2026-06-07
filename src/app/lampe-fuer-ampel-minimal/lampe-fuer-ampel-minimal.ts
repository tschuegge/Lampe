import { Component, computed, input } from '@angular/core';
import { ColoredCircle } from '@tschuegge/angular-coding-resources';

@Component({
  selector: 'app-lampe-fuer-ampel-minimal',
  imports: [ColoredCircle],
  templateUrl: './lampe-fuer-ampel-minimal.html'
})
export class LampeFuerAmpelMinimal {

  /**
   * Gibt an, ob die Lampe brennen sollte (von aussen gesteuert)
   */
  lampeBrennt = input(false);

  /**
   * Eigenschaft die angibt in welcher Farbe die Lampe leuchten soll
   */
  lampenFarbe = input('yellow');


  /**
   * Gibt zurück welche Frage der Kreis gerade hat (berechnetes Signal)
   * Wenn die Lampe brennt wird die definierte Lampenfarbe zurückgegeben, sonst wird schwarz zurückgegeben
   */
  kreisFarbe = computed(() => {
    if (this.lampeBrennt()) {
      return this.lampenFarbe();
    } else {
      return "black";
    }
  });

}
