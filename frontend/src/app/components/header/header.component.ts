import { Component, OnInit } from '@angular/core';
import { naming } from "../../data/naming/naming/naming.service";
import { ProfileButtonComponent } from "./profile-button/profile-button.component";
import { MobileHeaderComponent } from "./mobile-header/mobile-header.component";
import { AsyncPipe, NgIf } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { AuthStore } from "../../stores/AuthStore";


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
export class HeaderComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public auth: AuthStore,
  ) {
  }

  ngOnInit() {
    this.route.fragment.subscribe( ( fragment ) => {
      if ( fragment ) this.scroll( fragment );
    } )
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
