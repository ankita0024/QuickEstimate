import { Console } from '@angular/core/src/console';
import { Injectable } from '@angular/core';
import { GetClientFormDataService } from './get-client-form-data.service';

@Injectable()
export class CalculateService {

  calBasicArr:any = [];
  calUserArr:any = [];
  calApiArr:any = [];
  calBasicObj = {
    noOfUser:String,
    noOfPages:String,
    noOfDevice:String,
    actors:String,
    accessPoint:String,
    browserSupport:String,
    deviceSupport:String,
    AuthMech:String,
    frontEnd:String,
    backEnd:String,
    dbEnd:String,
    serverOS:String,
    noOfUi:String,
    unitFrame:String,
    endFrame:String,
    security:String,
    performanceT:String,
    accessReq:String,
    multiCapa:String
  }

UserInterfaceObj = {
  "base":[
    {
      "unit":Number,
      "uiView":String,
      "uiService":String,
      "uiLogic":String
    }
  ],
  "responsive":[
    {
      "unit":String,
      "uiView":String,
      "uiService":String,
      "uiLogic":String
    }
  ],
  "seo":[
    {
      "unit":String,
      "uiView":String,
      "uiService":String,
      "uiLogic":String
    }
  ],
  "html":[
    {
      "unit":String,
      "uiView":String,
      "uiService":String,
      "uiLogic":String
    }
  ],
  "exceptionHandle":[
    {
      "unit":String,
      "uiView":String,
      "uiService":String,
      "uiLogic":String
    }
  ],
  "auth":[
    {
      "unit":String,
      "uiView":String,
      "uiService":String,
      "uiLogic":String
    }
  ],
  "page1":[
    {
      "unit":String,
      "uiView":String,
      "uiService":String,
      "uiLogic":String
    }
  ],
  "page2":[
    {
      "unit":String,
      "uiView":String,
      "uiService":String,
      "uiLogic":String
    }
  ],
  "page3":[
    {
      "unit":String,
      "uiView":String,
      "uiService":String,
      "uiLogic":String
    }
  ],
  "page4":[
    {
      "unit":String,
      "uiView":String,
      "uiService":String,
      "uiLogic":String
    }
  ]

}

Api = {
   "apiServices":[
    {
      "apiComplexity":String,
      "databaseCalls":Number,
      "dataModelComplex":String
    }
  ],
   "mongoDB":[
    {
      "apiComplexity":String,
      "databaseCalls":Number,
      "dataModelComplex":String
    }
  ],
   "bookApi":[
    {
      "apiComplexity":String,
      "databaseCalls":Number,
      "dataModelComplex":String
    }
  ],
   "qestimateApi":[
    {
      "apiComplexity":String,
      "databaseCalls":Number,
      "dataModelComplex":String
    }
  ],
   "bigApi":[
    {
      "apiComplexity":String,
      "databaseCalls":Number,
      "dataModelComplex":String
    }
  ],
   "solidApi":[
    {
      "apiComplexity":String,
      "databaseCalls":Number,
      "dataModelComplex":String
    }
  ],
}

  //Total Calculation Variables
  totalUI:any = [];
  total:any = [];
  unitTestUI:any = [];
  totalAPI:any = [];
  unitTestAPI:any = [];

  //Variables Declaration
  uiViews:any = [];
  Units:any = [];
  uiServices:any = [];
  uiLogic:any = [];
  apiComp:any = [];
  dbCalls:any = [];
  dataComp:any = [];

  //Summary Variables
  totalPersonDaysUI = 0;
  totalPersonDaysAPI = 0;
  totalPersonWeeksUI;
  totalPersonWeeksAPI;
  totalPersonWeeks;
  effortDistUI;
  effortDistAPI;
  totalEffort;

  //Multilingual Capabilities Value
  multiCapaValue = 0;

  fendView = {
        verySimple: 6,
        Simple: 10,
        simpleMedium: 14,
        Medium: 18,
        mediumComplex: 24,
        Complex: 30,
        veryComplex: 38
    };
   fendService = {
        verySimple: 4,
        Simple: 8,
        simpleMedium: 12,
        Medium: 14,
        mediumComplex: 16,
        Complex: 20,
        veryComplex: 24
    };
  fendLogic = {
        verySimple: 2,
        Simple: 4,
        simpleMedium: 6,
        Medium: 8,
        mediumComplex: 12,
        Complex: 14,
        veryComplex: 16
    };
  intAPI = {
        verySimple: 2,
        Simple: 4,
        simpleMedium: 8,
        Medium: 10,
        mediumComplex: 14,
        Complex: 20,
        veryComplex: 28
    };
  dataModel = {
        verySimple: 1,
        Simple: 3,
        simpleMedium: 5,
        Medium: 8,
        mediumComplex: 10,
        Complex: 14,
        veryComplex: 18
    };

