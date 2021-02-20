// Modulos de angular
import { NgModule } from '@angular/core';
import { UploaderComponent } from './components/uploader/uploader.component';
import { DropzoneDirective } from './components/uploader/dropzone.directive';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
const components = [
  UploaderComponent,
  DropzoneDirective,
  UploadTaskComponent
]
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: components,
})
export class SharedModule { }
