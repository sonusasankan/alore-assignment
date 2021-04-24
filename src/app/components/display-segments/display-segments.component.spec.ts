import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySegmentsComponent } from './display-segments.component';

describe('DisplaySegmentsComponent', () => {
  let component: DisplaySegmentsComponent;
  let fixture: ComponentFixture<DisplaySegmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySegmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
