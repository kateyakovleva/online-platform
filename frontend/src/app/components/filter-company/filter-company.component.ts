import { Component } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { CardComponent } from "../candidate/card/card.component";
import { CustomSelectComponent } from "../customSelect/customSelect.component";
import { CardResponseComponent } from "../company/card-response/card-response.component";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { SettingsStore } from "../../stores/SettingsStore";
import { Observable } from "rxjs";
import { ContentHeightService } from "../../services/ContentHeightService";
import { ActivatedRoute, Router } from "@angular/router";
import { ResumesStore } from "../../stores/ResumesStore";
import { IResumes } from "../../types/resumes";
import { Paginator } from "../paginator/paginator.component";
import { AuthStore } from "../../stores/AuthStore";

@Component( {
  selector: 'app-filter-company',
  standalone: true,
  imports: [
    CardComponent,
    CustomSelectComponent,
    CardResponseComponent,
    NgForOf,
    AsyncPipe,
    NgIf,
    Paginator
  ],
  templateUrl: './filter-company.component.html',
  styleUrl: './filter-company.component.scss'
} )
export class FilterCompanyComponent {

  constructor(
    public settings: SettingsStore,
    public resumesStore: ResumesStore,
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

  resumes: Observable<IResumes> | null = null;

  search() {
    this.resumes = this.resumesStore.getResumes( this.location.snapshot.queryParams );
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
