import { TestBed } from '@angular/core/testing';

import { MetaTypeService } from './meta-type.service';

describe('MetaTypeService', () => {
  let service: MetaTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
