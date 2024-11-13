import {Component} from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {CreateVacancyComponent} from "./create-vacancy/create-vacancy.component";

@Component({
  selector: 'app-personalDataCustomer',
  standalone: true,
  imports: [RouterLink, VacanciesComponent, CreateVacancyComponent, RouterOutlet, RouterLinkActive],
  templateUrl: './personalDataCustomer.component.html',
  styleUrl: './personalDataCustomer.component.scss'
})
export class PersonalDataCustomerComponent {

  skills = [{name: 'js'}, {name: 'react'}, {name: 'react'}, {name: 'js'}, {name: 'react'},
    {name: 'react'}]

  naming = naming;

}
