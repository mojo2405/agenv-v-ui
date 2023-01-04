import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AptDataComponent } from './components/apt-data/apt-data.componont';
import { IApartment } from './interface/IApartment';
import { SearchComponent } from './components/search/search.component';
import { GoogleApiService } from './services/googleapi.service';
import {DataSource} from '@angular/cdk/collections';

// import { IApartment } from './interface/IApartment';

// export interface AptElement {
//   position: number;
//   city: string;
//   rooms: number;
//   price: string;
// }
// const ELEMENT_DATA: AptElement[] = [
//   {position: 1, city: 'קרית ים', rooms: 3.5, price: '500000',ff: 'ttt'},
//   {position: 2, city: 'קרית חיים', rooms: 3, price: '500000',ff: 'ttt'},
//   {position: 3, city: 'קרית אתא', rooms: 5, price: '500000',ff: 'ttt'},
//   {position: 4, city: 'חיפה', rooms: 4.5, price: '500000',ff: 'ttt'},
//   {position: 5, city: 'חיפה', rooms: 1.5, price: '500000',ff: 'ttt'},
//   {position: 6, city: 'קרית ים', rooms: 4, price: '500000',ff: 'ttt'},
//   {position: 7, city: 'קרית ים', rooms: 3, price: '500000',ff: 'ttt'},
//   {position: 8, city: 'קרית ים', rooms: 3, price: '500000',ff: 'ttt'},
//   {position: 9, city: 'קרית חיים', rooms: 5, price: '500000',ff: 'ttt'},
//   {position: 10, city: 'קרית ביאליק', rooms: 7, price: '125000',ff: 'ttt'},
// ];

export interface SearchElem {
  city: string[];
  price_min: string,
  price_max: string,
  number_of_rooms_min: string,
  number_of_rooms_max: string,
}

let apts_elemnt: IApartment[] = [];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'agent-v';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource = new MatTableDataSource(apts_elemnt);

  dataFilters = '';
  chips_input = {
    city: 'עיר',
    price_min: 'מחיר החל מ',
    price_max:  'מחיר עד',
    number_of_rooms_min: 'חדרים מ',
    number_of_rooms_max: 'חדרים עד'
    };
    chips_arr:any = [];

  constructor(public dialog: MatDialog, private googleAPIService: GoogleApiService){

  }

  ngOnInit(){
    this.refreshData();
  }
    
  clear_filter() {
    throw new Error('Method not implemented.');
  }

  refreshData(){
    // this.dataSource.data = [];
    this.chips_arr = [];
    apts_elemnt = [];
    this.googleAPIService.getData().subscribe((data)=> {
      console.log(data);
      for (let key of Object.entries(data)) {
        if (parseInt(key[0]) === 0){
          continue;
        }
        console.log(key);
        let detail = this.mapFromInterface(key);
        apts_elemnt.push(detail);
      }
      this.dataSource = new MatTableDataSource(apts_elemnt);
    });
  }

  mapFromInterface(key:any){
    return { 
      "position": parseInt(key[0]),
      "agent_name": key[1][0],
      "city": key[1][1],
      "rooms": parseInt(key[1][2]),
      "price": key[1][3],
      "address": key[1][4],
      "floor": key[1][5],
      "elevator": key[1][6],
      "mamad": key[1][7],
      "balcony": key[1][8],
      "garden": key[1][9],
      "du_mishpahti": key[1][10],
      "villa": key[1][11]
    };
  }

  openDialog(data:any): void {
    const dialogRef = this.dialog.open(AptDataComponent, {
      data: {data},
      height: '400px',
      width: '600px',
  });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openSearchDialog():void {
    const filter = this.dataFilters;
    const dialogRef = this.dialog.open(SearchComponent, {
      data: {filter},
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      

      this.dataFilters = result;
      if (!result) {
        return;
      }
      this.chips_arr = [];
      this.highlightChips(result)
        

      this.googleAPIService.getData().subscribe((data)=> {
        apts_elemnt = [];
        for (let key of Object.entries(data)) {
          if (parseInt(key[0]) === 0){
            continue;
          }
          let detail = this.mapFromInterface(key);
          
          if (result.price_min && parseInt(detail.price) < parseInt(result.price_min)){
              continue;
          }
          if (result.price_max && parseInt(detail.price) > parseInt(result.price_max)){
            continue;
          }
          if (result.number_of_rooms_min && detail.rooms < result.number_of_rooms_min){
            continue;
          }
          if(result.number_of_rooms_max){
            if (result.number_of_rooms_max == "6+" && detail.rooms<6){
              continue;
            }
            if( detail.rooms > result.number_of_rooms_max) {
              continue;
            }
            
          }
          if (result.city){
            let found_city = false;
            for (const city of result.city){
              if (city === detail.city){
                found_city = true;
                break;
              }
            }
            if (!found_city){
              return;
            }
          }
          apts_elemnt.push(detail);
        }
        this.dataSource = new MatTableDataSource(apts_elemnt);
      });

      // 11111111111111111111111
      // let newDataSource: IApartment[] = [];
      // this.dataSource.data.forEach(element => {
      //   if (result.price_min && parseInt(element.price) < parseInt(result.price_min)){
      //       return;
      //   }
      //   if (result.price_max && parseInt(element.price) > parseInt(result.price_max)){
      //     return;
      //   }
      //   if (result.number_of_rooms_min && element.rooms < result.number_of_rooms_min){
      //     return;
      //   }
      //   if(result.number_of_rooms_max){
      //     if (result.number_of_rooms_max == "6+" && element.rooms<6){
      //       return;
      //     }
      //     if( element.rooms > result.number_of_rooms_max) {
      //       return;
      //     }
          
      //   }
      //   if (result.city){
      //     let found_city = false;
      //     for (const city of result.city){
      //       if (city === element.city){
      //         found_city = true;
      //         break;
      //       }
      //     }
      //     if (!found_city){
      //       return;
      //     }
      //   }
      //   newDataSource.push(element);
      // });
      // this.dataSource = new MatTableDataSource(newDataSource);
    });
  }
  highlightChips(result:any){
    if (result.price_min){
      this.chips_arr.push(this.chips_input.price_min + ': '+ Number(result.price_min).toLocaleString());
  }
  if (result.price_max){
    this.chips_arr.push(this.chips_input.price_max + ': '+ Number(result.price_max).toLocaleString());
  }
  if (result.number_of_rooms_min){
    this.chips_arr.push(this.chips_input.number_of_rooms_min + ': '+result.number_of_rooms_min);
  }
  if(result.number_of_rooms_max){
    this.chips_arr.push(this.chips_input.number_of_rooms_max + ': '+result.number_of_rooms_max);
  }
  if (result.city){
    this.chips_arr.push(this.chips_input.city + ': '+result.city.join(', '));
  }
}
    
}


