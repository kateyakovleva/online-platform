import { Component } from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {

  menuMobile: boolean = true;
  close() {
    this.menuMobile = !this.menuMobile;
  }

  scroll(name: string){
    let top = (document.querySelector('app-' + name) as HTMLElement)?.offsetTop - 250;
    window.scrollTo({top: top, behavior: 'smooth'});
    this.menuMobile = !this.menuMobile;
  }

  naming = naming;

}
