import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainTableComponent } from "./main-table.component";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        MainTableComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatTableModule,
        MatChipsModule,
        MatButtonModule
    ],
    providers: [],
    exports: [MainTableComponent],
    bootstrap: []
  })
  export class MainTableModule{}