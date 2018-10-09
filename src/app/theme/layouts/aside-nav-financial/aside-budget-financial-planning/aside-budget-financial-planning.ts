import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-nav-budget-financial-planning',
  templateUrl: './aside-budget-financial-planning.html'
})
export class AsideBudgetFinancialPlanning implements OnInit {
  navList = [
    {name: "Income" , url: "income"},
    {name: "Home & Utilities" , url: "home-and-utilities"},
    {name: "Insurance" , url: "insurance"},
    {name: "Groceries" , url: "groceries"},
    {name: "Personal Care" , url: "personal-care"},
    {name: "Entertainment" , url: "entertainment"},
    {name: "Transport" , url: "transport"},
    {name: "Children" , url: "children"},
    {name: "Business Services" , url: "business-services"},
    {name: "Education" , url: "education"},
    {name: "Fees & charges" , url: "fees-and-charges"},
    {name: "Health & Fitness" , url: "health-and-fitness"},
    {name: "Gifts & Donations" , url: "gifts-and-donations"},
    {name: "Investments" , url: "investments"},
    {name: "Loans" , url: "loans"},
    {name: "Pets" , url: "pets"},
    {name: "Shopping" , url: "shopping"},
    {name: "Taxes" , url: "taxes"},
    {name: "Transfer" , url: "transfer"},
    {name: "Travel" , url: "travel"},
    {name: "Uncategorized" , url: "uncategozied"}
  ];

  constructor() { }

  ngOnInit() 
  {
    
  }

}
