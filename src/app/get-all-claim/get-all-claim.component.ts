import { Component , OnInit} from '@angular/core';
import { ClaimService } from '../Services/claim.service';
import { Claim } from '../model/Claim';
@Component({
  selector: 'app-get-all-claim',
  templateUrl: './get-all-claim.component.html',
  styleUrls: ['./get-all-claim.component.css']
})
export class GetAllClaimComponent implements OnInit {
  claims: Claim[] = [
    {
      id: 1,
      claimDate: '2023-10-07',
      claimMsg: 'Ceci est la première réclamation',
      employerFullName: 'Employeur 1',
      employer: null,
      responsible: null
    },
    {
      id: 2,
      claimDate: '2023-10-08',
      claimMsg: 'Ceci est la deuxième réclamation',
      employerFullName: 'Employeur 2',
      employer: null,
      responsible: null
    },
    // Ajoutez d'autres réclamations statiques si nécessaire
  ];
  newClaim: Claim = {
    id: 0,
    claimDate: '',
    claimMsg: '',
    employerFullName: '',
    employer: null,
    responsible: null
  };
  ngOnInit(): void {
    this.loadClaims() ;
  }
  constructor(private claimService: ClaimService) { }
  
  loadClaims() {
    this.claimService.getAllClaims().subscribe(
      claims => {
        this.claims = claims;
      },
      error => {
        console.error('Error loading claims: ', error);
      }
    );
  }
 
 
}
