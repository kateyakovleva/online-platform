import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-personalData',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './personalData.component.html',
  styleUrl: './personalData.component.scss'
})
export class PersonalDataComponent {

  skills = [{name: 'js'}, {name: 'react'}, {name: 'react'}, {name: 'js'}, {name: 'react'},
    {name: 'react'}]

  naming = naming;

}
