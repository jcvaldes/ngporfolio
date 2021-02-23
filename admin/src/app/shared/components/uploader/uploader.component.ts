import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { SwalService } from '@core/services/swal.service';
import { ToastService } from '@core/services/toastr.service';
import { UploadTaskComponent } from '../upload-task/upload-task.component';
import { UploadFbService } from '../../../core/services/uploadfb.service';
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {
  @Input() folder: string;
  @Input() maxlength: number;
  isHovering: boolean;

  files: File[] = [];
  constructor(private toastSvc: ToastService) {}
  // this will also work
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    debugger
    this.files = [];
    if (files.length == this.maxlength) {
      for (let i = 0; i < files.length; i++) {
        this.files.push(files.item(i));
      }
    } else {
      this.toastSvc.warning(`Solo se permiten subir ${this.maxlength} archivo`, 'Cuidado');
    }
  }
}
