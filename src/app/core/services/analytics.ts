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

    this.loadGoogleAnalytics();
    this.trackRouterEvents();
  }

  trackEvent(eventName: string, params?: Record<string, string | number | boolean>): void {
    if (!this.isEnabled || !window.gtag) {
      return;
    }

    window.gtag('event', eventName, params ?? {});
  }

  private loadGoogleAnalytics(): void {
    if (this.document.getElementById('google-analytics-script')) {
      return;
    }

    const script = this.document.createElement('script');

    script.id = 'google-analytics-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;

    this.document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer.push(args);

    window.gtag('js', new Date());
    window.gtag('config', this.trackingId, {
      send_page_view: false,
    });
  }

  private trackRouterEvents(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        window.gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects,
          page_title: this.document.title,
        });
      });
  }
}
