import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCalanderComponent } from './student-calander.component';

describe('StudentCalanderComponent', () => {
  let component: StudentCalanderComponent;
  let fixture: ComponentFixture<StudentCalanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCalanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
