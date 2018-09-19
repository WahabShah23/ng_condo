import { Component, OnInit } from '@angular/core';
import {flyFromBottom, flyin, rotateIn, toggleSearchAnimation} from "../../../../../animations/toggle-search-animation";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
    animations : [ toggleSearchAnimation ]
})
export class InboxComponent implements OnInit {

  constructor() { }

    searchBox: string = 'hide';
    // rotateIn: string = 'void';
    // flyin: string = 'void';
    // flyFromBottom: string = 'void';
     flyItems: string = 'void';

    toggleSearchBox() {
        // 1-line if statement that toggles the value:
        this.searchBox = this.searchBox === 'hide' ? 'show' : 'hide';
        // this.rotateIn = this.rotateIn === 'void' ? '*' : 'void';
        // this.flyin = this.flyin === 'void' ? '*' : 'void';
        // this.flyFromBottom = this.flyFromBottom === 'void' ? '*
        // this.flyItems = this.flyItems === 'void' ? '*' : 'void';
    }

  ngOnInit() {
  }

}
