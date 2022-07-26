import { Component, Input } from "@angular/core";
import { BackendErrorsInterface } from "src/app/auth/types/backend-errors.interface";

@Component({
    selector: 'mc-backend-error-messages',
    templateUrl: './backend-error-messages.component.html'
})
export class BackendErrorMessagesComponent {

    errorMessages: string[];

    @Input('backendError') backendErrorProps: BackendErrorsInterface;

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.errorMessages = Object.keys(this.backendErrorProps).map((name: string) => {
            const messages = this.backendErrorProps[name].join(' ');
            return `${name} ${messages}`;
        })
    }

}