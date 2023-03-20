import { UtilService } from 'src/app/shared/services/util.service';
import { Component, OnInit } from '@angular/core';
import { IDimension } from 'src/app/interfaces/Dimension';

@Component({
    selector: 'app-dimension',
    templateUrl: './dimension.component.html',
    styleUrls: ['./dimension.component.less']
})
export class DimensionComponent implements OnInit {

    public dimensionList: IDimension[];

    constructor() { }

    ngOnInit(): void {
        UtilService.Title.setTitle('CEE | Dimension');
    }

}
