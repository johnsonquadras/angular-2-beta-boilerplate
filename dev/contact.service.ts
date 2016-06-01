import {Injectable} from 'angular2/core';
import {CONTACTS} from './mock-contact';
import {Contact} from './contact';


@Injectable()
export class ContactService {
    getContacts() {
        return Promise.resolve(CONTACTS)
    }
    
    addContacts( newContact : Contact) {
        return Promise.resolve(CONTACTS).then( (CONTACTS : any) => { CONTACTS.push(newContact)  } )
    }
}