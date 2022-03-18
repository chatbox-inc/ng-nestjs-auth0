import {Injectable, Scope} from '@nestjs/common';
import {AuthenticationClient, ManagementClient} from "auth0"
import {Connection, getConnection} from "typeorm";
import {UserEntity} from "./entities/user.entity";
import {UserAuthEntity} from "./entities/user-auth.entity";

@Injectable({
  scope:Scope.REQUEST
})
export class AppService {

  private manageClient;
  private authenClient;

  constructor() {
    // console.log("[AppService] service created")
    // const cred = {
    //   domain: process.env.AUTH0_DOMAIN,
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //   scope: 'create:users'
    // }
    // this.manageClient = new ManagementClient(cred)
    // this.authenClient = new AuthenticationClient(cred)
  }

  getHello(): string {
    return 'Hello World!';
  }

  async signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
   ): Promise<any> {

    const connection: Connection = await getConnection();
    const user = new UserEntity()
    user.password = password //TODO hashed
    user.email = email
    user.firstName = firstName
    user.lastName = lastName
    await connection.manager.save(user)

    const auth = new UserAuthEntity()
    auth.token = `token-${user.id}`
    auth.user = user
    await connection.manager.save(auth)
    return {user,auth}

    // return await this.manageClient.createUser({
    //   connection: "Username-Password-Authentication",
    //   email,
    //   password,
    //   name,
    //   email_verified: true,
    // })
  }

  async login(email: string, password: string): Promise<any> {
      const connection: Connection = await getConnection();
      const user = await connection.manager.findOne(
        UserEntity,{
        email,password
      })
      return user
    // return await this.authenClient.passwordGrant({
    //   realm: "Username-Password-Authentication",
    //   username:email,
    //   password,
    // })
  }

  async profile(id: string): Promise<any> {
    return await this.manageClient.getUser({
      id
    })
  }
}
