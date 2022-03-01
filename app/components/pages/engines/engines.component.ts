import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.scss']
})
export class EnginesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bannerTitle = 'Engines';
  bannerImage = 'engines.png';
  bannerContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam officia corrupti quo. `;

}
