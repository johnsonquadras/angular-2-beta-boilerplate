import {Component} from 'angular2/core';
import {Contact} from './contact';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {OnInit} from 'angular2/core';

@Component({
    selector : 'contact-list',
    templateUrl: "../templates/list.template.html",
    directives : [ContactComponent],
    providers : [ContactService]
})

export class ContactListComponent implements OnInit{ 
      public contacts: [Contact];
    
   constructor( private contactService : ContactService) {}    
    
    public selectedContact: any = null;
    public showDetail = false

    public showDetails(selectedContact) {
        this.showDetail = true;
        this.selectedContact = selectedContact;
    }
    
    ngOnInit() : any {
        this.getContacts();
    }
    
    getContacts() {
        this.contactService.getContacts().then((contacts:[Contact]) => this.contacts = contacts);
    }
}