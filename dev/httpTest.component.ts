import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {HttpService} from './http-test.service';


@Component({
    selector : 'http-test',
    templateUrl : '../templates/http-test.tmp.html',
    providers : [HttpService]
})

export class HttpTestComponent {
   getData: string;
   postData : string;
   
   constructor(private httpTestservice : HttpService) {
   }
   
   /**
    * 
    */
   testGet() {
       this.httpTestservice.getCurrentTime().subscribe(
           resp => {
               this.getData = JSON.stringify(resp)
            }
            ,error => {
                alert('Error response'+error);
            }
       )
   }
   
   
   testPost() {
       var json = {name : 'hello'}
       this.httpTestservice.postJson(json).subscribe(
            resp => {
                console.log(resp)
               this.postData = JSON.stringify(resp)
            }
            ,error => {
                alert('Error response'+error);
            }
       )
   }
   
}