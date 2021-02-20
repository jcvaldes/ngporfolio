import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MaterialFileInputModule, NGX_MAT_FILE_INPUT_CONFIG, FileInputConfig } from 'ngx-material-file-input';
export const config: FileInputConfig = {
  sizeUnit: 'Octet'
};
const modules = [
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule,
  NgxMatSelectSearchModule,
  MaterialFileInputModule
];
@NgModule({
  imports: modules,
  exports: modules,
  providers: [
    { provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config },
  ],
})
export class MaterialModule {}
