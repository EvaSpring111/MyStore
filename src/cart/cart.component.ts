import { Component, OnInit} from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Form } from 'src/app/form';

import { HttpService } from 'src/services/sendForm.service';
import { CartService } from 'src/services/shopping-cart.service';
import { LocalService } from 'src/services/local.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ HttpService ]
})
export class CartComponent implements OnInit {

  public products : any = [];
  public prod : any = [];
  public grandTotal !: number;
  public grandtal !: number;
  cart:any

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
    private httpService: HttpService,
    private localStore: LocalService
    ) {}

  ngOnInit(): void {
    this.cart =  this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();

    var catrStuff = JSON.stringify(this.products);
    var priceStuff = JSON.stringify(this.grandTotal);
    this.localStore.saveData('id', catrStuff);
    this.localStore.saveData('id$', priceStuff);
    console.log('Cart has: ', JSON.parse(this.localStore.getData('id')));
    this.prod =  JSON.parse(this.localStore.getData('id'));

    console.log('Cart has: ', JSON.parse(this.localStore.getData('id$')));
    this.grandtal = JSON.parse(this.localStore.getData('id$'));
  })
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
