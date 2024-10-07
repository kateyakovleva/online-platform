import { Component } from '@angular/core';
import {naming} from "../../../../data/naming/naming/naming.service";

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss'
})
export class Section4Component {

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
      tasks: [{name: 'fnbjdhhur bvdshg jhureh cvb bfhg bfehg'}, {name: 'tgv urh ureh bfh'}, {name: 'ueb b e8yteufy euyuyf wuwwureh nbhfg hfhufuyuy'}]
    },

  ]

  naming = naming;
}
