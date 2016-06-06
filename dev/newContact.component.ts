import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {FormBuilder} from 'angular2/common';
import {ControlGroup} from 'angular2/common';
import {Validators} from 'angular2/common';

@Component({
    templateUrl : '../templates/newContact.tmp.html',
    providers  : [ContactService]
})

export class NewContactComponent {
    public secondName = 'test';
    public myForm : ControlGroup;
    
   constructor(private routeParams : RouteParams,
    private contactService : ContactService ,
     private router : Router,
     private formBuilder : FormBuilder) {
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
       this.contactService.addContacts(this.myForm.value);
       this.router.navigate(['Contacts']);
   }
   
   ngOnInit() : any {
       //Taking Values from params
       this.secondName = this.routeParams.get('secondName');
       this.myForm = this.formBuilder.group({
           'firstName' :['',Validators.required],
           'lastName': ['',Validators.required],
           'phone': ['',Validators.required],
           'email': ['',Validators.required],
            'age': ['',Validators.required]
       });
       
       //['default','validationm']
   }
}