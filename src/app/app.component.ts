import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public authServise: AuthService,
    private router: Router,  
  ) {}

  logout() {
    this.authServise
      .logout()
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
