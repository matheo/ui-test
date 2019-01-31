import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'past-trials',
    loadChildren: './archive/archive.module#ArchiveModule'
  },
  {
    path: 'how-it-works',
    loadChildren: './mechanics/mechanics.module#MechanicsModule'
  },
  {
    path: '',
    loadChildren: './homepage/homepage.module#HomepageModule'
  }
];
