import { RolesService } from './../../../../../../auth/_services/roles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: "./roles.component.html",
  styleUrls: ["./roles.component.css"]
})
export class RolesComponent implements OnInit {

  roles = [];
  constructor(private rolesService: RolesService) { }

  ngOnInit() 
  {
    this.roles = this.rolesService.getRoles();
  }

}
