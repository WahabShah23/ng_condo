import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-bar',
  templateUrl: "./checkout-bar.component.html",
  styleUrls: ["./checkout-bar.component.css"]
})

export class CheckoutBarComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    
  }
  isPaymentOpen = false;
}
