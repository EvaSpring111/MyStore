import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MaterialExampleModule } from '../material.module';
import { StuffService } from './stuff.service';
import { CartService  } from './shopping-cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
import { SearchFilter } from 'src/divice-full-info/searchFilter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeComponent } from 'src/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from 'src/cart/cart.component';
import { DiviceFullInfoComponent } from 'src/divice-full-info/divice-full-info.component';
import { ShippingComponent } from 'src/shipping/shipping.component';

const routes: Routes = [
  {  path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'stuff/:itemID', component: DiviceFullInfoComponent },
  { path: 'cart', component: CartComponent  },
  { path: 'deviceFullInfo', component: DiviceFullInfoComponent  },
  // { path: 'shipping', component: ShippingComponent  },
];

@NgModule({
   imports: [
    BrowserModule,
    MaterialExampleModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    Ng2SearchPipeModule,

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DiviceFullInfoComponent,
    CartComponent,
    FilterPipe,
    SearchFilter,
    ShippingComponent,
  ],
  providers: [
    StuffService,
    CartService,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
