import { DragulaModule } from 'ng2-dragula';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from './../../../layouts/layout.module';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent } from './maintenance.component';
import { NgModule } from '@angular/core';
import { WorkOrderMaintenanceComponent } from './work-order-maintenance/work-order-maintenance.component';
import { AssignedWorkOrdersComponent } from './assigned-work-orders/assigned-work-orders.component';
import { ScheduledMaintenanceComponent } from './scheduled-maintenance/scheduled-maintenance.component';
import { TaskGroupsComponent } from './task-groups/task-groups.component';
import { ProjectsMaintenanceComponent } from './projects-maintenance/projects-maintenance.component';


const routes: Routes = [
    {
        'path': '',
        'component': MaintenanceComponent,
        'children': [
            {
                'path': 'workOrder',
                'component': WorkOrderMaintenanceComponent
            },
            {
                'path': 'assignedWorkOrders',
                'component': AssignedWorkOrdersComponent
            },
            {
                'path': 'projects',
                'component': ProjectsMaintenanceComponent
            },
            {
                'path': 'scheduled',
                'component': ScheduledMaintenanceComponent
            },
            {
                'path': 'taskGroups',
                'component': TaskGroupsComponent
            }
        ]
    }

];

@NgModule(
{
    
    declarations: [
        MaintenanceComponent,
        WorkOrderMaintenanceComponent,
        AssignedWorkOrdersComponent,
        ScheduledMaintenanceComponent,
        TaskGroupsComponent,
        ProjectsMaintenanceComponent
    ],
    imports: [RouterModule.forChild(routes) , CommonModule, LayoutModule,
      ReactiveFormsModule, FormsModule , DragulaModule]
})

export class MaintenanceModule 
{

}