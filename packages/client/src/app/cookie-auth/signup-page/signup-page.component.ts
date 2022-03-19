import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl("",Validators.required),
    lastName: new FormControl("",Validators.required),
    firstName: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required),
  })

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.invalid){
      alert("すべてのフォームを埋めてください。")
      return
    }
    this.http.post("/api/signup",{
      ...this.form.value
    }).subscribe({
      next:(r)=>{
        console.log(r)
        return this.router.navigateByUrl("/cookie/mypage")
      },
      error: ()=>{
        alert("エラー: 登録できませんでした。")
      }
    })

  }

}
