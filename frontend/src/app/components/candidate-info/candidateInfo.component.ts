import { Component, Input } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { IWorker } from "../../types/customer";
import { IResume } from "../../types/resumes";

@Component( {
  selector: 'app-candidate-info',
  standalone: true,
  imports: [ RouterLink, AsyncPipe, NgIf, NgForOf ],
  templateUrl: './candidateInfo.component.html',
  styleUrl: './candidateInfo.component.scss',
  host: {
    class: 'd-flex direction-column w-100'
  }
} )
export class CandidateInfo {

  naming = naming;

  @Input()
  candidate?: IWorker | null = null;

  @Input()
  set resume( resume: IResume ) {
    this.candidate = resume.worker;
    //@ts-ignore
    this.candidate.resume = resume;
  }

  @Input()
  hideButton = false;
}
