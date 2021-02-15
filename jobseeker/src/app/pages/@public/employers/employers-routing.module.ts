import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployersComponent } from './employers.component';

const routes: Routes = [
  {
    path: '',
    component: EmployersComponent,
    data: { titulo: 'Empleadores' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployersRoutingModule { }
