import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { RolesRoutingModule } from './roles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleListComponent } from './role-list/role-list.component';
import { MaterialModule } from '../../material.module';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RolesComponent, RoleListComponent, RoleDetailComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RolesModule { }
