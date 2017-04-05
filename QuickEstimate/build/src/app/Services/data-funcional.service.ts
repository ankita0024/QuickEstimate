import { Injectable } from '@angular/core';
import { GetClientFormDataService } from './get-client-form-data.service';
import { CalculateService } from '../Services/calculate.service';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataFuncionalService {
  
  myEstimationObj = {
    projId:String,
    dataentry:String,
    serviceCall:String,
    validations:String,
    entryPoints:String,
    userControls:String,
    componentReq:String,
    userAction:String,
    searchOption:String,
    filterOption:String

  };
  constructor(private MyserviceInj:GetClientFormDataService,private calc:CalculateService,private http:Http) { 
    console.log("hello reached inside functional service");
    console.log(MyserviceInj);
    this.getComplexityValue();
  }
   saveBasicProject() {
     console.log("our pushing method---------");
        const body = JSON.stringify(this.calc.calBasicObj);
        console.log(body);
        const headers = new Headers({'Content-type':'application/json'});
      
      this.http.post('http://localhost:9890/qestimateAPI/app/project',body, {headers:headers}).subscribe(() => console.log('success!'),error=> console.error("error"));
    }

    saveTech() {
      console.log("our pushing test method---------");
        const body = JSON.stringify(this.calc.UserInterfaceObj);
        console.log(body);
        const headers = new Headers({'Content-type':'application/json'});
      
      this.http.post('http://glc-devtest-qestimate.azurewebsites.net/qestimateAPI/app/tech',body, {headers:headers}).subscribe(() => console.log('success!'),error=> console.error("error"));
    }

    saveTest() {
      console.log("our pushing tech method---------");
        const body = JSON.stringify(this.calc.Api);
        console.log(body);
        const headers = new Headers({'Content-type':'application/json'});
      
      this.http.post('http://glc-devtest-qestimate.azurewebsites.net/qestimateAPI/app/testing',body, {headers:headers}).subscribe(() => console.log('success!'),error=> console.error("error"));
    }


    saveComplexity() {
      console.log("our pushing tech method---------");
        const body = JSON.stringify(this.MyserviceInj.complexityObj);
        console.log(body);
        const headers = new Headers({'Content-type':'application/json'});
      
      this.http.post('http://localhost:9890/qestimateAPI/app/complexity',body, {headers:headers}).subscribe(() => console.log('success!'),error=> console.error("error"));
    }

    

    getBasicData() {
      console.log("inside getdata");
      // console.log(this.http.get('http://localhost:8000/app/user').map((response:Response) => {response.json()}));
      return this.http.get('http://glc-devtest-qestimate.azurewebsites.net/qestimateAPI/app/project').map((res:Response) => res.json());
    }

    getTestData() {
      console.log("inside getdata");
      // console.log(this.http.get('http://localhost:8000/app/user').map((response:Response) => {response.json()}));
      return this.http.get('http://glc-devtest-qestimate.azurewebsites.net/qestimateAPI/app/testing').map((res:Response) => res.json());
    }

     getTechData() {
      console.log("inside getdata");
      // console.log(this.http.get('http://localhost:8000/app/user').map((response:Response) => {response.json()}));
      return this.http.get('http://glc-devtest-qestimate.azurewebsites.net/qestimateAPI/app/tech').map((res:Response) => res.json());
    }

    getCompexityData() {
      console.log("inside getdata");
      // console.log(this.http.get('http://localhost:8000/app/user').map((response:Response) => {response.json()}));
      return this.http.get('http://localhost:9890/qestimateAPI/app/complexity').map((res:Response) => res.json());
    }

    getComplexityValue() {
      console.log("here to calculate estimation of complexity");
      this.myEstimationObj=this.MyserviceInj.complexityObj;
       
       console.log(""+this.myEstimationObj.dataentry+"");

      if(""+this.myEstimationObj.dataentry+""=="0" && ""+this.myEstimationObj.serviceCall+""=="1" && ""+this.myEstimationObj.validations+""=="0" && ""+this.myEstimationObj.entryPoints+""=="1" && ""+this.myEstimationObj.userControls+""=="2" && ""+this.myEstimationObj.componentReq+""=="2" && ""+this.myEstimationObj.userAction+""=="1" && ""+this.myEstimationObj.searchOption+""=="0" && ""+this.myEstimationObj.filterOption+""=="0") {
            console.log("very simple complexity");
      }
      else if((""+this.myEstimationObj.dataentry+"">="2" || ""+this.myEstimationObj.dataentry+""<="10") && ""+this.myEstimationObj.serviceCall+""=="2" && (""+this.myEstimationObj.validations+"">="1" || ""+this.myEstimationObj.validations+""<="10" )&& ""+this.myEstimationObj.entryPoints+""=="2" && ""+this.myEstimationObj.userControls+""=="4" && ""+this.myEstimationObj.componentReq+""=="4" && ""+this.myEstimationObj.userAction+""=="1" && ""+this.myEstimationObj.searchOption+""=="1" && ""+this.myEstimationObj.filterOption+""=="1") {
         console.log("simple complexity");
      }
      else if(""+this.myEstimationObj.dataentry+"">"10" && (""+this.myEstimationObj.serviceCall+"">="3" || ""+this.myEstimationObj.serviceCall+""<="5") && ""+this.myEstimationObj.validations+"">"10" && ""+this.myEstimationObj.entryPoints+""=="2" && ""+this.myEstimationObj.userControls+""=="5" && ""+this.myEstimationObj.componentReq+""=="5" && ""+this.myEstimationObj.userAction+""=="1" && ""+this.myEstimationObj.searchOption+""=="4" && ""+this.myEstimationObj.filterOption+""=="4") {
        console.log("simple-medium complexity");
     }

     else if(""+this.myEstimationObj.dataentry+"">"20" && ""+this.myEstimationObj.serviceCall+"">"5" && ""+this.myEstimationObj.validations+"">"20" && ""+this.myEstimationObj.entryPoints+"">="2" && ""+this.myEstimationObj.userControls+""=="7" && ""+this.myEstimationObj.componentReq+""=="7" && ""+this.myEstimationObj.userAction+""=="2" && ""+this.myEstimationObj.searchOption+""=="6" && ""+this.myEstimationObj.filterOption+""=="6") {
        console.log("medium complexity");
     }

     else if(""+this.myEstimationObj.dataentry+"">"30" && ""+this.myEstimationObj.serviceCall+"">"7" && ""+this.myEstimationObj.validations+"">"30" && ""+this.myEstimationObj.entryPoints+"">"3" && ""+this.myEstimationObj.userControls+""=="10" && ""+this.myEstimationObj.componentReq+""=="10" && ""+this.myEstimationObj.userAction+""=="3" && ""+this.myEstimationObj.searchOption+""=="8" && ""+this.myEstimationObj.filterOption+""=="8") {
        console.log("medium-complex complexity");
     }
     
      else if(""+this.myEstimationObj.dataentry+"">"30" && ""+this.myEstimationObj.serviceCall+"">"10" && ""+this.myEstimationObj.validations+"">"30" && ""+this.myEstimationObj.entryPoints+"">"3" && ""+this.myEstimationObj.userControls+""=="15" && ""+this.myEstimationObj.componentReq+""=="15" && ""+this.myEstimationObj.userAction+""=="4" && ""+this.myEstimationObj.searchOption+""=="10" && ""+this.myEstimationObj.filterOption+""=="10") {
        console.log("complex complexity");
     }

      else if(""+this.myEstimationObj.dataentry+"">"30" && ""+this.myEstimationObj.serviceCall+"">"10" && ""+this.myEstimationObj.validations+"">"30" && ""+this.myEstimationObj.entryPoints+"">"5" && ""+this.myEstimationObj.userControls+""=="15" && ""+this.myEstimationObj.componentReq+""=="15" && ""+this.myEstimationObj.userAction+""=="5" && ""+this.myEstimationObj.searchOption+""=="15" && ""+this.myEstimationObj.filterOption+""=="15") {
        console.log("very complex complexity");
     }
     else {
       console.log("none matched");
     }

    }


}
