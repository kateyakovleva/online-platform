import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {naming} from "../../../../data/naming/naming/naming.service";
import {CardComponent} from "../../card/card.component";

@Component({
  selector: 'app-response',
  standalone: true,
  imports: [RouterLink, CardComponent],
  templateUrl: './response.component.html',
  styleUrl: '../offer/offer.component.scss'
})
export class ResponseComponent {

    protected readonly naming = naming;
}
