import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router/src/shared';

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
  "fa fa-cutlery"
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
    {displayName: "Insurance" , name: "insurance" , entries:[]},
    {displayName: "Groceries" , name: "groceries"},
    {displayName: "Personal Care" , name: "personal-care"},
    {displayName: "Entertainment" , name: "entertainment"},
    {displayName: "Transport" , name: "transport"},
    {displayName: "Children" , name: "children"},
    {displayName: "Business Services" , name: "business-services"},
    {displayName: "Education" , name: "education"},
    {displayName: "Fees & charges" , name: "fees-and-charges"},
    {displayName: "Health & Fitness" , name: "health-and-fitness"},
    {displayName: "Gifts & Donations" , name: "gifts-and-donations"},
    {displayName: "Investments" , name: "investments"},
    {displayName: "Loans" , name: "loans"},
    {displayName: "Pets" , name: "pets"},
    {displayName: "Shopping" , name: "shopping"},
    {displayName: "Taxes" , name: "taxes"},
    {displayName: "Transfer" ,name: "transfer"},
    {displayName: "Travel" , name: "travel"},
    {displayName: "Uncategorized" , name: "uncategozied"}  
  ];


  currentBudget;
  currentIcon;

  isCustom = false;
  isForm=false;


  constructor(private activatedRoute: ActivatedRoute ,private router:Router) { }

  ngOnInit() 
  {
  
    this.activatedRoute.params.subscribe(
      (params:Params) =>
      {
        this.currentBudget = undefined;
        this.isForm = false;
         this.currentBudget = this.budgets.find(x=>x.name===params["budgetcategory"]);
         console.log(this.currentBudget);
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
}
