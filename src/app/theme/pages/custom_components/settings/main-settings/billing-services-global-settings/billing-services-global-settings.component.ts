import { Component, OnInit, ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-billing-services-global-settings',
  templateUrl: './billing-services-global-settings.component.html',
  styleUrls: ['./billing-services-global-settings.component.css']
})
export class BillingServicesGlobalSettingsComponent implements OnInit {


  addBillingForm = false;

  isBillingGridView = true;
  billingViewName = 'List View';

  addselected = "manufacturer";

  @ViewChild('addField') addField : ElementRef;
  @ViewChild('manufacturerDropdown') manufacturerDropdown : ElementRef;
  @ViewChild('providerDropdown') providerDropdown : ElementRef;

  constructor() { }

  ngOnInit() {
  }


  changeBillingView() {
    this.isBillingGridView = !this.isBillingGridView;
    if (this.isBillingGridView) {
        this.billingViewName = 'List View';
    }
    else {
        this.billingViewName = 'Grid View';
    }
    this.addBillingForm = false;
}


onAdd()
{
    var option = document.createElement('option');
    option.value = this.addField.nativeElement.value;
    option.text = this.addField.nativeElement.value;
  if(this.addselected=='manufacturer')
  {
    (<HTMLSelectElement>this.manufacturerDropdown.nativeElement).options.add(option , (<HTMLSelectElement>this.manufacturerDropdown.nativeElement).options.length);
  }
  else if(this.addselected=='provider')
  {
    (<HTMLSelectElement>this.providerDropdown.nativeElement).options.add(option , (<HTMLSelectElement>this.providerDropdown.nativeElement).options.length);
  }

  this.addField.nativeElement.value = "";
}

}
