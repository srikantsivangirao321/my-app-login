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
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateMarksComponent } from './create-marks/create-marks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingsComponent } from './ratings/ratings.component';
import { TextareaComponent } from './textarea/textarea.component';
import { OpertaionsComponent } from './opertaions/opertaions.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { CartComponent } from './cart/cart.component';
import { Cart1Component } from './cart1/cart1.component';
import { Cart2Component } from './cart2/cart2.component';
import { Cart3Component } from './cart3/cart3.component';
import { Cart4Component } from './cart4/cart4.component';
import { TodoComponent } from './todo/todo.component';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { Todo3Component } from './todo3/todo3.component';
import { AboutUsModule } from './about-us/about-us.module';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';

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
    CreateUserComponent,
    CreateMarksComponent,
    ParentComponent,
    ChildComponent,
    RatingsComponent,
    TextareaComponent,
    OpertaionsComponent,
    SiblingComponent,
    Sibling1Component,
    Sibling2Component,
    CartComponent,
    Cart1Component,
    Cart2Component,
    Cart3Component,
    Cart4Component,
    TodoComponent,
    Todo1Component,
    Todo2Component,
    Todo3Component,
    CapitalDirective,
    PricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
