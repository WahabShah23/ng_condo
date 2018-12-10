import { OnInit } from '@angular/core';
import { Directive, HostBinding, Input } from '@angular/core';
import { OpenDetailsService } from './openDetailsService.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
    selector: '[appDisplayPaymentMethod]'
})
export class DisplayPaymentMethodDirective implements OnInit, OnDestroy {

    @HostBinding("style.display") @Input('display') display;
    @Input() billingID;
    @Input() personID;
    subscriptionReference: Subscription;
    constructor(private openDetailsService: OpenDetailsService) { }

    ngOnInit() {
        this.subscriptionReference = this.openDetailsService.showPaymentDetails.subscribe(

            (data: { billingID: number, personID: number }) => {
                if (data.billingID == this.billingID) {

                    if (this.personID == data.personID) {
                        this.display = "block";
                    }
                    else {
                        this.display = "none";
                    }
                }
            }
        )

    }

    ngOnDestroy() {
        this.subscriptionReference.unsubscribe();
    }

}
