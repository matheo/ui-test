import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotesComponent } from './homepage.barrel';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [VotesComponent],
  imports: [CommonModule, HomepageRoutingModule]
})
export class HomepageModule {}
