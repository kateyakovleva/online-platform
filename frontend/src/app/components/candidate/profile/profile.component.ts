import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { PersonalDataComponent } from "./personal-data/personalData.component";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { ResponseComponent } from "./response/response.component";
import { OfferComponent } from "./offer/offer.component";
import { AuthStore } from "../../../stores/AuthStore";
import { UserStore } from "../../../stores/UserStore";
import { AsyncPipe, NgIf } from "@angular/common";
import { CandidateAside } from "../../candidate-aside/candidateAside.component";

@Component( {
  selector: 'app-profile',
  standalone: true,
  imports: [
    PersonalDataComponent,
    RouterOutlet,
    RouterLink,
    ResponseComponent,
    OfferComponent,
    AsyncPipe,
    NgIf,
    CandidateAside,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
} )
export class ProfileComponent {

  naming = naming;

  constructor(
    private auth: AuthStore,
    private router: Router,
    public user: UserStore,
  ) {
    this.auth.auth$.subscribe( ( a ) => {
      if ( !a ) {
        this.router.navigate( [ "/" ] );
      }
    } );

    this.user.worker$.subscribe( ( w ) => {
      if ( w?.resume && !w.resume?.specialization_id ) {
        this.router.navigate( [ "/create_profile" ] );
      }
    } );
    this.user.company$.subscribe( ( c ) => {
      if ( c ) this.router.navigate( [ "/company_profile" ] );
    } )
  }


  signOut() {
    this.auth.logout();
  }
}
