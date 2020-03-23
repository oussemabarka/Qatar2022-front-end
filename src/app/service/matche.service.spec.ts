import { TestBed } from '@angular/core/testing';

import { MatcheService } from './matche.service';

describe('MatcheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatcheService = TestBed.get(MatcheService);
    expect(service).toBeTruthy();
  });
});
