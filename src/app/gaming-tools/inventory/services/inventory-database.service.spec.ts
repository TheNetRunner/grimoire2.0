import { TestBed } from '@angular/core/testing';

import { InventoryDatabaseService } from './inventory-database.service';

describe('InventoryDatabaseService', () => {
  let service: InventoryDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
