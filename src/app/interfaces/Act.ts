import { ActTypeEnum } from "./enumerations/ActTypeEnum";

export interface IAct {
  name: string;
  type: string;
}

export class Act implements IAct {
    name = '';
    type = ActTypeEnum.UNINFORMED;
}

export const ActList: IAct[] = [
  {
    name: null,
    type: null
  },
  {
    name: 'Credenciamento',
    type: ActTypeEnum.PREVIA
  },
  {
    name: 'Autorização para Funcionamento',
    type: ActTypeEnum.PREVIA
  },
  {
    name: 'Recredenciamento',
    type: ActTypeEnum.COMPLEMENTAR
  },
  {
    name: 'Renovação de Reconhecimento',
    type: ActTypeEnum.COMPLEMENTAR
  }
]