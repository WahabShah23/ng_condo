import { Component, OnInit, AfterViewInit } from '@angular/core';


declare let mLayout: any;
@Component({
  selector: 'app-aside-nav-financial',
  templateUrl: './aside-nav-financial.component.html',
  styles: [`
  .tags-ul > .m-menu__item  > a
  {
    display:inline-block;
    width:auto;
  } 

  .submenu-text
  {
    padding-left:10px !important;
  }

  .m-menu__link.m-menu__toggle
  {
    padding-top:20px !important;
  }

  .tags-ul > .m-menu__item--submenu  > a.m-menu__link:not(.m-menu__toggle)
  {
    width:70%;
  }
  .tags-ul > .m-menu__item--submenu  > a.m-menu__toggle
  {
    width:20%;
  }
  `]
})

export class AsideNavFinancialComponent implements OnInit, AfterViewInit {

  id=2;
  isTags = false;
  isAccounts = false;
  currencyType="Fiat";
  Tags = [{ id:1, name: "Cars" , children : ["Toyota" , "Cadillac" , "Benz"]},
  {id:2, name: "The Tag"  , children : []}];

  fiatCurrencyAccounts = [
   {id :1 , name:"Checking" , children:["Boa Checking" , "Wells Fargo Checking"]},
   {id :2 , name:"Savings" , children:["Wells Fargo Savings"]},
   {id :3 , name:"Mortgages" , children:["Home" , "Secondary Home"]},
   {id :4 , name:"Auto" , children:["Car 1" , "Car 2"]},
   {id :1 , name:"Loans" , children:["Educational Loan" , "Car Loan"]} 
  ];

  digitalCurrencyAccounts = [
   {id :1 , name:"Bitcoin" , children:["ABC" , "XYZ"]},
   {id :2 , name:"Ethereum" , children:["EFG", "HJJ"]},
   {id :3 , name:"CzCoin" , children:["ABC" , "XYZ"]}
  ];

  constructor() 
  {

  }

  ngOnInit() {

  }

  ngAfterViewInit()
  {
    mLayout.initAside();
  }

  toggleTags()
  {
    this.isTags = !this.isTags;
    alert('tags shown');
  }

  toggleAccounts()
  {
    this.isAccounts = !this.isAccounts;
  }

  addTag(tagParentID , tagName)
  {
    if(tagParentID=="")
    {
      this.Tags.push({id:++this.id , name:tagName , children:[]});
    }
    else
    {
      let parentTag = this.Tags.find(x=>x.id==tagParentID);
      parentTag.children.push(tagName);
    }
  }


  changeCurrencyType(event)
  {
    this.currencyType = event.target.value;
  }
}
