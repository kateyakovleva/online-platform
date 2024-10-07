import { Component } from '@angular/core';
import {naming} from "../../data/naming/naming/naming.service";
import { DropDownComponent } from "../dropDown/dropDown.component";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    DropDownComponent
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  naming = naming;

}
