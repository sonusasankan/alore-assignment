import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSegmentFormComponent } from './add-segment-form.component';

describe('AddSegmentFormComponent', () => {
  let component: AddSegmentFormComponent;
  let fixture: ComponentFixture<AddSegmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSegmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSegmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
