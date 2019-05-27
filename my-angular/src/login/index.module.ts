import { NgModule } from "@angular/core";
import { LoginComponent } from ".";
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app/app-routing.module";

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        LoginComponent
    ],
    providers: [

    ],
    exports: []
})
export class LoginModule {}