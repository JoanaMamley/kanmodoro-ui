import { Routes } from '@angular/router';
import { WelcomePage } from './welcome-page/welcome-page';
import { LoginPage } from './login-page/login-page';
import { RegisterPage } from './register-page/register-page';
import { ForgotPassword } from './forgot-password/forgot-password';
import { ResetPassword } from './reset-password/reset-password';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: WelcomePage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'reset-password', component: ResetPassword },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: '' },
];
