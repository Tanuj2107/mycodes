import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobileMenu(event:any){
    if(Object.values(event.classList).indexOf("display_flex") == -1){
      event.classList.add('display_flex')
    }else{
      event.classList.remove('display_flex')
    }
  }

      customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: true,
        center: true,
        navSpeed: 700,
        responsive: {
          0: {
            items: 1
          }
        },
        nav: false
      }


      stories: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        center: true,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          }
        },
        nav: true
      }
}
