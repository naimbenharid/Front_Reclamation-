
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { GetAllClaimComponent } from './get-all-claim/get-all-claim.component';
import { ResponsibleSigninComponent } from './responsible-signin/responsible-signin.component';

const routes: Routes = [
  { path : "signin", component: SignInComponent},
  { path : "signup" , component: SignUpComponent},
  { path : "addClaim" , component :AddClaimComponent},
  { path : "getallClaims" , component :GetAllClaimComponent},
  { path : "signinresp" , component: ResponsibleSigninComponent},
  {path : "", redirectTo:"", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
