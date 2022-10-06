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
  // stuff: Stuff[] = [];
  // public productList : any ;
  // public filterCategory : any
  // id: string;
  // totalLength: number = 4;
  // item$: Observable<Stuff>;
   item: any;

  constructor(
    private stuffService: StuffService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

    ngOnInit(): void {
      this.getDevice();
    }

    getDevice(): void {
      let id = this.route.snapshot.paramMap.get("id");

      this.stuffService.getDevice(id)
      .subscribe(data => {
        this.item = data;
      });
  }
    addToCart(item: Stuff): void{
      this.cartService.addToCart(item);
    }

    goBack(): void {
      this.location.back();
    }
}


  //  ngOnInit() {
  //     this.item$ = this.route.paramMap.pipe(
  //       switchMap((params: ParamMap) =>
  //         this.stuffService.getDevice(String(params.get('id')))
  //         )
  //       );
  //        console.log('item$', this.item$);
  //     }





