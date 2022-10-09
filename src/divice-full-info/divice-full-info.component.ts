import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { Stuff } from 'src/model/Stuff.interface';
import { StuffService } from 'src/services/stuff.service';
import { CartService } from 'src/services/shopping-cart.service';
import { DeviceDescription } from 'src/model/DeviceDescription.interface';

import { TypeofPipe  } from 'src/filters/typeof.pipe';


@Component({
  selector: 'app-divice-full-info',
  templateUrl: './divice-full-info.component.html',
  styleUrls: ['./divice-full-info.component.css'],

})
export class DiviceFullInfoComponent implements OnInit {

   item: DeviceDescription | undefined;
   imgs: string[] = [];

   stuff: Stuff[] = [];
   public productList : any ;

   date = new Date();
   propositionDate = this.date.setDate(this.date.getDate() + 7);

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
      let dataSource =  this.stuffService.getDevice(id)
      .subscribe((data: DeviceDescription) => {
        this.item = data;
        this.imgs = this.item.images;
        console.log(this.imgs)
        return dataSource
    })
  }

    addToCart(oneDevice: Stuff): void{
      this.cartService.addToCart(oneDevice);
    }

    goBack(): void {
      this.location.back();
    }

    getType(val: any) {
      console.log("Function call ", typeof val);
     return typeof val;
    }

  }










