import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { AuthGuard } from './services/authGuard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  // home route protected by auth guard
  { path: '', component: MainAppComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
