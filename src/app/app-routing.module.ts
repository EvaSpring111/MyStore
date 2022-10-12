import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/home/home.component';
import { DiviceFullInfoComponent } from 'src/divice-full-info/divice-full-info.component';
import { CartComponent } from 'src/cart/cart.component';
import { NotFoundComponent } from 'src/not-found/not-found.component';
import { ContactsComponent } from 'src/contacts/contacts.component';

const routes: Routes = [
  { path: 'products/:id', component: DiviceFullInfoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent  },
  { path: '**', component: NotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
