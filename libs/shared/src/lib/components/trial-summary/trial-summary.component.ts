import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Trial } from '../../model';

@Component({
  selector: 'zemoga-trial-summary',
  templateUrl: './trial-summary.component.html',
  styleUrls: ['./trial-summary.component.scss']
})
export class TrialSummaryComponent implements OnInit {
  @Input() trial: Trial;

  @HostBinding('style.background-image')
  background: string;

  constructor() {}

  ngOnInit() {
    this.background = `url('./assets/trials/${this.trial.image}')`;
  }
}
