import { Component } from '@angular/core';
import { EmployerService } from '../Services/employer.service';
import { EmployerSignup} from '../model/EmployerSignup'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  employerSignup: EmployerSignup = {
    name: '',password: ''
  };
  constructor(private employerService: EmployerService , private router: Router) {}

  signup(employerSignup: EmployerSignup): void {
    this.employerService.signUp(employerSignup).subscribe(response => {
      this.router.navigate(["/addClaim"]) ;    });
  }
}
