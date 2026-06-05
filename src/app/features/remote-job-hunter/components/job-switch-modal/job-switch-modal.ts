import { Component, input, output } from '@angular/core';

import { JobOffer } from '@features/remote-job-hunter/models/job-offer.model';

@Component({
  selector: 'app-job-switch-modal',
  imports: [],
  templateUrl: './job-switch-modal.html',
  styleUrl: './job-switch-modal.scss',
})
export class JobSwitchModal {
  readonly job = input.required<JobOffer>();

  readonly switchCancelled = output<void>();
  readonly switchConfirmed = output<void>();

  onCancel(): void {
    this.switchCancelled.emit();
  }

  onConfirmSwitch(): void {
    this.switchConfirmed.emit();
  }
}
