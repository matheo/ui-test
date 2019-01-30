import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TrialFeaturedComponent, TrialSummaryComponent } from './components';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  exports: [FlexLayoutModule, TrialSummaryComponent, TrialFeaturedComponent],
  declarations: [TrialSummaryComponent, TrialFeaturedComponent]
})
export class SharedModule {}
