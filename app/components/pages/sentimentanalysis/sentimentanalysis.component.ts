import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentimentanalysis',
  templateUrl: './sentimentanalysis.component.html',
  styleUrls: ['./sentimentanalysis.component.scss']
})
export class SentimentanalysisComponent implements OnInit {

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

  bannerTitle = 'Sentiment Analysis';
  bannerImage = 'sentiment-analysis.png';
  bannerContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam officia corrupti quo. `;

  uploadHeading="Upload Bulk Links or Articles to Generate Summary";
  uploadPara=``;


}
