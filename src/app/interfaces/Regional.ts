export interface IRegional {
  name: string;
  flag: string;
}

export class Regional {
  name = ''
  flag = ''
}

export const RegionalList: IRegional[] = [
  {
    name: null,
    flag: './assets/flags/thumb-brasao-tocantins.jpg'
  },
  {
    name: 'Araguaína',
    flag: './assets/flags/thumb-bandeira-araguaina.jpg'
  },
  {
    name: 'Gurupi',
    flag: './assets/flags/thumb-bandeira-gurupi.jpg'
  },
  {
    name: 'Palmas',
    flag: './assets/flags/thumb-bandeira-palmas.jpg'
  }
]