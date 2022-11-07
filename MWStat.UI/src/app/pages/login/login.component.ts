import { HttpWrapper } from './../../services/httpWrapper.service';
import { Component, OnInit } from "@angular/core";
import { ApiConstants } from 'src/app/constants/api.constants';

@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private http: HttpWrapper) {}

  ngOnInit() {}

  login(){
    this.http.get(ApiConstants.AUTH_LOGIN+"?username="+this.username+"&password="+this.password)
    .subscribe(result=>{
      console.log(result.headers.keys());
    });
  }
}
