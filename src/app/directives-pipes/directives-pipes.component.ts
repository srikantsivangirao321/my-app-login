import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.css']
})
export class DirectivesPipesComponent {

  // OBJECTS

  public ages:number[]=[10,20,30,40,50]
  public states:string[]=["Andhra", "Telangana", "Delhi", "Karnataka","U.P"]

// Array of object

public users:any=[
  {name: 'a', age:15, phone:1234, marks:95},
  {name: 'b', age:17, phone:5678, marks:87},
  {name: 'c', age:40, phone:9012, marks:33},
  {name: 'd', age:50, phone:3456, marks:-10}
]


public today:any = new Date();


}


