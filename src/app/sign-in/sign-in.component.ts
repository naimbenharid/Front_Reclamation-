import { Component } from '@angular/core';
import { EmployerService } from '../Services/employer.service';
import { Router } from '@angular/router';
import { EmployerSignin } from '../model/EmployerSignin';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  employerSig: EmployerSignin = {
    name: '',password: ''
  };

  constructor(private employerService: EmployerService ,
    private router : Router) {}

    employerSignin(employerSig: EmployerSignin): void {
      this.employerService.signIn(employerSig).subscribe(response => {
          this.router.navigate(['/addClaim']);

      });
    }
}
