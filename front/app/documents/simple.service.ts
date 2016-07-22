import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';


import { Observable }     from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 



@Injectable ()
export class SimpleService{

  constructor(public http:Http) {}

  getFiles(): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url: string = "http://localhost:4000/files/";
    return this.http.get(url, {
      headers: headers
    })
    .map(this.extractData)
    .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    console.log(error)
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  
	
}