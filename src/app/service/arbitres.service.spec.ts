import { TestBed } from '@angular/core/testing';

import { ArbitresService } from './arbitres.service';

describe('ArbitresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArbitresService = TestBed.get(ArbitresService);
    expect(service).toBeTruthy();
  });
});
