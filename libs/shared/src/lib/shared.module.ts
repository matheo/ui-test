import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  TrialFeaturedComponent,
  TrialSummaryComponent,
  VoteResultsComponent
} from './components';
import { TrialsService } from './services';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  exports: [
    FlexLayoutModule,
    TrialSummaryComponent,
    TrialFeaturedComponent,
    VoteResultsComponent
  ],
  declarations: [
    TrialSummaryComponent,
    TrialFeaturedComponent,
    VoteResultsComponent
  ]
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
