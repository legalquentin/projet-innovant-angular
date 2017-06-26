import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { HomeComponent } from './components/home/home.component';


import { LoggingService } from './services/logging.service';
import { HttpService } from './services/http.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login-register', component: LoginRegisterComponent},
];

@NgModule({
  imports:      [
                  RouterModule.forRoot(routes),
                  BrowserModule,
                  RouterModule,
                  HttpModule
                ],
  declarations: [
                  AppComponent,
                  HomeComponent,
                  LoginRegisterComponent,
                  MenuComponent

                ],
  bootstrap:    [
                  AppComponent

                ],
  providers:    [
                  LoggingService,
                  HttpService
                ]
})

export class AppModule { }