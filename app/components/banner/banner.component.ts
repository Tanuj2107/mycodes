import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { 
  }
  
  @Input() bannerTitle?:string= '';
  @Input() bannerContent?:string = '';
  @Input() bannerImage?:string = '';

}
