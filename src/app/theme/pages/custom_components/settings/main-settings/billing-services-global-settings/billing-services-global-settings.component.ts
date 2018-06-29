import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-services-global-settings',
  templateUrl: './billing-services-global-settings.component.html',
  styleUrls: ['./billing-services-global-settings.component.css']
})
export class BillingServicesGlobalSettingsComponent implements OnInit {


  addBillingForm = false;

  isBillingGridView = true;
  billingViewName = 'List View';
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

}
