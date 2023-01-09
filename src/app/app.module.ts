import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { GoogleApiService } from './services/googleapi.service';
import { TokenStorageService } from './services/toker-storage.service';
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
