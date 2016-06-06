import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http'
import {Response} from 'angular2/http'
import {Headers} from 'angular2/http'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
    
    constructor(private http : Http) {
      
    }
    
    getCurrentTime(arg) {
        if(arg) {
             setTimeout(function() {
            this.getCurrentTime(12);
        }, 1100);
        }
       
          //Observables
        return this.http.get("http://date.jsontest.com").
          map(this.extractData)
                    .catch(this.handleError);
    }
    
                     
  private extractData(res: Response) {
    let body = res.json();
    console.log(body)
    return body || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    // let errMsg = (error.message) ? error.message :
    //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(error.message); // log to console instead
    return Observable.throw(error.message);
  }
    
    postJson(inJson) {
         
       var params = 'json='+JSON.stringify(inJson);
       let headers = new Headers();
       headers.append('Content-Type','application/x-www-form-urlencoded');
       
       return this.http.post('http://validate.jsontest.com',params, {
           headers : headers
       }) .map(this.extractData)
                    .catch(this.handleError);
    }
   
}