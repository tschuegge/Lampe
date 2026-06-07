import { Component, signal } from '@angular/core';
import { LampeFuerAmpelMinimal } from '../lampe-fuer-ampel-minimal/lampe-fuer-ampel-minimal';

@Component({
  selector: 'app-ampel-minimal',
  imports: [LampeFuerAmpelMinimal],
  templateUrl: './ampel-minimal.html'
})
export class AmpelMinimal {

  /**
   * Signal ob die Lampe "rot" brennt
   */
  lampeRotBrennt = signal(false);

  /**
   * Signal ob die Lampe "orange" brennt
   */
  lampeOrangeBrennt = signal(false);

  /**
   * Signal ob die Lampe "grün" brennt
   */
  lampeGruenBrennt = signal(false);


  /**
   * Aktueller State der Ampel
   * 1: rot
   * 2: grün kommt
   * 3: grün
   * 4: rot kommt
   */
  private state = 0;

  /**
   * Tick in dem der State weitergeschaltet wird
   */
  tick(): void {

    this.state++ // State um 1 erhöhen

    if (this.state == 1) {

      // State 1 (rot)
      this.lampeRotBrennt.set(true);
      this.lampeOrangeBrennt.set(false);
      this.lampeGruenBrennt.set(false);
    }

    else if (this.state == 2) {

      // State 2 (grün kommt)
      this.lampeRotBrennt.set(true);
      this.lampeOrangeBrennt.set(true);
      this.lampeGruenBrennt.set(false);
    }

    else if (this.state == 3) {

      // State 3 (grün)
      this.lampeRotBrennt.set(false);
      this.lampeOrangeBrennt.set(false);
      this.lampeGruenBrennt.set(true);
    }

    else if (this.state == 4) {

      // State 4 (rot kommt)
      this.lampeRotBrennt.set(false);
      this.lampeOrangeBrennt.set(true);
      this.lampeGruenBrennt.set(false);
      this.state = 0; // Zähler wieder auf 0 stellen, damit der Zylus von vorne beginnt
    }
  }

  /**
   * Angular Life Cycle Hook
   * Wir ausgeführt, nach dem die Component geladen und initialisiert wurde.
   */
  ngOnInit(): void {
    this.tick(); // Tick wird einmal ausgeführt, damit die Ampel auf State 1 (rot) steht
  }
}
