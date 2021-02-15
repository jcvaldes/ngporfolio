import { NgModule } from '@angular/core';
import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';


@NgModule({
  declarations: [
    CandidatesComponent
  ],
  imports: [
    CandidatesRoutingModule
  ],
})
export class CandidatesModule { }
