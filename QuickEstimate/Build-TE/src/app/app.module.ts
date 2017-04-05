import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { TagInputModule } from '../../node_modules/ng2-tag-input';
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
import { GetClientFormDataService } from './Services/get-client-form-data.service';
import { DataFuncionalService } from './Services/data-funcional.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.router';
import { routingcomponent } from './app.router';
import { AdalService } from "ng2-adal/services/adal.service";
import { Authenticate } from "./Services/authenticate";
import { CalculateService } from "./Services/calculate.service";
import { SearchPipe } from "./Services/searchpipe";
import { LocationStrategy, HashLocationStrategy } from '@angular/common'; 
import { AlertModule } from 'ng2-bootstrap';
import { FormsDownloadComponent } from './forms-download/forms-download.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandPageComponent,
    FormsBasicComponent,
    FormsTestComponent,
    FormsTechComponent,
    FormsUploadComponent,
    ConfirmComponent,
    DetailedComponent,
    ActiveProjComponent,
    SavedProjComponent,
    AboutUsComponent,
    SearchPipe,
    FormsDownloadComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TagInputModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    AlertModule.forRoot() 
  ],
  entryComponents:[
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandPageComponent,
    FormsBasicComponent,
    FormsTestComponent,
    FormsTechComponent,
    FormsUploadComponent,
    ConfirmComponent,
    DetailedComponent,
    ActiveProjComponent,
    SavedProjComponent,
    AboutUsComponent
    ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},AdalService,Authenticate,GetClientFormDataService,DataFuncionalService,CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
