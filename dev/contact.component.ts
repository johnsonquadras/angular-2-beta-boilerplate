import {Component} from 'angular2/core';
import {Contact} from './contact';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';



@Component({
    selector : 'contact',
    templateUrl : '../templates/contact.tmp.html',
    inputs : ['selectedContact']  
})

export class ContactComponent {
    public selectedContact = null;
    
    
    constructor(private router : Router,private routeParam : RouteParams) {
        
    }
    
    createNewContact ( newContact) {
        console.log("new contact");
        console.log(newContact.secondName)
        // var params : any= {
        //     firstName : newContact.firstName,
        //     secondName : newContact.secondName,
        //     age : newContact.age,
        //     phone : newContact.phone,
        //     email : newContact.email
        // }
        
        this.router.navigate(['NewContacts', {'secondName' : newContact.secondName}])
    }
    
  
    ngOnInit() : any {
        console.log(this.routeParam.get('secondName'));
    }
}