import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

// declare let mLayout: any;

@Component({
  selector: 'app-aside-nav-connect',
  templateUrl: './aside-nav-connect.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AsideNavConnectComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

    ngAfterViewInit() {

        // mLayout.initAside();

    }
}
