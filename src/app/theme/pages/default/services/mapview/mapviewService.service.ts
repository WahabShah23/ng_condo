import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class MapViewService {
    private compare: boolean = false;
    public compareProduct = new EventEmitter();
    public compareProductDisable = new EventEmitter();

    compareitem(category) {
        this.compare = category;
        if (this.compare === true) {
            this.compareProduct.emit(this.compare);
        } else {
            this.compareProductDisable.emit(this.compare);
        }
    }
    getCompare() {
        return this.compare;
    }
}
