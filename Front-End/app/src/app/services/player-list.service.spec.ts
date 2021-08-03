import { TestBed } from '@angular/core/testing';

import { PlayerListService } from './player-list.service';

describe('PlayerListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerListService = TestBed.get(PlayerListService);
    expect(service).toBeTruthy();
  });
});
