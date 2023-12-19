import { TestBed } from '@angular/core/testing';

import { NewDataStoreService } from './new-data-store.service';

describe('NewDataStoreService', () => {
  let service: NewDataStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewDataStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
