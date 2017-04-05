import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-download',
  templateUrl: './forms-download.component.html',
  styleUrls: ['./forms-download.component.css']
})
export class FormsDownloadComponent implements OnInit {
  flag = false;

  constructor() { }

  ngOnInit() {
  }

  isValid() {
    this.flag = true;
    return this.flag;
  }

}
