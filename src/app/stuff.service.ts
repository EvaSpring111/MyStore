import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as rxjs from 'rxjs';
import { Stuff } from 'src/model/Stuff.interface';

const stuffUrl: string = '/api/stuff';
@Injectable()
export class StuffService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Stuff[]> {
    return this.http
    .get(stuffUrl).pipe(
     map((response: HttpResponse) => response.json()))
  }

}



