import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as rxjs from 'rxjs';
import { Stuff } from 'src/model/Stuff.interface';

const stuffUrl: string = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';
@Injectable()
export class StuffService {
  constructor(private http: HttpClient) {}

  getStuff(): Observable<Stuff[]> {
    return this.http
    .get(stuffUrl).pipe(
     map((response: HttpResponse) => response.json()))
  }

}



