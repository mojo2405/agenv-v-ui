import { AfterViewInit, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IApartment } from 'src/app/interface/IApartment';
import { ICommercial } from 'src/app/interface/ICommercial';
import { GoogleApiService } from 'src/app/services/googleapi.service';
import { AptDataComponent } from '../apt-data/apt-data.componont';
import { SearchComponent } from '../search/search.component';

export interface SearchElem {
    city: string[];
    price_min: string,
    price_max: string,
    number_of_rooms_min: string,
    number_of_rooms_max: string,
  }
  
  
  
@Component({
    selector: 'app-main-table',
    templateUrl: 'main-table.component.html',
    styleUrls: ['main-table.component.scss']
  })
export class MainTableComponent implements AfterViewInit {
    @Input() apiInputType:string = '';
    title = 'agent-v';
    displayedColumns: string[] = ['position', 'city', 'rooms', 'price', 'address'];
    
    dataSource = new MatTableDataSource([]);
    apts_elemnt: IApartment[] = [];
    commercial_elemnt: ICommercial[] = [];
    dataFilters = '';
    chips_input = {
      city: 'עיר',
      price_min: 'מחיר החל מ',
      price_max:  'מחיר עד',
      number_of_rooms_min: 'חדרים החל מ',
      number_of_rooms_max: 'חדרים עד',
      area_min: 'שטח החל מ',
      area_max: 'שטח עד'
      };
      chips_arr:any = [];
    hide_spinner = false;
  
    constructor(public dialog: MatDialog, private googleAPIService: GoogleApiService){
  
    }
  
    ngAfterViewInit(){
      this.refreshData();
    }
  
    refreshData(){
      // this.dataSource.data = [];
      this.hide_spinner = false;
      this.chips_arr = [];
      this.apts_elemnt = [];
      this.commercial_elemnt = [];

      
      this.googleAPIService.getData(this.apiInputType).subscribe((data)=> {
        const matched_ement = this.getMatchingInterface();
        for (let key of Object.entries(data)) {
          if (parseInt(key[0]) === 0){
            continue;
          }
          let detail = this.mapFromInterface(key);
          matched_ement.push(detail);
        }
        this.dataSource = new MatTableDataSource(matched_ement);
        this.hide_spinner = true;
      });
    }
    
    getMatchingInterface():any{
        if (this.apiInputType == 'commercial'){
            return this.commercial_elemnt;
        } else {
            return this.apts_elemnt;
        }
    }

    mapFromInterface(key:any){
        if (this.apiInputType == 'commercial'){
            return { 
                "position": parseInt(key[0]),
                "agent_name": key[1][0],
                "city": key[1][1],
                "rooms": parseInt(key[1][2]),
                "price": key[1][3],
                "address": key[1][4],
                "floor": key[1][5],
                "elevator": key[1][6],
                "price_for_1m": key[1][7],
                "parking": key[1][8],
                "purpose": key[1][9],
                "vaad": key[1][10],
                "comments": key[1][11]
              };
        } else{
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
    }
  
    openDialog(data:any): void {
        data.apiInputType = this.apiInputType;
        const dialogRef = this.dialog.open(AptDataComponent, {
            data: {data},
            height: '400px',
            width: '600px',
        });
    
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
        });
    }
    openSearchDialog():void {
        const filter = this.dataFilters;
        const dialogRef = this.dialog.open(SearchComponent, {
            data: {filter, apiInputType: this.apiInputType},
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
            
    
            this.googleAPIService.getData(this.apiInputType).subscribe((data)=> {
            this.apts_elemnt = [];
            this.commercial_elemnt = [];
            const matched_ement = this.getMatchingInterface();

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
                    continue;
                }
                }
                matched_ement.push(detail);
            }
            this.dataSource = new MatTableDataSource(matched_ement);
            });
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
            if (this.apiInputType == 'commercial') {
                this.chips_arr.push(this.chips_input.area_min + ': '+result.number_of_rooms_min);
            }else {
                this.chips_arr.push(this.chips_input.number_of_rooms_min + ': '+result.number_of_rooms_min);
            }
        }
        if(result.number_of_rooms_max){
            if (this.apiInputType == 'commercial') {
                this.chips_arr.push(this.chips_input.area_max + ': '+result.number_of_rooms_min);
            }else {
                this.chips_arr.push(this.chips_input.number_of_rooms_max + ': '+result.number_of_rooms_max);
            }
        }
        if (result.city && result.city.length != 0){
            this.chips_arr.push(this.chips_input.city + ': '+result.city.join(', '));
        }
    }
}