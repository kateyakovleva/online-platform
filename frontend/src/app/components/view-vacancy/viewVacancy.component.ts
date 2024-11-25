import { Component, Input } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { AsyncPipe, NgIf } from "@angular/common";
import { VacancyComponent } from "../company/vacancy/vacancy.component";
import { BehaviorSubject, Observable } from "rxjs";
import { VacanciesStore } from "../../stores/VacanciesStore";
import { IVacancy } from "../../types/vacancies";
import { ContentHeightService } from "../../services/ContentHeightService";
import { CompanyAside } from "../company-aside/companyAside.component";
import { ResponsesStore } from "../../stores/ResponsesStore";
import { UserStore } from "../../stores/UserStore";
import { IResume } from "../../types/resumes";
import { CandidateAside } from "../candidate-aside/candidateAside.component";


@Component( {
  selector: 'app-profileCustomer',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    VacancyComponent,
    NgIf,
    CompanyAside,
    CandidateAside
  ],
  templateUrl: './viewVacancy.component.html',
  styleUrls: [ '../candidate/profile/profile.component.scss', '../company/profile/personal-data/personalDataCompany.component.scss' ]
} )
export class ViewVacancyComponent {
  constructor(
    private location: ActivatedRoute,
    private router: Router,
    private vacanciesStore: VacanciesStore,
    public height: ContentHeightService,
    private respStore: ResponsesStore,
    private user: UserStore,
  ) {
    location.params.subscribe( ( params ) => {
      this.vacancy = this.vacanciesStore.getVacancy( params[ 'id' ] );
    } );

    this.user.worker$.subscribe( ( w ) => {
      this.resume = w?.resume;
    } )
  }

  @Input()
  hideButtons = false;

  vacancy?: Observable<IVacancy>;

  resume?: IResume;

  naming = naming;

  success = new BehaviorSubject( '' );

  addResponse( vacancy_id?: number ) {
    this.respStore.addResponse( this.resume?.id, vacancy_id ).subscribe( ( r ) => {
      this.success.next( 'Отклик отправлен!' );
    } )
  }
}
