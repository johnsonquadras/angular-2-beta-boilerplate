import {Component} from 'angular2/core';
import  {ChildComponent} from './child.component'



@Component({
    selector : 'parent',
    templateUrl : '../templates/parent.template.html',
    directives : [ChildComponent]
})
export class ParentComponent {
    
    //Variable 
    public value : string = "Hello there !!";
    
    constructor() {
    }
    
    onChange(val) {
        this.value = val;
    }
    
}