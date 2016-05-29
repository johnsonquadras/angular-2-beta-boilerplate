import {Component} from 'angular2/core';
import {Contact} from './app.component';
import {ContactComponent} from './contact.component';
@Component({
    selector : 'contact-list',
    templateUrl: "../templates/list.template.html",
    directives : [ContactComponent]
})

export class ContactListComponent { 
      public contacts: [Contact] = [
        {
            firstName: "Johnson",
            secondName: "Quadras",
            phone: "9xxx99",
            email: "johnsonquadras@gmail.com",
            age: 27
        },
        {
            firstName: "Jess",
            secondName: "Quadras",
            phone: "9xxx99",
            email: "xx@gmail.com",
            age: 25
        }
    ];
    
    public selectedContact: any = {};
    public showDetail = false

    public showDetails(selectedContact) {
        this.showDetail = true;
        this.selectedContact = selectedContact;
    }

}