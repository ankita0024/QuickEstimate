import { Component, OnInit } from '@angular/core';
import { GetClientFormDataService } from '../Services/get-client-form-data.service';
import { CalculateService } from '../Services/calculate.service';


declare let XLSX;
@Component({
  selector: 'app-forms-upload',
  templateUrl: './forms-upload.component.html',
  styleUrls: ['./forms-upload.component.css']
})
export class FormsUploadComponent implements OnInit {
  file: File;
  private basicArr:any = [];
  userInterface:any = [];
  API:any = [];
  test:any = [1,2,34,5];
  ProjectId:any;
  phase:any;
  constructor(private myObj:GetClientFormDataService,private myExcel:CalculateService) { }

  ngOnInit() {
  }
  myFunc(obj) {
     var fileToLoad = obj;
 //  console.log();
  }
   
  onChange(event: EventTarget) {
        var json_object;
         var that = this;
         var count = 0;
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        var reader = new FileReader();
        var i=0;
        reader.onload = function(e:any):any {
              console.log("atleast upto here");
              var data = e.target.result;
              //console.log(data);
              var workbook = XLSX.read(data, {type : 'binary'});
              console.log(workbook.SheetNames);
              workbook.SheetNames.forEach(function(sheetName){
                  // Here is your object
                console.log(sheetName);
                if(sheetName == "Basis") {
                    console.log("hey inside basis");
                    for (var z in workbook.Sheets["Basis"]) {
                    if (z[0] === '!') continue;
                    //parse out the column, row, and value
                    var col = z.substring(0, 1);
                    var row = parseInt(z.substring(1));
                   if(row>=3 && row<=21 && col=="B") {
                      var value = workbook.Sheets["Basis"][col+row].v;
                      //console.log("my val",value);
                      that.basicArr.push(value);
                     // that.myObj.myBasis = that.basicArr;
                     // console.log(that.myObj.myBasis);
        
                    }
                    
                   }
               } 



               if(sheetName == "UserInterface") {
                    console.log(workbook.Sheets["UserInterface"].length);

                    for (var z in workbook.Sheets["UserInterface"]) {
                    if (z[0] === '!') continue;
                    //parse out the column, row, and value
                    var col = z.substring(0, 1);
                    var row = parseInt(z.substring(1));
                    //console.log(row);
                    //console.log(col);
                    if(row>=4 && row<=7 && (col=="C" || col=="D" || col=="E" || col=="F")) {
                      var value = workbook.Sheets["UserInterface"][col+row].v;
                     // console.log("my val",value);
                      that.userInterface.push(value);
                    } 
                    else if(row>=9 && row<=10 && (col=="C" || col=="D" || col=="E" || col=="F")) {

                      var value = workbook.Sheets["UserInterface"][col+row].v;
                      //console.log("my val",value);
                      that.userInterface.push(value);

                    } 
                    else if(row>=12 && row<=15 && (col=="C" || col=="D" || col=="E" || col=="F")) {

                      var value = workbook.Sheets["UserInterface"][col+row].v;
                     // console.log("my val",value);
                      that.userInterface.push(value);

                    }
                 }
               }


                if(sheetName == "API") {
                  console.log("api");
                 for (var z in workbook.Sheets["API"]) {
                    if (z[0] === '!') continue;
                    //parse out the column, row, and value
                    var col = z.substring(0, 1);
                    var row = parseInt(z.substring(1));
                    //console.log(row);
                    //console.log(col);
                    if(row>=4 && row<=9 && (col=="C" || col=="D" || col=="E")) {
                      var value = workbook.Sheets["API"][col+row].v;
                     // console.log("my val",value);
                      that.API.push(value);
                    } 
                 
                }
               }

         var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          json_object = JSON.stringify(XL_row_object);
          // that.passFunc(json_object);
         
          
                
      });

       if(count == 0) {
           // console.log(that.basicArr);
           // console.log(that.userInterface);
            //console.log(that.API);
            that.passFunc(that.basicArr,that.userInterface,that.API);
            count++;
          }

   }
    reader.readAsBinaryString(files[0]);
   // console.log(that.basicArr);
    //console.log(this.userInterface);
    //console.log(this.API);




    //this.passFunc(this.basicArr.isArray());




 }

