import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map, } from 'rxjs/operators';
import * as rxjs from 'rxjs';
import { Stuff } from 'src/model/Stuff.interface';

@Injectable({ providedIn: 'root' })

export class StuffService {

  private clientUrl: string = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';
  private Url: string = 'https://mate-academy.github.io/react_phone-catalog/api/products';

  constructor(private http: HttpClient) {}

  getStuff(): Observable<Stuff[]> {
   return this.http.get<Stuff[]>(this.clientUrl)
  }

  getDevice(id: string | null): Observable<Stuff> {
    console.log('2', id)
    const url = `${this.Url}/${id}.json`;
    return this.http.get<Stuff>(url);
  }


  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  searchStuff(data: string): Observable<Stuff[]> {
    if(data.trim()!==""){
     return this.http.get<Stuff[]>(`${this.clientUrl}/?name=${data.trim()}`).pipe(
       catchError(this.handleError)
     );
    } else {
     return this.http.get<Stuff[]>(this.clientUrl).pipe(
       catchError(this.handleError)
     );
     }
   }

}



  // return this.http.get<Stuff>(this.clientUrl).pipe(
    //   map((items: Stuff[]) =>
    //     items.find((item) => item.id === id)
    //   )
    // );





