import {Component} from '@angular/core';
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
      specialisation: 'Frontend',
      title: 'Собрать актуальную версию TDLib и написать пошаговую инструкцию',
      text: 'Свертка не отрабатывает, т.к. много пользовательских ошибок в данных. Необходимо разобрать обработчик и убрать лишние проверки, чтобы сформировать начальные остатки\n' +
        'по всем разделам учета. В предложении прошу называть цену, план работ и сроки.',
      price: '150 000 - 200 000 ₽',
      company: 'ООО КОМПАНИЯ ОЗОН',
      logoCompany: 'images/test.png',
      city: 'Казань',
      status: 'online'
    },
    {
      specialisation: 'QA',
      title: 'Собрать что-то на фронте и получить бабаок',
      text: 'Свертка не отрабатывает, т.к. много пользовательских ошибок в данных. Необходимо разобрать обработчик и убрать лишние проверки, чтобы сформировать начальные остатки\n' +
        'по всем разделам учета. В предложении прошу называть цену, план работ и сроки.',
      price: '150 000 - 200 000 ₽',
      company: 'ООО Компания-мечта',
      logoCompany: 'images/test.png',
      city: 'Москва',
      status: 'online'
    },
  ]

  naming = naming;

}
