import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router/src/shared';

@Component({
    selector: 'app-income-budget-financial-planning',
    templateUrl: "./income-budget-financial-planning.component.html",
    styleUrls: ["./income-budget-financial-planning.component.css", "../../../financial-management.component.css"]
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
        {
            displayName: "Income", name: "income",
            categories: [
                { catID: 1, catName: "Extra Income" },
                { catID: 2, catName: "Business" },
                { catID: 3, catName: "Salary" },
                { catID: 4, catName: "Gifts" },
                { catID: 5, catName: "Bonus" },
                { catID: 6, catName: "Interest" },
                { catID: 7, catName: "Paycheck" },
                { catID: 8, catName: "Reimbursement" },
                { catID: 9, catName: "Rental" },
                { catID: 10, catName: "Returned Purchase" },
                { catID: -1, catName: "Others" }
            ]
        },
        { displayName: "Home & Utilities", name: "home-and-utilities" },
        { displayName: "Insurance", name: "insurance" },
        { displayName: "Groceries", name: "groceries" },
        { displayName: "Personal Care", name: "personal-care" },
        { displayName: "Entertainment", name: "entertainment" },
        { displayName: "Transport", name: "transport" },
        { displayName: "Children", name: "children" },
        { displayName: "Business Services", name: "business-services" },
        { displayName: "Education", name: "education" },
        { displayName: "Fees & charges", name: "fees-and-charges" },
        { displayName: "Health & Fitness", name: "health-and-fitness" },
        { displayName: "Gifts & Donations", name: "gifts-and-donations" },
        { displayName: "Investments", name: "investments" },
        { displayName: "Loans", name: "loans" },
        { displayName: "Pets", name: "pets" },
        { displayName: "Shopping", name: "shopping" },
        { displayName: "Taxes", name: "taxes" },
        { displayName: "Transfer", name: "transfer" },
        { displayName: "Travel", name: "travel" },
        { displayName: "Uncategorized", name: "uncategozied" }
    ];


    currentBudget;
    currentIcon;


    constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.currentBudget = this.budgets.find(x => x.name == params["budgetcategory"]);
                this.currentIcon = this.icons[0];
            }
        )

    }

    onSelectIcon(icon) {
        this.currentIcon = icon;
    }

}
