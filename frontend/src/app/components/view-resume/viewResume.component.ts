import { Component } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CandidateAside } from "../candidate-aside/candidateAside.component";
import { AsyncPipe, NgIf } from "@angular/common";
import { CandidateInfo } from "../candidate-info/candidateInfo.component";
import { map, Observable } from "rxjs";
import { IResume } from "../../types/resumes";
import { ResumesStore } from "../../stores/ResumesStore";
import { ResponsesStore } from "../../stores/ResponsesStore";
import { PhonePipe } from "../../filters/phone.pipe";
import { UserStore } from "../../stores/UserStore";
import { ModalComponent } from "../modal/modal.component";
import { VacanciesModalComponent } from "../vacanciesModal/vacanciesModal.component";

@Component( {
  selector: 'view-resume',
  standalone: true,
  imports: [
    CandidateAside,
    AsyncPipe,
    CandidateInfo,
    NgIf,
    PhonePipe,
    ModalComponent,
    VacanciesModalComponent,
  ],
  templateUrl: './viewResume.component.html',
  styleUrl: './viewResume.component.scss'
} )
export class ViewResumeComponent {
  constructor(
    private location: ActivatedRoute,
    private router: Router,
    private resumesStore: ResumesStore,
    private respStore: ResponsesStore,
    private user: UserStore,
  ) {
    location.params.subscribe( ( params ) => {
      this.resume = this.resumesStore.getResume( params[ 'id' ] ).pipe( map( r => {
        if ( r.response ) this.success = 'Приглашение отправлено!';
        return r;
      } ) );
    } );

    this.user.company$.subscribe( ( c ) => {
      if ( c && !c?.vacancies_count ) this.success = 'Сначала создайте вакансию';
      this.manyVacancies = ( c?.vacancies_count || 0 ) > 1;
    } )
  }

  resume?: Observable<IResume>;

  naming = naming;

  success = '';

  showModal = false;

  manyVacancies = false;

  addResponse( resume_id?: number ) {
    // if ( this.manyVacancies ) {
    //   this.showModal = true;
    //   return;
    // }

    this.respStore.addResponse( resume_id, 0 ).subscribe( ( r ) => {
      this.success = 'Приглашение отправлено!';
    } )
  }
}
