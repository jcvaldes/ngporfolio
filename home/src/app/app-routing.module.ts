import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // Siempre en ultimo lugar estas dos rutas
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
