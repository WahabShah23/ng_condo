import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Helpers } from '../../helpers';
import { ScriptLoaderService } from '../../_services/script-loader.service';
//import { Staff_Services } from '../../services/staffServices';
@Component({
    selector: "app-wizard-wizard-3",
    templateUrl: "./wizard-wizard-3.component.html",
    styleUrls: ["./wizard-wizard-3.component.css"]
})
export class WizardWizard3Component implements OnInit, AfterViewInit {

    staffForm: FormGroup;

    

  
    constructor(private _script: ScriptLoaderService/*, private staffServices: Staff_Services*/) {

    }

    companyLocations = ['1st Location', '2nd Location', 'The Median Location', 'Green Location -4th', 'The Last Location'];
    ngOnInit() {
        this.staffForm = new FormGroup({
            'firstname': new FormControl(null, Validators.required),
            'lastname': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'dob': new FormControl(null, Validators.required),
            'companyLocation': new FormControl(null, Validators.required),
            'contactNo': new FormControl(null, Validators.required),
            'facebook': new FormControl(null),
            'twitter': new FormControl(null),
            'instagram': new FormControl(null),
            'linkedIn': new FormControl(null),
            'discription': new FormControl(null),
            'file': new FormControl(null),
            'schedule': new FormControl(null),
            'hourlyRate': new FormControl(null),
            'weekHours': new FormControl(null),
            'note': new FormControl(null),
            'companyTimeZone': new FormControl(null),
            'address': new FormControl(null)
        });

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-wizard-wizard-3',
            ['assets/demo/default/custom/components/forms/wizard/wizard.js']);

    }

   
    onSubmit() {
      

    }
    fileToUpload: File = null;

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    // uploadFileToActivity() {
    //     // this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    //     //   // do something, if upload success
    //     //   }, error => {
    //     //     console.log(error);
    //     //   });
    //   }

}