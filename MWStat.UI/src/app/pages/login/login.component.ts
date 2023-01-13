import { HttpWrapper } from './../../services/httpWrapper.service';
import { Component, OnInit } from "@angular/core";
import { ApiConstants } from 'src/app/constants/api.constants';
import { Router } from '@angular/router';
import { Notification } from 'src/app/services/notification.service';

@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private http: HttpWrapper, private notification: Notification, private router: Router) {}

  ngOnInit() {}

  login(){
    this.http.get(ApiConstants.ACCOUNT_LOGIN+"?username="+this.username+"&password="+this.password)
    .subscribe(result=>{
      this.router.navigate(['/statistic']);
    }, error => {
      console.log(error);
      this.notification.showNotification('invalid creds');
    });
  }
}
