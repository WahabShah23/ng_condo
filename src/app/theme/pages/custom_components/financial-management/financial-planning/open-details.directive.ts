import { Directive, Input, HostBinding } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { OpenDetailsService } from './openDetailsService.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[appOpenDetails]'
})
export class OpenDetailsDirective implements OnInit, OnDestroy {
    @HostBinding('style.display') isShow = "none";
    @Input() id: number;
    subscriptionReference: Subscription
    constructor(private openDetailsService: OpenDetailsService) {


    }

    ngOnInit() {
        this.subscriptionReference = this.openDetailsService.detailsOpened.subscribe(
            (index: number) => {
                if (this.id == index) {
                    this.isShow = (this.isShow == "none") ? "block" : "none";

                }
            }
        )

    }

    ngOnDestroy() {
        this.subscriptionReference.unsubscribe();
    }

}
