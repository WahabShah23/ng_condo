import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class BudgetCategoriesDomManipulationService {
 entryChanged = new Subject<{value:string , index:number , type:string}>();
 constructor() { }

}
