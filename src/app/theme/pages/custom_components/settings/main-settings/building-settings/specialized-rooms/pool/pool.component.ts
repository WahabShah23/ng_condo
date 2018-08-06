import { SpecializedFacilityService } from './../../../../../../../../services/building-settings/specialized-facility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: "./pool.component.html",
  styleUrls: ["./pool.component.css"]
})
export class PoolComponent implements OnInit {

  constructor(private specializedService: SpecializedFacilityService) { }

  ngOnInit() 
  {
      this.pools = this.specializedService.getPools();
  }

  addPoolForm = false;
  isPoolGridView = true;
  PoolViewName = 'List View';
  visitType='Splash Based';
  default_imgUrl = 'assets/app/media/img/custom/pools/1.jpg';
  pools;

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
    this.specializedService.addPool(poolName , img , numberOfParticipants, this.visitType , poolDescription );
    this.isPoolGridView = !this.isPoolGridView;
    this.changeGameView();    
}

deletePool(id){
    this.specializedService.deletePool(id);
}

}
