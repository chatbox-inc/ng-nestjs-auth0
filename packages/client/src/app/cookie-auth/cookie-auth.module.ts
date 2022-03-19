import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieAuthRoutingModule } from './cookie-auth-routing.module';
import {LoginPageComponent} from "./login-page/login-page.component";
import {SignupPageComponent} from "./signup-page/signup-page.component";
import {MypagePageComponent} from "./mypage-page/mypage-page.component";
import { LayoutComponent } from './layout/layout.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { Mypage2PageComponent } from './mypage2-page/mypage2-page.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LoginPageComponent,
    SignupPageComponent,
    MypagePageComponent,
    Mypage2PageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CookieAuthRoutingModule,
  ]
})
export class CookieAuthModule { }
