import { Console } from '@angular/core/src/console';

import { Component, OnInit } from '@angular/core';
import { GetClientFormDataService } from '../Services/get-client-form-data.service';
import { CalculateService } from '../Services/calculate.service';

declare let jsPDF;

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {

   basicData:any = [];
   testData:any = [];

   techData:any = [];
   complexityData:any = [];
   testArr:any = [];
   techArr:any = [];
   ApArr:any = [];

   tUI:any = [];
   tot:any = [];
   utUI:any = [];
   utAPI:any = [];
   tAPI:any = [];

   apiComps:any = [];
   dataComps:any = [];

   personWeekUI:number;
   personWeekAPI:number;
   personWeek:number;
   effortUI:number;
   effortAPI:number;
   totalEff:number;
   personDayUI:number;
   personDayAPI:number;
   personDay:number;

   projectName;
   mCapa;

  constructor(private dataFunc:GetClientFormDataService, private calc:CalculateService) {

      
     this.projectName = dataFunc.BasicFormObj.projName;

     this.testArr = dataFunc.myBasis;
     this.techArr = dataFunc.myUserInterface;
     this.ApArr = dataFunc.myAPI;

     this.basicData = dataFunc.BasicFormObj;
     this.testData = dataFunc.testFormObj;
     this.techData = dataFunc.techFormObj;
     this.complexityData = dataFunc.complexityObj;
     console.log(calc.UserInterfaceObj);
     //Units Storage
     for (var i:number = 0; i < calc.calUserArr.length; i = i + 4) {
        calc.Units.push(calc.calUserArr[i]);
     }

     //UI-View Storage
     for (var i:number = 1; i < calc.calUserArr.length; i = i + 4) {
        if (calc.calUserArr[i] == "Very Simple") {
            calc.uiViews.push(calc.fendView.verySimple);
        } else if (calc.calUserArr[i] == "Simple") {
            calc.uiViews.push(calc.fendView.Simple);
        } else if (calc.calUserArr[i] == "Simple-Medium") {
            calc.uiViews.push(calc.fendView.simpleMedium);
        } else if (calc.calUserArr[i] == "Medium") {
            calc.uiViews.push(calc.fendView.Medium);
        } else if (calc.calUserArr[i] == "Medium-Complex") {
            calc.uiViews.push(calc.fendView.mediumComplex);
        } else if (calc.calUserArr[i] == "Complex") {
            calc.uiViews.push(calc.fendView.Complex);
        } else if (calc.calUserArr[i] == "Very Complex") {
            calc.uiViews.push(calc.fendView.veryComplex);
        } else {
            calc.uiViews.push(0);
        }
    }

    //UI-Services Storage
    for (var i:number = 2; i < calc.calUserArr.length; i = i + 4) {
      if (calc.calUserArr[i] == "Very Simple") {
          calc.uiServices.push(calc.fendService.verySimple);
      } else if (calc.calUserArr[i] == "Simple") {
          calc.uiServices.push(calc.fendService.Simple);
      } else if (calc.calUserArr[i] == "Simple-Medium") {
          calc.uiServices.push(calc.fendService.simpleMedium);
      } else if (calc.calUserArr[i] == "Medium") {
          calc.uiServices.push(calc.fendService.Medium);
      } else if (calc.calUserArr[i] == "Medium-Complex") {
          calc.uiServices.push(calc.fendService.mediumComplex);
      } else if (calc.calUserArr[i] == "Complex") {
          calc.uiServices.push(calc.fendService.Complex);
      } else if (calc.calUserArr[i] == "Very Complex") {
          calc.uiServices.push(calc.fendService.veryComplex);
      } else {
          calc.uiServices.push(0);
      }
    }

   //UI-Logic Storage
   for (var i:number = 3; i < calc.calUserArr.length; i = i + 4) {
      if (calc.calUserArr[i] == "Very Simple") {
          calc.uiLogic.push(calc.fendLogic.verySimple);
      } else if (calc.calUserArr[i] == "Simple") {
          calc.uiLogic.push(calc.fendLogic.Simple);
      } else if (calc.calUserArr[i] == "Simple-Medium") {
          calc.uiLogic.push(calc.fendLogic.simpleMedium);
      } else if (calc.calUserArr[i] == "Medium") {
          calc.uiLogic.push(calc.fendLogic.Medium);
      } else if (calc.calUserArr[i] == "Medium-Complex") {
          calc.uiLogic.push(calc.fendLogic.mediumComplex);
      } else if (calc.calUserArr[i] == "Complex") {
          calc.uiLogic.push(calc.fendLogic.Complex);
      } else if (calc.calUserArr[i] == "Very Complex") {
          calc.uiLogic.push(calc.fendLogic.veryComplex);
      } else {
          calc.uiLogic.push(0);
      }
    }

    //Database Call Storage 
    for (var i:number = 1; i < calc.calApiArr.length; i = i + 3) {
        calc.dbCalls.push(calc.calApiArr[i]);
    }

    //API Complexity Storage
    for (var i:number = 0; i < calc.calApiArr.length; i = i + 3) {
        if (calc.calApiArr[i] == "Very Simple") {
            calc.apiComp.push(calc.intAPI.verySimple);
        } else if (calc.calApiArr[i] == "Simple") {
            calc.apiComp.push(calc.intAPI.Simple);
        } else if (calc.calApiArr[i] == "Simple-Medium") {
            calc.apiComp.push(calc.intAPI.simpleMedium);
        } else if (calc.calApiArr[i] == "Medium") {
            calc.apiComp.push(calc.intAPI.Medium);
        } else if (calc.calApiArr[i] == "Medium-Complex") {
            calc.apiComp.push(calc.intAPI.mediumComplex);
        } else if (calc.calApiArr[i] == "Complex") {
            calc.apiComp.push(calc.intAPI.Complex);
        } else if (calc.calApiArr[i] == "Very Complex") {
            calc.apiComp.push(calc.intAPI.veryComplex);
        } else {
            calc.apiComp.push(0);
        }
    }

    this.apiComps = calc.apiComp;

    //Data Model Complexity Storage  
    for (var i:number = 2; i < calc.calApiArr.length; i = i + 3) {
        if (calc.calApiArr[i] == "Very Simple") {
            calc.dataComp.push(calc.dataModel.verySimple);
        } else if (calc.calApiArr[i] == "Simple") {
            calc.dataComp.push(calc.dataModel.Simple);
        } else if (calc.calApiArr[i] == "Simple-Medium") {
            calc.dataComp.push(calc.dataModel.simpleMedium);
        } else if (calc.calApiArr[i] == "Medium") {
            calc.dataComp.push(calc.dataModel.Medium);
        } else if (calc.calApiArr[i] == "Medium-Complex") {
            calc.dataComp.push(calc.dataModel.mediumComplex);
        } else if (calc.calApiArr[i] == "Complex") {
            calc.dataComp.push(calc.dataModel.Complex);
        } else if (calc.calApiArr[i] == "Very Complex") {
            calc.dataComp.push(calc.dataModel.veryComplex);
        } else {
            calc.dataComp.push(0);
        }
    }

    this.dataComps = calc.dataComp; 

    //UI-Calculations
    //Total UI (Person Hours)
    for (var i:number = 0; i < 10; i++) {
        calc.totalUI.push((calc.Units[i] * calc.uiViews[i]) + calc.uiServices[i] + calc.uiLogic[i]);
    }

    this.tUI = calc.totalUI;

    //Unit Testing (Person Hours)
    for (var i:number = 0; i < 10; i++) {
        calc.unitTestUI.push(calc.totalUI[i] * 0.4);
    }

    this.utUI = calc.unitTestUI; 

    //Total (Person Days)
    for (var i:number = 0; i < 10; i++) {
        calc.total.push((calc.totalUI[i] + calc.unitTestUI[i]) / 8);
    }

    this.tot = calc.total; 

    //DB/API-Calculation
    //Unit Testing (Person Hours)
    for (var i:number = 0; i < 6; i++) {
        calc.unitTestAPI.push((calc.apiComp[i] + calc.dataComp[i]) * 0.4);
    }

    this.utAPI = calc.unitTestAPI; 

    //Total API + Database (Person Days)
    for (var i:number = 0; i < 6; i++) {
        calc.totalAPI.push((calc.apiComp[i] + calc.dataComp[i] + calc.unitTestAPI[i]) / 8);
    }

    this.tAPI = calc.totalAPI; 

    //Total Person Days for UI
    for (var i:number = 0; i < calc.total.length; i++) {
        calc.totalPersonDaysUI = calc.totalPersonDaysUI + calc.total[i];
    }

    this.personDayUI = calc.totalPersonDaysUI;

    //Total Person Days for API and DB
    for (var i:number = 0; i < calc.totalAPI.length; i++) {
        calc.totalPersonDaysAPI = calc.totalPersonDaysAPI + calc.totalAPI[i];
    }    

    this.personDayAPI = calc.totalPersonDaysAPI;
    this.personDay = calc.totalPersonDaysUI + calc.totalPersonDaysAPI;

    //Total Person Weeks
    calc.totalPersonWeeksUI = calc.totalPersonDaysUI / 5;
    calc.totalPersonWeeksAPI = calc.totalPersonDaysAPI / 5;
    calc.totalPersonWeeks = calc.totalPersonWeeksAPI + calc.totalPersonWeeksUI;

    this.personWeekAPI = calc.totalPersonWeeksAPI;
    this.personWeekUI = calc.totalPersonWeeksUI;
    this.personWeek = calc.totalPersonWeeks;

    //Effort Distribution
    calc.effortDistUI = (calc.totalPersonWeeksUI / calc.totalPersonWeeks) * 100;
    calc.effortDistAPI = (calc.totalPersonWeeksAPI / calc.totalPersonWeeks) * 100;
    calc.totalEffort = calc.effortDistUI + calc.effortDistAPI;

    //Multilingual Capabilities value
    if(((this.testArr[18].toLocaleLowerCase()).indexOf("korean")) !== -1)
    {
        calc.multiCapaValue = calc.multiCapaValue + 10;
    }
    if(((this.testArr[18].toLocaleLowerCase()).indexOf("arabic")) !== -1)
    {
        calc.multiCapaValue = calc.multiCapaValue + 15;
    }
    if(((this.testArr[18].toLocaleLowerCase()).indexOf("chinese")) !== -1)
    {
        calc.multiCapaValue = calc.multiCapaValue + 20;
    }
    if(((this.testArr[18].toLocaleLowerCase()).indexOf("russian")) !== -1)
    {
        calc.multiCapaValue = calc.multiCapaValue + 25;
    }
    if(((this.testArr[18].toLocaleLowerCase()).indexOf("japanese")) !== -1)
    {
        calc.multiCapaValue = calc.multiCapaValue + 30;
    }
 

    // this.multiCapab = calc.multiCapaValue;
    this.effortUI = calc.effortDistUI;
    this.effortAPI = calc.effortDistAPI;
    this.totalEff = calc.totalEffort + calc.multiCapaValue;
    this.mCapa = calc.multiCapaValue;
  }

   

  ngOnInit() {
    // this.dataFunc.getBasicData().subscribe(resEmployeeData =>{ this.basicData = resEmployeeData;});
    // this.dataFunc.getTestData().subscribe(resEmployeeData =>{ this.testData = resEmployeeData;});
    // this.dataFunc.getTechData().subscribe(resEmployeeData =>{ this.techData = resEmployeeData;});
    // this.dataFunc.getCompexityData().subscribe(resEmployeeData =>{ this.complexityData = resEmployeeData;});
     // var el = document.getElementById('graph');
   //  console.log("heyyyy",this.basicData);

     
  }


    onChange(deviceValue) {
       if(deviceValue == "pdf_download") {
         console.log("reached here");
            
          var doc = new jsPDF();
          var col = ["Details", "Values"];
          var rows = [];

       for(var key in this.basicData){
        var temp = [key, this.basicData[key]];
        rows.push(temp);
       }
         for(var key in this.testData){
        var temp = [key, this.testData[key]];
        rows.push(temp);
       }
         for(var key in this.techData){
        var temp = [key, this.techData[key]];
        rows.push(temp);
       }
         for(var key in this.complexityData){
        var temp = [key, this.complexityData[key]];
        rows.push(temp);
       }
        doc.autoTable(col, rows);
        doc.save('Test.pdf');
       }
      console.log(deviceValue);
    }

}
