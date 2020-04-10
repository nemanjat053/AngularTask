import { TestBed } from '@angular/core/testing';

import { PaketServiceService } from './paket-service.service';

describe('PaketServiceService', () => {
  let service: PaketServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaketServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
