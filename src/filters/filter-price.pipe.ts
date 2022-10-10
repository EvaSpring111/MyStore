import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(list: any, minPrice: number | undefined, maxPrice :number | undefined) {

    let filter_list = list;
    if (minPrice) {
      filter_list = filter_list.filter((item: { price: number; }) => {
        return item.price >= +minPrice;
      });
    }

    if (maxPrice) {
      filter_list = filter_list.filter((item: { price: number; }) => {
        return item.price <= +maxPrice;
      });
    }
    return  filter_list;
  }

}
