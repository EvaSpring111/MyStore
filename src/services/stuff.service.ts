import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as rxjs from 'rxjs';
import { Stuff } from 'src/model/Stuff.interface';

@Injectable({ providedIn: 'root' })

export class StuffService {

  private clientUrl: string = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';

  constructor(private http: HttpClient) {}

  getStuff(): Observable<Stuff[]> {
    return this.http.get<Stuff[]>(this.clientUrl)
  }

  getDevice(id: any ): Observable<Stuff>{
    const url = `${this.clientUrl}/${id}`;

    return this.http.get<Stuff>(this.clientUrl)
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



