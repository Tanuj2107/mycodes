import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine_translation',
  templateUrl: './machine_translation.component.html',
  styleUrls: ['./machine_translation.component.scss']
})
export class MachineTranslationComponent implements OnInit {
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
    {name: "Chinese"},
    {name: "English"},
    {name: "German"},
    {name: "French"}
  ]

  size:any = 15;

  bannerTitle = 'Machine Translation';
  bannerImage = 'machine-translation.png';
  bannerContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam officia corrupti quo. `;

  uploadHeading="Upload Document to be Translated";
  uploadPara=`Max file size of ${this.size} MB or less. For Excel files, please limit number of characters in each cell to be less than 3500 English words/Chinese characters.`;

  
}

