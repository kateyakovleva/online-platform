import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-oneVacancy',
  standalone: true,
  imports: [],
  templateUrl: './oneVacancy.component.html',
  styleUrl: './oneVacancy.component.scss'
})
export class OneVacancyComponent {

  items = [
    {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
    {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
    {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
    {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
  ]

  naming = naming;

}
