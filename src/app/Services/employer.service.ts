import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployerSignin} from '../model/EmployerSignin'
import { EmployerSignup} from '../model/EmployerSignup'
import { ResponsibleSignin } from '../model/ResponsibleSignin';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private apiUrl = 'http://localhost:8082/employers';
  private apiUrl2 = 'http://localhost:8082/responsible';

  constructor(private http: HttpClient) {}

  signIn(employerSignin: EmployerSignin): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, employerSignin);
  }

  signUp(employerSignup: EmployerSignup): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, employerSignup);
  }
  signInRes(responsibleSignin: ResponsibleSignin): Observable<any> {
    console.log(responsibleSignin);
    return this.http.post(`${this.apiUrl2}/signin`, responsibleSignin);
  }

}
