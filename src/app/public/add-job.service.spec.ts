import { TestBed } from '@angular/core/testing';

import { AddJobService } from './add-job.service';

describe('AddJobService', () => {
  let service: AddJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
