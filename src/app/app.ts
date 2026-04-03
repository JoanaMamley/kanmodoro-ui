import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterModule],
})
export class App {
  protected readonly title = signal('kanmodoro-ui');

  // Injecting here ensures the service — and its OS preference listener —
  // is initialised as soon as the app shell mounts, regardless of route.
  protected readonly theme = inject(ThemeService);
}
