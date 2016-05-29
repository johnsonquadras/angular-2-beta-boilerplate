import {Component} from 'angular2/core';
import {ContactListComponent} from './contact-list';
@Component({
    selector: 'my-app',
    templateUrl: "../templates/app.template.html",
    directives : [ContactListComponent]
})

export class AppComponent {
}

export interface Contact {
    firstName: string,
    secondName: string,
    phone: string,
    email: string,
    age: number
}