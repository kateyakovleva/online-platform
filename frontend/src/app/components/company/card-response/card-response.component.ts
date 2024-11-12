import {Component} from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-card-response',
  standalone: true,
  imports: [],
  templateUrl: './card-response.component.html',
  styleUrl: './card-response.component.scss'
})
export class CardResponseComponent {

  skills = [{name: 'js'}, {name: 'react'}, {name: 'react'}, {name: 'js'}, {name: 'react'},
    {name: 'react'}]

  items = [
    {
      specialisation: 'Frontend',
      firstName: 'Наталья',
      lastName: 'Иванова',
      avatar: 'images/test.png',
      city: 'Казань',
      status: 'online'
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
      status: 'online'
    },
  ]

  naming = naming;

}
