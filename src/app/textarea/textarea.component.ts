import { Component, Input, Output } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

   public text:string='';
 public initialvalue:number=0;
  @Input() public maxlength:number=50;


 charcount(){
  if (this.initialvalue<=this.maxlength) {
        this.initialvalue=this.text.length; 
  }
 }
 

}
