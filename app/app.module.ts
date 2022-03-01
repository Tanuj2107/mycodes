import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MachineTranslationComponent } from './components/pages/machine_translation/machine_translation.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { FileuploadDirective } from './directives/fileupload.directive';
import { SummaryGenerationComponent } from './components/pages/summary_generation/summary_generation.component';
import { PatentAnalysisComponent } from './components/pages/patent_analysis/patent_analysis.component';
import { NewsClassificationComponent } from './components/pages/news_classification/news_classification.component';
import { MyWorkComponent } from './components/pages/my_work/my_work.component';
import { FeatureModule } from './modules/feature.module';
import { FormsModule } from '@angular/forms';
import { KeyPhrasesExtractionComponent } from './components/pages/key_phrases_extraction/key_phrases_extraction.component';
import { BubbleChartService } from './services/bubble-chart.service';
import { NerComponent } from './components/pages/ner/ner.component';
import { SentimentanalysisComponent } from './components/pages/sentimentanalysis/sentimentanalysis.component';
import { AddnewprojectComponent } from './components/pages/addnewproject/addnewproject.component';
import { ProjectdetailComponent } from './components/pages/projectdetail/projectdetail.component';
import { CenterpopupComponent } from './components/centerpopup/centerpopup.component';
import { EnginesComponent } from './components/pages/engines/engines.component';
import { KnobModule} from 'primeng/knob';
import { AngularBillboardModule } from 'angular-billboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxCarouselModule } from 'ngx-light-carousel';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MachineTranslationComponent,
    HomepageComponent,
    BannerComponent,
    FileuploadComponent,
    ProgressbarComponent,
    FileuploadDirective,
    SummaryGenerationComponent,
    PatentAnalysisComponent,
    NewsClassificationComponent,
    MyWorkComponent,
    KeyPhrasesExtractionComponent,
    NerComponent,
    SentimentanalysisComponent,
    AddnewprojectComponent,
    ProjectdetailComponent,
    CenterpopupComponent,
    EnginesComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    FeatureModule,
    FormsModule,
    KnobModule,
    AngularBillboardModule,
    NgbModule,
    NgxChartsModule,
    NgxCarouselModule,
    CarouselModule
  ],
  providers: [BubbleChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
