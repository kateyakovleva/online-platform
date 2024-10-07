import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-section5',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './section5.component.html',
  styleUrl: './section5.component.scss'
})
export class Section5Component {

  naming = naming;
}
