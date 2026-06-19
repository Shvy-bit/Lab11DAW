import { Component, inject, OnInit, signal } from '@angular/core';
import { Api } from '../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index implements OnInit{
  private api = inject(Api);
  private router = inject(Router);
  public users =signal<any[]>([]);

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      alert("Inicie sesión");
      this.router.navigate(['/login/'])

    } else { this.getUsers(); }
  }

  private getUsers() {
    this.api.getModel("http://127.0.0.1:8000/api/users/").subscribe({
      next: (res) => {
        this.users.set(res)
        console.log("Usuarios: ", res)
      },
      error: (error) => this.api.err(error)
    })
  }

  public logout() {
    localStorage.removeItem('token');

    console.log('token eliminado', localStorage);
    this.router.navigate(['/login/']);
  }
}
