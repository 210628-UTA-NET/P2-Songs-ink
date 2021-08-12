import { TestBed } from '@angular/core/testing';

import { ChooseCategoryService } from './choose-category.service';

describe('ChooseCategoryService', () => {
  let service: ChooseCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
