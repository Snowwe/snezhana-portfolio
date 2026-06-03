import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameStateService } from '@features/remote-job-hunter/services/game-state.service';

@Component({
  selector: 'app-job-board',
  imports: [CommonModule],
  templateUrl: './job-board.html',
  styleUrl: './job-board.scss',
})
export class JobBoard {
  private readonly gameStateService = inject(GameStateService);

  readonly jobs = this.gameStateService.jobs;
}
