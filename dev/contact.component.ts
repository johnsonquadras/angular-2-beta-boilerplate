import {Component} from 'angular2/core';


@Component({
    selector : 'contact',
    templateUrl : '../templates/contact.tmp.html',
    inputs : ['selectedContact']  
})

export class ContactComponent {
    public selectedContact = {}
}