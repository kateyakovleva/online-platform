import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { CustomSelectComponent } from "../../customSelect/customSelect.component";
import { RouterLink } from "@angular/router";
import { DropdownComponent } from "../../dropdown/dropdown.component";
import { NgForOf } from "@angular/common";
import { AuthStore } from "../../../stores/AuthStore";
import { UserStore } from "../../../stores/UserStore";

@Component( {
  selector: 'app-profile-button',
  standalone: true,
  imports: [
    CustomSelectComponent,
    RouterLink,
    DropdownComponent,
    NgForOf
  ],
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.scss'
} )
export class ProfileButtonComponent {

  constructor(
    private auth: AuthStore,
    private user: UserStore,
  ) {
  }

  naming = naming;

  candidate = [
    { name: 'найти работу', link: '/search/vacancies' },
    { name: 'мой профиль', link: '/profile' },
    { name: 'мои отклики', link: '/profile/responses' },
    { name: 'входящие предложения', link: '/profile/offers' },
  ];

  company = [
    { name: 'найти сотрудника', link: '/search/resume' },
    { name: 'мой профиль', link: '/company_profile' },
    { name: 'отклики', link: '/company_profile/company_responses' },
  ];

  isOpen = false;

  getMenuItems() {
    if ( this.user._user.getValue()?.is_company ) {
      return this.company;
    }
    return this.candidate;
  }

  logout() {
    this.auth.logout();
  }
}
