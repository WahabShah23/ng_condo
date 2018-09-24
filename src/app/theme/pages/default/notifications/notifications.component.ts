import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { ScriptLoaderService } from "../../../../_services/script-loader.service";

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NotificationsComponent implements OnInit, AfterViewInit {

  constructor( public _script: ScriptLoaderService ) { }

    @ViewChild('emails') tagsInput: ElementRef;

  ngOnInit() {
  }

    ngAfterViewInit() {
        this._script.loadScripts('.m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body',
            ['assets/demo/default/custom/components/forms/widgets/summernote.js',
                'assets/demo/default/custom/components/forms/widgets/select2.js',
                'assets/app/js/custom_JS/select2_custom.js']);
    }

}
