import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/home/home.component';
import { DiviceFullInfoComponent } from 'src/divice-full-info/divice-full-info.component';
import { CartComponent } from 'src/cart/cart.component';

import { StuffService } from 'src/services/stuff.service';
import { CartService  } from 'src/services/shopping-cart.service';
import { LocalService } from 'src/services/local.service';

import { FilterPipe } from 'src/filters/filter.pipe';
import { SearchFilter } from 'src/filters/searchFilter.pipe';
import { TypeofPipe } from 'src/filters/typeof.pipe';

import { NgxPaginationModule } from 'ngx-pagination';

import { FilterPipeScreen } from 'src/filters/filterScreem.pipe'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../material.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
   imports: [
    BrowserModule,
    MaterialExampleModule,
    MatIconModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DiviceFullInfoComponent,
    CartComponent,
    FilterPipe,
    SearchFilter,
    TypeofPipe
  ],
  providers: [
    StuffService,
    CartService,
    LocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
