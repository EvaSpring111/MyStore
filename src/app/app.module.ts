import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { StuffService } from './stuff.service';
import { CartService  } from './shopping-cart.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from 'src/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from 'src/cart/cart.component';
import { DiviceFullInfoComponent } from 'src/divice-full-info/divice-full-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full'  },
  { path: 'stuff/:itemName', component: DiviceFullInfoComponent },
  { path: 'cart', component: CartComponent  },
  { path: 'deviceFullInfo', component: DiviceFullInfoComponent  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiviceFullInfoComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [ StuffService, CartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
