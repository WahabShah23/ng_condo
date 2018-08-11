import { RolesService } from './../../../../../../services/roles.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: "./roles.component.html",
  styleUrls: ["./roles.component.css"]
})
export class RolesComponent implements OnInit {

  employesVertical = false;
  accessVertical = false;

  roles = [];
  employes = [
    {
    name:"Chris" , 
    specialized:2,
    condos: 2, 
    parking: 1
    
  },
  {
    name:"Jane" , 
    specialized:1,
    condos: 0, 
    parking: 0
  },
  {
      name:"Bob" , 
     specialized:2,
     condos: 1, 
     parking: 0
  }
    ,
  {
    name:"Leo" , 
    specialized:2,
    condos: 2, 
    
    parking: 1
  }];
  
  accesses = [{
    name:"Floors"
  },
  {
    name:"Condos"
  },
  {
    name:"Gym"
  },
  {
    name:"Inventory"
  }
]
  
  constructor(private rolesService: RolesService) { }

  ngOnInit() 
  {
    this.roles = this.rolesService.getRoles();
  }

}
