
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OpenDetailsService } from '../../openDetailsService.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-billing-financial-planning',
  templateUrl: "./billing-financial-planning.component.html",
  styleUrls: ["./billing-financial-planning.component.css" , "../../../financial-management.component.css" , "../billing-and-subscription-financial-planning.component.css"]
})
export class BillingFinancialPlanningComponent implements OnInit, AfterViewInit {

  personsList = [
    {personID:1 ,name:"Niaz Khan"},
    {personID:2 ,name:"Sharjeel"}
  ];

  billings = [

    {
      billingID:1,
      img: 'assets/app/media/img/logos/logo-3.png',
      type:"single",
      billingName: 'Internet',
      category: 'Internet',
      provider: 'Yak Internet',
      phone: ' 668 9213 391',
      location: 'Mississaga',
      country: 'Canada',
      billName: 'ABC Bill',
      amount: '200',
      account:'AC109029',
      billCycle: 'Bi-Weekly',
      billerName: 'Any Biller',
      firstBill: '11-05-2017',
      billDuration: 'Forever',
      reminder: '11-20-2017 14:00',
      billingGoal: 'Home Management',
      billDescription: 'ABC Description',
      persons:[{
        personID :1,
        paymentMethod: 'Fiat Currency',
        paymentSubtype: 'Credit - Visa'  
      }]
    },

    {
      billingID:2,
      img: 'assets/app/media/img/logos/logo-3.png',
      type:"single",
      billingName: 'Mobile',
      category: 'Phones',
      provider: 'DotCom Service',
      phone: ' 668 9213 391',
      location: 'Mississaga',
      country: 'Canada',
      billName: 'The Bill',
      amount: '111',
      account:'AC109029',
      billCycle: 'Bi-Weekly',
      billerName: 'Any Biller',
      firstBill: '11-05-2017',
      billDuration: 'Forever',
      reminder: '11-20-2017 14:00',
      billingGoal: 'Home Management',
      billDescription: 'ABC Description',
      persons:[{
        personID :1,
        paymentMethod: 'Digital Currency',
        paymentSubtype: 'Bitcoin'  
      }]
    },

    {
      billingID:3,
      img: 'assets/app/media/img/logos/logo-3.png',
      type:"single",
      billingName: 'Gasoline',
      category: 'Car',
      provider: 'Canada Autos',
      phone: ' 668 9213 391',
      location: 'Mississaga',
      country: 'Canada',
      billName: 'The Bill',
      amount: '111',
      account:'AC109029',
      billCycle: 'Monthly',
      billerName: 'Comflex',
      firstBill: '11-05-2017',
      billDuration: '4 Month(s)',
      reminder: '11-20-2017 14:00',
      billingGoal: 'Financial',
      billDescription: 'ABC Description',
      persons:[{
        personID :1,
        paymentMethod: 'Fiat Currency',
        paymentSubtype: 'Credit - Master'  
      }    
    ]
    },

    {
      billingID:4,
      img: 'assets/app/media/img/logos/logo-3.png',
      type:"single",
      billingName: 'Gym Membership',
      category: 'Activity',
      provider: 'CARE Canada',
      phone: ' 668 9213 391',
      location: 'Mississaga',
      country: 'Canada',
      billName: 'The Bill',
      amount: '111',
      account:'AC109029',
      billCycle: 'Weekly',
      billerName: 'Comflex',
      firstBill: '11-05-2017',
      billDuration: '1 Month(s)',
      reminder: '11-20-2017 14:00',
      billingGoal: 'Financial',
      billDescription: 'ABC Description',
      persons:[{
        personID :2,
        paymentMethod: 'Digital Currency',
        paymentSubtype: 'Bitcoin'  
      }]
    },

    


    {
      billingID:5,
      img: 'assets/app/media/img/logos/logo-3.png',
      type:"single",
      billingName: 'Gym Membership',
      category: 'Activity',
      provider: 'CARE Canada',
      phone: ' 668 9213 391',
      location: 'Mississaga',
      country: 'Canada',
      billName: 'The Bill',
      amount: '111',
      account:'AC109029',
      billCycle: 'Weekly',
      billerName: 'Comflex',
      firstBill: '11-05-2017',
      billDuration: '1 Month(s)',
      reminder: '11-20-2017 14:00',
      billingGoal: 'Financial',
      billDescription: 'ABC Description',
      persons:[{
        personID :2,
        paymentMethod: 'Fiat Currency',
        paymentSubtype: 'Credit - Visa'  
      }]
    },


    {
      billingID:6,
      img: 'assets/app/media/img/logos/logo-3.png',
      type:"split",
      billingName: 'Gym Membership',
      category: 'Activity',
      provider: 'CARE Canada',
      phone: ' 668 9213 391',
      location: 'Mississaga',
      country: 'Canada',
      billName: 'The Bill',
      amount: '111',
      account:'AC109029',
      billCycle: 'Weekly',
      billerName: 'Comflex',
      firstBill: '11-05-2017',
      billDuration: '1 Month(s)',
      reminder: '11-20-2017 14:00',
      billingGoal: 'Financial',
      billDescription: 'ABC Description',
      persons:[

        {
          personID :1,
          paymentMethod: 'Digital Currency',
          paymentSubtype: 'Bitcoin'  
        },

        {
        personID :2,
        paymentMethod: 'Fiat Currency',
        paymentSubtype: 'Credit - Visa'  
      }]
    },
    {
      billingID:7,
      img: 'assets/app/media/img/logos/logo-3.png',
      type:"split",
      billingName: 'Gasoline',
      category: 'Car',
      provider: 'Canada Autos',
      phone: ' 668 9213 391',
      location: 'Mississaga',
      country: 'Canada',
      billName: 'The Bill',
      amount: '111',
      account:'AC109029',
      billCycle: 'Monthly',
      billerName: 'Comflex',
      firstBill: '11-05-2017',
      billDuration: '4 Month(s)',
      reminder: '11-20-2017 14:00',
      billingGoal: 'Financial',
      billDescription: 'ABC Description',
      persons:[{
        personID :1,
        paymentMethod: 'Fiat Currency',
        paymentSubtype: 'Credit - Master'  
      },
      {
        personID :2,
        paymentMethod: 'Fiat Currency',
        paymentSubtype: 'Credit - Visa'  
      }    
    ]
    }
  ];

