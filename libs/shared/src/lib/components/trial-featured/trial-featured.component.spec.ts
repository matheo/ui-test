import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialFeaturedComponent } from './trial-featured.component';

describe('TrialFeaturedComponent', () => {
  let component: TrialFeaturedComponent;
  let fixture: ComponentFixture<TrialFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
