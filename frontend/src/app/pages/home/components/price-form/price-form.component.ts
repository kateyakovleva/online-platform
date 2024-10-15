import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {naming} from "../../../../data/naming/naming/naming.service";
import {DropDownWithComponent} from "../../../../components/dropDownWith/dropDownWith.component";

@Component({
  selector: 'app-price-form',
  standalone: true,
  imports: [
    NgIf,
    DropDownWithComponent
  ],
  templateUrl: './price-form.component.html',
  styleUrl: './price-form.component.scss'
})
export class PriceFormComponent {

  popUp: boolean = true;

  close() {
    this.popUp = !this.popUp
  }


  protected readonly naming = naming;
}
