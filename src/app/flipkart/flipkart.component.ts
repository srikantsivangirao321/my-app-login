import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  public ram:any='';
  public products:any = [
    { name: 'Pen', price: 10, rating: 3, freeDelivery: false },
    { name: 'Phone', price: 100000, rating: 4.8, freeDelivery: true },
    { name: 'Shirt', price: 2000, rating: 4, freeDelivery: true },
    { name: 'Sari', price: 4000, rating: 5, freeDelivery: true },
    { name: 'Mobile Case', price: 200, rating: 3.5, freeDelivery: false },
    { name: 'Remote', price: 799, rating: 2.5, freeDelivery: false },
    { name: 'Watch', price: 8000, rating: 4.4, freeDelivery: true },
    { name: 'Helmet', price: 499, rating: 3.9, freeDelivery: false },
    { name: 'Shoes', price: 999, rating: 3.7, freeDelivery: false },
    { name: 'Laptop', price: 60000, rating: 4.7, freeDelivery: true }
];


filter(){
  this.products=this.products.filter((product:any)=>product.name.includes(this.ram));
}

PHL(){
  this.products=this.products.sort((high:any,low:any)=> low.price - high.price);
}
PLH(){
  this.products=this.products.sort((low:any,high:any)=>low.price-high.price);
}
RHL(){
  this.products=this.products.sort((high:any,low:any)=>low.rating-high.rating);
}
RLH(){
  this.products=this.products.sort((low:any,high:any)=>low.rating-high.rating)
}

discount(){
  this.products=this.products.map((product:any)=>{
    product.price = product.price-(product.price*25/100);
    return product;
  })
}

delcharges(){
  this.products=this.products.map((product:any)=>{
    product.price = product.price+20;
    return product;
  })
}

total(){
  let total=
  this.products=this.products.reduce((sum:any,product:any)=>sum+product.price,0)
  alert(total);
}
cartitems(){
  let totalcarts = this.products.length;
  alert(totalcarts);
}
freedelivery(){
  this.products = this.products.filter((product:any)=>product.freeDelivery==true )
}



















}
