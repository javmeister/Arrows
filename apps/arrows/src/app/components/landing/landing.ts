import { Component, inject } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'arrows-landing',
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly gameState = inject(GameStateService);
}
