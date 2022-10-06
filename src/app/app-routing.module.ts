import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/home/home.component';
import { DiviceFullInfoComponent } from 'src/divice-full-info/divice-full-info.component';
import { CartComponent } from 'src/cart/cart.component';

const routes: Routes = [
  { path: 'products/:id', component: DiviceFullInfoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'deviceFullInfo', component: DiviceFullInfoComponent  },
  // { path: 'shipping', component: ShippingComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
