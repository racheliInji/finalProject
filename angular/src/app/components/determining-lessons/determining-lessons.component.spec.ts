import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminingLessonsComponent } from './determining-lessons.component';

describe('DeterminingLessonsComponent', () => {
  let component: DeterminingLessonsComponent;
  let fixture: ComponentFixture<DeterminingLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeterminingLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeterminingLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
