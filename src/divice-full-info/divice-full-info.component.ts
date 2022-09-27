import { Component, OnInit } from '@angular/core';

import { Stuff } from 'src/model/Stuff.interface';
import { StuffService } from 'src/app/stuff.service';
import { CartService } from 'src/app/shopping-cart.service';


@Component({
  selector: 'app-divice-full-info',
  templateUrl: './divice-full-info.component.html',
  styleUrls: ['./divice-full-info.component.css'],
  providers: [StuffService, CartService]
})
export class DiviceFullInfoComponent implements OnInit {

  stuff: Stuff[] = [];
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  totalLength: number = 4;

  constructor(
    private stuffService: StuffService,
    private cartService: CartService,
    ) { }

  ngOnInit(): void {
    this.stuffService
    .getStuff()
    .subscribe(res=>{
      this.stuff = res;
      this.totalLength = res.length;
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {

        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

  }
  addToCart(item: Stuff): void{
    this.cartService.addToCart(item);
  }

}





