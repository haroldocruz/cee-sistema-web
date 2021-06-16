import { Participant, IParticipant } from './../Participant';
import { SendMailService, IEmailData, IMessageResponse } from './../../../../services/send-mail.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.less'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('5s ease-out',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('5s ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class OneComponent implements OnInit {

  participantList: IParticipant[]
  participantList2: IParticipant[]
  message: IMessageResponse;

  private participants = [

    // "01 Educação Infantil",
    // "02 Ensino Fundamental",
    // "03 Ensino Médio",
    // "04 Educação Profissional",
    // "05 Educação Superior",
    // "06 Educação Especial",
    // "07 Educação do Campo",
    // "08 Educação de Jovens e Adultos",
    // "09 Formação de professores",
    // "10 Gestão democrática e o currículo da educação básica"

    // "Aldizia",
    // "Cláudia Alves Lima",
    // "Cláudia Sousa",
    // "Denise Frasão",
    // "Eliane",
    // "Elisete",
    // "Emerson Cruz",
    // "Evandro",
    // "Isteli",
    // "Jacy Lima",
    // "Jeane",
    // "Joana",
    // "Joeder Lacerda",
    // "Joelma Lopes",
    // "José Wilton",
    // "Josicléia",
    // "Láisa",
    // "Lara",
    // "Larissa Ribeiro",
    // "Luzinethe Alves",
    // "Maria Bonfim",
    // "Maria Jesus",
    // "Marivone",
    // "Marly",
    // "Raimundo Pessoa",
    // "Rayssa",
    // "Robson",
    // "Rose Mary",
    // "Rosimar Mendes",
    // "Thiago Franco",
    // "Ulissevania",
    // "Wilzeny",
    // "+55 63 98119-9849",
    // "+55 63 98405-2981",
    // "+55 63 98469-7189",
    // "+55 63 99259-1841",
    // "+55 63 99284-1977",
    // "+55 63 99297-8386",
    // "+55 63 99985-2230",
    // "+55 63 99989-4638, "email":"""

    // { "name": "Haroldo", "phone": "+5563984589691", "email": "msom.info@gmail.com" },
    // { "name": "Emerson", "phone": "+5563984589691", "email": "sigilo.tech@gmail.com" },
    // { "name": "Pereira", "phone": "+5563984589691", "email": "jacylima85@gmail.com" },

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

  wordList = ["pastores", "feliz natal"]
  bingoList = [
    { "palavras": ["", ""]}
  ]

  disable: boolean;
  isDisabled: boolean;
  step: number;
  stepPublic: number;
  isWinner: boolean;
  winner: string;

  constructor(public sendMailService: SendMailService) { }

  ngOnInit(): void {
    this.isWinner = false;
    this.disable = false;
    this.isDisabled = false;

    this.index();

  }

  index() {
    this.participantList = new Array<IParticipant>()
    for (let i = 0; i < this.participants.length; i++) {
      this.participantList.push(new Participant(this.participants[i]));
    }

    this.participantList2 = new Array<IParticipant>()
    for (let i = 0; i < this.participants.length; i++) {
      this.participantList2.push(new Participant(this.participants[i]));
    }
  }

  reset() {
    this.isDisabled = false;
    this.index();
  }

  async start() {
    this.isDisabled = true;
    await this.draw();
    await this.sendMailAll();
  }

  async draw() {
    do {
      this.reset();
      let i = 0;
      do {
        this.stepPublic = i;

        this.step = this.getStep(this.participantList2);
        console.log(`${i} ${this.step}`)

        if (this.participantList[i].email === this.participantList2[this.step].email) {
          console.error(`\nCONFLITO ${this.participantList[i].name}`);

          if (this.participantList2.length === 1) {
            console.log(`\nRESET ACIONADO`);
            break;
          }

          do {
            let newStep = this.getStep(this.participantList2);

            if (this.step === newStep) continue;
            else this.step = newStep;
            console.log(`RESOLVIDO ${i} ${this.step}`); break;
          } while (true);
        }

        await this.sleep(400)
        this.participantList[i].secretFriend = this.participantList2[this.step];
        this.participantList2.splice(this.step, 1);

        // i++;
      } while (++i < this.participantList.length)
      if (i === this.participantList.length) break;
    } while (true);
  }

  async sendMailAll() {
    for (let i = 0; i < this.participantList.length; i++) {
      await this.sleep(400);
      this.sendMailToAllParticipants(this.participantList[i]);
    }

    this.sendMailToAdministrator(this.participantList);
  }

  sendMailToAllParticipants(participant: IParticipant) {

    const emailData: IEmailData = {
      from: "msom.info@gmail.com",
      to: participant.email,
      subject: "CEE - SORTEIO DO AMIGO-SECRETO",
      text: `Seu amigo secreto é: ${participant.secretFriend?.name}`
    }

    this.sendMailService.sendMail(emailData).subscribe((data) => {
      participant.message = data;
    })
  }

  sendMailToAllParticipants_fake(participant: IParticipant) {

    const emailData: IEmailData = {
      from: "msom.info@gmail.com",
      to: participant.email,
      subject: "CEE - SORTEIO DO AMIGO-SECRETO",
      text: `Seu amigo secreto é: ${participant.secretFriend?.name}`
    }

      participant.message = { isOk: true, message: "Email enviado com sucesso!"};
  }

  sendMailToAdministrator(participantList: IParticipant[]) {

    const emailData: IEmailData = {
      from: "msom.info@gmail.com",
      to: "msom.info@gmail.com",
      subject: "CEE - SORTEIO DO AMIGO-SECRETO (LISTA)",
      text: `Lista dos amigos secretos: ${concatenar(participantList)}`
    }

    function concatenar(participantList: IParticipant[]) {
      let text = "";
      for (let i = 0; i < participantList.length; i++) {
        text = text + `\n${participantList[i].name} = ${participantList[i].secretFriend.name}`
      }
      return text;
    }

    this.sendMailService.sendMail(emailData).subscribe((data) => {
    })
  }

  getStep(list: any[]): number {
    return this.getRandomArbitrary(0, list.length);
  }

  getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // getParticipant(participantList: IParticipant[], step: number): IParticipant {
  //   return participantList[step]
  // }

  // getWinner(): IParticipant {
  //   const winner = this.participantList[this.step];
  //   this.participantList2.push(winner);



  //   this.sendMailService.sendMail(emailData).subscribe((data) => { });

  //   return winner;
  // }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
