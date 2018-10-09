import {AfterViewInit, Component, OnInit} from '@angular/core';

declare let mLayout: any;

@Component({
  selector: 'app-aside-nav-financial-settings',
  templateUrl: './aside-nav-financial-settings.component.html',
  styles: []
})
export class AsideNavFinancialSettingsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

    ngAfterViewInit()
    {
        mLayout.initAside();
    }

}
