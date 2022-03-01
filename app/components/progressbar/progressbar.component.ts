import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {


  @Input() progress = 0;
  @Input() height = 8;
  @Input() airaBackgroundClass = 'aira-background-purple';

  constructor() { }

  ngOnInit(): void {
  }

}
