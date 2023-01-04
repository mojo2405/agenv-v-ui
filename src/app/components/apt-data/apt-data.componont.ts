import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { IApartment } from 'src/app/interface/IApartment';

@Component({
    selector: 'apt-data',
    templateUrl: 'apt-data.component.html',
    styleUrls: ['apt-data.component.scss']
  })
  export class AptDataComponent {
    fullData: IApartment;
    constructor(
      public dialogRef: MatDialogRef<AptDataComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any,
    ) {
        this.fullData = data.data;
      console.log(this.fullData);
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }