import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechanicsComponent } from './mechanics.component';
import { MechanicsRoutingModule } from './mechanics-routing.module';

@NgModule({
  declarations: [MechanicsComponent],
  imports: [CommonModule, MechanicsRoutingModule]
})
export class MechanicsModule {}