   currentPerson=this.billings[0].persons[0].personID;
   billType: string = this.billings[0].type;

   isGridView = true;
  viewName = "List View";

  @ViewChild('currentPersonSelect') currentPersonSelect :ElementRef;
   
  constructor(private openDetailsService: OpenDetailsService) 
  {

   
  }
  ngOnInit() 
  {
    // this.currentPerson = this.billings[0].personID;
  }

  ngAfterViewInit()
  {
    if(this.billType=="split")
    {
      this.currentPersonSelect.nativeElement.value = "split";
    }
    else {
      this.currentPersonSelect.nativeElement.value = ""+this.currentPerson;
    }

  }

  OpenDetails(index)
  {
    this.openDetailsService.detailsOpened.next(index);
  }

  changePerson(value)
  {
    this.billType = value;
    this.currentPerson = value;
  }

  changeView() 
  {
    this.isGridView = !this.isGridView;
    if (this.isGridView) 
    {
      this.viewName = "List View";
    } else 
    {
      this.viewName = "Grid View";
    }
  }

  getPersonName(personID)
  {
    return this.personsList.filter(x=> x.personID==personID)[0].name;
  }

  onPayerChange(billingID , personID)
  {
      this.openDetailsService.showPaymentDetails.next({billingID,personID});
  }

  onPayerChangeTable(billingID , personID)
  {
    this.openDetailsService.showPaymentDetails.next({billingID,personID});
  }


}
