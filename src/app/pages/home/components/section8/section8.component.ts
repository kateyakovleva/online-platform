import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section8',
  standalone: true,
  imports: [],
  templateUrl: './section8.component.html',
  styleUrl: './section8.component.scss'
})
export class Section8Component {

  items = [
    {id: 1, profession: 'John', skills: [{name: 'js'}, {name: 'react'}, {name: 'react'}, {name: 'js'}, {name: 'react'},
        {name: 'react'}], city: 'Moscow', status: true,
      tasks: [{name: 'fnbjdhhurhureh cvb ddgdjkgh bfhg bfehg'}, {name: 'fnbjd bvjdgh hhurh ureh bfh'}, {name: 'fnbjdhhurhureh nbhfg hfhufuyuy'}]
    },
    {id: 2, profession: 'Doe', skills: [{name: 'vue'}, {name: 'vuex'}], city: 'Omsk', status: true,
      tasks: [{name: 'fnbjdhhurhureh cvb ddgdjkgh bfhg bfehg'}, {name: 'fnbjd bvjdgh hhurh ureh bfh'}, {name: 'fnbjdhhurhureh nbhfg hfhufuyuy'}]
    },
    {id: 3, profession: 'Kate', skills: [{name: 'react'}, {name: 'vuex'}, {name: 'vuex'}],
      city: 'Kazan',
      status: false,
      tasks: [{name: 'fnbjdhhur bvdshg jhf ddgdjkgh bfhg bfehg'}, {name: 'gruw bgfwytr whytgv urh ureh bfh'}, {name: 'fnbjdhh by euyuyf reh nbhfg hfhufuyuy'}]
    },
    {id: 2, profession: 'Doe', skills: [{name: 'vue'}, {name: 'vuex'}], city: 'Omsk', status: true,
      tasks: [{name: 'fnbjdhhurhureh cvb ddgdjkgh bfhg bfehg'}, {name: 'fnbjd bvjdgh hhurh ureh bfh'}, {name: 'fnbjdhhurhureh nbhfg hfhufuyuy'}]
    },
  ]

  naming = naming;

}
