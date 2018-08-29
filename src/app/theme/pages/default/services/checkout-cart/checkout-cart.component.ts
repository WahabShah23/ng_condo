import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: "./checkout-cart.component.html",
  styleUrls: ["./checkout-cart.component.css"]
})
export class CheckoutCartComponent implements OnInit {


  services = [
    {provider: 'Mirror Mirror Beauty Saloon' , name: 'Elemis White Brightening Facial' , category: 'service' , price: '$60' , tax: 'Federal'},
    {provider: 'The Next Saloon' , name: 'Hair Cutting', category: 'service' , price: '$100' , tax: 'Federal'},
    {provider: 'Hair Cut Saloon' , name: 'Face Whitening', category: 'service' , price: '$130' , tax: 'Federal'}
  ];


  products = [
    {provider: 'Mirror Mirror Beauty Saloon' , name: 'Hair Gel' , category: 'product' , price: '$70' , tax: 'Federal'},
    {provider: 'Hair Cut Saloon' , name: 'Face Cream', category: 'product' , price: '$130' , tax: 'Federal'}
  ];

  laters = [

  ];



  constructor() { }

  ngOnInit() {
  }


  onBuyProductLater(index)
  {
    this.laters.push(this.products[index]);
    this.products.splice(index, 1);
  }

  onBuyServiceLater(index)
  {
    this.laters.push(this.services[index]);
    this.services.splice(index, 1);
  }


  buyNow(index)
  {
    if(this.laters[index].category=="service")
    {
      this.services.push(this.laters[index]);
    }
    else
    {
      this.products.push(this.laters[index]);
    }
    this.laters.splice(index , 1);
  }

}
