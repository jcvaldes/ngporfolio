import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from '@shared/models/team.model';
import { SwalService } from '@core/services/swal.service';
import { TeamsService } from '../teams.service'
import { environment } from '@env';
import urljoin from 'url-join';
import * as _ from 'lodash';
import { Router } from '@angular/router';;
import { UploadFbService } from '@core/services/uploadfb.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  @Output() submited = new EventEmitter();
  @ViewChild('imageUser') inputImageUser: ElementRef;
  form: FormGroup;
  url: string;
  fbUrl: string;
  @Input() team: Team;
  validationType = {
    name: [Validators.required],
  }
  constructor(
    private swalService: SwalService,
    private router: Router,
    private teamsService: TeamsService,
    private upfbSvc: UploadFbService
  ) {
    this.url = urljoin(environment.apiUrl, 'team');
    this.createForm();
    teamsService.sendTeamSubjectObservable.subscribe(team => {
      if(!team) {
        this.onClear();
        this.upfbSvc.clear();
        return;
      }

      this.populateForm(team);
    });
    this.upfbSvc.urlObservable.subscribe(fbUrl => {
      this.fbUrl = fbUrl;
      this.onSubmit();
    });
  }

  ngOnInit(): void {

  }

  onClear(): void {
    this.form.reset();
    this.fbUrl = '';
  }

  createForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstname: new FormControl(null),
      lastname: new FormControl(null, Validators.required),
      title: new FormControl(null),
      description: new FormControl(null),
    });
  }
  onSubmit() {
    if (this.form.valid) {
      if (!this.form.get('id').value) {
        this.teamsService.post<TeamsService>(this.url, this.form.value).subscribe(({team}) => {
          this.swalService.success('Atención', 'El equipo ha sido creado');
          this.form.get('id').setValue(team.id)
          this.onLoadPage();
          // this.resetForm();
        }, err => {
          this.swalService.error('Atención', `:: ${err}`);
        });
      } else {
        const payload = { ...this.form.value, photo: this.fbUrl };
        this.teamsService.put<TeamsService>(this.url, payload).subscribe(teams => {
          this.swalService.success('Atención', 'El equipos ha sido actualizado');
          this.onLoadPage();
          // this.resetForm();
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
    this.upfbSvc.clear();
    // this.form.get('id').setValue(data.id);
    // this.form.get('rolename').setValue(data.rolename);
    // this.form.get('description').setValue(data.description);
    // Mejor manera de setear valores
    // this.form.setValue(_.omit(data, ['createdAt', 'updatedAt', 'deletedAt']));
    this.teamsService
      .getSingle<Team>(this.url, teams.id)
      .subscribe((team: Team) => {
        // const { skill } = data;
        this.fbUrl = team.photo
        this.form.setValue(_.omit(team, ['photo', 'createdAt', 'updatedAt', 'deletedAt']));
      });

  }
  onLoadPage() {
    this.router.navigated = false;
    this.router.navigate(['/teams']);
  }
  get ErrorMessageForFirstname() {
    return this.form.get('firstname').hasError('required') ? 'requerido' : '';
  }
  get ErrorMessageForLastname() {
    return this.form.get('lastname').hasError('required') ? 'requerido' : '';
  }
  get ErrorMessageForTitle() {
    return this.form.get('title').hasError('required') ? 'requerido' : '';
  }
  get ErrorMessageForDescription() {
    return this.form.get('description').hasError('required') ? 'requerido' : '';
  }
  // onSelect(evt) {

  // }
  // onRemove(f) {
  //   //   this.uploadFbService.cargarImagenesFirebase()

  // }
  // onFileChanged(e) {
  //   this.file = e.target.files[0];
  // }
  // onUpload() {
  //   // console.log('subir', e.target.files[0]);
  //   const id = Math.random().toString(36).substring(2);
  //   const file = this.file;
  //   const filePath = `uploads/team_${id}`;
  //   const ref = this.storage.ref(filePath);
  //   const task = this.storage.upload(filePath, file);
  //   this.uploadPercent = task.percentageChanges();
  //   return task.snapshotChanges()
  //     .pipe(finalize(async() => {
  //       debugger
  //       this.urlImage = await ref.getDownloadURL();

  //     }));
  // }

}
