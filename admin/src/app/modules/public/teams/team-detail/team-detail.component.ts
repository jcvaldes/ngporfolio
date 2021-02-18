import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from '@shared/models/team.model';
import { SwalService } from '@core/services/swal.service';
import { TeamsService } from '../teams.service'
import { environment } from '@env';
import urljoin from 'url-join';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  form: FormGroup;
  url: string;
  @Input() team: Team;
  @Output() submited = new EventEmitter();
  validationType = {
    name: [Validators.required],
  }
  constructor(
    private swalService: SwalService,
    private router: Router,
    private teamsService: TeamsService
  ) {
    this.url = urljoin(environment.apiUrl, 'team');
    this.createForm();
    teamsService.sendTeamSubjectObservable.subscribe(team => {
      this.populateForm(team);
    });
  }

  ngOnInit(): void {
  }

  onClear(): void {
    this.form.reset();
  }

  createForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstname: new FormControl(null),
      lastname: new FormControl(null, Validators.required),
      title: new FormControl(null),
      description: new FormControl(null),
      photo: new FormControl(null)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      if (!this.form.get('id').value) {
        this.teamsService.post<TeamsService>(this.url, this.form.value).subscribe((team: Team) => {
          this.swalService.success('Atención', 'El equipos ha sido creado');
          this.onLoadPage();
          this.resetForm();
        }, err => {
          this.swalService.error('Atención', `:: ${err}`);
        });
      } else {
        this.teamsService.put<TeamsService>(this.url, this.form.value).subscribe(teams => {
          this.swalService.success('Atención', 'El equipos ha sido actualizado');
          this.onLoadPage();
          this.resetForm();
        }, err => {
          this.swalService.error('Atención', `:: ${err}`);
        });
      }
    }
  }
  resetForm() {
    this.form.reset(
      { active: true },
      { emitEvent: false }
    );
    this.clearErrors();
  }

  clearErrors() {

    const properties = Object.keys(this.form.controls);
    for (let i = 0; i < properties.length; i++) {
      this.form.get(properties[i]).markAsUntouched();
      this.form.get(properties[i]).markAsPristine();
      this.form.get(properties[i]).updateValueAndValidity();
    }
    // this.form.get('name').markAsUntouched();
    // this.form.get('name').markAsPristine();
    this.form.setErrors(null);
    // this.setValidators();
    // this.form.get('name').updateValueAndValidity();
  }

  setValidators() {
    this.form.get('name').setValidators(this.validationType.name);
  }

  populateForm(teams) {
    // this.form.get('id').setValue(data.id);
    // this.form.get('rolename').setValue(data.rolename);
    // this.form.get('description').setValue(data.description);
    // Mejor manera de setear valores
    // this.form.setValue(_.omit(data, ['createdAt', 'updatedAt', 'deletedAt']));
    this.teamsService
      .getSingle<Team>(this.url, teams.id)
      .subscribe((teams: Team) => {
        // const { skill } = data;
        this.form.setValue(_.omit(teams, ['createdAt', 'updatedAt', 'deletedAt']));
      });

  }
  onLoadPage() {
    this.router.navigated = false;
    this.router.navigate(['/teams']);
  }

}
