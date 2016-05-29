import {Component} from 'angular2/core';
import {ContactListComponent} from './contact-list';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NewContactComponent} from './newContact.component';
import {Contact} from './contact';

@Component({
    selector: 'my-app',
    templateUrl: "../templates/app.template.html",
    directives : [ContactListComponent,ROUTER_DIRECTIVES,NewContactComponent]
})

@RouteConfig([
    {path: "/contacts", name :'Contacts',component : ContactListComponent, useAsDefault : true},
    {path: "/newContacts", name :'NewContacts',component : NewContactComponent}
])

export class AppComponent {
}

