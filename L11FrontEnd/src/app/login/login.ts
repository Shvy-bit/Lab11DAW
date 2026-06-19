import { Component, inject, OnInit } from '@angular/core';
import { Auth } from '../services/auth';
import {FormsModule, NgForm} from '@angular/forms';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login{
  private router = inject(Router);
  private auth = inject(Auth);

  public login(form: NgForm) {
    if(form.invalid) { console.log("Invalido"); }
    else {
      this.auth.login(form.value).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.access);
          console.log('Login correcto');
          this.router.navigate(['/index/'])
        },
        error: (error) => {
          alert("Credenciales incorrectas");
          console.log('Error', error);
          form.reset(); 
        }
      })
    }
  }
}
