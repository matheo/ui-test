import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './homepage/homepage.module#HomepageModule'
  }
];
