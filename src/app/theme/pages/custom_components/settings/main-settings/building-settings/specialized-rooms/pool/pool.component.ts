import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: "./pool.component.html",
  styleUrls: ["./pool.component.css"]
})
export class PoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addPoolForm = false;
  isPoolGridView = true;
  PoolViewName = 'List View';
  visitType='Splash Based';
  default_imgUrl = 'assets/app/media/img/custom/party-rooms/1.jpg';
  pools = [
    {
        name: "Pool 1", img: 'assets/app/media/img/custom/pools/1.jpg', allowed: 4 , visitType:"Lane Based", description: "The Swimming Pool"
    },
    {
        name: 'Pool 2', img: 'assets/app/media/img/custom/pools/2.jpg', allowed:5 , visitType:"Splash Based", description: "The Swimming Poolssss"
    }
   ];

   buildingName = "ABC Building";

   changeGameView() {
    this.isPoolGridView = !this.isPoolGridView;
    if (this.isPoolGridView) {
        this.PoolViewName = 'List View';
    }
    else {
        this.PoolViewName = 'Grid View';
    }
    this.addPoolForm = false;
}

addPool(poolName, img , numberOfParticipants, poolDescription) {
    this.pools.push({name: poolName, img:img,  allowed: numberOfParticipants , visitType:this.visitType, description:poolDescription});
    this.isPoolGridView = !this.isPoolGridView;
    this.changeGameView();
    
}

deletePool(id){
    this.pools.splice(id,1);
}

}
