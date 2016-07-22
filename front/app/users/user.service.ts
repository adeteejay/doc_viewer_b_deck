import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


import { Observable }     from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 


@Injectable()
export class UserService {
  // public redirectUrl:string;
  public loggedIn: boolean = false;
  constructor(public http:Http) {}

  doLogin(credentials: string): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url: string = "http://localhost:4000/authenticate";
    return this.http.post(url, credentials, {
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
  

  logout() {
    window.localStorage.removeItem('token')
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}