  constructor(private MySer:GetClientFormDataService) { 

    this.calBasicArr = MySer.myBasis;
    this.calBasicObj.noOfUser = MySer.myBasis[0];
    this.calBasicObj.noOfPages = MySer.myBasis[1];
    this.calBasicObj.noOfDevice = MySer.myBasis[2];
    this.calBasicObj.actors = MySer.myBasis[3];
    this.calBasicObj.accessPoint = MySer.myBasis[4];
    this.calBasicObj.browserSupport = MySer.myBasis[5];
    this.calBasicObj.deviceSupport = MySer.myBasis[6];
    this.calBasicObj.AuthMech = MySer.myBasis[6];
    this.calBasicObj.frontEnd = MySer.myBasis[7];
    this.calBasicObj.backEnd = MySer.myBasis[8];
    this.calBasicObj.dbEnd = MySer.myBasis[9];
    this.calBasicObj.serverOS = MySer.myBasis[10];
    this.calBasicObj.noOfUi = MySer.myBasis[11];
    this.calBasicObj.unitFrame = MySer.myBasis[12];
    this.calBasicObj.endFrame = MySer.myBasis[13];
    this.calBasicObj.security = MySer.myBasis[14];
    this.calBasicObj.performanceT = MySer.myBasis[15];
    this.calBasicObj.accessReq = MySer.myBasis[16];
    this.calBasicObj.multiCapa = MySer.myBasis[17];
    
    this.UserInterfaceObj.base[0].unit = MySer.myUserInterface[0];
    this.UserInterfaceObj.base[0].uiView = MySer.myUserInterface[1];
    this.UserInterfaceObj.base[0].uiService = MySer.myUserInterface[2];
    this.UserInterfaceObj.base[0].uiLogic = MySer.myUserInterface[3];

    this.UserInterfaceObj.responsive[0].unit = MySer.myUserInterface[4];
    this.UserInterfaceObj.responsive[0].uiView = MySer.myUserInterface[5];
    this.UserInterfaceObj.responsive[0].uiService = MySer.myUserInterface[6];
    this.UserInterfaceObj.responsive[0].uiLogic = MySer.myUserInterface[7];

    this.UserInterfaceObj.seo[0].unit = MySer.myUserInterface[8];
    this.UserInterfaceObj.seo[0].uiView = MySer.myUserInterface[9];
    this.UserInterfaceObj.seo[0].uiService = MySer.myUserInterface[10];
    this.UserInterfaceObj.seo[0].uiLogic = MySer.myUserInterface[11];

    this.UserInterfaceObj.html[0].unit = MySer.myUserInterface[12];
    this.UserInterfaceObj.html[0].uiView = MySer.myUserInterface[13];
    this.UserInterfaceObj.html[0].uiService = MySer.myUserInterface[14];
    this.UserInterfaceObj.html[0].uiLogic = MySer.myUserInterface[15];


     this.UserInterfaceObj.exceptionHandle[0].unit = MySer.myUserInterface[16];
    this.UserInterfaceObj.exceptionHandle[0].uiView = MySer.myUserInterface[17];
    this.UserInterfaceObj.exceptionHandle[0].uiService = MySer.myUserInterface[18];
    this.UserInterfaceObj.exceptionHandle[0].uiLogic = MySer.myUserInterface[19];


    this.UserInterfaceObj.auth[0].unit = MySer.myUserInterface[20];
    this.UserInterfaceObj.auth[0].uiView = MySer.myUserInterface[21];
    this.UserInterfaceObj.auth[0].uiService = MySer.myUserInterface[22];
    this.UserInterfaceObj.auth[0].uiLogic = MySer.myUserInterface[23];
    
    
    this.UserInterfaceObj.page1[0].unit = MySer.myUserInterface[24];
    this.UserInterfaceObj.page1[0].uiView = MySer.myUserInterface[25];
    this.UserInterfaceObj.page1[0].uiService = MySer.myUserInterface[26];
    this.UserInterfaceObj.page1[0].uiLogic = MySer.myUserInterface[27];


    this.UserInterfaceObj.page2[0].unit = MySer.myUserInterface[28];
    this.UserInterfaceObj.page2[0].uiView = MySer.myUserInterface[29];
    this.UserInterfaceObj.page2[0].uiService = MySer.myUserInterface[30];
    this.UserInterfaceObj.page2[0].uiLogic = MySer.myUserInterface[31];

    this.UserInterfaceObj.page3[0].unit = MySer.myUserInterface[32];
    this.UserInterfaceObj.page3[0].uiView = MySer.myUserInterface[33];
    this.UserInterfaceObj.page3[0].uiService = MySer.myUserInterface[34];
    this.UserInterfaceObj.page3[0].uiLogic = MySer.myUserInterface[35];

    this.UserInterfaceObj.page4[0].unit = MySer.myUserInterface[36];
    this.UserInterfaceObj.page4[0].uiView = MySer.myUserInterface[37];
    this.UserInterfaceObj.page4[0].uiService = MySer.myUserInterface[38];
    this.UserInterfaceObj.page4[0].uiLogic = MySer.myUserInterface[39];

    this.Api.apiServices[0].apiComplexity = MySer.myAPI[0];
    this.Api.apiServices[0].databaseCalls = MySer.myAPI[1];
    this.Api.apiServices[0].apiComplexity = MySer.myAPI[2];

    this.Api.mongoDB[0].apiComplexity = MySer.myAPI[3];
    this.Api.mongoDB[0].databaseCalls = MySer.myAPI[4];
    this.Api.mongoDB[0].apiComplexity = MySer.myAPI[5];

     this.Api.bookApi[0].apiComplexity = MySer.myAPI[6];
    this.Api.bookApi[0].databaseCalls = MySer.myAPI[7];
    this.Api.bookApi[0].apiComplexity = MySer.myAPI[8];

     this.Api.qestimateApi[0].apiComplexity = MySer.myAPI[9];
    this.Api.qestimateApi[0].databaseCalls = MySer.myAPI[10];
    this.Api.qestimateApi[0].apiComplexity = MySer.myAPI[11];

     this.Api.bigApi[0].apiComplexity = MySer.myAPI[12];
    this.Api.bigApi[0].databaseCalls = MySer.myAPI[13];
    this.Api.bigApi[0].apiComplexity = MySer.myAPI[14];

    this.Api.solidApi[0].apiComplexity = MySer.myAPI[15];
    this.Api.solidApi[0].databaseCalls = MySer.myAPI[16];
    this.Api.solidApi[0].apiComplexity = MySer.myAPI[17];

}



}
