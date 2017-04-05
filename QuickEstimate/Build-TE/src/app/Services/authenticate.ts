import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Authenticate provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Authenticate {

  constructor(public http: Http) {
    console.log('Hello Authenticate Provider');
  }
      public adalConfig(): any {
        return {
            tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
            clientId: '0e8fe77a-9555-422e-9f04-57f349a87e76',
            // redirectUri: "http://localhost:3000/",
            // postLogoutRedirectUri: window.location.origin + '/'
        };
    }
}