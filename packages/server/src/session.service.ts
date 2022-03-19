import {Inject, Injectable, Scope} from "@nestjs/common";
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import {UserEntity} from "./entities/user.entity";

declare module 'express-session' {
   interface SessionData {
     views: number;
   }
}

@Injectable({ scope: Scope.REQUEST })
export class SessionService {

  constructor(@Inject(REQUEST) private request: Request) {}

  session(): any{
    return this.request.session
  }

  get user():UserEntity{
    return this.session().user
  }

  set user(user:UserEntity){
    this.session().lota
    this.session().user = user
  }



}