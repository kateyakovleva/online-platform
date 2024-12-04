import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { VacanciesStore } from "../../../../stores/VacanciesStore";
import { Observable } from "rxjs";
import { IVacancies } from "../../../../types/vacancies";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { LimitPipe } from "../../../../filters/limit.pipe";
import { OnlineComponent } from "../../../../components/online/online.component";
import { FormatComponent } from "../../../../components/format/format.component";

@Component( {
  selector: 'app-section8',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    RouterLink,
    LimitPipe,
    OnlineComponent,
    FormatComponent
  ],
  templateUrl: './section8.component.html',
  styleUrl: './section8.component.scss'
} )
export class Section8Component {
  constructor(
    public vacanciesStore: VacanciesStore,
  ) {
    this.search();
  }

  vacancies: Observable<IVacancies> | null = null;

  search() {
    this.vacancies = this.vacanciesStore.getVacancies();
  }

  naming = naming;

  protected readonly undefined = undefined;
}
