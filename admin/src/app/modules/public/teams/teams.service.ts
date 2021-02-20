import { Injectable } from '@angular/core';
import { Team } from '@shared/models/team.model';
import { Subject } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService extends HttpService {
  private sendTeamSubject = new Subject<Team>(); //permite crear observable
  sendTeamSubjectObservable = this.sendTeamSubject.asObservable();

  constructor(public http: HttpClient) {
    super(http);
  }
  sendTeam(team: Team) {
    // similar al emit del EventEmitter
    this.sendTeamSubject.next(team);
  }

}
