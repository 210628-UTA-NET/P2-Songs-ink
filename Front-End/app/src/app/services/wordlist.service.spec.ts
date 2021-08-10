import { TestBed } from '@angular/core/testing';

import { WordlistService } from './wordlist.service';

describe('WordlistService', () => {
  let service: WordlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
