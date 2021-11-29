import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Color, ScaleType } from '@swimlane/ngx-charts'
// import { ScaleType } from '@swimlane/ngx-charts/lib/common/types/scale-type.enum';

@Component({
  selector: 'app-cee-dashboard',
  templateUrl: './cee-dashboard.component.html',
  styleUrls: ['./cee-dashboard.component.less']
})
export class CeeDashboardComponent implements OnInit {

  colorScheme: Color
  conselhos
  sistemas

  single: any[];
  single2: any[];
  view: any[] = [700, 400];
  colorScheme2: Color;
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
      name: '',
      selectable: true,
      group: ScaleType.Linear,
      domain: ['#5AA454', '#E44D25']
    };
    this.colorScheme2 = {
      name: '',
      selectable: true,
      group: ScaleType.Linear,
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#d9ff51', '#33b32c', '#5963eb']
    };

    this.conselhos = [
      {
        "name": "Implantados",
        "value": 91,
        "extra": {
          "code": "de"
        }
      },
      {
        "name": "Não implantados",
        "value": 48,
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

    this.single2 = [
      {
        "name": "CEB",
        "value": 99
      },
      {
        "name": "CES",
        "value": 41
      },
      {
        "name": "CLN",
        "value": 60
      },
      {
        "name": "Abertos",
        "value": 79
      },
      {
        "name": "Concluídos",
        "value": 262
      },
      {
        "name": "Total",
        "value": 341
      }
    ];
  }

}
