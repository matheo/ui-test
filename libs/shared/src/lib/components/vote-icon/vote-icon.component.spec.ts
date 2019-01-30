import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteIconComponent } from './vote-icon.component';

describe('VoteIconComponent', () => {
  let component: VoteIconComponent;
  let fixture: ComponentFixture<VoteIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
