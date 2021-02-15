import { environment } from './../../../environments/environment';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  adminUrl: string;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.adminUrl = environment.adminUrl;
  }

  ngOnInit(): void {
  }
  menuMobile() {
    this.document.body.classList.add('popup-mobile-menu-wrapper');

  }
  menuCloseMobile() {
    this.document.body.classList.remove('popup-mobile-menu-wrapper');
  }
}
