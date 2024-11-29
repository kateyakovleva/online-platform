import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { IWorker } from "../../types/customer";
import { IResume } from "../../types/resumes";
import { UserStore } from "../../stores/UserStore";
import { PhonePipe } from "../../filters/phone.pipe";
import { OnlineComponent } from "../online/online.component";

@Component( {
  selector: 'app-candidate-aside',
  standalone: true,
  imports: [ RouterLink, AsyncPipe, NgIf, NgForOf, PhonePipe, OnlineComponent ],
  templateUrl: './candidateAside.component.html',
  styleUrl: './candidateAside.component.scss',
  host: {
    class: 'd-flex direction-column j-c-start a-1-start w-30 mb-30'
  }
} )
export class CandidateAside implements AfterViewInit {
  constructor(
    public user: UserStore,
  ) {
  }

  naming = naming;

  @Input()
  hideButtons = false;

  @ViewChild( "ref", { read: ElementRef } )
  ref?: ElementRef = undefined;

  @Input()
  candidate?: IWorker | null = null;

  @Input()
  set resume( resume: IResume ) {
    this.candidate = resume.worker;
    //@ts-ignore
    this.candidate.resume = resume;
  }

  ngAfterViewInit() {
    if ( this.ref?.nativeElement )
      this.ref.nativeElement.style.height = this.ref.nativeElement.clientWidth + 'px';
  }

  selectFile( event: Event ) {
    //@ts-ignore
    this.user.updateImage( event.target.files[ 0 ] ).subscribe( r => {
      this.user.getUser();
    } );
  }

  protected readonly undefined = undefined;
}
