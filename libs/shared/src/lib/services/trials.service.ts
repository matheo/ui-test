import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { list } from './trials.list';

@Injectable({
  providedIn: 'root'
})
export class TrialsService {
  constructor() {}

  getFeatured() {
    return of(list.filter(row => row.featured)[0]);
  }

  getTrials() {
    return of(list.filter(row => !row.featured));
  }
}
