import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate() {
    localStorage.setItem('user', 'Ujjwal');
  }

  checkAuthentication() {
    return (localStorage.getItem('user') === 'Ujjwal');
  }
}
