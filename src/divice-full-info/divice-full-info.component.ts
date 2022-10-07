import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { Stuff } from 'src/model/Stuff.interface';
import { StuffService } from 'src/services/stuff.service';
import { CartService } from 'src/services/shopping-cart.service';
import { map, Observable, of, switchMap } from 'rxjs';


@Component({
  selector: 'app-divice-full-info',
  templateUrl: './divice-full-info.component.html',
  styleUrls: ['./divice-full-info.component.css'],

})
export class DiviceFullInfoComponent implements OnInit {
   item: any;
   imgs: any;

   stuff: Stuff[] = [];
   public productList : any ;

  constructor(
    private stuffService: StuffService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

    ngOnInit(): void {
      this.stuffService
      .getStuff()
      .subscribe((data: Stuff[]) => {
        this.stuff = data;
        this.productList = data;
        this.productList.forEach((a: any) => {
        Object.assign(a, {
          quantity: 1,
          total : a.discount ? a.price -(a.price  / 100 * a.discount) : a.price
        });
       });
      });

      this.getDevice();
    }

    getDevice(): void {
      let id = this.route.snapshot.paramMap.get("id");

      this.stuffService.getDevice(id)
      .subscribe(data => {
        this.item = data;
        this.imgs = this.item.images;
        console.log(this.imgs)

    })
  }

    addToCart(item: Stuff): void{
      this.cartService.addToCart(item);
    }

    goBack(): void {
      this.location.back();
    }

}









