import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-custom-right-sidebar',
    templateUrl: './custom-right-sidebar.component.html',
    styleUrls: ['./custom-right-sidebar.component.css']
})
export class CustomRightSidebarComponent implements OnInit {
    @Output() toggle_rbar: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    toggleMenuChild() {
        this.toggle_rbar.emit(null);
    }

}
