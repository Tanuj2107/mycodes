import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {

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

  bannerTitle = 'Patent Analysis';
  bannerImage = 'patent-analysis.png';
  bannerContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam officia corrupti quo. `;
  
  uploadHeading="";
  uploadPara=``;
  
  checked!: boolean;
  isRelevance = "Relevant"

  toggleList=[{
    checked : true,
    relevant:"Relevant"
  },
  {
    checked : false,
    relevant:"Non-Relevant"
  },
  {
    checked : true,
    relevant:"Relevant"
  },
  {
    checked : false,
    relevant:"Non-Relevant"
  },
  {
    checked : true,
    relevant:"Relevant"
  },
]
  
  handleChange(e) {
    let isChecked = e.checked;
    if(!isChecked){
      e.originalEvent.path[3].childNodes[1].innerText = "Non-Revelant"
    }else{
      e.originalEvent.path[3].childNodes[1].innerText = "Revelant"
    }

   
  }





  togglePopup(el:any) {
    console.log(el);
    if(el.popupDisplay == "display_none"){
      el.popupDisplay = "display_block"
      document.body.classList.add('overflow_hidden');
    }
   
  }



  display: boolean = false;

  showDialog() {
      this.display = true;
  }
  

}
