import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'playground',
    loadComponent: () => import('./playground.component').then((m) => m.PlaygroundComponent),
  },
];
