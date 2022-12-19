import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class Notification {

  constructor(private toastr: ToastrService) { }

  showNotification(text: string){
    this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>' + text, '', {
        disableTimeOut: true,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-info alert-with-icon",
        positionClass: 'toast-top-center'
      });
  }
}