import { Component } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { CustomSelectComponent } from "../customSelect/customSelect.component";
import { CardComponent } from "../candidate/card/card.component";
import { SettingsStore } from "../../stores/SettingsStore";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { VacanciesStore } from "../../stores/VacanciesStore";
import { Observable } from "rxjs";
import { IVacancies } from "../../types/vacancies";
import { ContentHeightService } from "../../services/ContentHeightService";
import { ActivatedRoute, Router } from "@angular/router";
import { Paginator } from "../paginator/paginator.component";
import { AuthStore } from "../../stores/AuthStore";


@Component( {
  selector: 'app-filter',
  standalone: true,
  imports: [
    CustomSelectComponent,
    CardComponent,
    AsyncPipe,
    NgForOf,
    Paginator,
    NgIf
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
} )
export class FilterComponent {

  constructor(
    public settings: SettingsStore,
    public vacanciesStore: VacanciesStore,
    public height: ContentHeightService,
    public location: ActivatedRoute,
    private router: Router,
    private auth: AuthStore,
  ) {
    this.auth.auth$.subscribe( ( a ) => {
      if ( a ) {
        this.search();
      } else {
        this.router.navigate( [ '/auth/signup' ] );
      }
    } )
  }

  naming = naming;

  vacancies: Observable<IVacancies> | null = null;

  search() {
    this.vacancies = this.vacanciesStore.getVacancies( this.location.snapshot.queryParams );
  }

  onChange( key: string, value: string ) {
    const params = { ...this.location.snapshot.queryParams, [ key ]: value };

    if ( !value || value === '---' ) delete params[ key ];

    this.router.navigate( [ this.router.url.split( '?' )[ 0 ] ], {
      queryParams: params,
    } );
  }

  getInputValue( event: Event ) {
    return ( event.target as HTMLInputElement ).value;
  }

  getDefaultValue( key: string, items?: any[] | null ) {
    return items?.find( el => ( el.id || el ) == this.location.snapshot.queryParams[ key ] )
  }

  unshift( firstItem: any, items?: any[] | null ) {
    return [ firstItem, ...( items || [] ) ];
  }
}
