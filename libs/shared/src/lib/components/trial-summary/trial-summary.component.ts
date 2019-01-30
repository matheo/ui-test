import { Component, OnInit, Input } from '@angular/core';
import { Trial } from '../../model';

@Component({
  selector: 'zemoga-trial-summary',
  templateUrl: './trial-summary.component.html',
  styleUrls: ['./trial-summary.component.scss']
})
export class TrialSummaryComponent implements OnInit {
  @Input() trial: Trial;

  constructor() {}

  ngOnInit() {}
}
