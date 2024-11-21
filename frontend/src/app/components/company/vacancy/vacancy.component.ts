import { Component, Input, OnInit } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from "@angular/router";
import { IVacancy } from "../../../types/vacancies";
import { VacanciesStore } from "../../../stores/VacanciesStore";
import { Observable } from "rxjs";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { PricePipe } from "../../../filters/price.pipe";

@Component( {
  selector: 'app-vacancy',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgForOf,
    AsyncPipe,
    NgIf,
    PricePipe
  ],
  templateUrl: './vacancy.component.html',
  styleUrls: [ '../profile/personal-data/create-vacancy/create-vacancy.component.scss', '../../candidate/profile/personal-data/personalData.component.scss' ]
} )
export class VacancyComponent implements OnInit {
  constructor(
    private location: ActivatedRoute,
    private vacanciesStore: VacanciesStore,
    private router: Router,
  ) {
  }

  id?: number;
  vacancy?: Observable<IVacancy>;
  @Input()
  viewVacancy?: IVacancy;

  @Input()
  hideButtons = false;

  naming = naming;

  delete() {
    this.vacanciesStore.deleteVacancy( this.id || '' ).subscribe( ( r ) => {
      this.router.navigate( [ "/company_profile/vacancies" ] );
    } )
  }

  ngOnInit(): void {
    if ( !this.viewVacancy ) {
      this.location.params.subscribe( ( params ) => {
        this.id = params[ "id" ];
        if ( this.id ) this.vacancy = this.vacanciesStore.getCompanyVacancy( this.id );
      } );
    }
  }
}
