import { NgModule } from "@angular/core";
import { AptDataComponent } from "./apt-data.componont";
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AptDataComponent,
    ],
    imports: [
        MatButtonModule,
        CommonModule,
        BrowserModule
    ],
    providers: [],
    exports: [AptDataComponent],
    bootstrap: []
  })
  export class AptDataModule { }