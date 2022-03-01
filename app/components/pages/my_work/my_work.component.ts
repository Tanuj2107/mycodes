import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my_work',
  templateUrl: './my_work.component.html',
  styleUrls: ['./my_work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  value1: number = 65;
  value2: number = 70;
  ITCP_value1: number = 75;
  ITCP_value2: number = 80;
  

  bannerTitle = 'My Work';
  bannerImage = 'my-work.png';
  bannerContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam officia corrupti quo. `;

  display: boolean = false;
  display2: boolean = false;

  ITCPshowDialog1() {
      this.display = true;
  }
  ITCPshowDialog2() {
    this.display2 = true;
    this.display = false;
  }

  value =
    `{

      ProjectID: PID00001,

      ModelID: efdf11942554e4138ee21fd57c0883e0,

      File: data in JSON format,

    }`;
}
