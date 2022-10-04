import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Stuff } from 'src/model/Stuff.interface';
import { StuffService } from 'src/app/stuff.service';
import { CartService } from 'src/app/shopping-cart.service';


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
    ) {}

  // ngOnInit(): void {
  //   this.stuffService
  //   .getStuff()
  //   .subscribe(res=>{
  //     this.stuff = res;
  //     this.totalLength = res.length;
  //     this.productList = res;
  //     this.filterCategory = res;
  //     this.productList.forEach((a: any) => {
  //       if(a.type === "phone"){
  //         a.type = "phone"
  //       } else if( a.type === "tablet"){
  //         a.type = "tablet"
  //       }
  //       Object.assign(a, {
  //         quantity: a.length,
  //         total : a.discount ? a.price -(a.price  / 100 * a.discount) : a.price
  //       });
  //     });
  //     console.log(this.productList)
  //  });
  // }

  ngOnInit(){
      this.route.paramMap.subscribe(params => {
        this.item = this.stuff[+params.get('itemAge')]
      })
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





