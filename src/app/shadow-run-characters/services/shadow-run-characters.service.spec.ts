import { TestBed } from '@angular/core/testing';

import { ShadowRunCharactersService } from './shadow-run-characters.service';

describe('ShadowRunCharactersService', () => {
  let service: ShadowRunCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShadowRunCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
