import { Component } from '@angular/core';
import { naming } from "../../../../../data/naming/naming/naming.service";
import { CardComponent } from "../../../../candidate/card/card.component";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { SettingsStore } from "../../../../../stores/SettingsStore";
import { VacanciesStore } from "../../../../../stores/VacanciesStore";
import { Observable } from "rxjs";
import { IVacancies } from "../../../../../types/vacancies";
import { Paginator } from "../../../../paginator/paginator.component";
import { ActivatedRoute } from "@angular/router";

@Component( {
  selector: 'app-vacancies',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf,
    AsyncPipe,
    Paginator,
    NgIf,
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss'
} )
export class VacanciesComponent {
  constructor(
    public settings: SettingsStore,
    private location: ActivatedRoute,
    public vacanciesStore: VacanciesStore,
  ) {
    location.queryParams.subscribe( ( params ) => {
      this.vacancies = this.vacanciesStore.getCompanyVacancies( { page: params[ "page" ] || 1 } );
    } );
  }

  naming = naming;

  vacancies: Observable<IVacancies> | null = null;
}
