import { Component, Input } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { IWorker } from "../../types/customer";
import { IResume } from "../../types/resumes";
import { UserStore } from "../../stores/UserStore";

@Component( {
  selector: 'app-candidate-aside',
  standalone: true,
  imports: [ RouterLink, AsyncPipe, NgIf, NgForOf ],
  templateUrl: './candidateAside.component.html',
  styleUrl: './candidateAside.component.scss',
  host: {
    class: 'd-flex direction-column j-c-start a-1-start w-30 mb-30'
  }
} )
export class CandidateAside {
  constructor(
    public user: UserStore,
  ) {
  }

  naming = naming;

  @Input()
  candidate?: IWorker | null = null;

  @Input()
  set resume( resume: IResume ) {
    this.candidate = resume.worker;
    //@ts-ignore
    this.candidate.resume = resume;
  }

  selectFile( event: Event ) {
    //@ts-ignore
    this.user.updateImage( event.target.files[ 0 ] ).subscribe( r => {
      this.user.getUser();
    } );
  }
}
