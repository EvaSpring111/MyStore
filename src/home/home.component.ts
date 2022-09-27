import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Stuff } from 'src/model/Stuff.interface';
import { StuffService } from 'src/app/stuff.service';
import { CartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StuffService, CartService]
})
export class HomeComponent implements OnInit {


  stuff: Stuff[] = [];


  productsPerPage: number = 4;
  public selectedPage: number = 1;

  constructor(
    private stuffService: StuffService,
    private route: ActivatedRoute,
    private cartService: CartService) {

   }
  totalLength: any;
  page: number = 1;
  showpost: any = [];

  ngOnInit(): void {
    this.stuffService
    .getStuff()
    .subscribe((data: Stuff[]) => {
      this.stuff = data;
      this.totalLength = data.length;
    })

    // addToCart(item: Stuff) {
    //   this.cartService.addToCart(item);
    //   window.alert('Your product has been added to the cart!');
    // }

    // changePageSize(event: Event){
    //   const newSize = (event.target as HTMLInputElement).value;
    //   this.productsPerPage = Number(newSize)
    // }

    // let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    // this.products= this.stuff.slice(pageIndex, this.productsPerPage)
  }


  // changePageSize(event: Event){

  // }

  // get pageNumbers(): number[]{
  //   return Array(Math.ceil(this.stuff.length / this.productsPerPage))
  //     .fill(0).map((x, i) => i + 1);
  // }
  // getNewPrice(price: number, discount: number ): number{
  //   return this.price -
  // }
}

