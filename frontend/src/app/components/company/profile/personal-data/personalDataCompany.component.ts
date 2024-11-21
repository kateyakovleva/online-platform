import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { VacanciesComponent } from "./vacancies/vacancies.component";
import { CreateVacancyComponent } from "./create-vacancy/create-vacancy.component";
import { SettingsStore } from "../../../../stores/SettingsStore";
import { UserStore } from "../../../../stores/UserStore";
import { AppClient } from "../../../../services/AppClient";
import { AsyncPipe } from "@angular/common";

@Component( {
  selector: 'app-personalDataCustomer',
  standalone: true,
  imports: [ RouterLink, VacanciesComponent, CreateVacancyComponent, RouterOutlet, RouterLinkActive, AsyncPipe ],
  templateUrl: './personalDataCompany.component.html',
  styleUrl: './personalDataCompany.component.scss'
} )
export class PersonalDataCompanyComponent {
  constructor(
    public settings: SettingsStore,
    public user: UserStore,
    private http: AppClient,
    private router: Router,
  ) {
  }

  naming = naming;

}
