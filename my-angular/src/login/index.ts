import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
    selector: 'login',
    templateUrl: './index.html',
    styles: 
    [
        ` 
        .login-form {
            max-width: 300px;
        }

        .login-form-forgot {
            float: right;
        }

        .login-form-button {
            width: 100%;
        }`
    ]
})
export class LoginComponent implements OnInit
{
    constructor(public formBuilder: FormBuilder, private http: HttpClient)
    {
    }

    ngOnInit()
    {
        this.validateForm = this.formBuilder.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }

    submitForm()
    {
        // let data = {
        //     name: 'baike',
        //     password: '123'
        // };
        // let header = new HttpHeaders();
        // header.append('Content-Type', 'application/json');
        // this.http.post('http://120.79.61.116:10176/login', data, {headers: header}).toPromise().then(res => {
        //     console.log(res)
        // })
    }

    validateForm: FormGroup;
}