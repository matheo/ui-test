import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@zemoga/shared';

import { VotesComponent } from './homepage.barrel';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [VotesComponent],
  imports: [CommonModule, SharedModule, HomepageRoutingModule]
})
export class HomepageModule {}
