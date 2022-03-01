import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ner',
  templateUrl: './ner.component.html',
  styleUrls: ['./ner.component.scss']
})
export class NerComponent implements OnInit {

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

  bannerTitle = 'NER';
  bannerImage = 'key-phrases-extraction.png';
  bannerContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam officia corrupti quo. `;

  uploadHeading="Upload Document to Generate NER";
  uploadPara=`Max file size of ${this.size} MB or less. For Excel files, please limit number of characters in each cell to be less than 3,500 English words/Chinese charcters.`;


}
