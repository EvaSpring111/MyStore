export class Form {

  constructor(
    public userName: string,
    public selectCity: string,
    public address: string,
    public deliveryBy: string,
    public email: string,
    public mobileNumber: number,
    public dateOfDeliveryFrom: string,
    public dateOfDeliveryTo: string){}
}

export class CartProducts {
  constructor(
    public device: string,
    public price: number,
    public sale?: number,
    public total?: number,
    public grandtal?: number
  ){}
}

export class FeedBack {
  constructor(
    public userName: string,
    public phone: number,
    public email: string,
    public feedBackText: string,

  ){}
}
