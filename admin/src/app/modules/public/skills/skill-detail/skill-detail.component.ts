import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import urljoin from 'url-join';
import { environment } from '@env';
import { SwalService } from '@core/services/swal.service';
import { Skill } from '@shared/models/skill.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {
  form: FormGroup;
  url: string;
  @Input() skill: Skill;
  @Output() submited = new EventEmitter();
  constructor(
    private swalService: SwalService,
    private httpService: HttpService,
  ) {
    this.url = urljoin(environment.apiUrl, 'skill');
    this.createForm();
    if (this.skill) {
      this.populateForm(this.skill);
    }
  }

  ngOnInit(): void {

  }
  onClear(): void {
    this.form.reset();
  }
  createForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      ParentId: new FormControl(null),
      name: new FormControl(null, Validators.required),
      active: new FormControl(true),
    });
  }
  onSubmit() {
    if (this.form.valid) {
      debugger
      if (!this.form.get('id').value) {
        this.httpService.post<Skill>(this.url, this.form.value).subscribe(skill => {
          this.swalService.success('Atención', 'El skill ha sido creado');
          this.submited.emit();
          this.resetForm();
        }, err => {
          this.swalService.error('Atención', `:: ${err}`);
        });
      } else {
        this.httpService.put<Skill>(this.url, this.form.value).subscribe(skill => {
          this.swalService.success('Atención', 'El skill ha sido actualizado');
      }, err => {
          this.swalService.error('Atención', `:: ${err}`);
        });
      }
    }
  }
  resetForm() {
    this.clearErrors();
    this.form.reset(
      { active: true },
      { emitEvent: false }
    );

  }
  clearErrors() {
    debugger
    const properties = Object.keys(this.form.controls);
    for (let i = 0; i < properties.length; i++) {
      this.form.get(properties[i]).markAsUntouched();
      this.form.get(properties[i]).markAsPristine();
      this.form.get(properties[i]).updateValueAndValidity();
    }
  }
  populateForm(skill) {
    // this.form.get('id').setValue(data.id);
    // this.form.get('rolename').setValue(data.rolename);
    // this.form.get('description').setValue(data.description);
    // Mejor manera de setear valores
    // this.form.setValue(_.omit(data, ['createdAt', 'updatedAt', 'deletedAt']));
    this.httpService
      .getSingle<Skill>(this.url, skill.id)
      .subscribe((skill: Skill) => {
        // const { skill } = data;
        this.form.setValue(_.omit(skill, ['createdAt', 'updatedAt', 'deletedAt']));
      });

  }
}
