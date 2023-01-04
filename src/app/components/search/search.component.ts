import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface AptFullData {
    position: number;
    city: string;
    rooms: number;
    price: string;
    ff: string;
  }
@Component({
    selector: 'app-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss']
  })
  export class SearchComponent {
    // fullData: AptFullData;
    public rooms:any[];
    public cities:string[];
    searchForm = this.formBuilder.group({
        city: '',
        price_min: '',
        price_max: '',
        number_of_rooms_min: '',
        number_of_rooms_max: '',
      });
    
    constructor(
      public dialogRef: MatDialogRef<SearchComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any,
      private formBuilder: FormBuilder
    ) {
        this.rooms = ["1","1.5","2","2.5","3","3.5","4","4.5","5","5.5","6+"];
        this.cities = ["קרית ים", "קרית אתא", "חיפה", "קרית ביאליק", "קרית חיים"];
        if (data.filter){
            console.log(data.filter);
            this.searchForm.patchValue(data.filter);
            
        }
        this.searchForm.value.city
    //     this.fullData = data.data;
    //   console.log(this.fullData);
    }

    onSubmit() {
        console.log(this.searchForm);
        this.dialogRef.close(this.searchForm.value);
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

  }