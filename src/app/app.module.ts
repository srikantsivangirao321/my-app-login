import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServeComponent } from './serve/serve.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindngComponent } from './data-bindng/data-bindng.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployersComponent } from './employers/employers.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {  HttpClientModule } from "@angular/common/http";
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { LipkartComponent } from './lipkart/lipkart.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { IdentityCardComponent } from './identity-card/identity-card.component';
import { CreateidentityCardComponent } from './createidentity-card/createidentity-card.component';
import { MemesComponent } from './memes/memes.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewBankaccountsComponent } from './view-bankaccounts/view-bankaccounts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ServeComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindngComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DiceComponent,
    DirectivesPipesComponent,
    EmployersComponent,
    FlipkartComponent,
    VehiclesComponent,
    BankaccountsComponent,
    LipkartComponent,
    MailComponent,
    CreateVehicleComponent,
    CreateBankComponent,
    IdentityCardComponent,
    CreateidentityCardComponent,
    MemesComponent,
    ViewVehicleComponent,
    ViewBankaccountsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
