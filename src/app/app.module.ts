import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { StuffService } from './stuff.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    CommonModule,
  ],
  providers: [ StuffService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
