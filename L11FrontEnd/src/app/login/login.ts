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
  private auth = inject(Auth);

  public login(user: string, password: string) {
    const data = {
      username: user,
      password: password,
    };

    this.auth.login(data).subscribe((res: any) => {
      localStorage.setItem('token', res.access);
      console.log('Login correcto');
    })
  }
}
