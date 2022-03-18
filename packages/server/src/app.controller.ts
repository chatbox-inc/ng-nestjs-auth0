import {Body, Controller, Get, Post, Session, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {Connection, createConnection, getConnection} from "typeorm";
import {UserEntity} from "./entities/user.entity";
import {SessionService} from "./session.service";
import {AuthGuard} from "./guard/auth.guard";

@Controller()
export class AppController {
  constructor(
      public appService: AppService,
      private session: SessionService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("signup")
  async signup(
    @Body() body
  ): Promise<any> {
    // ユーザの挿入
    const {user,auth} = await this.appService.signup(
      "infoddddddddddddddd@chatbox-inc.com",
      "hogehoge",
      "hoge",
      "piyo"
    );
    this.session.user = user

    return {
      user,
      token: auth.token
    };
  }

  @UseGuards(AuthGuard)
  @Get("/profile")
  async profile(){
    return {
      user: this.session.user
    }
  }

  @Post("/login")
  async login(@Body() body){
    const {user,auth} = await this.appService.login(
        "info22ddddddddddddd@chatbox-inc.com",
        "hogehoge",
    );
    this.session.user = user

    return {
      user: this.session.user
    }
  }
}
