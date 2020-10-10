import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '@shared/models/user.model';
// declare function init_plugins();
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.createForms();
  }

  ngOnInit(): void {
    // init_plugins();
    this.recoverForm();
  }
  createForms() {
    this.form = new FormGroup({
      email: new FormControl('idevkingos@gmail.com', Validators.required),
      password: new FormControl('123456', Validators.required),
    });
  }

  recoverForm() {
    // ==============================================================
    // Login and Recover Password
    // ==============================================================
    $('#to-recover').on('click', () => {
      $('#loginform').slideUp();
      $('#recoverform').fadeIn();
    });
    $('#to-login').on('click', () => {
      $('#recoverform').slideUp();
      $('#loginform').fadeIn();
    });
  }

  onSubmit() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    this.authService.login(user, true).subscribe((user: User) => {
      debugger
      console.log(user);
    }, err => {
      console.error(err);
    });
  }

}
