import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TrialFeaturedComponent, TrialSummaryComponent } from './components';
import { TrialsService } from './services';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  exports: [FlexLayoutModule, TrialSummaryComponent, TrialFeaturedComponent],
  declarations: [TrialSummaryComponent, TrialFeaturedComponent]
})
export class SharedModule {
  static forRoot(): Array<ModuleWithProviders> {
    return [
      {
        ngModule: SharedModule,
        providers: [TrialsService]
      }
    ];
  }
}
