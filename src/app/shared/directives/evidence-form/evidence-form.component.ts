import { cloneDeep, isEmpty } from 'lodash';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { IEvidence } from 'src/app/interfaces/Evidence';
import { IAddress } from 'src/app/interfaces/Contact';

@Component({
  selector: 'sd-evidence-form',
  templateUrl: './evidence-form.component.html',
  styleUrls: ['./evidence-form.component.less']
})
export class EvidenceFormComponent implements OnInit {

    evidenceListRef: IEvidence[];
    evidence: IEvidence;
    evidenceList: IEvidence[];

    constructor(
        public bsModalRef: BsModalRef
    ) { }

    ngOnInit(): void {
        this.evidence = {}
    }

    addressToString(address: IAddress) {
        const array = [address.zipcode, address.country, address.state, address.city, address.district, address.place, address.number]
        let ats = ''
        array.forEach((e, i, l) => {
            if (e)
            ats += (ats.length > 0) ? ', ' + e : e;
        })
        return ats;
    }

    insertEvidence(){
        if(isEmpty(this.evidence)) return;

        this.evidenceList.push(this.evidence);
        this.evidence = {};
    }

    editEvidence(address: IEvidence){
        this.evidence = cloneDeep(address);
        this.removeEvidence(address);
    }

    removeEvidence(address: IEvidence){
        const idx = this.evidenceList.indexOf(address);
        this.evidenceList.splice(idx, 1);
    }

    confirm(){
        this.evidenceListRef.splice(0, this.evidenceListRef.length)
        this.evidenceListRef.push(...this.evidenceList);
        this.bsModalRef.hide();
    }
}
