import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
    declarations: [
        ErrorMessageComponent
    ],
    imports: [ CommonModule ],
    exports: [
        ErrorMessageComponent
    ],
    providers: [],
})
export class ErrorMessageModule {}