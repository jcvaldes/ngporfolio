import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import urljoin from 'url-join';
import { environment } from '@env';
import { SwalService } from '@core/services/swal.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.scss']
})
export class RoleDetailComponent implements OnInit {
  form: FormGroup;
  constructor(
    private swalService: SwalService,
    private dialogRef: MatDialogRef<RoleDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService: HttpService,
    ) {
  }

  ngOnInit(): void {
    this.createForm();
  }
  onClose() {
    this.dialogRef.close();
  }
  createForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      rolename: new FormControl(null, Validators.required),
      description: new FormControl(null),
      active: new FormControl(true),
    });
  }
  onSubmit() {
    const url = urljoin(environment.apiUrl, 'role')
    if( this.form.valid ) {
      this.httpService.post(url, this.form.value).subscribe(role => {
        this.swalService.success('Atención', 'El rol ha sido creado');
      });
    }
  }
}
