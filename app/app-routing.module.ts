import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddnewprojectComponent } from './components/pages/addnewproject/addnewproject.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { KeyPhrasesExtractionComponent } from './components/pages/key_phrases_extraction/key_phrases_extraction.component';
import { MachineTranslationComponent } from './components/pages/machine_translation/machine_translation.component';
import { MyWorkComponent } from './components/pages/my_work/my_work.component';
import { NerComponent } from './components/pages/ner/ner.component';
import { PatentAnalysisComponent } from './components/pages/patent_analysis/patent_analysis.component';
import { ProjectdetailComponent } from './components/pages/projectdetail/projectdetail.component';
import { SentimentanalysisComponent } from './components/pages/sentimentanalysis/sentimentanalysis.component';
import { SummaryGenerationComponent } from './components/pages/summary_generation/summary_generation.component';
import { EnginesComponent } from './components/pages/engines/engines.component';
import { NewsClassificationComponent } from './components/pages/news_classification/news_classification.component';
 
const routes: Routes = [ 
  {path: '', component: HomepageComponent, pathMatch:'full'},
  {path: 'machine-translation', component: MachineTranslationComponent},
  {path: 'ner', component: NerComponent},
  {path: 'summary-generation', component: SummaryGenerationComponent},
  {path: 'sentiment-analysis', component: SentimentanalysisComponent},
  {path: 'add-new-project', component: AddnewprojectComponent},
  {path: 'project-detail', component: ProjectdetailComponent},
  {path: 'patent-analysis', component: PatentAnalysisComponent},
  {path: 'phrase-cloud-generation', component: KeyPhrasesExtractionComponent},
  {path: 'my-work', component: MyWorkComponent},
  {path: 'engines', component: EnginesComponent},
  {path: 'news-classification', component: NewsClassificationComponent},
  {path: 'my-work', component: MyWorkComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
