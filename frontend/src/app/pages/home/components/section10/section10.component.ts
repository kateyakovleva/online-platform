import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section10',
  standalone: true,
  imports: [],
  templateUrl: './section10.component.html',
  styleUrl: './section10.component.scss'
})
export class Section10Component {

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
