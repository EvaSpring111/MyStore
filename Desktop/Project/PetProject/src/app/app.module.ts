import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormDegustationComponent } from './form-degustation/form-degustation.component';
import { SommeilRecommendComponent } from './sommeil-recommend/sommeil-recommend.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { VotesResultsComponent } from './votes-results/votes-results.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormDegustationComponent, pathMatch: 'full' },
  { path: 'recomend', component: SommeilRecommendComponent, pathMatch: 'full' },
  { path: 'votesResults', component: VotesResultsComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FormDegustationComponent,
    SommeilRecommendComponent,
    NotFoundComponent,
    HomeComponent,
    VotesResultsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
