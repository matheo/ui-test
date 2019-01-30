import { Component, Input, OnChanges } from '@angular/core';
import { TrialVotes } from '../../model';

@Component({
  selector: 'zemoga-vote-results',
  templateUrl: './vote-results.component.html',
  styleUrls: ['./vote-results.component.scss']
})
export class VoteResultsComponent implements OnChanges {
  @Input()
  votes: TrialVotes;

  pro: number;
  con: number;

  constructor() {}

  ngOnChanges() {
    if (this.votes) {
      const total = this.votes.pro + this.votes.con;
      this.pro = Math.floor((this.votes.pro * 100) / total);
      this.con = 100 - this.pro;
    }
  }
}
