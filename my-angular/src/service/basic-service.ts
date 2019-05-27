import { Injectable } from "@angular/core";
import { RequestOptions, Http, Headers } from '@angular/http';

@Injectable()
export class TBasicService
{
    constructor(public http: Http)
    {
    }

    createHeader()
    {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const token = localStorage.getItem('token');
        if(token)
            headers.append('Authorization', token);

        return new RequestOptions({headers: headers});
    }
}