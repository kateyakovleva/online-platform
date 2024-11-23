import { Component } from '@angular/core';
import { naming } from "../../../data/naming/naming/naming.service";
import { ICity } from "../../../types/other_types";
import { SettingsStore } from "../../../stores/SettingsStore";
import { UserStore } from "../../../stores/UserStore";
import { AppClient } from "../../../services/AppClient";
import { Router } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { CustomSelectComponent } from "../../customSelect/customSelect.component";
import { ICompany } from "../../../types/company";


@Component( {
  selector: 'app-create-profile-company',
  standalone: true,
  imports: [
    AsyncPipe,
    CustomSelectComponent
  ],
  templateUrl: './create-profile-company.component.html',
  styleUrl: './create-profile-company.component.scss'
} )
export class CreateProfileCompanyComponent {
  constructor(
    public settings: SettingsStore,
    public user: UserStore,
    private http: AppClient,
    private router: Router,
  ) {
  }

  naming = naming;

  getSelectedCity( cities?: ICity[] | null, company?: ICompany | null ) {
    return cities?.find( c => c.id === company?.city_id );
  }

  onSave( event: Event ) {
    event.preventDefault();
    const data = new FormData( event.target as HTMLFormElement );

    this.user.updateUser( data ).subscribe( r => {
      this.user.getUser();
      this.router.navigate( [ "/company_profile" ] );
    } )
  }
}
