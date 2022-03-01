import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewproject',
  templateUrl: './addnewproject.component.html',
  styleUrls: ['./addnewproject.component.scss']
})
export class AddnewprojectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  
  langFrom =[
    {name: "English"},
    {name: "Chinese"},
    {name: "German"},
    {name: "French"}
  ]

  langTo =[
    {name: "English"},
    {name: "Chinese"},
    {name: "German"},
    {name: "French"}
  ]

  size:any = 15;

  bannerTitle = 'Patent Analysis';
  bannerImage = 'patent-analysis.png';
  bannerContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam officia corrupti quo. `;

  uploadHeading="";
  uploadPara=``;


}
