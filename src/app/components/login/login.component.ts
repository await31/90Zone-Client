import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private userStore: UserStoreService) {}

   ngOnInit() {
       this.loginForm = this.fb.group({
         email: ['',Validators.required],
         password: ['',Validators.required]
       })
   }
   
   onLogin(){
    if(this.loginForm.valid) {
         console.log(this.loginForm.value);
         this.auth.login(this.loginForm.value)
         .subscribe({
          next:(res)=>{
            this.loginForm.reset();
            this.auth.storeToken(res.Token);
            let tokenPayload= this.auth.decodeToken();
            this.userStore.setUsernameForStore(tokenPayload.name);
            this.userStore.setRoleForStore(tokenPayload.role);
            this.router.navigate(['dashboard'])
          },
          error:(err)=> {
            alert(err?.error.message)
          }

         })
    } else {
         console.log(console.error());
         this.validateAllFormFields(this.loginForm);
    } 
   }

   private validateAllFormFields(formGroup:FormGroup){
       Object.keys(formGroup.controls).forEach(field=> {
           const control = formGroup.get(field);        
           if(control instanceof FormControl) {
            control.markAsDirty({onlySelf:true})
           } else if(control instanceof FormGroup){
            this.validateAllFormFields(control);
           }
       })
   }
}
