import { Routes } from '@angular/router';

export const routes: Routes = [
    { path : '',
        loadChildren : () => import('./features/exo.routes').then((mod) => mod.exoRoutes)
    }
];
