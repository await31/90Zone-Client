import { TestBed } from '@angular/core/testing';

import { TransfermarktApiService } from './transfermarkt-api.service';

describe('TransfermarktApiService', () => {
  let service: TransfermarktApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfermarktApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
