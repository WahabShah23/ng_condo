import { Component } from "@angular/core";
import { MapViewService } from "../mapviewService.service";
@Component({
    selector: "app-checkout-bar",
    templateUrl: "./checkout-bar.component.html",
    styleUrls: ["./checkout-bar.component.css"]
})
export class CheckoutBarComponent {
    compare = false;
    constructor(private mapviewService: MapViewService) {
        mapviewService.compareProduct.subscribe(() => {
            this.compare = true;
        });

        mapviewService.compareProductDisable.subscribe(() => {
            this.compare = false;
        });
    }

    isPaymentOpen = false;
}
