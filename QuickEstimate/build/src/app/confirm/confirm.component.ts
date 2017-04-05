import { Component, OnInit } from '@angular/core';
import { DataFuncionalService } from '../Services/data-funcional.service';
import { CalculateService } from '../Services/calculate.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private Myserv:DataFuncionalService,private calc:CalculateService) { 
    console.log("--------------------");
    //console.log(Myserv);
   // console.log(calc.myvar);
     
  }

  ngOnInit() {
    // this.Myserv.getBasicData();
  }

  pushData() {
    console.log("inside pushdata");
    this.Myserv.saveBasicProject();
    this.Myserv.saveTech();
    this.Myserv.saveTest();
    //this.Myserv.saveComplexity();

    alert("data submitted");

  }

}
