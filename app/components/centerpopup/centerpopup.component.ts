import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-centerpopup',
  templateUrl: './centerpopup.component.html',
  styleUrls: ['./centerpopup.component.scss']
})
export class CenterpopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() popupDisplay = 'display_none';


  closePopup(e:any){
    Object.values(e.classList).filter((item)=>{
      if(item === "display_block"){
        this.popupDisplay = "display_none";
        document.body.classList.remove("overflow_hidden");
      }
    })
  }

}
