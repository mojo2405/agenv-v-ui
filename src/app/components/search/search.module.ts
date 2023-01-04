import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { SearchComponent } from "./search.component";
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from "@angular/platform-browser";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatSliderModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatGridListModule,
        MatIconModule
    ],
    providers: [],
    exports: [SearchComponent],
    bootstrap: []
  })
  export class SearchModule { }