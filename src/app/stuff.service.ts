import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as rxjs from 'rxjs';
import { Stuff } from 'src/model/Stuff.interface';

@Injectable()
export class StuffService {
  private clientUrl: string = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';

  constructor(private http: HttpClient) {}

  getStuff(): Observable<Stuff[]> {
    return this.http.get<Stuff[]>(this.clientUrl).pipe(
      catchError(this.handleError)
    );
  }

  getItem(id:number): Observable<Stuff[]>{
    return this.http.get<Stuff[]>(this.clientUrl[id+1]).pipe(
      catchError(this.handleError)
    );
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

// this.http.get('http://localhost/php/data.json')
//     .pipe (
//        catchError((error) => // handle the error here; )
//      )
//     .subscribe((res) => {
//       this.data = res;
//       console.log(this.data);
//     })



