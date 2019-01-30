import { Component, OnInit } from '@angular/core';
import { TrialsService } from '@zemoga/shared';

@Component({
  selector: 'zemoga-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  constructor(public trials: TrialsService) {}

  ngOnInit() {}
}
