import { Component } from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-createProfile',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CheckboxModule,
    FormsModule
  ],
  templateUrl: './createProfile.component.html',
  styleUrl: './createProfile.component.scss'
})
export class CreateProfileComponent {

 naming = naming;

 items = [
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},  {name: 'react'},  {name: 'react'},
   {name: 'react'},  {name: 'react'},
 ]

}
