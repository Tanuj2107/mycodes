import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BubbleChartService } from 'src/app/services/bubble-chart.service';

@Component({
  selector: 'app-key_phrases_extraction',
  templateUrl: './key_phrases_extraction.component.html',
  styleUrls: ['./key_phrases_extraction.component.scss']
})
export class KeyPhrasesExtractionComponent {

  constructor(
    private _bubbleChartService: BubbleChartService,
  ) { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
    this._bubbleChartService.renderChart();
  }

  checked!: boolean;

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

  bannerTitle = 'Phrase Cloud Generation';
  bannerImage = 'key-phrases-extraction.png';
  bannerContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam officia corrupti quo. `;

  uploadHeading="Upload Bulk Keyphrase";
  uploadPara=`Please mark the column header as 'Article' or 'Link' in the uploaded spreadsheet indicating which column to be used`;



}
