import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from '../model/Claim'; // Assurez-vous d'importer correctement votre modèle de réclamation

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private apiUrl = 'http://localhost:8082/claims'; // L'URL de votre API

  constructor(private http: HttpClient) {}

  addClaim(claim: Claim): Observable<Claim> {
    return this.http.post<Claim>(`${this.apiUrl}/add`, claim);
  }

  getAllClaims(): Observable<Claim[]> {
    return this.http.get<Claim[]>(`${this.apiUrl}/getAll`);
  }
}
