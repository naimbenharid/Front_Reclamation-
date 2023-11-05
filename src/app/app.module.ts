import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { GetAllClaimComponent } from './get-all-claim/get-all-claim.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ResponsibleSigninComponent } from './responsible-signin/responsible-signin.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AddClaimComponent,
    GetAllClaimComponent,
    ResponsibleSigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
