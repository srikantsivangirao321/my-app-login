import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindngComponent } from './data-bindng/data-bindng.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployersComponent } from './employers/employers.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { LipkartComponent } from './lipkart/lipkart.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { IdentityCardComponent } from './identity-card/identity-card.component';
import { CreateidentityCardComponent } from './createidentity-card/createidentity-card.component';
import { AuthenticationGuard } from './authentication.guard';
import { MemesComponent } from './memes/memes.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewBankaccountsComponent } from './view-bankaccounts/view-bankaccounts.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindngComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'dice',component:DiceComponent},
    {path:'directives-pipes',component:DirectivesPipesComponent},
    {path:'employers',component:EmployersComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'bankaccounts',component:BankaccountsComponent},
    {path:'lipkart',component:LipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-bank',component:CreateBankComponent},
    {path:'identity-card',component:IdentityCardComponent},
    {path:'createidentity-card',component:CreateidentityCardComponent},
    {path:'memes',component:MemesComponent},
    {path:'view-vehicle/:id',component:ViewVehicleComponent},
    {path:'view-bankaccount/:id',component:ViewBankaccountsComponent},
    {path:'edit-bankaccount/:id',component:CreateBankComponent},
    {path:'',component:WelcomeComponent}]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
