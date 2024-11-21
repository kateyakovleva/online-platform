import { Component, Input } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { ICompany } from "../../types/company";
import { IVacancy } from "../../types/vacancies";

@Component( {
  selector: 'app-company-aside',
  standalone: true,
  imports: [ RouterLink, AsyncPipe, NgIf, NgForOf ],
  templateUrl: './companyAside.component.html',
  styleUrl: './companyAside.component.scss',
  host: {
    class: 'd-flex direction-column j-c-start a-1-start w-30'
  }
} )
export class CompanyAside {
  naming = naming;

  @Input()
  company?: ICompany | null = null;

  @Input()
  set vacancy( vacancy: IVacancy ) {
    this.company = vacancy.company;
    // @ts-ignore
    this.company.city = vacancy.city;
  }
}
