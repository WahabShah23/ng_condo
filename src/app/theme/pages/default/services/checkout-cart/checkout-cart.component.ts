import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
@Component({
  selector: 'app-checkout-cart',
  templateUrl: "./checkout-cart.component.html",
  styleUrls: ["./checkout-cart.component.css"],
  encapsulation: ViewEncapsulation.None,

})
export class CheckoutCartComponent implements OnInit, AfterViewInit {


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
  test=false;
  onSite : boolean = false;
  showTimeUber: boolean = false;



  //BillingShipping
  billingAddress="";
  stateAddress="";
  cityAddress="";
  zipAddress="";


  shippingAddress = "";
  shippingStateAddress="";
  shippingCityAddress="";
  shippingZipAddress="";




  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._script.loadScripts('app-checkout-cart',
        ['assets/demo/default/custom/components/forms/wizard/wizard.js',
      'assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js',
    'assets/demo/default/custom/components/forms/widgets/bootstrap-timepicker.js']);

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

  showUber(value) {
    if(value == 1) {
      this.onSite = true;
    }
    if(value == 2 ) {
      this.onSite = false;
    }
  }

  showTime(value) {
    if(value == 1) {
      this.showTimeUber = true;
    } else {
      this.showTimeUber = false;
    }
  }

  sameAsBillingChanged(event , billingAddress)
  {
    if(event.target.checked)
    {
     
    }
    
  }

}
