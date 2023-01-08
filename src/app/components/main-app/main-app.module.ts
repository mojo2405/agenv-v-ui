import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app.component';
import { MainTableModule } from '../tables/main-table.module';
import { AptDataModule } from '../apt-data/apt-data.module';
import { SearchModule } from '../search/search.module';
import { MainTableDirective } from '../tables/main-table.directive';
import { GoogleApiService } from 'src/app/services/googleapi.service';


@NgModule({
  declarations: [
    MainAppComponent,
    MainTableDirective
  ],
  imports: [
    RouterModule,
    BrowserModule,
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
    MainTableModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [GoogleApiService],
  bootstrap: [],
})
export class MainAppModule { }
