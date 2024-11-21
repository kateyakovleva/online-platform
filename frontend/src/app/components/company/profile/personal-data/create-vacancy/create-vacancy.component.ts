import { Component } from '@angular/core';
import { naming } from "../../../../../data/naming/naming/naming.service";
import { CustomSelectComponent } from "../../../../customSelect/customSelect.component";
import { CheckboxComponent } from "../../../../checkbox/checkbox.component";
import { SettingsStore } from "../../../../../stores/SettingsStore";
import { UserStore } from "../../../../../stores/UserStore";
import { AppClient } from "../../../../../services/AppClient";
import { ActivatedRoute, Router } from "@angular/router";
import { ICity, ISkill, ISpecialization } from "../../../../../types/other_types";
import { IVacancy } from "../../../../../types/vacancies";
import { AsyncPipe, NgForOf } from "@angular/common";
import { VacanciesStore } from "../../../../../stores/VacanciesStore";
import { Observable } from "rxjs";

@Component( {
  selector: 'app-create-vacancy',
  standalone: true,
  imports: [
    CustomSelectComponent,
    CheckboxComponent,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './create-vacancy.component.html',
  styleUrl: './create-vacancy.component.scss'
} )
export class CreateVacancyComponent {
  constructor(
    public settings: SettingsStore,
    public user: UserStore,
    private http: AppClient,
    private router: Router,
    private location: ActivatedRoute,
    private vacanciesStore: VacanciesStore,
  ) {
    location.params.subscribe( ( params ) => {
      if ( params[ "id" ] ) {
        this.id = Number( params[ "id" ] );
        this._vacancy = this.vacanciesStore.getCompanyVacancy( this.id );
      }
    } );
  }

  id?: number;
  _vacancy?: Observable<IVacancy> = undefined;

  naming = naming;

  hasSelectedSkill( skill: ISkill, vacancy?: IVacancy | null ) {
    return Boolean( vacancy?.skills?.find( s => s.id === skill.id ) );
  }

  getSelectedCity( cities?: ICity[] | null, vacancy?: IVacancy | null ) {
    return cities?.find( c => c.id === vacancy?.city_id );
  }

  getSelectedSpecialization( cities?: ISpecialization[] | null, vacancy?: IVacancy | null ) {
    return cities?.find( c => c.id === vacancy?.specialization_id );
  }

  getDefaultValue( items?: any[] | null, format?: string ) {
    return items?.find( el => el == format )
  }


  onSave( event: Event ) {
    event.preventDefault();
    const data = new FormData( event.target as HTMLFormElement );

    this.http.post( this.id ? `/profile/vacancies/${ this.id }` : '/profile/vacancies', data ).subscribe( r => {
      this.router.navigate( [ "/company_profile/vacancies" ] );
    } )
  }

  unshift( firstItem: any, items?: any[] | null ) {
    return [ firstItem, ...( items || [] ) ];
  }
}
