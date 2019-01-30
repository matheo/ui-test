import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'zemoga-vote-icon',
  templateUrl: './vote-icon.component.html',
  styleUrls: ['./vote-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteIconComponent implements OnChanges {
  @Input()
  value: number;

  @HostBinding('style.background')
  background: string;

  constructor() {}

  ngOnChanges() {
    if (this.value >= 0) {
      this.background = `rgba(28, 187, 180, 1)`;
    } else {
      this.background = `rgba(255, 173, 29, 1)`;
    }
  }
}
