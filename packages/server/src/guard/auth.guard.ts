import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import {SessionService} from "../session.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private session: SessionService) {
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = this.session.user
    if(user){
      // セッション内のユーザデータが信用できない運用のときは
      // ここでデータを更新する
      return true
    }else{
      return false
    }
  }
}
