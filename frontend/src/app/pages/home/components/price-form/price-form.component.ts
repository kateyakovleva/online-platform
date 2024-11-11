import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {naming} from "../../../../data/naming/naming/naming.service";
import {CustomSelectComponent} from "../../../../components/candidate/customSelect/customSelect.component";

@Component({
  selector: 'app-price-form',
  standalone: true,
  imports: [
    NgIf,
    CustomSelectComponent
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
