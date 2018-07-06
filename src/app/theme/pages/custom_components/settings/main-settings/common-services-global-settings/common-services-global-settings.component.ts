import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectDropDownComponent } from 'ngx-select-dropdown/dist/components';

@Component({
  selector: 'app-common-services-global-settings',
  templateUrl: './common-services-global-settings.component.html',
  styleUrls: ['./common-services-global-settings.component.css']
})
export class CommonServicesGlobalSettingsComponent implements OnInit {


  config = {
    displayKey:"description", //if objects array passed which key to be displayed defaults to description,
    search:true //enables the search plugin to search in the list
    }

dataModel = "";
dropdownOptions = ["Cabin" , "Insurance" , "Central Air Conditioner" , "Hyrdro" ,"Water" , "Heating"];
suppliers = ["GoInsurance" , "John Cabins" , "K AirConditioners" , "Water Company" , "Cave Heating Systems" , "TheHyrdros"];
providors = ["GoInsurance" , "John Cabins" , "K AirConditioners" , "Water Company" , "Cave Heating Systems" , "TheHyrdros"];

  addBillingForm = false;

  isBillingGridView = true;
  billingViewName = 'List View';
  addselected = "manufacturer";

  @ViewChild('addField') addField : ElementRef;
  
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
    this.suppliers.push(option.text); 
  }
  else if(this.addselected=='provider')
  {
    this.providors.push(option.text);
  }

  
}

}
