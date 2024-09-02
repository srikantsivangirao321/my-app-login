import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _loginServcie:LoginService, private _router:Router){}

  public loginForm:FormGroup=new FormGroup({

    email:new FormControl(),
    password:new FormControl()

  })
  
  

  login(){
    console.log(this.loginForm)
    this._loginServcie.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("Login Sucessful");
        // store the token
          sessionStorage.setItem("token",data.token)
        // go to dashboard after login successful
        this._router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("Invalid Credentials")
      }, 
    )}

}
