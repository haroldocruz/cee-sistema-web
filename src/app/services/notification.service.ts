import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private toastr: ToastrService) { }

    showSuccess(message: string, title: string) {
        this.toastr.success(message, title);
    }

    showWarning(message: string, title: string) {
        this.toastr.warning(message, title);
    }

    showInfo(message: string, title: string) {
        this.toastr.info(message, title);
    }

    showError(message: string, title: string) {
        this.toastr.error(message, title);
    }

    showMessage(message: string, title: string) {
        this.toastr.show(message, title);
    }

    showHTMLMessage(message: string, title: string) {
        this.toastr.show(message, title, { enableHtml: true });
    }

    isConfirm(question: string = "Confirmar ação?") {
        if (!confirm(question)) {
            this.showWarning("Ação cancelada!", "Ops!");
            return false;
        }
        return true;
    }
}
