import { Injectable } from '@angular/core';

import { Observable, throwError, of } from 'rxjs';

import { ShopMall } from 'src/app/model/ShopMall.model';
import { ServiceAddress } from 'src/app/model/ServiceAdrdess.model';

import { KYIVSHOP } from 'src/shopsAddresses';
import { LVIVSHOP } from 'src/shopsAddresses';
import { ODESSASHOP } from 'src/shopsAddresses';
import { kyivService } from 'src/addressesServiceCenters';
import { lvivService } from 'src/addressesServiceCenters';
import { odessaService } from 'src/addressesServiceCenters';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getShopKyiv(): Observable<ShopMall[]> {
    return of(KYIVSHOP)
   }
  getShopLviv(): Observable<ShopMall[]> {
    return of(LVIVSHOP)
  }
  getShopOdessa(): Observable<ShopMall[]> {
    return of(ODESSASHOP)
  }

  getServiceKyiv(): Observable<ServiceAddress[]> {
    return of(kyivService)
  }
  getServiceLviv(): Observable<ServiceAddress[]> {
    return of(lvivService)
  }
  getServiceOdessa(): Observable<ServiceAddress[]> {
    return of(odessaService)
  }

  // getService(id: number): Observable<ServiceAddress> {
  //   // TODO: send the message _after_ fetching the hero

  //   return of(HEROES.find(hero => hero.id === id));
  // }
}
