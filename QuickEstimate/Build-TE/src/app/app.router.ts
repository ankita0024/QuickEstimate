import { FormsDownloadComponent } from './forms-download/forms-download.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandPageComponent } from './land-page/land-page.component';
import { FormsBasicComponent } from './forms-basic/forms-basic.component';
import { FormsTestComponent } from './forms-test/forms-test.component';
import { FormsTechComponent } from './forms-tech/forms-tech.component';
import { FormsUploadComponent } from './forms-upload/forms-upload.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DetailedComponent } from './detailed/detailed.component';
import { ActiveProjComponent } from './active-proj/active-proj.component';
import { SavedProjComponent } from './saved-proj/saved-proj.component';
import { AboutUsComponent } from './about-us/about-us.component';



const routes:Routes = [
    {path: '', component:LandPageComponent},
    {path: 'app-landing-page', component:LandPageComponent},
    {path: 'app-start-page', component:AppComponent},
    {path: 'app-about-us', component:AboutUsComponent},
    {path: 'app-active-project', component:ActiveProjComponent},
    {path: 'app-basic-form', component:FormsBasicComponent},
    {path: 'app-confirmation',component:ConfirmComponent},
     {path: 'app-detailed-analysis',component:DetailedComponent},
    {path: 'app-saved-projects',component:SavedProjComponent},
    {path: 'app-tech-form',component:FormsTechComponent},
    {path: 'app-test-form',component:FormsTestComponent},
    {path: 'app-upload-form',component:FormsUploadComponent},
    {path: 'app-download-form',component: FormsDownloadComponent}


];


@NgModule({


  imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports:[RouterModule]
})
export class AppRoutingModule {}
export const routingcomponent = [AboutUsComponent,FormsBasicComponent,ConfirmComponent, ActiveProjComponent,
                                  DetailedComponent, SavedProjComponent, FormsTechComponent,FormsUploadComponent,LandPageComponent,FormsTestComponent, FormsDownloadComponent
                                ];