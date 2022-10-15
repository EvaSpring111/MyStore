import { Component, OnInit } from '@angular/core';
import { ServiceAddress } from 'src/app/model/ServiceAdrdess.model';
import { ShopMall } from 'src/app/model/ShopMall.model';
import { KYIVSHOP } from 'src/shopsAddresses';
import { LVIVSHOP } from 'src/shopsAddresses';
import { ODESSASHOP } from 'src/shopsAddresses';
import { kyivService } from 'src/addressesServiceCenters';
import { lvivService } from 'src/addressesServiceCenters';
import { odessaService } from 'src/addressesServiceCenters';

import { ContactsService } from 'src/app/services/contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  kyivShop: ShopMall[] = [];
  lvivShop: ShopMall[] = [];
  odessaShop: ShopMall[] = [];

  kyivService: ServiceAddress[] = [];
  lvivService: ServiceAddress[] = [];
  odessaService: ServiceAddress[] = [];

  constructor( private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.getShopKyiv();
    this.getShopLviv();
    this.getShopOdessa();
    this.getServiceKyiv();
    this.getServiceLviv();
    this.getServiceOdessa()
  }

  getShopKyiv(){
    this.contactsService.getShopKyiv()
     .subscribe(kyivShop => this.kyivShop = kyivShop);
  }

  getShopLviv(){
    this.contactsService.getShopLviv()
      .subscribe(lvivShop => this.lvivShop = lvivShop);
  }
  getShopOdessa(){
    this.contactsService.getShopOdessa()
      .subscribe(odessaShop => this.odessaShop = odessaShop);
  }

  getServiceKyiv(){
    this.contactsService.getServiceKyiv()
      .subscribe(kyivService => this.kyivService = kyivService);
  }
  getServiceLviv(){
    this.contactsService.getServiceLviv()
      .subscribe(lvivService => this.lvivService = lvivService);
  }
  getServiceOdessa(){
    this.contactsService.getServiceKyiv()
      .subscribe(odessaService => this.odessaService = odessaService);
  }

}
