import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Service()
export class Api {
    
    private http = inject(HttpClient);
    private router = inject(Router);

    public getModel(url: string): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: 'Bearer ' + localStorage.getItem('token')
        });

        return this.http.get(url, {headers: headers})
    }
    
    public err(error: any) {
        alert("El servidor no pudo procesar su token, vuelva a iniciar sesion");
        console.log("Error: ", error);
        this.router.navigate(['/login/']);
    }
}
