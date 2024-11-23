import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { ResumesStore } from "../../../../stores/ResumesStore";
import { Observable } from "rxjs";
import { IResumes } from "../../../../types/resumes";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";
import { LimitPipe } from "../../../../filters/limit.pipe";

@Component( {
  selector: 'app-section4',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    RouterLink,
    LimitPipe
  ],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss'
} )
export class Section4Component {
  constructor(
    public resumesStore: ResumesStore,
  ) {
    this.search();
  }

  resumes: Observable<IResumes> | null = null;

  search() {
    this.resumes = this.resumesStore.getResumes();
  }

  naming = naming;
}
