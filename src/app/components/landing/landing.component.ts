import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  user$ = this.authService.currentUser$;


  constructor(
    public appComp: AppComponent,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.appComp.logout();
  }

}
