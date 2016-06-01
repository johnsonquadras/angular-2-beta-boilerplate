import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
@Component({
    templateUrl : '../templates/newContact.tmp.html',
    providers  : [ContactService]
})

export class NewContactComponent {
    public secondName = 'test';
    
   constructor(private routeParams : RouteParams,
    private contactService : ContactService ,
     private router : Router) {
       
   }
   
   onAdd ( first,last,email,age) {
        const newContact : Contact =  
        {
        firstName: first,
        secondName: last,
        phone:  '',
        email: email,
        age: age };
    console.log('adding contact')
       this.contactService.addContacts(newContact);
       this.router.navigate(['Contacts']);
   }
   
   ngOnInit() : any {
       this.secondName = this.routeParams.get('secondName');
   }
}