import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-services-global-settings',
  templateUrl: './common-services-global-settings.component.html',
  styleUrls: ['./common-services-global-settings.component.css']
})
export class CommonServicesGlobalSettingsComponent implements OnInit {


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
