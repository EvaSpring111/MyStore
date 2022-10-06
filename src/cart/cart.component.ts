import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { HttpService } from 'src/services/sendForm.service';

import { CartService } from 'src/services/shopping-cart.service';
import { Form } from 'src/app/form';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ HttpService ]
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  checkoutForm = this.formBuilder.group({
    userName: '',
    address: '',
    email: ''
  });

  form: Form = new Form("", "", "")

  receivedDate: Form | undefined;

  constructor(
    private cartService : CartService,
    private formBuilder: FormBuilder,
    private httpService: HttpService
    ) {
      this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        localStorage.setItem('dataSource', this.products.length);
        console.log(localStorage.getItem('dataSource'));
        this.grandTotal = this.cartService.getTotalPrice();
        console.log('work');
      })
    }

  displayedColumns: string[] = ['Device', 'Price', 'Quantity', 'Total', 'Action'];
  dataSource = this.products;

  ngOnInit(): void {

  }

  removeItem(age: number){
    this.cartService.removeCartItem(age);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  userName = new FormControl('', [Validators.required]);

  getNameErrorMessage() {
    if (this.userName.hasError('required')) {
      return 'You must enter your name';
    }

    return this.userName.hasError('userName') ? 'Not a valid name' : '';
  }

  address = new FormControl('', [Validators.required]);

  getAddressErrorMessage() {
    if (this.address.hasError('required')) {
      return 'You must enter your address';
    }

    return this.address.hasError('address') ? 'Not a valid address' : '';
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getMailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(form: Form) {
    // this.products = this.cartService.removeAllCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);

    this.checkoutForm.reset();
    this.httpService.postData(form)
    .subscribe({
        next:(data: any) => {
          this.receivedDate = data;},
          error: error => console.log(error)
    });
  }

  // ngOnDestroy(){
  //  .unsubscribe();
  // }
}

