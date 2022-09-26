import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth.service';
import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  user$ = this.authService.currentUser$;


  constructor(
    public appComp: AppComponent,
    public authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.appComp.logout();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogProfileComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
