import { withIdentifier } from 'codelyzer/util/astQuery';
import { Component, OnInit } from '@angular/core';
import { GetClientFormDataService } from '../Services/get-client-form-data.service';
@Component({
  selector: 'app-forms-basic',
  templateUrl: './forms-basic.component.html',
  styleUrls: ['./forms-basic.component.css']
})
export class FormsBasicComponent implements OnInit {

  constructor(private myser:GetClientFormDataService) { 

  }

  ngOnInit() {
  }

  onSubmit(formObj:any) {
    console.log("inside basic form submit");
    console.log("form obj value",formObj);
  }
  myPass(formObj:any) {
    console.log("hello");
    console.log("inside basic form click");
    console.log("form obj value------------",formObj);
    this.myser.BasicFormObj = formObj;
    this.myser.BasicFormObj.phase = "0";
    console.log("-------hey service insertion",this.myser.BasicFormObj);
  }

}
