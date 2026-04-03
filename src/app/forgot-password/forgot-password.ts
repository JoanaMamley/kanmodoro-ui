import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'kanmodoro-forgot-password',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  private readonly fb = inject(FormBuilder);

  protected submitted = false;
  protected submittedEmail = '';

  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  protected get f() {
    return this.form.controls;
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submittedEmail = this.form.value.email ?? '';
    this.submitted = true;
    // TODO: call auth service to send reset email
  }
}

