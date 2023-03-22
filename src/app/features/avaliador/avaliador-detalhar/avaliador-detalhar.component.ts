import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
    selector: 'app-avaliador-detalhar',
    templateUrl: './avaliador-detalhar.component.html',
    styleUrls: ['./avaliador-detalhar.component.less']
})
export class AvaliadorDetalharComponent implements OnInit {

    constructor(public util: UtilService) { }

    public tpl: IAvaliadorDetalharTemplate;
    @Input() user: IUser

    ngOnInit(): void {
        this.user = {
            name: 'Nome do Avaliador',
            socialName: 'Nome social do avaliador',
            contact: { addressList: [{ zipcode: 77062060 }], emailList: [{ address: 'msom.info@gmail.com' }], phoneList: [{ number: 5563984589691, description: 'Descrição do telefone' }] }
        } as IUser;
        this.tpl = {} as IAvaliadorDetalharTemplate;
        mock(this);
    }

}

interface IAvaliadorDetalharTemplate {
    codPossuiFormulario: number;
    codEnquadramentoAvaliadorGrupo: number;

    grupo: string;
    nome: string;
    detalhe: string;
    empresa: {
        orgao: string;
        setor: string;
    };
    documentacao: string;
    prioridade: string;
    relacionamentoList: string[];
    disponivelPara: string;
    legislacao: string;
    canalComunicacao: string;
    filaAtendimento: string;
    arquivoList: {
        nome: string;
        descricao: string;
        link: string;
    }[];
}

function mock(thiss): void {
    thiss.tpl = {
        codPossuiFormulario: 1,
        codEnquadramentoAvaliadorGrupo: 0,
        grupo: 'Autorizações e licenças',
        nome: 'José Washington Santos Lima',
        detalhe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptas numquam praesentium sapiente consequatur accusamus dolorum ipsam, officia provident voluptates fugiat? Nihil voluptatibus et aperiam dolorum numquam, obcaecati voluptatum neque!',
        empresa: {
            orgao: 'Secretaria da Educação do Tocantins',
            setor: 'Secretaria Executiva do CEE/TO',
        },
        documentacao: 'Certidão do cartório de registro de imóveis',
        prioridade: 'O atendimento presencial obedece as prioridades por lei',
        relacionamentoList: ['Técnico', 'Conselheiro'],
        disponivelPara: 'Contribuintes de Brasília, pessoa física ou jurídica',
        legislacao: 'Lei nº 2134, de 10/10/1998',
        canalComunicacao: 'canalComunicacao',
        filaAtendimento: 'filaAtendimento',
        arquivoList: [{
            nome: 'Nome do arquivo 1',
            descricao: 'Descricao para o arquivo 1',
            link: 'link1',
        }, {
            nome: 'Nome do arquivo 2',
            descricao: 'Descricao para o arquivo 2',
            link: 'link2',
        }]
    };
}