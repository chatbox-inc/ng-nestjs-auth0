import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-mypage2-page',
  templateUrl: './mypage2-page.component.html',
  styleUrls: ['./mypage2-page.component.scss']
})
export class Mypage2PageComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
