import { Component, signal, viewChild } from '@angular/core';
import { LampeKomplett } from '../lampe-komplett/lampe-komplett';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-lampenfassung',
  imports: [LampeKomplett, FormField],
  templateUrl: './lampenfassung.html'
})
export class Lampenfassung {

  /**
   * Farbe der Lampe direkt in einem Formular, welches aus einem Textfeld besteht
   */
  lampenFarbe = form(signal('orange'));

  /**
   * Status der Lampe, ob sie brennt
   */
  lampeBrennt = signal(true);

  /**
   * Lichtschalter
   */
  drueckeLichtschalter() {
    this.lampeBrennt.update(value => !value);
  }

  /**
   * Signal ob die Lampe einen defekt gemeldet hat
   */
  lampeDefekt = signal(false);

  /**
   * Lampe meldet defekt als Event
   */
  lampeMeldetDefekt() {
    this.lampeDefekt.set(true);
  }

  /**
   * Referenz auf den Controller der Component "Lampe"
   */
  private lampeRef = viewChild(LampeKomplett);

  /**
   * Lampe wechseln (reparieren)
   */
  lampeWechseln() {
    this.lampeRef()?.reparieren();
    this.lampeDefekt.set(false);
  }
}
