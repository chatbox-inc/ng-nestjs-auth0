import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./cookie-auth/login-page/login-page.component";
import {MypagePageComponent} from "./cookie-auth/mypage-page/mypage-page.component";
import {SignupPageComponent} from "./cookie-auth/signup-page/signup-page.component";

const routes: Routes = [
  {path:"",redirectTo:"cookie/login",pathMatch:"full"},
  {path: "cookie", loadChildren: () => import("./cookie-auth/cookie-auth.module").then(m=>m.CookieAuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
