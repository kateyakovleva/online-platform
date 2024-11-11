import {Component} from '@angular/core';
import {naming} from "../../data/naming/naming/naming.service";
import {CustomSelectComponent} from "../candidate/customSelect/customSelect.component";
import {CardComponent} from "../candidate/card/card.component";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CustomSelectComponent,
    CardComponent
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  naming = naming;

}
