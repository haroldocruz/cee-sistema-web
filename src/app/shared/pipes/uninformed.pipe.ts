import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from "lodash";
import { MaskApplierService, MaskPipe } from 'ngx-mask';

@Pipe({
    name: 'uninformed'
})
export class UninformedPipe implements PipeTransform {

    transform(value: string): string {
        return value || 'Não informado';
    }

}
