import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public name:string='asdf';
  public age:number=0;

  public user:User = {name:'asdf', age:20, email:'aaa@gmail.com'}


  public users:User[] = [
    {name:'asdf', age:20, email:'aaa@gmail.com'},
    {name:'asdf', age:20, email:'aaa@gmail.com'} 
  ]

}
