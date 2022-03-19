import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.http.post("/api/logout",{}).subscribe(r=>{
      this.router.navigateByUrl("/cookie/login")
      this.auth.logout()
    })
  }

}
