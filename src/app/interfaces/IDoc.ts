export interface IDoc {
    type: string;
    number: number;
    ementa?: string;
    criadaEm: string;
    publicadaEm?: string;
    situation: string;
    altera?: string;
    alteradaPor?: string;
    revoga?: string;
    revogadaPor?: string;
    observation?: string;
}

export enum DocTypeEnum {
    DECRETO = "Decreto",
    LEI = "Lei",
    PARECER = "Parecer",
    PORTARIA = "Portaria",
    RESOLUCAO = "Resolução",
    OTHER = "Outro",
  }