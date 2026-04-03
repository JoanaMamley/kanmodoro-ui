import { Injectable, Inject, OnDestroy, signal, computed } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService implements OnDestroy {
  private readonly isDark = signal(false);

  /** Read-only signal — true when dark mode is active. */
  readonly darkMode = computed(() => this.isDark());

  private darkModeQuery: MediaQueryList | null = null;
  private readonly systemChangeHandler = (e: MediaQueryListEvent) =>
    this.setDark(e.matches);

  constructor(@Inject(DOCUMENT) private document: Document) {
    const view = this.document.defaultView;
    if (!view) return;

    this.darkModeQuery = view.matchMedia('(prefers-color-scheme: dark)');
    this.setDark(this.darkModeQuery.matches);
    this.darkModeQuery.addEventListener('change', this.systemChangeHandler);
  }

  /** Toggle between dark and light regardless of system preference. */
  toggle(): void {
    this.setDark(!this.isDark());
  }

  ngOnDestroy(): void {
    this.darkModeQuery?.removeEventListener('change', this.systemChangeHandler);
  }

  private setDark(dark: boolean): void {
    this.isDark.set(dark);
    this.document.documentElement.classList.toggle('dark-mode', dark);
  }
}
