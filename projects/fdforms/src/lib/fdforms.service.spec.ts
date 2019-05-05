import { TestBed } from '@angular/core/testing';

import { FdformsService } from './fdforms.service';

describe('FdformsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdformsService = TestBed.get(FdformsService);
    expect(service).toBeTruthy();
  });
});
