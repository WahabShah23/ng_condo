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
  showOwnCar: boolean = false;



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
      this.showOwnCar = false;
    } else if(value == 2){
      this.showOwnCar = true;
      this.showTimeUber = false;
    }
    else if(value == 3)
    {
      this.showOwnCar = false;
      this.showTimeUber = false;
    }
  }

  sameAsBillingChanged(event , billingAddress)
  {
    if(event.target.checked)
    {
     
    }
    
  }



    //Calendar
    months = ["January" , "February" , "March", "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    days = [{date:'01' , day:'Sun'},
            {date:'02' , day:'Mon'},
            {date:'03' , day:'Tue'},
            {date:'04' , day:'Wed'},
            {date:'05' , day:'Thur'},
            {date:'06' , day:'Fri'},
            {date:'07' , day:'Sat'}];
    i=0;
    selected = this.months[this.i]; 


    employee = [{name:"Jane" , image:"https://qph.fs.quoracdn.net/main-thumb-78964180-50-uhwzqybuvzecennznkknrdbdhsdzendi.jpeg"} , {name:"Kane" , image: "https://www.gravatar.com/avatar/d07f76090ede8c7f71a946857b7ebcba?s=50&d=https://kissflow.com/wp-content/uploads/2018/05/kf.png"} , {name:"Shane" , image:"https://www.realbusinessrescue.co.uk/assets/timthumb/xtimthumb.php,qsrc=https,P3A,P2F,P2Fwww.realbusinessrescue.co.uk,P2Fassets,P2Fuploads,P2FManager+Pics,P2Fmunnery_jonathan_head+shot.jpg,ah=50,aw=50,azc=1.pagespeed.ic.z6xXOojR1r.jpg"} , {name:"Joker" , image:"https://sc01.alicdn.com/kf/HTB1so6mLFXXXXc6XpXXq6xXFXXXA/Cosplay-Batman-The-Dark-Knight-Joker-Full.jpg_50x50.jpg"}];
    selectedEmployee = 0;
    
    moveToRight()
    {
        if(this.i==11)
        {
            this.i=0;
        }
        else
        {
            this.i++;
        }
        this.selected = this.months[this.i];
    }  


    moveToLeft()
    {
        if(this.i==0)
        {
            this.i=11;
        }
        else
        {
            this.i--;
        }
        this.selected = this.months[this.i];   
    }


    moveToLeftEmployee()
    {
      if(this.selectedEmployee==0)
      {
          this.selectedEmployee = this.employee.length-1;
      }
      else
      {
        this.selectedEmployee--;
      }
    }


    moveToRightEmployee()
    {
      if(this.selectedEmployee==this.employee.length-1)
      {
          this.selectedEmployee = 0;
      }
      else
      {
        this.selectedEmployee++;
      }
    }

}
