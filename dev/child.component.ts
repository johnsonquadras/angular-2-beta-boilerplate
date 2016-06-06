import {Component} from 'angular2/core';
import {EventEmitter} from 'angular2/core';



@Component({
    selector : 'child',
    templateUrl : '../templates/child.template.html',
    inputs : ['myName'],
    outputs : ['myEvent']
})
export class ChildComponent {
    
    //Variable 
     myName : string;
     myEvent  = new EventEmitter<string>();
    
    constructor() {
        console.log("My Name is not yet defined"+this.myName);
    }
    
    fireEvent(value) {
        this.myEvent.emit(value);
    }
    
    
}