import { Component, OnInit } from '@angular/core';
import { GetClientFormDataService } from '../Services/get-client-form-data.service';

@Component({
  selector: 'app-forms-test',
  templateUrl: './forms-test.component.html',
  styleUrls: ['./forms-test.component.css']
})
export class FormsTestComponent implements OnInit {

  myTestFormObj:any = {
     projId:String,
     unitTest:String,
     eteTest:String,
     perfTest:String,
     secTest:String,
     accessibility:String,
     multiCapa:String
   }


  constructor(private myTest:GetClientFormDataService) { }

  ngOnInit() {
  }

  myPass(myObj:any) {
    console.log("hello inside test click");
    console.log("inside test my object-------",myObj);
    this.myTestFormObj = myObj;
    this.myTestFormObj.projId = this.myTest.BasicFormObj.propId;
    this.myTest.testFormObj = this.myTestFormObj;
    console.log(this.myTest.testFormObj);
  }

}
