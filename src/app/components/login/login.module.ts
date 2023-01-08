import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser";
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        MatButtonModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
    ],
    providers: [],
    exports: [LoginComponent],
    bootstrap: []
  })
  export class LoginModule { }
