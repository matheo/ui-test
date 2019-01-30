import { Component, OnInit, HostBinding } from '@angular/core';
import { Trial } from '../../model';
import { TrialsService } from '../../services';

@Component({
  selector: 'zemoga-trial-featured',
  templateUrl: './trial-featured.component.html',
  styleUrls: ['./trial-featured.component.scss']
})
export class TrialFeaturedComponent implements OnInit {
  trial: Trial;

  @HostBinding('style.background-image')
  background: string;

  constructor(private trials: TrialsService) {}

  ngOnInit() {
    this.trials.getFeatured().subscribe(trial => {
      this.trial = trial;
      this.background = `url('./assets/trials/${trial.image}')`;
    });
  }
}
