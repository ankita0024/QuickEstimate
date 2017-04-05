import { Component, OnInit} from '@angular/core';
import { GetClientFormDataService } from '../Services/get-client-form-data.service';

@Component({
  selector: 'app-forms-tech',
  templateUrl: './forms-tech.component.html',
  styleUrls: ['./forms-tech.component.css']
})
export class FormsTechComponent implements OnInit {

   autocompleteItems = ['HTML', 'Ionic', 'Angular','CSS', 'SCSS','MDl','bootstrap'];
   autocompleteDbEnd = ['mongoDB','mySql','dynamoDB','coughDB','hbase','haskell'];
   autocompleteBackEnd = ['php','perl','cgi','asp.net','jsp','c','objective c','java','JQuery','Javascript','Typescript','Backbone','CoffeeScript'];
   str:any = ['start'];
   techObj = {
       projId:String,
       frontEnd:String,
       backEnd:String,
       dbEnd:String
     }
// creating string variable to hold data from tag
     frontStringEnd:any="";
     backStringEnd:any="";
     dbStringEnd:any="";

  constructor(private mytech:GetClientFormDataService) { }

  ngOnInit() {
  }

  
  myPass(myObj:any) {
    console.log("feel nice inside tech click");
    console.log("myObj value",myObj);
    for(var i=0;i<myObj.frontEnd.length;i++){
      console.log("loop frontend Data",myObj.frontEnd[i].display); 
      if(i<myObj.frontEnd.length && i!=myObj.frontEnd.length-1)
      this.frontStringEnd += myObj.frontEnd[i].display + ",";
      else
      this.frontStringEnd += myObj.frontEnd[i].display;
    }


    for(var i=0;i<myObj.backEnd.length;i++){
      console.log("loop backend Data",myObj.backEnd[i].display);
      if(i<myObj.backEnd.length && i!=myObj.backEnd.length-1)
      this.backStringEnd += myObj.backEnd[i].display + ",";
      else
      this.backStringEnd += myObj.backEnd[i].display;
    }
     
     for(var i=0;i<myObj.dbEnd.length;i++){
      console.log("loop backend Data",myObj.dbEnd[i].display);
        if(i<myObj.dbEnd.length && i!=myObj.backEnd.length-1) 
          this.dbStringEnd += myObj.dbEnd[i].display + ",";
        else
        this.dbStringEnd += myObj.dbEnd[i].display;
        
    }
    this.techObj.projId = this.mytech.BasicFormObj.propId;
    this.techObj.frontEnd = this.frontStringEnd;
    this.techObj.backEnd = this.backStringEnd;
    this.techObj.dbEnd = this.dbStringEnd;
    console.log("my front",this.techObj);
    
    this.mytech.techFormObj = this.techObj;

    console.log("service tech obj",this.mytech.techFormObj);
    console.log("service",this.mytech.BasicFormObj);
  }


}


