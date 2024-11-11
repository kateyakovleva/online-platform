import {Component} from '@angular/core';
import {naming} from "../../../../../data/naming/naming/naming.service";
import {CustomSelectComponent} from "../../../../candidate/customSelect/customSelect.component";
import {CheckboxComponent} from "../../../../checkbox/checkbox.component";

@Component({
  selector: 'app-create-vacancy',
  standalone: true,
  imports: [
    CustomSelectComponent,
    CheckboxComponent
  ],
  templateUrl: './create-vacancy.component.html',
  styleUrl: './create-vacancy.component.scss'
})
export class CreateVacancyComponent {

  items = [
    {name: 'react'}, {name: 'react'}, {name: 'react'}, {name: 'react'},
    {name: 'react'}, {name: 'react'}, {name: 'react'}, {name: 'react'},
    {name: 'react'}, {name: 'react'}, {name: 'react'}, {name: 'react'},
    {name: 'react'}, {name: 'react'}, {name: 'react'}, {name: 'react'},
  ];

  naming = naming;

}
