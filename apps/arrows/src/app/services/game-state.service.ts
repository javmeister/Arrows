import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  readonly highestLevelCompleted = signal<number>(0);
}
