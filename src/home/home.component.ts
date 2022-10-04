import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchFilter } from 'src/filters/searchFilter.pipe';

import { Stuff } from 'src/model/Stuff.interface';
import { StuffService } from 'src/services/stuff.service';
import { CartService } from 'src/services/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ SearchFilter]
})

export class HomeComponent implements OnInit {

  stuff: Stuff[] = [];
  public filterCategory : any;

  public productList : any ;
  productsPerPage: number = 4;
  public selectedPage: number = 1;

  constructor(
    private stuffService: StuffService,
    private route: ActivatedRoute,
    private cartService: CartService,
    public searchFilter:SearchFilter) {
  }

  searchvalue: string = "";

  length: number | undefined;
  totalLength: any;
  page: number = 1;
  showpost: any = [];

  ngOnInit(): void {
    this.stuffService
    .getStuff()
    .subscribe((data: Stuff[]) => {
      this.stuff = data;
      this.totalLength = data.length;
      this.productList = data;
      this.filterCategory = data;
      this.productList.forEach((a: any) => {
        if(a.type === "phone"){
          a.type = "phone"
        } else if( a.type === "tablet"){
          a.type = "tablet"
        } else if (a.capacity > 1000){
          a.capacity = 1000
        }
        Object.assign(a, {
          quantity: 1,
          total : a.discount ? a.price -(a.price  / 100 * a.discount) : a.price
        });
      });
    });
  }

  addToCart(item: Stuff): void{
    this.cartService.addToCart(item);
  }

  filterType(type: string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.type == type || type ==''){
        return a;
      }
    })
  }


}

