import { Component, OnInit } from '@angular/core';

interface IInstitutionUserComponent {
    "group": { "name": string },
    "userName": string,
    "profileName": string,
    address: string,
    phone: string,
    email: string,
    avatar: string
}

@Component({
    selector: 'app-institution-user',
    templateUrl: './institution-user.component.html',
    styleUrls: ['./institution-user.component.less']
})
export class InstitutionUserComponent implements OnInit {

    userList: IInstitutionUserComponent[]

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
                avatar: "../../../../assets/avatar5.png"
            },
            {
                "group": { "name": "AETO - Associação Educacional do Tocantins" },
                "userName": "Emerson Cruz",
                "profileName": "Auxiliar",
                address: "Jardim Aureny III, rua 26, quadra 119, lote 21",
                phone: "+55 63 98458-9691",
                email: "emerson@cee.to.gov.br",
                avatar: "../../../../assets/avatar5.png"
            },
            {
                "group": { "name": "AETO - Associação Educacional do Tocantins" },
                "userName": "Joana Santos",
                "profileName": "Procuradora",
                address: "904 Sul, rua 26, quadra 119, lote 21",
                phone: "+55 63 98458-9691",
                email: "joana@cee.to.gov.br",
                avatar: "../../../../assets/avatar2.png"
            },
            {
                "group": { "name": "AEIOU - Associação Educacional Irmãos Oliveira Uchimura" },
                "userName": "Joana Santos",
                "profileName": "Auxiliar",
                address: "904 Sul, rua 26, quadra 119, lote 21",
                phone: "+55 63 98458-9691",
                email: "joana@cee.to.gov.br",
                avatar: "../../../../assets/avatar2.png"
            },
            {
                "group": { "name": "Nome da mantida vinculada" },
                "userName": "Nome do Usuário",
                "profileName": "Perfil de vínculo",
                address: "Endereço principal do usuário",
                phone: "Telefone principal",
                email: "E-mail principal",
                avatar: "../../../../assets/avatar.png"
            },
            {
                "group": { "name": "Nome da mantida vinculada" },
                "userName": "Nome do Usuário",
                "profileName": "Perfil de vínculo",
                address: "Endereço principal do usuário",
                phone: "Telefone principal",
                email: "E-mail principal",
                avatar: "../../../../assets/avatar3.png"
            },
            {
                "group": { "name": "Nome da mantida vinculada" },
                "userName": "Nome do Usuário",
                "profileName": "Perfil de vínculo",
                address: "Endereço principal do usuário",
                phone: "Telefone principal",
                email: "E-mail principal",
                avatar: "../../../../assets/avatar4.png"
            },
            {
                "group": { "name": "Nome da mantida vinculada" },
                "userName": "Nome do Usuário",
                "profileName": "Perfil de vínculo",
                address: "Endereço principal do usuário",
                phone: "Telefone principal",
                email: "E-mail principal",
                avatar: "../../../../assets/avatar5.png"
            }
        ]
    }

}
