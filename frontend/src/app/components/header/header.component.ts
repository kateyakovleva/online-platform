import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { ProfileButtonComponent } from "./profile-button/profile-button.component";
import { MobileHeaderComponent } from "./mobile-header/mobile-header.component";
import { AsyncPipe, NgIf } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { AuthStore } from "../../stores/AuthStore";
import { ContentHeightService } from "../../services/ContentHeightService";
import { UserStore } from "../../stores/UserStore";


@Component( {
  selector: 'app-header',
  standalone: true,
  imports: [
    ProfileButtonComponent,
    MobileHeaderComponent,
    NgIf,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
} )
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    public auth: AuthStore,
    public height: ContentHeightService,
    public user: UserStore,
  ) {
  }

  @ViewChild( "ref", { read: ElementRef } )
  ref?: ElementRef = undefined;

  ngOnInit() {
    this.route.fragment.subscribe( ( fragment ) => {
      setTimeout( () => {
        if ( fragment ) this.scroll( fragment );
      }, 50 );
    } )
  }

  ngAfterViewInit() {
    this.height.header.next( this.ref?.nativeElement?.clientHeight || 0 );
  }

  get isMobile() {
    if ( typeof window !== 'undefined' ) {
      return window.innerWidth < 1350;
    }
    return false;
  }

  MobileMenu: boolean = false;

  showMobileMenu() {
    this.MobileMenu = !this.MobileMenu
  }

  scroll( name: string ) {
    let top = ( document.querySelector( 'app-' + name ) as HTMLElement )?.offsetTop - 150;
    window.scrollTo( { top: top, behavior: 'smooth' } );
  }

  naming = naming;

}
