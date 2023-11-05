import { Claim } from './../model/Claim';
import { Component } from '@angular/core';
import { ClaimService } from '../Services/claim.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent {
  claims: Claim[] = [];
  newClaim: Claim = {
    id: 0,
    claimDate: '',
    claimMsg: '',
    employerFullName: '',
    employer: null,
    responsible: null
  };

  constructor(private claimService: ClaimService,
    private router : Router) { }

  submitClaim() {
    this.claimService.addClaim(this.newClaim).subscribe(
      v => {
        console.log('Claim added successfully: ', v);
        this.newClaim = { id: 0, claimDate: '', claimMsg: '', employerFullName: '', employer: null, responsible: null };

      },
      error => {
        console.error('Error adding claim: ', error);
      }
    );
  }
}
