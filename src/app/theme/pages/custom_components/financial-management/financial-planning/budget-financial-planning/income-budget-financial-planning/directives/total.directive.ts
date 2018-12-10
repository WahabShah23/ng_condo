import { BudgetCategoriesDomManipulationService } from './../budget-categories-dom-manipulation.service';
import { Directive, OnInit, Input, OnDestroy } from '@angular/core';
import { HostBinding } from '@angular/core';
import { elementAt } from 'rxjs/operator/elementAt';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[appTotal]'
})
export class TotalDirective implements OnInit, OnDestroy {
  @HostBinding("textContent") text;
  @Input() id;
  lastAmount;
  lastIncomeType;
  lastTotal;
  subscriptionReference: Subscription;
  

  constructor(private domManipulationService:BudgetCategoriesDomManipulationService) 
  { 

  }

  ngOnInit()
  {
    if(!this.lastTotal)
    {
      this.lastTotal = 0;
    }
    this.text = this.lastTotal;

    this.subscriptionReference = this.domManipulationService.entryChanged.subscribe(
      (data: {value:any , index:number , type:string})=>
      {
        if(data.index==this.id)
        {
         if(data.type=="amount")
         {
          if(!isNaN(data.value) && data.value>=0)
          {
            this.lastAmount = data.value;
            if(this.lastIncomeType=="weekly")
            {
              this.lastTotal = this.lastAmount*52;
            }
            else if(this.lastIncomeType=="monthly")
            {
              this.lastTotal = this.lastAmount*12;
            }
            else if(this.lastIncomeType=="annually")
            {
              this.lastTotal = this.lastAmount*1;
            }
            else if(this.lastIncomeType=="quarterly")
            {
              this.lastTotal = this.lastAmount*3;
            }
            else if(this.lastIncomeType=="fortnightly")
            {
              this.lastTotal = this.lastAmount*26;
            }
            else
            {
              this.lastTotal=0;
            }
          }
          else
          {
            this.lastAmount = undefined;
            this.lastTotal = 0;
          }
        }
        else if(data.type=="timePeriod")
        {
          this.lastIncomeType = data.value;
          if(!isNaN(this.lastAmount) && (this.lastAmount>=0))
          {
         if(this.lastIncomeType=="weekly")
          {
            this.lastTotal = this.lastAmount*52;
          }
          else if(this.lastIncomeType=="monthly")
          {
            this.lastTotal = this.lastAmount*12;
          }
          else if(this.lastIncomeType=="annually")
          {
            this.lastTotal = this.lastAmount*1;
          }
          else if(this.lastIncomeType=="quarterly")
          {
            this.lastTotal = this.lastAmount*3;
          }
          else if(this.lastIncomeType=="fortnightly")
          {
            this.lastTotal = this.lastAmount*26;
          }
          else
          {
            this.lastTotal=0;
          }
        }
        else
        {
          this.lastTotal = 0;
        } 
        }
        this.text = this.lastTotal;
      }

      }
    )
  }

  ngOnDestroy()
  {
    this.subscriptionReference.unsubscribe();
  }

}
