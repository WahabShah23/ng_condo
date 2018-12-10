import { Subject } from 'rxjs/Subject';
export class OpenDetailsService {
    detailsOpened = new Subject<number>();
    showPaymentDetails = new Subject<{ billingID: number, personID: number }>();
}