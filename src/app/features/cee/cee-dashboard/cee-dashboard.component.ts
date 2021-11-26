import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cee-dashboard',
  templateUrl: './cee-dashboard.component.html',
  styleUrls: ['./cee-dashboard.component.less']
})
export class CeeDashboardComponent implements OnInit {

  colorScheme
  conselhos
  sistemas

  single: any[];
  view: any[] = [700, 400];
  colorScheme2
  cardColor: string = '#232837';

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('CEE | Dashboard')
    this.mockIndex();
  }

  mockIndex() {
    this.colorScheme = {
      domain: ['#5AA454', '#E44D25']
    };
    this.colorScheme2 = {
      name: '',
      selectable: true,
      group: '',
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#d9ff51', '#33b32c', '#000000']
    };

    this.conselhos = [
      {
        "name": "Implantados",
        "value": 100,
        "extra": {
          "code": "de"
        }
      },
      {
        "name": "Não implantados",
        "value": 39,
        "extra": {
          "code": "us"
        }
      }
    ]

    this.sistemas = [
      {
        "name": "Implantados",
        "value": 100,
        "extra": {
          "code": "de"
        }
      },
      {
        "name": "Não implantados",
        "value": 39,
        "extra": {
          "code": "us"
        }
      }
    ]

    this.single = [
      {
        "name": "CEB",
        "value": 46
      },
      {
        "name": "CES",
        "value": 17
      },
      {
        "name": "CLN",
        "value": 13
      },
      {
        "name": "Abertos",
        "value": 76
      },
      {
        "name": "Concluídos",
        "value": 120
      },
      {
        "name": "Total",
        "value": 196
      }
    ];
  }

}
