import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required),
  })

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.form.invalid) {
      console.log(this.form)
      alert("フォームを埋めてください。")
      return
    }
    this.http.post("/api/login",{
      ...this.form.value
    }).subscribe({
      next: async (r)=>{
        const {redirect_to} = await this.route.queryParams.pipe(
          take(1)
        ).toPromise()
        const url = redirect_to??"/cookie/mypage"
        console.log("hoge",url)
        await this.router.navigateByUrl(url)
      },
      error: ()=>{
        alert("ログインエラー")
      },
    })
  }

}