 passFunc(obj,obj2,obj3) {
   // console.log(obj[Array[0]]);
    console.log(obj);

    this.myObj.myBasis = obj;
    this.myObj.myUserInterface = obj2;
    this.myObj.myAPI = obj3;

     this.myExcel.calBasicArr = this.myObj.myBasis;
     this.myExcel.calUserArr = this.myObj.myUserInterface;
     this.myExcel.calApiArr = this.myObj.myAPI;


    this.myExcel.calBasicObj.noOfUser = this.myObj.myBasis[0];
    this.myExcel.calBasicObj.noOfPages = this.myObj.myBasis[1];
    this.myExcel.calBasicObj.noOfDevice = this.myObj.myBasis[2];
    this.myExcel.calBasicObj.actors = this.myObj.myBasis[3];
    this.myExcel.calBasicObj.accessPoint = this.myObj.myBasis[4];
    this.myExcel.calBasicObj.browserSupport = this.myObj.myBasis[5];
    this.myExcel.calBasicObj.deviceSupport = this.myObj.myBasis[6];
    this.myExcel.calBasicObj.AuthMech = this.myObj.myBasis[6];
    this.myExcel.calBasicObj.frontEnd = this.myObj.myBasis[7];
    this.myExcel.calBasicObj.backEnd = this.myObj.myBasis[8];
    this.myExcel.calBasicObj.dbEnd = this.myObj.myBasis[9];
    this.myExcel.calBasicObj.serverOS = this.myObj.myBasis[10];
    this.myExcel.calBasicObj.noOfUi = this.myObj.myBasis[11];
    this.myExcel.calBasicObj.unitFrame = this.myObj.myBasis[12];
    this.myExcel.calBasicObj.endFrame = this.myObj.myBasis[13];
    this.myExcel.calBasicObj.security = this.myObj.myBasis[14];
    this.myExcel.calBasicObj.performanceT = this.myObj.myBasis[15];
    this.myExcel.calBasicObj.accessReq = this.myObj.myBasis[16];
    this.myExcel.calBasicObj.multiCapa = this.myObj.myBasis[17];
    this.ProjectId = Math.ceil(Math.random()*100000000000+1);
    console.log("value",this.ProjectId);
    this.myExcel.calBasicObj.projId = this.ProjectId;
    this.phase = "10";
    this.myExcel.calBasicObj.phase = this.phase;


    this.myExcel.UserInterfaceObj.base[0].unit = this.myObj.myUserInterface[0];
    this.myExcel.UserInterfaceObj.base[0].uiView = this.myObj.myUserInterface[1];
    this.myExcel.UserInterfaceObj.base[0].uiService = this.myObj.myUserInterface[2];
    this.myExcel.UserInterfaceObj.base[0].uiLogic = this.myObj.myUserInterface[3];

    this.myExcel.UserInterfaceObj.responsive[0].unit = this.myObj.myUserInterface[4];
    this.myExcel.UserInterfaceObj.responsive[0].uiView = this.myObj.myUserInterface[5];
    this.myExcel.UserInterfaceObj.responsive[0].uiService = this.myObj.myUserInterface[6];
    this.myExcel.UserInterfaceObj.responsive[0].uiLogic = this.myObj.myUserInterface[7];

    this.myExcel.UserInterfaceObj.seo[0].unit = this.myObj.myUserInterface[8];
    this.myExcel.UserInterfaceObj.seo[0].uiView = this.myObj.myUserInterface[9];
    this.myExcel.UserInterfaceObj.seo[0].uiService = this.myObj.myUserInterface[10];
    this.myExcel.UserInterfaceObj.seo[0].uiLogic = this.myObj.myUserInterface[11];

    this.myExcel.UserInterfaceObj.html[0].unit = this.myObj.myUserInterface[12];
    this.myExcel.UserInterfaceObj.html[0].uiView = this.myObj.myUserInterface[13];
    this.myExcel.UserInterfaceObj.html[0].uiService = this.myObj.myUserInterface[14];
    this.myExcel.UserInterfaceObj.html[0].uiLogic = this.myObj.myUserInterface[15];


    this.myExcel.UserInterfaceObj.exceptionHandle[0].unit = this.myObj.myUserInterface[16];
    this.myExcel.UserInterfaceObj.exceptionHandle[0].uiView = this.myObj.myUserInterface[17];
    this.myExcel.UserInterfaceObj.exceptionHandle[0].uiService = this.myObj.myUserInterface[18];
    this.myExcel.UserInterfaceObj.exceptionHandle[0].uiLogic = this.myObj.myUserInterface[19];


    this.myExcel.UserInterfaceObj.auth[0].unit = this.myObj.myUserInterface[20];
    this.myExcel.UserInterfaceObj.auth[0].uiView = this.myObj.myUserInterface[21];
    this.myExcel.UserInterfaceObj.auth[0].uiService = this.myObj.myUserInterface[22];
    this.myExcel.UserInterfaceObj.auth[0].uiLogic = this.myObj.myUserInterface[23];
    
    
    this.myExcel.UserInterfaceObj.page1[0].unit = this.myObj.myUserInterface[24];
    this.myExcel.UserInterfaceObj.page1[0].uiView = this.myObj.myUserInterface[25];
    this.myExcel.UserInterfaceObj.page1[0].uiService = this.myObj.myUserInterface[26];
    this.myExcel.UserInterfaceObj.page1[0].uiLogic = this.myObj.myUserInterface[27];


    this.myExcel.UserInterfaceObj.page2[0].unit = this.myObj.myUserInterface[28];
    this.myExcel.UserInterfaceObj.page2[0].uiView = this.myObj.myUserInterface[29];
    this.myExcel.UserInterfaceObj.page2[0].uiService = this.myObj.myUserInterface[30];
    this.myExcel.UserInterfaceObj.page2[0].uiLogic = this.myObj.myUserInterface[31];

    this.myExcel.UserInterfaceObj.page3[0].unit = this.myObj.myUserInterface[32];
    this.myExcel.UserInterfaceObj.page3[0].uiView = this.myObj.myUserInterface[33];
    this.myExcel.UserInterfaceObj.page3[0].uiService = this.myObj.myUserInterface[34];
    this.myExcel.UserInterfaceObj.page3[0].uiLogic = this.myObj.myUserInterface[35];

    this.myExcel.UserInterfaceObj.page4[0].unit = this.myObj.myUserInterface[36];
    this.myExcel.UserInterfaceObj.page4[0].uiView = this.myObj.myUserInterface[37];
    this.myExcel.UserInterfaceObj.page4[0].uiService = this.myObj.myUserInterface[38];
    this.myExcel.UserInterfaceObj.page4[0].uiLogic = this.myObj.myUserInterface[39];
    this.myExcel.UserInterfaceObj.projectId[0].projId = this.ProjectId;


    this.myExcel.Api.apiServices[0].apiComplexity = this.myObj.myAPI[0];
    this.myExcel.Api.apiServices[0].databaseCalls = this.myObj.myAPI[1];
    this.myExcel.Api.apiServices[0].dataModelComplex = this.myObj.myAPI[2];

    this.myExcel.Api.mongoDB[0].apiComplexity = this.myObj.myAPI[3];
    this.myExcel.Api.mongoDB[0].databaseCalls = this.myObj.myAPI[4];
    this.myExcel.Api.mongoDB[0].dataModelComplex = this.myObj.myAPI[5];

     this.myExcel.Api.bookApi[0].apiComplexity = this.myObj.myAPI[6];
    this.myExcel.Api.bookApi[0].databaseCalls = this.myObj.myAPI[7];
    this.myExcel.Api.bookApi[0].dataModelComplex = this.myObj.myAPI[8];

     this.myExcel.Api.qestimateApi[0].apiComplexity = this.myObj.myAPI[9];
    this.myExcel.Api.qestimateApi[0].databaseCalls = this.myObj.myAPI[10];
    this.myExcel.Api.qestimateApi[0].dataModelComplex = this.myObj.myAPI[11];

     this.myExcel.Api.bigApi[0].apiComplexity = this.myObj.myAPI[12];
    this.myExcel.Api.bigApi[0].databaseCalls = this.myObj.myAPI[13];
    this.myExcel.Api.bigApi[0].dataModelComplex = this.myObj.myAPI[14];

    this.myExcel.Api.solidApi[0].apiComplexity = this.myObj.myAPI[15];
    this.myExcel.Api.solidApi[0].databaseCalls = this.myObj.myAPI[16];
    this.myExcel.Api.solidApi[0].dataModelComplex = this.myObj.myAPI[17];

    this.myExcel.Api.projectId[0].projId = this.ProjectId;



    console.log(this.myObj.myBasis);
    console.log(this.myObj.myUserInterface);
    console.log(this.myObj.myAPI);
   }

}
