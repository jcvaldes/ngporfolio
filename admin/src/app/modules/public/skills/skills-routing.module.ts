import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { SkillsComponent } from './skills.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    // canActivate: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Skills' },
    children: [
      {
        path: '', component: SkillListComponent
      }, {
        path: 'new', component: SkillDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
