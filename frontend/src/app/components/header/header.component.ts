import {Component} from '@angular/core';
import {naming} from "../../data/naming/naming/naming.service";
import {ProfileButtonComponent} from "./profile-button/profile-button.component";
import {MobileHeaderComponent} from "./mobile-header/mobile-header.component";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ProfileButtonComponent,
    MobileHeaderComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  get isMobile() {
    if(typeof window !== undefined) {
      return window.innerWidth < 1350;
    }
    return false;
  }

  MobileMenu: boolean = false;

  showMobileMenu() {
    this.MobileMenu = !this.MobileMenu
  }

  scroll(name: string) {
    let top = (document.querySelector('app-' + name) as HTMLElement)?.offsetTop - 150;
    window.scrollTo({top: top, behavior: 'smooth'});
  }

  naming = naming;

}
