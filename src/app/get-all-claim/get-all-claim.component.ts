import { Component , OnInit} from '@angular/core';
import { ClaimService } from '../Services/claim.service';
import { Claim } from '../model/Claim';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-get-all-claim',
  templateUrl: './get-all-claim.component.html',
  styleUrls: ['./get-all-claim.component.css']
})
export class GetAllClaimComponent implements OnInit {
  claims: Claim[] = [];
  ngOnInit(): void {
    this.loadClaims() ;
  }
  constructor(private claimService: ClaimService,
   ) { }

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
