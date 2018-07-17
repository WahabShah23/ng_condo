import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-building',
  templateUrl: "./stock-building.component.html",
  styleUrls: ["./stock-building.component.css"]
})
export class StockBuildingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addStockForm = false;
  isStockGridView = true;
  StockViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/inventories/placeholder.png';
  Stocks = [
    {
        name: "A4 Paper", img: 'assets/app/media/img/custom/stock/A4 Size Paper.jpg', stockCat: 'Printing Material', stockSubCat: 'A4 Size Paper.jpg', brand: 'PEL', desc: 'desc'
    },
    {
        name: 'Biscuit', img: 'assets/app/media/img/custom/stock/biscuit.jpg', stockCat: 'Tuck Shop', stockSubCat: 'Buscuit', brand: 'GREE', desc: 'desc'
    }
   ];

   buildingName = "ABC Building";

   changeStockView() {
    this.isStockGridView = !this.isStockGridView;
    if (this.isStockGridView) {
        this.StockViewName = 'List View';
    }
    else {
        this.StockViewName = 'Grid View';
    }
    this.addStockForm = false;
}

addStock(name: string, img: string, stock_Cat: string, stock_SubCat: string, stock_brand: string, desc?: string) {
    this.Stocks.push({name: name, img:img, stockCat: stock_Cat, stockSubCat: stock_SubCat, brand: stock_brand, desc: desc });
    this.isStockGridView = !this.isStockGridView;
    this.changeStockView();
}

deleteStock(id){
    console.log(id);
    this.Stocks.splice(id,1);
}

}
