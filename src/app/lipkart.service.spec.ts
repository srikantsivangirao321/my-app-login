import { TestBed } from '@angular/core/testing';

import { LipkartService } from './lipkart.service';

describe('LipkartService', () => {
  let service: LipkartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LipkartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
