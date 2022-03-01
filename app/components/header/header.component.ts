import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

}
