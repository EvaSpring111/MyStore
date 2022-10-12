import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';

import { ShopMall } from 'src/model/ShopMall.interface';
import { ServiceAddress } from 'src/model/ServiceAdrdess.interface';

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

  constructor(private http: HttpClient) { }

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
}
