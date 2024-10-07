import { Component } from '@angular/core';
import {naming} from "../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  items = [
    {
      title: 'Собрать актуальную версию TDLib и написать пошаговую инструкцию',
      text: 'Свертка не отрабатывает, т.к. много пользовательских ошибок в данных. Необходимо разобрать обработчик и убрать лишние проверки, чтобы сформировать начальные остатки\n' +
        'по всем разделам учета. В предложении прошу называть цену, план работ и сроки.',
      price: '150 000 - 200 000 ₽',
      company: 'ООО КОМПАНИЯ ОЗОН',
      logoCompany: 'picture',
      city: 'Казань',
      status: 'online'
    },
    {
      title: 'Собрать что-то на фронте и получить бабаок',
      text: 'Свертка не отрабатывает, т.к. много пользовательских ошибок в данных. Необходимо разобрать обработчик и убрать лишние проверки, чтобы сформировать начальные остатки\n' +
        'по всем разделам учета. В предложении прошу называть цену, план работ и сроки.',
      price: '150 000 - 200 000 ₽',
      company: 'ООО Компания-мечта',
      logoCompany: 'picture',
      city: 'Москва',
      status: 'online'
    },
  ]

  naming = naming;

}
