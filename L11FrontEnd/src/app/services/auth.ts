import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class Auth {
    apiUrl = 'http://127.0.0.1:8000/api/token';

    private http = inject(HttpClient);
    
    public login(data: any) {
        return this.http.post(this.apiUrl, data);
    }
}
