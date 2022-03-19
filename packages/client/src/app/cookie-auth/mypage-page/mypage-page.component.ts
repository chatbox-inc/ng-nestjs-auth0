import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-mypage-page',
  templateUrl: './mypage-page.component.html',
  styleUrls: ['./mypage-page.component.scss']
})
export class MypagePageComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
