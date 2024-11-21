import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { BehaviorSubject } from "rxjs";

@Component( {
  selector: 'app-paginator',
  standalone: true,
  imports: [ RouterLink, AsyncPipe, NgIf, NgForOf, RouterLinkActive ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  host: {
    class: 'd-flex j-c-center mb-30'
  }
} )
export class Paginator implements OnInit {
  constructor(
    private location: ActivatedRoute,
    private router: Router,
  ) {
    location.queryParams.subscribe( ( params ) => {
      this.currentPage = Number( params[ "page" ] || '1' );
      this.onPageChange.emit( this.currentPage );
    } );
  }

  @Input()
  currentPage = 1;

  @Input()
  total: number = 0;
  @Input()
  perPage: number = 1;


  _pages = new BehaviorSubject<number[]>( [] )

  @Output()
  onPageChange = new EventEmitter<number>();

  getUrl( page: number ): string {
    return this.router.url.split( '?' )[ 0 ];
  }

  ngOnInit(): void {
    const pages = Math.ceil( this.total / this.perPage );
    if ( pages > 1 ) {
      this._pages.next( Array.from( Array( pages ).keys() ) );
    }
  }
}
