import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import { Stuff } from 'src/model/Stuff.interface';
import { StuffService } from 'src/services/stuff.service';
import { CartService } from 'src/services/shopping-cart.service';


@Component({
  selector: 'app-divice-full-info',
  templateUrl: './divice-full-info.component.html',
  styleUrls: ['./divice-full-info.component.css'],

})
export class DiviceFullInfoComponent implements OnInit {

  stuff: Stuff[] = [];
  item: any;

  public productList : any ;
  public filterCategory : any

  totalLength: number = 4;

  constructor(
    private stuffService: StuffService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

    ngOnInit(): void {
      this.getDevice();
    }

    getDevice() {
      const id = this.route.snapshot.paramMap.get('id');
      this.stuffService.getDevice(id)
        .subscribe(item => item.id === item.id);
    }


    addToCart(item: Stuff): void{
      this.cartService.addToCart(item);
    }

    goBack(): void {
      this.location.back();
    }

}





