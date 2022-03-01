import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { binaryClassification, nineClassClassification, tenClassClassification } from '../data/chartdata'

@Component({
  selector: 'app-news_classification',
  templateUrl: './news_classification.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, noPause: false, showIndicators: false, itemsPerSlide: 4, singleSlideOffset: true, isAnimated: true } }
 ],
  styleUrls: ['./news_classification.component.scss']
})
export class NewsClassificationComponent implements OnInit {

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

  bannerTitle = 'News Classification';
  bannerImage = 'news-classification.png';
  bannerContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam officia corrupti quo. `;

  uploadHeading="Upload File for Classification";

  slidedisplay: boolean = false;

  slideshowDialog1() {
      this.slidedisplay = true;
  }

//   public data1 = [

//     {Class: "Elevent", Count: 22.55},
//     {Class: "Irrelevant",  Count: 10.32}
// ];

binaryClassification: any = [];

nineClassClassification: any = [];

tenClassClassification: any = [];


// options
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = true;
showXAxisLabel = true;
xAxisLabel = 'Class';
showYAxisLabel = true;
yAxisLabel = 'Count';
barPadding = 35;
rotateXAxisTicks = false;

// colorScheme = {
//   domain: ['#772b58', '#db6e59']
// };


constructor(){ Object.assign(this, {binaryClassification, nineClassClassification, tenClassClassification}) }



}
