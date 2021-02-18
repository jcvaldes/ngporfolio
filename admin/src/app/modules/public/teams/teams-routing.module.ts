import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamListResolverGuard } from './team-list/team-list-resolver.guard';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    // canActivate: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Equipos' },
    resolve: { teams: TeamListResolverGuard },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
