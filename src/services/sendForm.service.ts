import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from 'src/app/form';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    postData(form: Form){
        const body = { userName: form.userName, address: form.address, email: form.email};
        return this.http.post('https://62e271cf3891dd9ba8e865f4.mockapi.io/Su', body);
    }
}
