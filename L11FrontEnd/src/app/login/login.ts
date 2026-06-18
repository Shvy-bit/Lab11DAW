import { Component, inject } from '@angular/core';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public username = '';
  public password = '';

  private auth = inject(Auth);

  public login() {
    const data = {
      username: this.username,
      password: this.password,
    };

    this.auth.login(data).subscribe((res: any) => {
      localStorage.setItem('token', res.access);
      console.log('Login correcto');
    })
  }
}
