import { Component } from '@angular/core';
import { ClaimService } from '../Services/claim.service';
import { Claim } from '../model/Claim';
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

  constructor(private claimService: ClaimService) { }
  
  submitClaim() {
    this.claimService.addClaim(this.newClaim).subscribe(
      claim => {
        console.log('Claim added successfully: ', claim);
        this.newClaim = { id: 0, claimDate: '', claimMsg: '', employerFullName: '', employer: null, responsible: null };
       
      },
      error => {
        console.error('Error adding claim: ', error);
      }
    );
  }
}
