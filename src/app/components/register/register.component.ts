import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.confirmPasswordValidator() // Use the custom validator
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.auth.register(this.registerForm.value)
        .subscribe({
          next: (res) => {
            this.registerForm.reset();
            this.router.navigate(['login']);
          },
          error: (err) => {
            alert(err?.error.message);
          }
        });
    } else {
      console.error('Form validation error');
      this.validateAllFormFields(this.registerForm);
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    // ... (your existing validation logic)
  }

  private confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      return password && confirmPassword && password.value !== confirmPassword.value
        ? { confirmPasswordMismatch: true }
        : null;
    };
  }
}
