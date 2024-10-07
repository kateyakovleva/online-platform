import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";
import {CardComponent} from "../../card/card.component";

@Component({
  selector: 'app-allVacancy',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './allVacancy.component.html',
  styleUrl: './allVacancy.component.scss'
})
export class AllVacancyComponent {

  naming = naming;

}
