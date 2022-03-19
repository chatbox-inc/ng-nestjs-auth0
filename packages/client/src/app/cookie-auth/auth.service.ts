import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

interface User{
  email: string,
  firstName: string,
  lastName: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user$

  constructor() {
    this._user$ = new BehaviorSubject<User|null>(null)
  }

  get user$(){
    return this._user$.asObservable()
  }

  login(user:User){
    this._user$.next(user)
  }

  logout(){
    this._user$.next(null)
  }
}
