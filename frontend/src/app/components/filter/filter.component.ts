import { Component } from '@angular/core';
import {naming} from "../../data/naming/naming/naming.service";
import {DropDownWithComponent} from "../dropDownWith/dropDownWith.component";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    DropDownWithComponent
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  naming = naming;

}
