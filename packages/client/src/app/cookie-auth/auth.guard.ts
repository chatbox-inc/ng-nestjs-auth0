import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "./auth.service";
import {catchError, distinct, map, switchMap, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("hoge")
    return this.auth.user$.pipe(
      tap(r=> console.log("pipe fire")),
      distinct(),
      tap(r=> console.log("pipe fire2",r)),
      switchMap((userOrNull)=>{
        if(userOrNull === null){
          return this.http.get<{user:any}>("/api/profile").pipe(
            catchError(()=>of({user:null})),
            map((result) => result.user)
          )
        }else{
          return of(userOrNull)
        }
      }),
      tap(async (userOrNull)=>{
        this.auth.login(userOrNull)
      }),
      switchMap((userOrNull) => {
        if(userOrNull === null){
          return of(this.router.parseUrl(`/cookie/login?redirect_to=${state.url}`))
        }else{
          return of(true)
        }
      }),
    )
  }

}
