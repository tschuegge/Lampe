import { Routes } from '@angular/router';
import { LampeMinimal } from './lampe-minimal/lampe-minimal';
import { Lampenfassung } from './lampenfassung/lampenfassung';

export const routes: Routes = [
  { path: 'minimal', component: LampeMinimal },
  { path: 'komplett', component: Lampenfassung },
  { path: '', pathMatch: 'full', redirectTo: '/minimal' },
  { path: '**', redirectTo: '/' }
];
