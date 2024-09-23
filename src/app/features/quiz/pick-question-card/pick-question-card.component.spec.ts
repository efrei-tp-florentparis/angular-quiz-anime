import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickQuestionCardComponent } from './pick-question-card.component';

describe('PickQuestionCardComponent', () => {
  let component: PickQuestionCardComponent;
  let fixture: ComponentFixture<PickQuestionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickQuestionCardComponent]
    });
    fixture = TestBed.createComponent(PickQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
