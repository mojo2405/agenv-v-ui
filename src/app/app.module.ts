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
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MainTableModule } from './components/tables/main-table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenStorageService } from './services/toker-storage.service';
import { RouterModule } from '@angular/router';
import { MainAppModule } from './components/main-app/main-app.module';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './components/login/login.module';
import { AuthGuard } from './services/authGuard.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent
  ],
  imports: [
    // RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    // MatButtonModule,
    // MatIconModule,
    // MatChipsModule,
    // AptDataModule,
    // SearchModule,
    // MatTabsModule,
    // MainTableModule,
    // MatMenuModule,
    // MatButtonModule,
    // MatCardModule,
    // ReactiveFormsModule,
    // FormsModule,
    // MatFormFieldModule,
    // MainAppModule
    LoginModule
  ],
  providers: [GoogleApiService, TokenStorageService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
