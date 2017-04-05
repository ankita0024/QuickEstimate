import { Component, OnInit } from '@angular/core';
import { DataFuncionalService } from '../Services/data-funcional.service';
import { SearchPipe } from '../Services/searchpipe';

@Component({
  selector: 'app-saved-proj',
  templateUrl: './saved-proj.component.html',
  styleUrls: ['./saved-proj.component.css']
})
export class SavedProjComponent implements OnInit {
  basicData:any = [];
  listInp;
  constructor(private myServ:DataFuncionalService) { }

  ngOnInit() {
    this.myServ.getBasicData().subscribe(resEmployeeData =>{ this.basicData = resEmployeeData;console.log(this.basicData)});
     console.log(this.listInp);
  }
 
}
