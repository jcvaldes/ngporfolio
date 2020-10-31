import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

const modules = [
  MatTableModule
];
@NgModule({
  imports: modules,
  exports: modules,
  providers: [],
})
export class MaterialModule {}
