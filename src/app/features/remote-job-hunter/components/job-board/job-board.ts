import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameStateService } from '@features/remote-job-hunter/services/game-state.service';
import { AnalyticsService } from '@core/services/analytics';
import { LanguageService } from '@core/services/language';
import { JobOffer } from '@features/remote-job-hunter/models/job-offer.model';
import { JobSwitchModal } from '@features/remote-job-hunter/components/job-switch-modal/job-switch-modal';
import { JOB_BOARD_CONTENT } from '@core/constants/content/job-board-content.constants';

@Component({
  selector: 'app-job-board',
  imports: [CommonModule, JobSwitchModal],
  templateUrl: './job-board.html',
  styleUrl: './job-board.scss',
})
export class JobBoard {
  private readonly gameStateService = inject(GameStateService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly languageService = inject(LanguageService);

  readonly content = computed(() => JOB_BOARD_CONTENT[this.languageService.language()]);
  readonly jobs = this.gameStateService.jobs;
  readonly player = this.gameStateService.player;
  readonly jobToSwitch = signal<JobOffer | null>(null);

  hasSkill(skill: 'angular' | 'typescript' | 'rxjs' | 'english', value: number): boolean {
    return this.gameStateService.hasSkillForRequirement(skill, value);
  }

  isCurrentJob(jobId: string): boolean {
    return this.player().currentJobId === jobId;
  }

  applyForJob(job: JobOffer): void {
    if (this.player().currentJobId && this.player().currentJobId !== job.id) {
      this.jobToSwitch.set(job);
      return;
    }

    this.acceptJob(job);
  }

  confirmJobSwitch(): void {
    const job = this.jobToSwitch();

    if (!job) {
      return;
    }

    this.acceptJob(job);
    this.jobToSwitch.set(null);
  }

  cancelJobSwitch(): void {
    this.jobToSwitch.set(null);
  }

  private acceptJob(job: JobOffer): void {
    this.gameStateService.applyForJob(job);

    this.analyticsService.trackEvent('apply_job', {
      jobId: job.id,
      position: job.position,
      available: this.gameStateService.canApply(job),
    });
  }
}
