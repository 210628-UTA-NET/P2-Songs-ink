import { TestBed } from '@angular/core/testing';

import { ChooseWordService } from './choose-word.service';

describe('ChooseWordService', () => {
  let service: ChooseWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
