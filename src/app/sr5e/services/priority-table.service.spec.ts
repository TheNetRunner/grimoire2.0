import { TestBed } from '@angular/core/testing';

import { PriorityTableService } from './priority-table.service';

describe('PriorityTableService', () => {
  let service: PriorityTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriorityTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
