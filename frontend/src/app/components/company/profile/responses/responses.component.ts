import {Component} from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";
import {CardResponseComponent} from "../../card-response/card-response.component";

@Component({
  selector: 'app-responses',
  standalone: true,
  imports: [
    CardResponseComponent
  ],
  templateUrl: './responses.component.html',
  styleUrl: '../personal-data/personalDataCustomer.component.scss'
})
export class ResponsesComponent {

  naming = naming;

}
