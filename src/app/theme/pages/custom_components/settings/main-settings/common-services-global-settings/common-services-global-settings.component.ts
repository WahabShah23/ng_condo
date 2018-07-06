import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-common-services-global-settings',
    templateUrl: './common-services-global-settings.component.html',
    styleUrls: ['./common-services-global-settings.component.css']
})
export class CommonServicesGlobalSettingsComponent implements OnInit {


    config = {
        displayKey: "description", //if objects array passed which key to be displayed defaults to description,
        search: true //enables the search plugin to search in the list
    }

    dataModel = "";
    dropdownOptions = ["Cabin", "Insurance", "Central Air Conditioner", "Hyrdro", "Water", "Heating"];


    addBillingForm = false;

    isBillingGridView = true;
    billingViewName = 'List View';
    addselected = "manufacturer";

    @ViewChild('addField') addField: ElementRef;
    @ViewChild('manufacturerDropdown') manufacturerDropdown: ElementRef;
    @ViewChild('providerDropdown') providerDropdown: ElementRef;

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

    onAdd() {
        var option = document.createElement('option');
        option.value = this.addField.nativeElement.value;
        option.text = this.addField.nativeElement.value;
        if (this.addselected == 'manufacturer') {
            (<HTMLSelectElement>this.manufacturerDropdown.nativeElement).options.add(option, (<HTMLSelectElement>this.manufacturerDropdown.nativeElement).options.length);
        }
        else if (this.addselected == 'provider') {
            (<HTMLSelectElement>this.providerDropdown.nativeElement).options.add(option, (<HTMLSelectElement>this.providerDropdown.nativeElement).options.length);
        }

        this.addField.nativeElement.value = "";
    }

}
