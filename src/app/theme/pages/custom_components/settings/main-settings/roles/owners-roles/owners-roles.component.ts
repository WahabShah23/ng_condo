import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owners-roles',
  templateUrl: "./owners-roles.component.html",
  styleUrls: ["./owners-roles.component.css"]
})
export class OwnersRolesComponent implements OnInit {

  isGroupSelect = false;
  isSectionSelect = false;

  constructor() { }

  isIndividual = true;
  ngOnInit() {
  }

  onInviteSelect(inviteType: string)
  {
    if(inviteType=="individual")
    {
      this.isIndividual = true;
    }
    else
    {
      this.isIndividual = false;
    }
    
  }

  openGroupSelectBar()
  {
    this.isGroupSelect = true;
  }


  openSectionSelectBar()
  {
    this.isSectionSelect = true;
  }

  backFromGroupSelect()
  {
    this.isGroupSelect = false;
    this.isSectionSelect = false;
  }

  backFromSectionSelect()
  {
    this.isSectionSelect = false;
  }
}
