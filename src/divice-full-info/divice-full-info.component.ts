import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { Stuff } from 'src/model/Stuff.interface';
import { StuffService } from 'src/services/stuff.service';
import { CartService } from 'src/services/shopping-cart.service';
import { Observable, switchMap } from 'rxjs';


@Component({
  selector: 'app-divice-full-info',
  templateUrl: './divice-full-info.component.html',
  styleUrls: ['./divice-full-info.component.css'],

})
export class DiviceFullInfoComponent implements OnInit {

  // stuff: Stuff[] = [];
  // item: any;

  // public productList : any ;
  // public filterCategory : any
  // id: string;
  // totalLength: number = 4;

   item$!: Observable<Stuff>;


  constructor(
    private stuffService: StuffService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location
    ) {}


    ngOnInit() {
      this.item$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.stuffService.getDevice(Number(params.get('age'))))
      );
    }

    // ngOnInit(): void {
    //   this.getDevice();
    // }

    // getDevice() {
    //   const age = this.route.snapshot.paramMap.get(age);
    //   this.stuffService.getDevice(age)
    //     .subscribe(item => item.age === +age);
    // }

    addToCart(item: Stuff): void{
      this.cartService.addToCart(item);
    }

    goBack(): void {
      this.location.back();
    }

}





