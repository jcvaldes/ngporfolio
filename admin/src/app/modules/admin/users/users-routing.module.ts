import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './users-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    // canActivate: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Usuarios' },
    children : [
      {
        path: '', component: UserListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
