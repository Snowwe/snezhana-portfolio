import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { ANALYTICS_CONFIG } from '@core/constants/analytics.constants';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  private readonly trackingId = ANALYTICS_CONFIG.googleAnalyticsId;

  private get isEnabled(): boolean {
    return (
      !!this.trackingId &&
      !this.trackingId.includes('PASTE') &&
      !window.location.hostname.includes('localhost')
    );
  }

  init(): void {
    if (!this.isEnabled) {
      return;
    }

    this.trackPageView(window.location.pathname + window.location.hash);
    this.trackRouterEvents();
  }

  trackEvent(eventName: string, params?: Record<string, string | number | boolean>): void {
    if (!this.isEnabled || !window.gtag) {
      return;
    }

    window.gtag('event', eventName, {
      ...(params ?? {}),
      debug_mode: true,
    });
  }

  private trackRouterEvents(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.trackPageView(event.urlAfterRedirects);
      });
  }

  private trackPageView(pagePath: string): void {
    if (!window.gtag) {
      return;
    }

    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: this.document.title,
      debug_mode: true,
    });
  }
}
