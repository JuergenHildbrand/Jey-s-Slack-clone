import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { canActivate,redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['']);
const redirectToLanding = () => redirectLoggedInTo(['landing']);

const routes: Routes = [
  
  { 
    path : '',
    pathMatch: 'full',
    component: LoginComponent,
    ...canActivate(redirectToLanding)
  },
  { 
    path : 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectToLanding)
  },
  { 
    path : 'landing',
    component: LandingComponent,
    ...canActivate(redirectToLogin)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
