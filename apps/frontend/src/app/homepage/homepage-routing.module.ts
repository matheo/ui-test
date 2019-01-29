import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotesComponent } from './homepage.barrel';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule {}
