import { Pipe, PipeTransform } from '@angular/core';


export class FilterPipeScreen implements PipeTransform {

  transform(value : any[], filterString: number, propName : number): any[] {
    const result: any =[];
    if(!value || filterString === 0 || propName === 0){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].splice(0, -2) > 1000){
        result.push(a);
      }
    });
    return result;
  }

}
