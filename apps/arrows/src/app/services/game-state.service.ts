import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameStateService  {
  public readonly currentLevel = signal<number>(1);
  public readonly highestLevelCompleted = signal<number>(0);



}
