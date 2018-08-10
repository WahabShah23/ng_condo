import { RolesService } from './../../../../../../auth/_services/roles.service';
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
    name:"Floors",
    timeFrom:"10/08/2018 12:00",
    timeTo:"11/08/2018 12:00"
  },
  {
    name:"Condos",
    timeFrom:"10/08/2018 12:00",
    timeTo:"11/08/2018 23:00"
  },
  {
    name:"Gym",
    timeFrom:"10/08/2018 12:00",
    timeTo:"11/08/2018 23:00"
  },
  {
    name:"Inventory",
    timeFrom:"",
    timeTo:""
  }
]
  
  constructor(private rolesService: RolesService) { }

  ngOnInit() 
  {
    this.roles = this.rolesService.getRoles();
  }

}
