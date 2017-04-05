import { Injectable } from '@angular/core';

@Injectable()
export class GetClientFormDataService {
    

    
  constructor() { }

  myBasis:any = [];
  myUserInterface = [];
  myAPI = [];

  BasicFormObj:any = {
    projName:String,
    propId:String,
    nexusId:String,
    igAccount:String,
    bidOwner:String,
    bidMinds:String,
    phase:String
   }

   techFormObj:any = {
     projId:String,
     frontEnd:String,
     backEnd:String,
     dbEnd:String
   }

   testFormObj:any = {
     projId:String,
     unitTest:String,
     eteTest:String,
     perfTest:String,
     secTest:String,
     accessibility:String,
     multiCapa:String
   }

   complexityObj:any = {
    projId:"123333333",
    dataentry:"2",
    serviceCall:"4",
    validations:"5",
    entryPoints:"2",
    userControls:"1",
    componentReq:"1",
    userAction:"2",
    searchOption:"1",
    filterOption:"1"
   }

}
