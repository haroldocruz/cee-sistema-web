import { IMaintainer } from './maintainer.model';
import { MaintainerService } from './maintainer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintainer',
  templateUrl: './maintainer.component.html',
  styleUrls: ['./maintainer.component.less']
})
export class MaintainerComponent implements OnInit {

    item: any

  // maintainer = {
  //   "id": "2",
  //   "name": "Mantida2",
  //   "legalAct": [
  //     {
  //       "name": "Doc1",
  //       "title": "Doc1",
  //       "description": "Doc1",
  //       "link": "",
  //       "type": ""
  //     }
  //   ],
  //   "socialReason": "Mantida2",
  //   "other": "Mantida2",
  //   "contact": {
  //     "email": [
  //       "email@mantida.com"
  //     ],
  //     "phone": [
  //       {
  //         "number": 5563987654321,
  //         "type": "celular"
  //       }
  //     ],
  //     "address": [
  //       {
  //         "country": "Brasil",
  //         "place": "Rua 26 quadra 119"
  //       }
  //     ]
  //   }
  // }
  maintainer: IMaintainer;
  MaintainerService = MaintainerService;

  constructor(
    public maintainerService: MaintainerService
  ) { }

  ngOnInit(): void {
    this.maintainer = MaintainerService.maintainer;
    this.mockDataIndex(); //!REMOVER
  }

    mockDataIndex() { //!REMOVER
        this.item = {
            addressList: [

            ],
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui, necessitatibus modi sapiente, cupiditate optio vero cum eius eos voluptatem quia quasi, sint recusandae ea nobis tempora ad magni architecto.",
            legalBaseList: [
                { name: "Lei n° 111", link: "#", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui, necessitatibus modi sapiente, cupiditate optio vero cum eius eos voluptatem quia quasi, sint recusandae ea nobis tempora ad magni architecto." },
                { name: "Lei n° 222", link: "#", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui, necessitatibus modi sapiente, cupiditate optio vero cum eius eos voluptatem quia quasi, sint recusandae ea nobis tempora ad magni architecto." }]
        }
    }

}
