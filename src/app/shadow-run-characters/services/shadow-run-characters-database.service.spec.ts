import { TestBed } from '@angular/core/testing';

import { ShadowRunCharactersDatabaseService } from './shadow-run-characters-database.service';

describe('ShadowRunCharactersDatabaseService', () => {
  let service: ShadowRunCharactersDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShadowRunCharactersDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
