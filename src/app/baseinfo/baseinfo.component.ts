import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-baseinfo',
  templateUrl: './baseinfo.component.html',
  styleUrls: ['./baseinfo.component.css']
})
export class BaseinfoComponent implements OnInit {
  panels2 = {
    name1: 'panels1'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
