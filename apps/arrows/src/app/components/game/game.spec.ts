import { TestBed } from '@angular/core/testing';
import { Game } from './game';

describe('Game', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Game],
    }).compileComponents();
  });
});
