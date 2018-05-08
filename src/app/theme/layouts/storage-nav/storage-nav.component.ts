import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-storage-nav',
  templateUrl: './storage-nav.component.html',
  styleUrls: ['./storage-nav.component.css']
})
export class StorageNavComponent implements OnInit {

  @Output() hideStorage : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeStorage() {
    this.hideStorage.emit(null);
  }

}
