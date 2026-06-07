import { Routes } from '@angular/router';
import { LampeMinimal } from './lampe-minimal/lampe-minimal';
import { Lampenfassung } from './lampenfassung/lampenfassung';
import { AmpelMinimal } from './ampel-minimal/ampel-minimal';

export const routes: Routes = [
  { path: 'lampe/minimal', component: LampeMinimal },
  { path: 'lampe/komplett', component: Lampenfassung },
  { path: 'ampel/minimal', component: AmpelMinimal },
  { path: '', pathMatch: 'full', redirectTo: '/lampe/minimal' },
  { path: '**', redirectTo: '/' }
];
