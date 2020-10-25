import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootrerComponent } from './footrer.component';

describe('FootrerComponent', () => {
  let component: FootrerComponent;
  let fixture: ComponentFixture<FootrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
