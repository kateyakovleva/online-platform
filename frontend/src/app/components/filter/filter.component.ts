import { Component } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { CustomSelectComponent } from "../customSelect/customSelect.component";
import { CardComponent } from "../candidate/card/card.component";
import { SettingsStore } from "../../stores/SettingsStore";
import { AsyncPipe, NgForOf } from "@angular/common";
import { VacanciesStore } from "../../stores/VacanciesStore";
import { Observable } from "rxjs";
import { IVacancies } from "../../types/vacancies";
import { ContentHeightService } from "../../services/ContentHeightService";
import { ActivatedRoute, Router } from "@angular/router";


@Component( {
  selector: 'app-filter',
  standalone: true,
  imports: [
    CustomSelectComponent,
    CardComponent,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
} )
export class FilterComponent {

  constructor(
    public settings: SettingsStore,
    public vacanciesStore: VacanciesStore,
    public height: ContentHeightService,
    public params: ActivatedRoute,
    private router: Router,
  ) {
    // this.params.queryParams.subscribe( ( params ) => {
    //   this.vacancies = vacanciesStore.getVacancies( params );
    // } );

    this.search();
  }

  naming = naming;

  vacancies: Observable<IVacancies> | null = null;

  search() {
    this.vacancies = this.vacanciesStore.getVacancies( this.params.snapshot.queryParams );
  }

  onChange( key: string, value: string ) {
    const params = { ...this.params.snapshot.queryParams, [ key ]: value };

    if ( !value || value === '---' ) delete params[ key ];

    this.router.navigate( [ this.router.url.split( '?' )[ 0 ] ], {
      queryParams: params,
    } );
  }

  getInputValue( event: Event ) {
    return ( event.target as HTMLInputElement ).value;
  }

  getDefaultValue( key: string, items?: any[] | null ) {
    return items?.find( el => ( el.id || el ) == this.params.snapshot.queryParams[ key ] )
  }

  unshift( firstItem: any, items?: any[] | null ) {
    return [ firstItem, ...( items || [] ) ];
  }

  protected readonly HTMLInputElement = HTMLInputElement;
}
