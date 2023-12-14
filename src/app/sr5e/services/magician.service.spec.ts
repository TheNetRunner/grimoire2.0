import { TestBed } from '@angular/core/testing';

import { MagicianService } from './magician.service';

describe('MagicianService', () => {
  let service: MagicianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
