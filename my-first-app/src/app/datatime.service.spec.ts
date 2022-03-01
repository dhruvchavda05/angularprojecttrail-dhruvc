import { TestBed } from '@angular/core/testing';

import { DatatimeService } from './datatime.service';

describe('DatatimeService', () => {
  let service: DatatimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
