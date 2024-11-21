import { Component } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CandidateAside } from "../candidate-aside/candidateAside.component";
import { AsyncPipe, NgIf } from "@angular/common";
import { CandidateInfo } from "../candidate-info/candidateInfo.component";
import { BehaviorSubject, Observable } from "rxjs";
import { IResume } from "../../types/resumes";
import { ResumesStore } from "../../stores/ResumesStore";
import { ResponsesStore } from "../../stores/ResponsesStore";

@Component( {
  selector: 'view-resume',
  standalone: true,
  imports: [
    CandidateAside,
    AsyncPipe,
    CandidateInfo,
    NgIf,
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
  ) {
    location.params.subscribe( ( params ) => {
      this.resume = this.resumesStore.getResume( params[ 'id' ] );
    } );
  }

  resume?: Observable<IResume>;

  naming = naming;

  success = new BehaviorSubject( '' );

  addResponse( resume_id?: number ) {
    this.respStore.addResponse( resume_id, 0 ).subscribe( ( r ) => {
      this.success.next( 'Отклик отправлен!' );
    } )
  }
}
