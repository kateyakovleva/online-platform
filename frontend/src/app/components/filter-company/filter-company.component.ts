import {Component} from '@angular/core';
import {naming} from "../../data/naming/naming/naming.service";
import {CardComponent} from "../candidate/card/card.component";
import {CustomSelectComponent} from "../customSelect/customSelect.component";
import {CardResponseComponent} from "../company/card-response/card-response.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-filter-company',
  standalone: true,
  imports: [
    CardComponent,
    CustomSelectComponent,
    CardResponseComponent,
    NgForOf
  ],
  templateUrl: './filter-company.component.html',
  styleUrl: './filter-company.component.scss'
})
export class FilterCompanyComponent {

  naming = naming;

  items = [
    {
      specialisation: 'Frontend',
      firstName: 'Наталья',
      lastName: 'Иванова',
      avatar: 'images/test.png',
      city: 'Казань',
      status: 'online',
      skills: [{name: 'js'}, {name: 'react'}, {name: 'react'}, {name: 'js'}, {name: 'react'},
        {name: 'react'}]
    },
    {
      specialisation: 'QA',
      title: 'Собрать что-то на фронте и получить бабаок',
      text: 'Свертка не отрабатывает, т.к. много пользовательских ошибок в данных. Необходимо разобрать обработчик и убрать лишние проверки, чтобы сформировать начальные остатки\n' +
        'по всем разделам учета. В предложении прошу называть цену, план работ и сроки.',
      price: '150 000 - 200 000 ₽',
      firstName: 'Ольга',
      lastName: 'Петрова',
      avatar: 'images/test.png',
      city: 'Москва',
      status: 'online',
      skills: [{name: 'js'}, {name: 'react'}, {name: 'react'}, {name: 'js'}, {name: 'react'},
        {name: 'react'}]
    },
  ]
}
