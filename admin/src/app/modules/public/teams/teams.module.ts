import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsRoutingModule } from './teams-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamsComponent } from './teams.component';
import { TeamListComponent } from './team-list/team-list.component';
import { MaterialModule } from '../../material.module';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [TeamsComponent, TeamListComponent, TeamDetailComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TeamsModule { }
