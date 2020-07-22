import { TestBed } from '@angular/core/testing';

import { HoursAndDayService } from './hours-and-day.service';

describe('HoursAndDayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoursAndDayService = TestBed.get(HoursAndDayService);
    expect(service).toBeTruthy();
  });
});
