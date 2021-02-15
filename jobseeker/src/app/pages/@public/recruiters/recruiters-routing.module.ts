import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruitersComponent } from './recruiters.component';

const routes: Routes = [
  {
    path: '',
    component: RecruitersComponent,
    data: { titulo: 'Reclutadores' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitersRoutingModule { }
