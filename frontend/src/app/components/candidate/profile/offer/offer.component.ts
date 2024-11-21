import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { CardComponent } from "../../card/card.component";
import { ResponsesStore } from "../../../../stores/ResponsesStore";
import { Observable } from "rxjs";
import { EResponseType, IResponses } from "../../../../types/responses";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { Paginator } from "../../../paginator/paginator.component";

@Component( {
  selector: 'app-offer',
  standalone: true,
  imports: [ RouterLink, CardComponent, AsyncPipe, NgForOf, NgIf, Paginator ],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
} )
export class OfferComponent {
  constructor(
    private location: ActivatedRoute,
    private responsesStore: ResponsesStore,
    private router: Router,
  ) {
    location.queryParams.subscribe( ( params ) => {
      this.responses = this.responsesStore.getResponses( {
        page: params[ "page" ] || 1,
        type: EResponseType.INIT_COMPANY,
      } );
    } );
  }

  responses?: Observable<IResponses> | undefined;

  naming = naming;

}
