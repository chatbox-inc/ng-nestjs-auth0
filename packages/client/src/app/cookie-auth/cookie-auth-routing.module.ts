import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {MypagePageComponent} from "./mypage-page/mypage-page.component";
import {SignupPageComponent} from "./signup-page/signup-page.component";
import {AuthGuard} from "./auth.guard";
import {Mypage2PageComponent} from "./mypage2-page/mypage2-page.component";

const routes:Routes = [
  {path:"login",component: LoginPageComponent},
  {path:"mypage",component: MypagePageComponent, canActivate: [AuthGuard]},
  {path:"mypage2",component: Mypage2PageComponent, canActivate: [AuthGuard]},
  {path:"signup",component: SignupPageComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class CookieAuthRoutingModule { }
