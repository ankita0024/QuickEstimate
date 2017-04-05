import { CalculateService } from './../Services/calculate.service';
import { Component, OnInit } from '@angular/core';
import { GetClientFormDataService } from '../Services/get-client-form-data.service';


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
  
  flag = false;

  constructor(private myObj:GetClientFormDataService, private myExcel: CalculateService) { }

  ngOnInit() {
  }
  myFunc(obj) {
     var fileToLoad = obj;
 //  console.log();
  }
   
  isValid() {
    this.flag = true;
    return this.flag;
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

     //Total Calculation Variables
  this.myExcel.totalUI = [];
  this.myExcel.total = [];
  this.myExcel.unitTestUI = [];
  this.myExcel.totalAPI = [];
  this.myExcel.unitTestAPI = [];

  //Variables Declaration
  this.myExcel.uiViews = [];
  this.myExcel.Units = [];
  this.myExcel.uiServices = [];
  this.myExcel.uiLogic = [];
  this.myExcel.apiComp = [];
  this.myExcel.dbCalls = [];
  this.myExcel.dataComp = [];

  //Summary Variables
  this.myExcel.totalPersonDaysUI = 0;
  this.myExcel.totalPersonDaysAPI = 0;
  this.myExcel.totalPersonWeeksUI = 0;
  this.myExcel.totalPersonWeeksAPI = 0;
  this.myExcel.totalPersonWeeks = 0;
  this.myExcel.effortDistUI = 0;
  this.myExcel.effortDistAPI = 0;
  this.myExcel.totalEffort = 0;
  this.myExcel.multiCapaValue = 0;

    console.log(this.myObj.myBasis);
    console.log(this.myObj.myUserInterface);
    console.log(this.myObj.myAPI);
   }

}
