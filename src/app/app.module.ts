import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AptDataModule } from './components/apt-data/apt-data.module';
import {MatIconModule} from '@angular/material/icon';
import { SearchModule } from './components/search/search.module';
import { HttpClientModule } from '@angular/common/http';
import { GoogleApiService } from './services/googleapi.service';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import { MainTableModule } from './components/tables/main-table.module';
import { MainTableDirective } from './components/tables/main-table.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainTableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    AptDataModule,
    SearchModule,
    MatTabsModule,
    MainTableModule
  ],
  providers: [GoogleApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
