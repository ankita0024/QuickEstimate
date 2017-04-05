import { FormsDownloadComponent } from './forms-download/forms-download.component';
import { ActiveProjComponent } from './active-proj/active-proj.component';
import { SavedProjComponent } from './saved-proj/saved-proj.component';
import { FormsTechComponent } from './forms-tech/forms-tech.component';
import { FormsUploadComponent } from './forms-upload/forms-upload.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsTestComponent } from './forms-test/forms-test.component';
import { FormsBasicComponent } from './forms-basic/forms-basic.component';
import { LandPageComponent } from './land-page/land-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdalService } from "ng2-adal/services/adal.service";
import { Authenticate } from "./Services/authenticate";
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name:String;
constructor(public adalService:AdalService,private Authentication: Authenticate) {
  this.adalService.init(this.Authentication.adalConfig());
    console.log(this.adalService);
   this.adalService.handleWindowCallback();
    this.adalService.getUser();
    
    if(this.adalService.userInfo.isAuthenticated==true)
    {
      this.name = this.adalService.userInfo.profile.given_name;
      console.log(this.adalService.userInfo.profile.given_name);
      //  console.log("admin-id:",response);
      console.log(this.adalService.getCachedToken(this.adalService.config.loginResource));
     
    }
    else
    {
      this.adalService.login();
    }
}



}
