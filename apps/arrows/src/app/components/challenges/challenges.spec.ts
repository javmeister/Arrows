import { TestBed } from '@angular/core/testing';
import { Challenges } from './challenges';

describe('Challenges', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Challenges],
    }).compileComponents();
  });
});
