import { Component, OnInit } from '@angular/core';

interface IInstitutionUserTemplate {
    "group": { "name": string },
    "userName": string,
    "profileName": string,
    address: string,
    phone: string,
    email: string,
    image: string
}

@Component({
    selector: 'app-institution-user',
    templateUrl: './institution-user.component.html',
    styleUrls: ['./institution-user.component.less']
})
export class InstitutionUserComponent implements OnInit {

    userList: IInstitutionUserTemplate[]

    constructor() { }

    ngOnInit(): void {
        this.mockUserIndex()
    }

    mockUserIndex() {
        this.userList = [
            {
                "group": { "name": "AEIOU - Associação Educacional Irmãos Oliveira Uchimura" },
                "userName": "Emerson Cruz",
                "profileName": "Procurador",
                address: "rua 26, quadra 119, lote 21, Jardim Aureny III",
                phone: "+55 63 98458-9691",
                email: "msom.info@gmail.com",
                image: "../../../../assets/avatar5.png"
            },
            {
                "group": { "name": "AETO - Associação Educacional do Tocantins" },
                "userName": "Emerson Cruz",
                "profileName": "Auxiliar",
                address: "Jardim Aureny III, rua 26, quadra 119, lote 21",
                phone: "+55 63 98458-9691",
                email: "emerson@cee.to.gov.br",
                image: "../../../../assets/avatar5.png"
            },
            {
                "group": { "name": "AETO - Associação Educacional do Tocantins" },
                "userName": "Joana Santos",
                "profileName": "Procuradora",
                address: "904 Sul, rua 26, quadra 119, lote 21",
                phone: "+55 63 98458-9691",
                email: "joana@cee.to.gov.br",
                image: "../../../../assets/avatar2.png"
            },
            {
                "group": { "name": "AEIOU - Associação Educacional Irmãos Oliveira Uchimura" },
                "userName": "Joana Santos",
                "profileName": "Auxiliar",
                address: "904 Sul, rua 26, quadra 119, lote 21",
                phone: "+55 63 98458-9691",
                email: "joana@cee.to.gov.br",
                image: "../../../../assets/avatar2.png"
            },
            {
                "group": { "name": "Nome da mantida vinculada" },
                "userName": "Nome do Usuário",
                "profileName": "Perfil de vínculo",
                address: "Endereço principal do usuário",
                phone: "Telefone principal",
                email: "E-mail principal",
                image: "../../../../assets/avatar1.png"
            },
            {
                "group": { "name": "Nome da mantida vinculada" },
                "userName": "Nome do Usuário",
                "profileName": "Perfil de vínculo",
                address: "Endereço principal do usuário",
                phone: "Telefone principal",
                email: "E-mail principal",
                image: "../../../../assets/avatar3.png"
            },
            {
                "group": { "name": "Nome da mantida vinculada" },
                "userName": "Nome do Usuário",
                "profileName": "Perfil de vínculo",
                address: "Endereço principal do usuário",
                phone: "Telefone principal",
                email: "E-mail principal",
                image: "../../../../assets/avatar4.png"
            },
            {
                "group": { "name": "Nome da mantida vinculada" },
                "userName": "Nome do Usuário",
                "profileName": "Perfil de vínculo",
                address: "Endereço principal do usuário",
                phone: "Telefone principal",
                email: "E-mail principal",
                image: "../../../../assets/avatar5.png"
            }
        ]
    }

}
