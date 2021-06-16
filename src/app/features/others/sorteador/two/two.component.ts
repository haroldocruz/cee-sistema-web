import { IParticipant } from './../Participant';
import { Component, OnInit } from '@angular/core';

interface IBingo {
  words: string[]
}

class Bingo implements IBingo {
  words;
  // constructor()
  constructor(words?) {
    this.words = words
  }
}

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.less']
})
export class TwoComponent implements OnInit {

  private participants = [
    { "name": "Aldizia", "phone": "+5563", "email": "aldiziapedagoga@gmail.com" },
    { "name": "Ana Cláudia", "phone": "+5563", "email": "anaclaudiacee@gmail.com" },
    { "name": "Ceila", "phone": "+5563", "email": "ceilast@gmail.com" },
    // { "name": "Cláudia", "phone": "+5563", "email": "claudia.semec@yahoo.com.br" },
    { "name": "Clebson", "phone": "+5563", "email": "clebhson@gmail.com" },
    // { "name": "Elisabete", "phone": "+5563", "email": "elisabeteeja@gmail.com" },
    { "name": "Elisete", "phone": "+5563984994747", "email": "egpcruz@outlook.com" },
    { "name": "Geny", "phone": "+5563", "email": "gbatistaferreira@gmail.com" },
    { "name": "Haroldo Emerson", "phone": "+5563984589691", "email": "msom.info@gmail.com" },
    { "name": "Isolda", "phone": "+5563", "email": "isoldapacini@gmail.com" },
    { "name": "Joana", "phone": "+5563", "email": "joana@cee.to.gov.br" },
    { "name": "José Wilton", "phone": "+5563", "email": "wiltonxamb@gmail.com" },
    { "name": "Josicleia", "phone": "+5563", "email": "cleia_toc@hotmail.com" },
    // { "name": "Julimaria", "phone": "+5563", "email": "julimariabc@gmail.com" },
    // { "name": "Luzineth", "phone": "+5563", "email": "lujujana@hotmail.com" },
    { "name": "Maria Jacy", "phone": "+5563", "email": "jacylima85@gmail.com" },
    { "name": "Maria do Socorro", "phone": "+5563", "email": "mariamrp7@gmail.com" },
    { "name": "Maria Cristã", "phone": "+5563", "email": "mcmascarenhas47@hotmail.com" },
    { "name": "Marília", "phone": "+5563", "email": "mariliamascarenhas@gmail.com" },
    { "name": "Marly", "phone": "+5563", "email": "marlycarneiro41@gmail.com" },
    // { "name": "Neidy", "phone": "+5563999456971", "email": "neidyalmeidapsicologia@gmail.com" },
    { "name": "Raimundo Neto", "phone": "+5563", "email": "professorneto2016@gmail.com" },
    { "name": "Robson", "phone": "+5563", "email": "rbs.vilanova@gmail.com" },
    { "name": "Rosita", "phone": "+5563", "email": "rositalima@gmail.com" },
    { "name": "Simone", "phone": "+5563", "email": "simonebarrosandrea@gmail.com" },
    // { "name": "Telma", "phone": "+5563", "email": "telmarpc@gmail.com" },
    { "name": "Vânia", "phone": "+5563", "email": "vaninhamoraes.resendemoraes97@gmail.com" },
    { "name": "Vera", "phone": "+5563", "email": "velux.gra@gmail.com" },
  ];

  public bingoList: IBingo[]
  bingo: IBingo = { words: [] }

  wordList = ["asdf", "fdas"]

  qtdNumerosPorCartela = 7
  qtdCartelas = 22

  constructor() { }

  ngOnInit(): void {
    this.bingoList = []
    this.index()
  }

  index() {
    // this.criarBingo(this.participants)
    this.bingo = new Bingo(this.wordList);
    this.bingo.words?.push(this.wordList[this.getStep(this.wordList)])
    console.log(this.bingo)
  }

  criarCartela(wordList: string[]): IBingo {
    let cartela: IBingo
    for (let i = 0; i < this.qtdNumerosPorCartela; i++) {
      cartela.words.push(wordList[this.getStep(wordList)])
    }
    return cartela
  }

  // criarBingo(participantList: IParticipant[]): IBingo[] {

  //   return
  // }

  getStep(list: any[]): number {
    return this.getRandomArbitrary(0, list.length);
  }

  getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
