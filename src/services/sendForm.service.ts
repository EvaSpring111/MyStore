import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from 'src/app/form';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    postData(form: Form){
        const body = { userName: form.userName, address: form.address, email: form.email, mobileNumber: form.mobileNumber} ;
        return this.http.post('https://63444a5ddcae733e8fdc290a.mockapi.io/Store', body);
    }
}
