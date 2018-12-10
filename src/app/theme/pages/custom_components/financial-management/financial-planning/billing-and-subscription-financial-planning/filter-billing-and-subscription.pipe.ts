import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBillingAndSubscription'
})
export class FilterBillingAndSubscriptionPipe implements PipeTransform {

    transform(value: any, personID: number, billType: string) {
        if (billType == "split") {
            return value.filter(x => x.type == "split")
        }
        else {

            return value.filter(x => {
                if (x.persons[0].personID == personID && x.type == "single") {
                    return x;
                }

            }
            );
        }
    }

}
