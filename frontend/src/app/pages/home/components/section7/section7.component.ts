import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-section7',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './section7.component.html',
  styleUrl: './section7.component.scss'
})
export class Section7Component {

  get isMobile() {
    if(typeof window !== undefined) {
      return window.innerWidth < 1350;
    }
    return false;
  }

  naming = naming;

}
