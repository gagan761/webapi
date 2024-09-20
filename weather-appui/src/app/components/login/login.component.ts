import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginserviceService } from '../../service/LoginService/loginservice.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private baseUrl = 'https://api.github.com';
  loginForm : FormGroup;
  data:string="";
  constructor(private fb: FormBuilder,private http:HttpClient,private loginservice:LoginserviceService) {
    // Initialize the form group with the FormBuilder
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
this.loginservice.postlogin("","")
       this.http.post(`${this.baseUrl}/repos/`,this.data)

    }
  }

}
