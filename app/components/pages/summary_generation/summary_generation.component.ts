import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary_generation',
  templateUrl: './summary_generation.component.html',
  styleUrls: ['./summary_generation.component.scss']
})
export class SummaryGenerationComponent implements OnInit {

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

  articleType =[
    {name: "Long Article"},
    {name: "Short Article"},
  
  ]

  modelType =[
    {name: "Generic Abstractive"},
    {name: "Financial Abstractive"},
  ]

  val: number= 58;


  bannerTitle = 'Summary Generation';
  bannerImage = 'summary-generation.png';
  bannerContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam officia corrupti quo. `;

  uploadHeading="Upload Bulk Links or Articles to Generate Summary";
  uploadPara=`Please markthe column header as 'Article' or 'link' in the uploaded spreadsheet indicating which column to be used by model for summary generation.`;

  

}
