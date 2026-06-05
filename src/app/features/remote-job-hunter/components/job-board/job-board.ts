import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameStateService } from '@features/remote-job-hunter/services/game-state.service';
import { AnalyticsService } from '@core/services/analytics';
import { LanguageService } from '@core/services/language';
import { JobOffer } from '@features/remote-job-hunter/models/job-offer.model';
import { JobSwitchModal } from '@features/remote-job-hunter/components/job-switch-modal/job-switch-modal';
import { JOB_BOARD_CONTENT } from '@core/constants/content/job-board-content.constants';
import { InterviewQuestion } from '@features/remote-job-hunter/models/interview-question.model';
import { INTERVIEW_QUESTIONS } from '@features/remote-job-hunter/constants/interview-questions.constants';
import { InterviewModal } from '@features/remote-job-hunter/components/interview-modal/interview-modal';

@Component({
  selector: 'app-job-board',
  imports: [CommonModule, JobSwitchModal, InterviewModal],
  templateUrl: './job-board.html',
  styleUrl: './job-board.scss',
})
export class JobBoard {
  private readonly gameStateService = inject(GameStateService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly languageService = inject(LanguageService);

  readonly jobs = this.gameStateService.jobs;
  readonly player = this.gameStateService.player;
  readonly content = computed(() => JOB_BOARD_CONTENT[this.languageService.language()]);

  readonly jobToSwitch = signal<JobOffer | null>(null);
  readonly interviewJob = signal<JobOffer | null>(null);
  readonly interviewQuestion = signal<InterviewQuestion | null>(null);

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

    this.startInterview(job);
  }

  confirmJobSwitch(): void {
    const job = this.jobToSwitch();

    if (!job) {
      return;
    }

    this.jobToSwitch.set(null);

    this.startInterview(job);
  }

  cancelJobSwitch(): void {
    this.jobToSwitch.set(null);
  }

  cancelInterview(): void {
    this.interviewJob.set(null);

    this.interviewQuestion.set(null);
  }

  completeInterview(isCorrect: boolean): void {
    const job = this.interviewJob();

    if (!job) {
      return;
    }

    this.gameStateService.applyForJob(job, isCorrect);

    this.analyticsService.trackEvent('interview_completed', {
      jobId: job.id,

      position: job.position,

      result: isCorrect ? 'passed' : 'failed',
    });

    this.cancelInterview();
  }

  private startInterview(job: JobOffer): void {
    const question = this.getRandomQuestion(job.interviewLevel);

    this.interviewJob.set(job);
    this.interviewQuestion.set(question);

    this.analyticsService.trackEvent('interview_started', {
      jobId: job.id,
      position: job.position,
      interviewLevel: job.interviewLevel,
    });
  }

  private getRandomQuestion(interviewLevel: number): InterviewQuestion {
    const questions = INTERVIEW_QUESTIONS.filter(
      (question) => question.interviewLevel <= interviewLevel,
    );

    const index = Math.floor(Math.random() * questions.length);

    return questions[index];
  }
}
