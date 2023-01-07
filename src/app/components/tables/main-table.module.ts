import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainTableComponent } from "./main-table.component";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    exports: [MainTableComponent],
    bootstrap: []
  })
  export class MainTableModule{}