import { Routes } from '@angular/router';
import { Exo1 } from './exo1/exo1';
import { Exo2 } from './exo2/exo2';
import { Exo3 } from './exo3/exo3';

export const exoRoutes: Routes = [
    { path: 'exo1', component: Exo1},
    { path: 'exo2', component: Exo2},
    { path: 'exo3', component: Exo3},
];