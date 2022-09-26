import { Injectable } from '@angular/core';
import { ref, Storage } from '@angular/fire/storage'
import { getDownloadURL, uploadBytes } from 'firebase/storage';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {

  constructor(private storage: Storage) { }

  uploadImg(image: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
    return uploadTask.pipe(
      switchMap((result) => getDownloadURL(result.ref))
    )
  } 

}
