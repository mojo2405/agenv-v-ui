import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { IApartment } from 'src/app/interface/IApartment';
import { ICommercial } from 'src/app/interface/ICommercial';

@Component({
    selector: 'apt-data',
    templateUrl: 'apt-data.component.html',
    styleUrls: ['apt-data.component.scss']
  })
  export class AptDataComponent {
    fullData: any;
    constructor(
      public dialogRef: MatDialogRef<AptDataComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any,
    ) {
        this.fullData = data.data;
        // console.log(this.fullData.apiInputType);
        // console.log(this.fullData);
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

  }