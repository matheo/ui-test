import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCountedComponent } from './banner-counted.component';

describe('BannerCountedComponent', () => {
  let component: BannerCountedComponent;
  let fixture: ComponentFixture<BannerCountedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCountedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCountedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
