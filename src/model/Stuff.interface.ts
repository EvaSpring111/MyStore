export interface Stuff {
    qty: number;
    age: number,
    id: string,
    type: string,
    imageUrl: string,
    name: string,
    snippet: string,
    price: number,
    discount: number,
    screen: string,
    capacity: string,
    ram: string,
}

export interface CartProduct extends Stuff {
  qty:number;
}
