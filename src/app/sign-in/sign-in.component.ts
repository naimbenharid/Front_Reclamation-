import { Component } from '@angular/core';
import { EmployerService } from '../Services/employer.service';
import { EmployerSignin} from '../model/EmployerSignin'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  employerSignin: EmployerSignin = { name: '', password: '' }; // Déclaration de l'objet employerSignin

  constructor(private employerService: EmployerService , private router : Router) {}

  signin(employerSignin: EmployerSignin): void {
    this.employerService.signIn(employerSignin).subscribe(response => {
     this.router.navigate(["/addClaim"]) ;
    });
  }
}
