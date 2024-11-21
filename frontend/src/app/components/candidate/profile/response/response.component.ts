import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { naming } from "../../../../data/naming/naming/naming.service";
import { CardComponent } from "../../card/card.component";
import { ResponsesStore } from "../../../../stores/ResponsesStore";
import { EResponseType, IResponses } from "../../../../types/responses";
import { Observable } from "rxjs";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { Paginator } from "../../../paginator/paginator.component";

@Component( {
  selector: 'app-response',
  standalone: true,
  imports: [ RouterLink, CardComponent, AsyncPipe, NgForOf, NgIf, Paginator ],
  templateUrl: './response.component.html',
  styleUrl: '../offer/offer.component.scss'
} )
export class ResponseComponent {
  constructor(
    private location: ActivatedRoute,
    private responsesStore: ResponsesStore,
    private router: Router,
  ) {
    location.queryParams.subscribe( ( params ) => {
      this.responses = this.responsesStore.getResponses( {
        page: params[ "page" ] || 1,
        type: EResponseType.INIT_WORKER,
      } );
    } );
  }

  responses?: Observable<IResponses> | undefined;

  protected readonly naming = naming;
}
