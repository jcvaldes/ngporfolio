import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { RolesRoutingModule } from './roles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleListComponent } from './role-list/role-list.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [RolesComponent, RoleListComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RolesModule { }
