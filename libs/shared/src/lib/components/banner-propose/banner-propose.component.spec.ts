import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProposeComponent } from './banner-propose.component';

describe('BannerProposeComponent', () => {
  let component: BannerProposeComponent;
  let fixture: ComponentFixture<BannerProposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerProposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerProposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
