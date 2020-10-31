import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import { RoleListComponent } from './role-list/role-list.component';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent,
    // canActivate: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Roles' },
    children : [
      {
        path: '', component: RoleListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
