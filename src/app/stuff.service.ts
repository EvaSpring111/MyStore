import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as rxjs from 'rxjs';
import { Stuff } from 'src/model/Stuff.interface';



@Injectable()
export class StuffService {
  private clientUrl: string = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';

  constructor(private http: HttpClient) {}

  getStuff(): Observable<Stuff[]> {
    return this.http.get<Stuff[]>(this.clientUrl)
  }
  getItem(id:number): Observable<Stuff[]>{
    return this.http.get<Stuff[]>(this.clientUrl[id+1]);
  }

}

// this.http.get('http://localhost/php/data.json')
//     .pipe (
//        catchError((error) => // handle the error here; )
//      )
//     .subscribe((res) => {
//       this.data = res;
//       console.log(this.data);
//     })



