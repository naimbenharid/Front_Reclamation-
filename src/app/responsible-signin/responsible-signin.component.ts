
import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../Services/employer.service';
import { Router } from '@angular/router';
import { ResponsibleSignin } from '../model/ResponsibleSignin';

@Component({
  selector: 'app-responsible-signin',
  templateUrl: './responsible-signin.component.html',
  styleUrls: ['./responsible-signin.component.css']
})
export class ResponsibleSigninComponent implements OnInit{

  repoSignin: ResponsibleSignin= { name : '', password: '' };

  constructor(private employerService: EmployerService ,
    private router : Router) {}

  ngOnInit(): void {
  }

    signin(repoSignin: ResponsibleSignin): void {
      this.employerService.signInRes(repoSignin).subscribe(response => {
       this.router.navigate(["/getallClaims"]) ;
      });
    }


}
