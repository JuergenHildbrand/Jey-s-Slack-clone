import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  
  { 
    path : '',
    pathMatch: 'full',
    component: LoginComponent
  },
  { 
    path : 'sign-up',
    component: SignUpComponent
  },
  { 
    path : 'landing',
    component: LandingComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
