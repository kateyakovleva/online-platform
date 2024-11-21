import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { PersonalDataCompanyComponent } from "./personal-data/personalDataCompany.component";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { ResponsesComponent } from "./responses/responses.component";
import { PersonalDataComponent } from "../../candidate/profile/personal-data/personalData.component";
import { CompanyAside } from "../../company-aside/companyAside.component";
import { AuthStore } from "../../../stores/AuthStore";
import { UserStore } from "../../../stores/UserStore";
import { AsyncPipe } from "@angular/common";
import { ContentHeightService } from "../../../services/ContentHeightService";


@Component( {
  selector: 'app-profileCustomer',
  standalone: true,
  imports: [
    PersonalDataCompanyComponent,
    RouterOutlet,
    RouterLink,
    ResponsesComponent,
    PersonalDataComponent,
    CompanyAside,
    AsyncPipe,
  ],
  templateUrl: './profileCompany.component.html',
  styleUrl: '../../candidate/profile/profile.component.scss'
} )
export class ProfileCompanyComponent {
  constructor(
    private auth: AuthStore,
    private router: Router,
    public user: UserStore,
    public height: ContentHeightService,
  ) {
    this.auth.auth$.subscribe( ( a ) => {
      if ( !a ) {
        this.router.navigate( [ "/" ] );
      }
    } );

    this.user.worker$.subscribe( ( w ) => {
      if ( w ) this.router.navigate( [ "/profile" ] );
    } );

    this.user.company$.subscribe( ( c ) => {
      if ( c && !c.city_id ) {
        this.router.navigate( [ "/create_company_profile" ] );
      } else if ( c && this.router.url === '/company_profile' ) {
        this.router.navigate( [ "/company_profile/vacancies" ] );
      }
    } );
  }

  naming = naming;

  signOut() {
    this.auth.logout();
  }
}
