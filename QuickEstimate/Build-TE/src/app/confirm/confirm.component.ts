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
    console.log(calc.Units);
    console.log(calc.totalUI);
    console.log(calc.unitTestUI);
    console.log(calc.total);
    console.log(calc.unitTestAPI);
    console.log(calc.totalAPI);
    console.log(calc.totalPersonDaysUI);
    console.log(calc.totalPersonDaysAPI);
    console.log(calc.totalPersonWeeksUI);
    console.log(calc.totalPersonWeeksAPI);
    console.log(calc.totalPersonWeeks);
    console.log(calc.effortDistUI);
    console.log(calc.effortDistAPI);
    console.log(calc.totalEffort);
  }

  ngOnInit() {
    // this.Myserv.getBasicData();
  }

  pushData() {
    console.log("inside pushdata");
    this.Myserv.saveBasicProject();
    this.Myserv.saveTech();
    this.Myserv.saveTest();
    this.Myserv.saveComplexity();

    alert("data submitted");

  }

}
