import { Component, computed, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOffer } from '@features/remote-job-hunter/models/job-offer.model';
import { InterviewQuestion } from '@features/remote-job-hunter/models/interview-question.model';
import { LanguageService } from '@core/services/language';
import { INTERVIEW_CONTENT } from '@features/remote-job-hunter/constants/interview-content.constants';

@Component({
  selector: 'app-interview-modal',
  imports: [CommonModule],
  templateUrl: './interview-modal.html',
  styleUrl: './interview-modal.scss',
})
export class InterviewModal {
  private readonly languageService = inject(LanguageService);

  readonly content = computed(() => INTERVIEW_CONTENT[this.languageService.language()]);
  readonly language = this.languageService.language;
  readonly job = input.required<JobOffer>();
  readonly question = input.required<InterviewQuestion>();

  readonly cancelled = output<void>();
  readonly completed = output<boolean>();
  readonly result = signal<boolean | null>(null);

  readonly answerDefaultClasses =
    'border-white/10 bg-slate-950/60 text-slate-200 hover:border-cyan-300 hover:text-cyan-200';
  readonly answerCorrectClasses = 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200';
  readonly answerWrongClasses = 'border-red-400/40 text-red-300';
  readonly answerDisabledClasses = 'border-white/10 text-slate-400';
  readonly resultSuccessClasses = 'border-cyan-400/30 bg-cyan-400/10';
  readonly resultFailClasses = 'border-red-400/30 bg-red-400/10';

  onCancel(): void {
    this.cancelled.emit();
  }

  onAnswer(index: number): void {
    if (this.result() !== null) {
      return;
    }

    this.result.set(index === this.question().correctAnswerIndex);
  }

  onContinue(): void {
    const result = this.result();

    if (result === null) {
      return;
    }

    this.completed.emit(result);
  }
}
