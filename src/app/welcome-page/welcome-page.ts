import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'kanmodoro-welcome-page',
  imports: [RouterLink],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss',
})
export class WelcomePage implements OnInit, OnDestroy {
  private darkModeQuery: MediaQueryList | null = null;
  private themeChangeHandler = (e: MediaQueryListEvent) => this.applyTheme(e.matches);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    const view = this.document.defaultView;
    if (!view) return;

    this.darkModeQuery = view.matchMedia('(prefers-color-scheme: dark)');
    this.applyTheme(this.darkModeQuery.matches);
    this.darkModeQuery.addEventListener('change', this.themeChangeHandler);
  }

  ngOnDestroy(): void {
    this.darkModeQuery?.removeEventListener('change', this.themeChangeHandler);
  }

  private applyTheme(isDark: boolean): void {
    this.document.documentElement.classList.toggle('dark-mode', isDark);
  }
}
