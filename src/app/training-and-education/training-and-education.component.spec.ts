import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAndEducationComponent } from './training-and-education.component';

describe('TrainingAndEducationComponent', () => {
  let component: TrainingAndEducationComponent;
  let fixture: ComponentFixture<TrainingAndEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingAndEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingAndEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
