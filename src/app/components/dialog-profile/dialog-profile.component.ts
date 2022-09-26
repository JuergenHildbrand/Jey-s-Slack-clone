import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { concatMap } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { ImgUploadService } from 'src/app/service/img-upload.service';

@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.scss'],
})
export class DialogProfileComponent implements OnInit {

  user$ = this.authService.currentUser$;

  profileForm = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    displayName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    photoURL: new FormControl(''),
    message:new FormControl(''),
  })

  constructor(
    private authService: AuthService,
    private imgUploadService: ImgUploadService,
    private toast: HotToastService,
    public dialogRef: MatDialogRef<DialogProfileComponent>,
  ) { }

  ngOnInit(): void {
  }

  uploadImg(event: any, user: User) {
    this.imgUploadService.uploadImg(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe(
        {
          loading: 'Image is being uploadet...',
          success: 'Image uploadet!',
          error: 'There was an error un uploading'
        }
      ),
      concatMap((photoURL) => this.authService.updateProfileData({ photoURL }))
    ).subscribe();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
