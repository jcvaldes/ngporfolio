import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillSearchComponent } from './skill-search/skill-search.component';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillListComponent,
    SkillDetailComponent,
    SkillSearchComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
