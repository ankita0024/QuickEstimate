import { Component, OnInit } from '@angular/core';
import { AdalService } from "ng2-adal/services/adal.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:String;
  constructor(public adalService:AdalService) { 

     if(this.adalService.userInfo.isAuthenticated==true)
    {
      this.name = this.adalService.userInfo.profile.given_name;
      //console.log(this.adalService.userInfo.profile.given_name);
      //  console.log("admin-id:",response);
      // console.log(this.adalService.getCachedToken(this.adalService.config.loginResource));
     
    }
    else
    {
      this.adalService.login();
    }

  }

  ngOnInit() {
  }

  public logout() {
  console.log("inside logout");
  return this.adalService.logOut();
} 


}
