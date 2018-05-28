import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-global-nav',
    templateUrl: './global-nav.component.html',
    styleUrls: ['./global-nav.component.css']
})
export class GlobalNavComponent implements OnInit {

    @Output() hideGlobal: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    closeGlobal() {
        this.hideGlobal.emit(null);
    }
}
