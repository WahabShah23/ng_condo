import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router/src/shared';
import { BudgetCategoriesDomManipulationService } from './budget-categories-dom-manipulation.service';

@Component({
  selector: 'app-income-budget-financial-planning',
  templateUrl: "./income-budget-financial-planning.component.html",
  styleUrls: ["./income-budget-financial-planning.component.css"  , "../../../financial-management.component.css"]
})
export class IncomeBudgetFinancialPlanningComponent implements OnInit {

icons = [
  "fa fa-home",
  "fa fa-briefcase",
  "fa fa-car",
  "fa fa-money",
  "fa fa-credit-card",
  "fa fa-gift",
  "fa fa-cutlery",
  "fa fa-book",
  "fa fa-heart"
];

  budgets = [
    {displayName: "Income" , name: "income" , 
    categories : [
      {catID:1 , catName: "Extra Income"},
      {catID:2 , catName: "Business"},
      {catID:3 , catName: "Salary"},
      {catID:4 , catName: "Gifts"},
      {catID:5 , catName: "Bonus"},
      {catID:6 , catName: "Interest"},
      {catID:7 , catName: "Paycheck"},
      {catID:8 , catName: "Reimbursement"},
      {catID:9 , catName: "Rental"},
      {catID:10 , catName: "Returned Purchase"},
      {catID:-1 , catName: "Others"}
    ],
    entries: [
      {
        iconID: 1,
        color:"#FF0000",
        categoryType: "fixed",
        catID: 1,
        customCatName:""
      },

      {
        iconID: 2,
        color:"#008000	",
        categoryType: "fixed",
        catID: 2,
        customCatName:""
      },

      {
        iconID: 3,
        color:"	#0000FF",
        categoryType: "custom",
        catID: -1,
        customCatName:"The Custom"
      }
    ]
    },
    {displayName: "Utilities" , name: "utilities" , categories : [
      {catID:1 , catName: "Furnishings"},
      {catID:2 , catName: "Improvement"},
      {catID:3 , catName: "Home Insurance"},
      {catID:4 , catName: "Home Services"},
      {catID:5 , catName: "Home Supplies"},
      {catID:6 , catName: "Lawn and Garden"},
      {catID:7 , catName: "Mortgage and Rent"},
      {catID:8 , catName: "Body corporate fees"},
      {catID:9 , catName: "Council rates"},
      {catID:10 , catName: "Electricity"},
      {catID:11 , catName: "Gas"},
      {catID:12 , catName: "Water"},
      {catID:13 , catName: "Internet"},
      {catID:14 , catName: "Pay TV"},
      {catID:15 , catName: "Home phone"},
      {catID:16 , catName: "Mobile"},
      {catID:-1 , catName: "Others"}
    ],
    entries: [
      {
        iconID: 3,
        color:"#0000FF",
        categoryType: "fixed",
        catID: 4,
        customCatName:""
      },
      {
        iconID: 4,
        color:"#FF0000",
        categoryType: "fixed",
        catID: 5,
        customCatName:""
      },
      {
        iconID: 5,
        color:"#008000",
        categoryType: "custom",
        catID: -1,
        customCatName:"The Utility"
      }
    ]},

    {displayName: "Insurance" , name: "insurance" , categories : [
      {catID:1 , catName: "Car Insurance"},
      {catID:2 , catName: "Home & Contents Insurance"},
      {catID:3 , catName: "Person & Life Insurance"},
      {catID:4 , catName: "Health Insurance"},
      {catID:5 , catName: "Car Loan"},
      {catID:6 , catName: "Credit Card Interest"},
      {catID:7 , catName: "Other Loans"},
      {catID:8 , catName: "Paying off Debt"},
      {catID:9 , catName: "Savings"},
      {catID:10 , catName: "Investments & Super Contributons"},
      {catID:11 , catName: "Charity Donations"},
      {catID:12 , catName: "Financial Advisor"},
      {catID:-1 , catName: "Others"}
    ],
    entries: [
      {
        iconID: 4,
        color:"#40584a",
        categoryType: "fixed",
        catID: 6,
        customCatName:""
      },
      {
        iconID: 2,
        color:"#008000",
        categoryType: "fixed",
        catID: 1,
        customCatName:""
      },
      {
        iconID: 3,
        color:"#f44f0d",
        categoryType: "custom",
        catID: -1,
        customCatName:"The Insurance"
      }
    ]},

    {displayName: "Groceries" , name: "groceries" , categories : [
      {catID:1 , catName: "Super Marker"},
      {catID:2 , catName: "Butcher"},
      {catID:3 , catName: "Fruit & Veg Market"},
      {catID:4 , catName: "Fish Shop"},
      {catID:5 , catName: "Deli & Bakery"},
      {catID:6 , catName: "Pet Food"},
      {catID:-1 , catName: "Others"}
    ], entries:[
      {
        iconID: 5,
        color:"#33140c",
        categoryType: "fixed",
        catID: 3,
        customCatName:""
      }]},

    {displayName: "Personal Care" , name: "personal-care", categories : [
      {catID:1 , catName: "Hair"},
      {catID:2 , catName: "Laundry"},
      {catID:3 , catName: "Spa & Massage"},
      {catID:-1 , catName: "Others"}
    ], entries:[
      {
        iconID: 7,
        color:"#008080",
        categoryType: "fixed",
        catID: 3,
        customCatName:""
      }]},


    {displayName: "Entertainment" , name: "entertainment" ,categories : [
      {catID:1 , catName: "Coffee & Tea"},
      {catID:2 , catName: "Lunches"},
      {catID:3 , catName: "Take-away & Snacks"},
      {catID:4 , catName: "Cigarettes"},
      {catID:5 , catName: "Drinks & Alcohol"},
      {catID:6 , catName: "Take-away & Snacks"},
      {catID:7 , catName: "Bars & Clubs"},
      {catID:8 , catName: "Restaurants"},
      {catID:9 , catName: "Books"},
      {catID:10 , catName: "Newspaper & Magazines"},
      {catID:11 , catName: "Movies & Music"},
      {catID:12 , catName: "Holidays"},
      {catID:13 , catName: "Celebrations & Gifts"},
      {catID:14 , catName: "Amusement"},
      {catID:15 , catName: "Arts"},
      {catID:16 , catName: "Fast Food"},
      {catID:-1 , catName: "Others"}
    ], entries:[
      {
        iconID: 6,
        color:"#f6546a",
        categoryType: "fixed",
        catID: 3,
        customCatName:""
      }]},

    {displayName: "Transport" , name: "transport", categories : [
      {catID:1 , catName: "Auto Insurance"},
      {catID:2 , catName: "Auto Payment"},
      {catID:3 , catName: "Gas & Fuel"},
      {catID:4 , catName: "Parking & Road Tolls"},
      {catID:5 , catName: "Public Transportation"},
      {catID:6 , catName: "Service & Parts"},
      {catID:7 , catName: "Bus, Train And Ferry"},
      {catID:8 , catName: "Repairs & Maintenance"},
      {catID:9 , catName: "Rego & License"},
      {catID:10 , catName: "Airfares"},
      {catID:11 , catName: "Fines"},
      {catID:-1 , catName: "Others"}
    ], entries:[
      {
        iconID: 4,
        color:"#241712",
        categoryType: "fixed",
        catID: 3,
        customCatName:""
      }]},


    {displayName: "Children" , name: "children", entries:[]},
    {displayName: "Business Services" , name: "business-services", entries:[]},
    {displayName: "Education" , name: "education", entries:[]},
    {displayName: "Fees & charges" , name: "fees-and-charges", entries:[]},
    {displayName: "Health & Fitness" , name: "health-and-fitness", entries:[]},
    {displayName: "Gifts & Donations" , name: "gifts-and-donations", entries:[]},
    {displayName: "Investments" , name: "investments", entries:[]},
    {displayName: "Loans" , name: "loans", entries:[]},
    {displayName: "Pets" , name: "pets", entries:[]},
    {displayName: "Shopping" , name: "shopping", entries:[]},
    {displayName: "Taxes" , name: "taxes", entries:[]},
    {displayName: "Transfer" ,name: "transfer", entries:[]},
    {displayName: "Travel" , name: "travel" , entries:[]},
    {displayName: "Uncategorized" , name: "uncategozied" , entries:[]}  
  ];


