import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";
import {PriceFormComponent} from "../price-form/price-form.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-section10',
  standalone: true,
  imports: [
    PriceFormComponent,
    NgIf
  ],
  templateUrl: './section10.component.html',
  styleUrl: './section10.component.scss'
})
export class Section10Component {

  priceForm: boolean = false;
  openForm() {
    this.priceForm = !this.priceForm;
  }


  items = [
    {id: 1, profession: 'Базовый',
    text: 'за одного кандидата',
      subtext: '*при трудоустройстве 1 кандидата в месяц',
      change: 'не подразумевает бесплатную замену'
    },
    {id: 2, profession: 'Экономный',
      text: 'за одного кандидата',
      subtext: '*при трудоустройстве 3-5 кандидатов в месяц',
      change: 'не подразумевает бесплатную замену'
    },
    {id: 3, profession: 'Расширенный',
      text: 'за одного кандидата',
      subtext: '*при трудоустройстве 3-5 кандидатов в месяц',
      change: '1 бесплатная замена, если новый сотрудник не проходит испытательный срок'
    },
  ]

  naming = naming;

}
