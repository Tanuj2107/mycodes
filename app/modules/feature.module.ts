import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import {SliderModule} from 'primeng/slider';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DialogModule} from 'primeng/dialog';

import { 
	IgxDataChartCoreModule,
	IgxDataChartVerticalCategoryModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule,
  IgxCategoryChartModule
 } from "igniteui-angular-charts";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabViewModule,
    DropdownModule,
    SliderModule,
    InputSwitchModule,
    DialogModule,
    IgxDataChartCoreModule,
    IgxDataChartVerticalCategoryModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxCategoryChartModule
  ],
  exports:[
    BsDropdownModule,
    TabViewModule,
    DropdownModule,
    SliderModule,
    InputSwitchModule,
    DialogModule,
    IgxDataChartCoreModule,
    IgxDataChartVerticalCategoryModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxCategoryChartModule
  ]
})
export class FeatureModule { }
