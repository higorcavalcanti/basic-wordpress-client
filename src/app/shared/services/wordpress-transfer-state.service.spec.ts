import { TestBed } from '@angular/core/testing';

import { WordpressTransferStateService } from './wordpress-transfer-state.service';

describe('WordpressTransferStateService', () => {
  let service: WordpressTransferStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordpressTransferStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
