import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


import * as firebase from 'firebase';

import { Subject, Observable, of } from 'rxjs';
import urljoin from 'url-join';
import { Upload } from '../../shared/components/uploader/upload.model';
import { tap, finalize, take } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadFbService {

  private _folder = 'upload'
  task: AngularFireUploadTask;
  private urlSubject = new Subject<string>();
  urlObservable = this.urlSubject.asObservable();

  downloadURL: string;
  snapshot: Observable<any>;
  percentage: Observable<number>;
  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }
  set folder(value) {
    this._folder = urljoin(this._folder, value);
  }
  get folder() {
    return this._folder;
  }
  clear() {
    this.downloadURL = '';
    this.snapshot = of(null);
    this.percentage = of(null);

  }
  pushUpload(fileItem: Upload) {
    const path = `${this.folder}/${Date.now()}_${fileItem.file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    this.task = this.storage.upload(path, fileItem.file);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),

      // The file's download URL
      finalize(async () => {
       this.downloadURL = await ref.getDownloadURL().toPromise();
       this.urlSubject.next(this.downloadURL);
      }),
    );

    // const storageRef = firebase.default.storage().ref();

    // const uploadTask: firebase.default.storage.UploadTask =
    //   storageRef.child(`${this.folder}/${fileItem.name}`)
    //     .put(fileItem.file);
    // uploadTask.on(firebase.default.storage.TaskEvent.STATE_CHANGED,
    //   (snapshot: firebase.default.storage.UploadTaskSnapshot) => {
    //     this.percentage.next(fileItem.progress);
    //     fileItem.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //   }, (error) => console.error('Error al subir', error),
    //   () => {
    //     debugger
    //     console.log('Imagen cargada correctamente');
    //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //       debugger
    //       fileItem.progress = 0;
    //       fileItem.url = downloadURL;
    //       // this.guardarImagen({
    //       //   nombre: fileItem.nombreArchivo,
    //       //   url: fileItem.url
    //       // });
    //     });
    //   });


  }


  ///////////////
  //   const path = `${this.folder}/${Date.now()}_${fileItem.file.name}`;

  //   // Reference to storage bucket
  //   const ref = this.storage.ref(path);

  //   // The main task
  //   this.task = this.storage.upload(path, fileItem.file);

  //   // Progress monitoring
  //   this.percentage = this.task.percentageChanges();

  //   this.snapshot = this.task.snapshotChanges().pipe(
  //     tap(console.log),
  //     // The file's download URL
  //     finalize(async () => {
  //       this.downloadURL = await ref.getDownloadURL().toPromise();
  //     }),
  //   );
  // }



  // // Reference to storage bucket
  // const ref = this.storage.ref(path);

  // // The main task
  // this.task = this.storage.upload(path, this.file);

  // // Progress monitoring
  // this.percentage = this.task.percentageChanges();

  // this.snapshot   = this.task.snapshotChanges().pipe(
  //   tap(console.log),
  //   // The file's download URL
  //   finalize( async() =>  {
  //     this.downloadURL = await ref.getDownloadURL().toPromise();
  //   }),
  // );
  // cargarImagenesFirebase(imagenes: FileItem[]) {
  //   // referencia al storage de firebase
  //   debugger
  //   const storageRef = firebase.default.storage().ref();
  //   for (const item of imagenes) {

  //     item.estaSubiendo = true;
  //     if (item.progreso >= 100) {
  //       continue;
  //     }

  //     const uploadTask: firebase.default.storage.UploadTask =
  //       storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
  //         .put(item.archivo);

  //     uploadTask.on(firebase.default.storage.TaskEvent.STATE_CHANGED,
  //       (snapshot: firebase.default.storage.UploadTaskSnapshot) =>
  //         item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
  //       (error) => console.error('Error al subir', error),
  //       () => {

  //         console.log('Imagen cargada correctamente');
  //         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  //           item.estaSubiendo = false;
  //           item.url = downloadURL;
  //           this.guardarImagen({
  //             nombre: item.nombreArchivo,
  //             url: item.url
  //           });
  //         });
  //       });


  //   }
  // }
  // private guardarImagen(imagen: { nombre: string, url: string }) {
  //   debugger
  //   this.db.collection(`/${this.CARPETA_IMAGENES}`)
  //     .add(imagen);
  // }
}
