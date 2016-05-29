import {Component} from 'angular2/core';
import {Contact} from './contact';

@Component({
    selector : 'contact',
    templateUrl : '../templates/contact.tmp.html',
    inputs : ['selectedContact']  
})

export class ContactComponent {
    public selectedContact = {}
}