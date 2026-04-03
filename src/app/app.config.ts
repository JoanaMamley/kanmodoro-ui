import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';

const KanmodoroPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#F4F7FD',
      100: '#E4EBFA',
      200: '#D0CAFF',
      300: '#B8B2FF',
      400: '#A8A4FF',
      500: '#635FC7',
      600: '#534FA8',
      700: '#443F89',
      800: '#332F6A',
      900: '#20212C',
      950: '#000112',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#635FC7',
          contrastColor: '#FFFFFF',
          hoverColor: '#A8A4FF',
          activeColor: '#A8A4FF',
        },
        highlight: {
          background: '#635FC7',
          focusBackground: '#A8A4FF',
          color: '#FFFFFF',
          focusColor: '#FFFFFF',
        },
        surface: {
          0: '#FFFFFF',
          50: '#F4F7FD',
          100: '#E4EBFA',
          200: '#E4EBFA',
          300: '#828FA3',
          400: '#828FA3',
          500: '#3E3F4E',
          600: '#3E3F4E',
          700: '#2B2C37',
          800: '#20212C',
          900: '#000112',
          950: '#000112',
        },
      },
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '24px',
      },
    },
    inputtext: {
      root: {
        borderColor: 'rgba(130, 143, 163, 0.25)',
        focusBorderColor: '#635FC7',
      },
    },
    checkbox: {
      root: {
        borderRadius: '4px',
        checkedBackground: '#635FC7',
        checkedHoverBackground: '#A8A4FF',
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: KanmodoroPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-mode',
          cssLayer: false,
        },
      },
    }),
  ],
};
