import { TestBed } from '@angular/core/testing';
import { Leaderboard } from './leaderboard';

describe('Leaderboard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leaderboard],
    }).compileComponents();
  });
});
