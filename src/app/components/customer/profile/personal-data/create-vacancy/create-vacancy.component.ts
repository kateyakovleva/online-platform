import { Component } from '@angular/core';
import { naming } from "../../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-create-vacancy',
  standalone: true,
  imports: [],
  templateUrl: './create-vacancy.component.html',
  styleUrl: './create-vacancy.component.scss'
})
export class CreateVacancyComponent {

  items = [
    {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
    {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
    {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
    {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
  ];

  naming = naming;

}
