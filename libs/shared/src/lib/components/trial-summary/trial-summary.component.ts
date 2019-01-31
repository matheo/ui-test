import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TrialItem } from '../../model';

@Component({
  selector: 'zemoga-trial-summary',
  templateUrl: './trial-summary.component.html',
  styleUrls: ['./trial-summary.component.scss']
})
export class TrialSummaryComponent implements OnInit {
  @Input() trial: TrialItem;

  selected: 'pro' | 'con';

  @HostBinding('style.background-image')
  background: string;

  constructor() {}

  ngOnInit() {
    this.background = `url('./assets/trials/${this.trial.image}')`;
  }

  doVote() {
    if (this.selected === 'pro') {
      this.trial.votes = {
        voted: true,
        pro: this.trial.votes.pro + 1,
        con: this.trial.votes.con
      };
    } else {
      this.trial.votes = {
        voted: true,
        pro: this.trial.votes.pro,
        con: this.trial.votes.con + 1
      };
    }
    this.selected = undefined;
  }
}
