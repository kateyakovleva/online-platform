import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { CardResponseComponent } from "../../card-response/card-response.component";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { ResponsesStore } from "../../../../stores/ResponsesStore";
import { EResponseType, IResponses } from "../../../../types/responses";
import { Observable } from "rxjs";
import { CardComponent } from "../../../candidate/card/card.component";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { Paginator } from "../../../paginator/paginator.component";

@Component( {
  selector: 'app-responses',
  standalone: true,
  imports: [
    CardResponseComponent,
    RouterOutlet,
    CardComponent,
    NgForOf,
    Paginator,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './responses.component.html',
  styleUrl: '../personal-data/personalDataCompany.component.scss'
} )
export class ResponsesComponent {
  constructor(
    private location: ActivatedRoute,
    private responsesStore: ResponsesStore,
    private router: Router,
  ) {
    location.queryParams.subscribe( ( params ) => {
      this.type = params[ 'type' ] || EResponseType.INIT_WORKER;
      this.responses = this.responsesStore.getResponses( {
        page: params[ "page" ] || 1,
        type: this.type,
      } );
    } );
  }

  type: EResponseType = EResponseType.INIT_WORKER;

  responses?: Observable<IResponses> | undefined;

  naming = naming;

  protected readonly EResponseType = EResponseType;
}
