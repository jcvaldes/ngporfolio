import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';
import { UploadFbService } from '../../../core/services/uploadfb.service';
import { Upload } from '../uploader/upload.model';


@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File;
  @Input() folder: string;
  @Output() fileUploaded = new EventEmitter<string>();
  percentage: Observable<number>;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, public upfbSvc: UploadFbService) { }
  ngOnInit() {
    this.startUpload();
    this.percentage = this.upfbSvc.task.percentageChanges();
  }
  startUpload() {
    this.upfbSvc.folder = this.folder;
    this.upfbSvc.pushUpload(new Upload(this.file), );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
