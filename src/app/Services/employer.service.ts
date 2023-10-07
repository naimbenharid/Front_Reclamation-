import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployerSignin} from '../model/EmployerSignin'
import { EmployerSignup} from '../model/EmployerSignup'

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private apiUrl = 'http://localhost:8082/employers';

  constructor(private http: HttpClient) {}

  signIn(employerSignin: EmployerSignin): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, employerSignin);
  }

  signUp(employerSignup: EmployerSignup): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, employerSignup);
  }
}
