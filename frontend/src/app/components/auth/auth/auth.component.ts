import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { ECustomerType } from "../../../types/customer";

@Component( {
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
} )
export class AuthComponent {
  constructor(
    private location: ActivatedRoute,
  ) {
    this.location.queryParams.subscribe( ( params ) => {
      this.type = Number( params[ 'is_company' ] || '1' );
    } )
  }

  naming = naming;

  type = ECustomerType.WORKER;
  protected readonly ECustomerType = ECustomerType;
}
