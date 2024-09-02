import { Component } from '@angular/core';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent {


  public term:any = '';
  public employers: any = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
    { name: 'raj', experience: 10, package: 1600000, role: 'UIDeveloper' },
    { name: 'sunil', experience: 7, package: 1200000, role: 'UIDeveloper' },
    { name: 'latha', experience: 2, package: 600000, role: 'Software Developer' },
    { name: 'rama', experience: 6, package: 1400000, role: 'Software Developer' },
    { name: 'smitha', experience: 8, package: 1600000, role: 'Data engineer' },
    { name: 'john', experience: 3, package: 700000, role: 'Data engineer' },
    { name: 'david', experience: 2, package: 400000, role: 'Data engineer' },
    { name: 'smith', experience: 1, package: 300000, role: 'Testing Engineer' },
    { name: 'sujith', experience: 3.5, package: 350000, role: 'Testing Engineer' },
        ];



expHL(){
  this.employers=this.employers.sort((low:any,high:any)=>high.experience-low.experience);
}


bonus(){
  this.employers=this.employers.map((employee:any)=>{
    employee.package=employee.package+20000;
    return employee;
  })
}

cost(){
  let total=
  this.employers.reduce((sum:any,employee:any)=>sum+employee.package,0)
  alert(total);
}

filter(){

  this.employers=this.employers.filter((employee:any)=>employee.name.includes(this.term))

}

delete(i:number){
  this.employers.splice(i,1);

}

}
