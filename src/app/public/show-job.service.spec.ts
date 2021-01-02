import { TestBed } from '@angular/core/testing';

import { ShowJobService } from './show-job.service';

describe('ShowJobService', () => {
  let service: ShowJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
