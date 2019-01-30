import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { featured } from './trials.featured';
import { list } from './trials.list';

@Injectable({
  providedIn: 'root'
})
export class TrialsService {
  constructor() {}

  getFeatured() {
    return of(featured);
  }

  getTrials() {
    return of(list);
  }
}
