import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  TrialFeaturedComponent,
  TrialSummaryComponent,
  VoteIconComponent,
  VoteResultsComponent
} from './components';
import { TrialsService } from './services';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  exports: [
    FlexLayoutModule,
    TrialSummaryComponent,
    TrialFeaturedComponent,
    VoteResultsComponent,
    VoteIconComponent
  ],
  declarations: [
    TrialSummaryComponent,
    TrialFeaturedComponent,
    VoteResultsComponent,
    VoteIconComponent
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
