import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  public Mail:any=[];
  public term:string="";

  constructor (private _mailService:MailService){
    _mailService.getmail().subscribe(
      (data:any)=>{
        this.Mail=data;
      },
      (Error:any)=>{
        alert("Internal Server Error");
      }
    )
  }

}
