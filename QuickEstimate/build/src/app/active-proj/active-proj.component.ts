import { Component, OnInit } from '@angular/core';
import { DataFuncionalService } from '../Services/data-funcional.service';

@Component({
  selector: 'app-active-proj',
  templateUrl: './active-proj.component.html',
  styleUrls: ['./active-proj.component.css']
})
export class ActiveProjComponent implements OnInit {
  basicData:any = [];
  cdata:any = [];
  constructor(private myServ:DataFuncionalService) {
      
   }

  ngOnInit() {
   this.myServ.getBasicData().subscribe(resEmployeeData =>{ this.basicData = resEmployeeData;console.log(this.basicData)});
  }



}