  currentBudget;
  currentIcon;

  isCustom = false;
  isForm=false;


  constructor(private activatedRoute: ActivatedRoute ,private router:Router , private domManipulationService: BudgetCategoriesDomManipulationService) { }

  ngOnInit() 
  {
  
    this.activatedRoute.params.subscribe(
      (params:Params) =>
      {
        this.currentBudget = undefined;
        this.isForm = false;
         this.currentBudget = this.budgets.find(x=>x.name===params["budgetcategory"]);
         this.currentIcon = 0;
      }
    )

  }

  onSelectIcon(icon)
  {
    this.currentIcon = icon;
  }



  onChangeCategory(catID)
  {
    if(catID==-1)
    {
      this.isCustom = true;
    }
    else 
    {
      this.isCustom = false;
    }
  }

  onAddClicked()
  {
    this.isForm = !this.isForm;
  }


  onFormSubmit(form: NgForm)
  {
    console.log(form);
    let categoryID = form.value.category;
    let color = form.value.color;
    if(categoryID==-1)
    {
      this.currentBudget.entries.push({
        iconID: this.currentIcon,
        color:form.value.color,
        categoryType: "custom",
        catID: -1,
        customCatName:form.value.customCategory
      })
    }
    else 
    {
      this.currentBudget.entries.push({
        iconID: this.currentIcon,
        color:form.value.color,
        categoryType: "fixed",
        catID: form.value.category,
        customCatName:""
      })
    }
  }




  getIcon(iconID)
  {
    return this.icons[iconID];
  }


  getCategoryName(catID)
  {
    var cat =  this.currentBudget.categories.find(x=>x.catID==catID);
    return cat.catName;
  }



  onDelete(i)
  {
    if(confirm("Are Your Sure you want to delete this entry?"))
    {
      this.currentBudget.entries.splice(i , 1);  
    }
    
  }


  onChangeAmount(event , entryIndex)
  {
    var value = event.target.value;
    this.domManipulationService.entryChanged.next({value:value , index:entryIndex , type:"amount"});
  }

  onChangeTimePeriod(event , entryIndex)
  {
    var value = event.target.value;
    this.domManipulationService.entryChanged.next({value:value , index:entryIndex , type:"timePeriod"});
  }
}
