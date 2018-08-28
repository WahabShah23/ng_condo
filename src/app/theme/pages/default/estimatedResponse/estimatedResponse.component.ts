import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'app-estimatedResponse',
    templateUrl: './estimatedResponse.component.html',
    styleUrls: ['./estimatedResponse.component.css', '../../../../../../node_modules/dragula/dist/dragula.css']

})
export class EstimatedResponseComponent implements OnInit {

    isDisplayForm = true;
    viewNameService="Create Service"
    constructor(private dragulaService: DragulaService) {

        // dragulaService.setOptions('bag-task1', {
        //     revertOnSpill: true
        //
        // });

        const bag: any = this.dragulaService.find('bag-task1');
        if (bag !== undefined) this.dragulaService.destroy('bag-task1');
        this.dragulaService.setOptions('bag-task1', {
            revertOnSpill: true
        });

        // dragulaService.setOptions('bag-task2', {
        //     revertOnSpill: true,
        //     moves: function (el, source, handle, sibling) {
        //         return true; // elements are always draggable by default
        //     },
        //     accepts: function (el, target, source, sibling) {
        //         return true; // elements can be dropped in any of the `containers` by default
        //     },
        //
        // });
    }

    ngOnInit() {
    }
 changeViewService() {
        this.isDisplayForm = !this.isDisplayForm;
        if (this.isDisplayForm) {
            this.viewNameService = "Create Service";
        }
        else {
            this.viewNameService = "Estimated Response";
        }
    }
}
