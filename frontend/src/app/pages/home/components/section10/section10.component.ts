import { Component } from '@angular/core';
import { naming } from "../../../../data/naming/naming/naming.service";
import { PriceFormComponent } from "../price-form/price-form.component";
import { NgIf } from "@angular/common";

@Component( {
  selector: 'app-section10',
  standalone: true,
  imports: [
    PriceFormComponent,
    NgIf
  ],
  templateUrl: './section10.component.html',
  styleUrl: './section10.component.scss'
} )
export class Section10Component {

  priceForm: boolean = false;

  openForm() {
    this.priceForm = !this.priceForm;
  }

  naming = naming;

}
