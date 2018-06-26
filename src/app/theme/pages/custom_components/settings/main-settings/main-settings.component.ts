import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
    selector: 'app-main-settings',
    templateUrl: './main-settings.component.html',
    styleUrls: ['./main-settings.component.css'],
    animations: [
        trigger('verticalDivState', [
            state('normal', style({
                'background-color': '#cacaca',
                transform: 'translateX(0px)'
            })),
            state('highlighted', style({
                'background-color': '#fffff',
                transform: 'translateX(255px)'
            }))

        ])
    ]
})
export class MainSettingsComponent implements OnInit {

    // animations state variable 
    state = 'normal';
    className: string;
    locationExist = false;

    public nonActiveCard = 'non_active_card';
    public activeCard = 'active_card';

    constructor() { }

    ngOnInit() {
    }

    onAnimate() {
        this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    }

    // myFunction() {
    //     let x = document.getElementById("item1").nextSibling;
    //     document.getElementById("demo").innerHTML = x;
    // }

    expandCard(name) {
        this.className = name;
    }

}
