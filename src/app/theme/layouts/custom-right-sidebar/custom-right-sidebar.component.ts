import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
    selector: 'app-custom-right-sidebar',
    templateUrl: './custom-right-sidebar.component.html',
    styleUrls: ['./custom-right-sidebar.component.css']
})
export class CustomRightSidebarComponent implements OnInit {
    @Input() isSubFolder;
    @Output() toggle_rbar: EventEmitter<any> = new EventEmitter();


    constructor() { }

    ngOnInit() {
    }

    toggleMenuChild() {
        this.toggle_rbar.emit(null);
    }

}
