import {Component} from 'angular2/core';
import {ContactListComponent} from './contact-list';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NewContactComponent} from './newContact.component';
import {Contact} from './contact';
import {HttpTestComponent} from './httpTest.component';
import {ParentComponent} from './parent.component';

@Component({
    selector: 'my-app',
    templateUrl: "../templates/app.template.html",
    directives : [ContactListComponent,
    ROUTER_DIRECTIVES,NewContactComponent,HttpTestComponent,
    ParentComponent]
})

@RouteConfig([
    {path: "/contacts", name :'Contacts',component : ContactListComponent, useAsDefault : true},
    {path: "/newContacts", name :'NewContacts',component : NewContactComponent},
     {path: "/httpTest", name :'HttpTestComponent',component : HttpTestComponent},
        {path: "/parentChild", name :'ParentComponent',component : ParentComponent}
])

export class AppComponent {
}

