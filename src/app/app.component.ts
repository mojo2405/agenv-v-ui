import { Component, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MainTableComponent } from './components/tables/main-table.component';
import { MainTableDirective } from './components/tables/main-table.directive';
import { GoogleApiService } from './services/googleapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MainTableDirective, {static: true}) mainTable!: MainTableDirective;
  myTabs:any = [
    {key:'office', value: "משרד"},
    {key:'yad2', value: "יד2"},
    {key: 'rent', value: "השכרה"},
    {key: 'commercial', value: "מסחרי"}
  ];
  pageHeader = this.myTabs.office;
  constructor(public dialog: MatDialog, private googleAPIService: GoogleApiService){
    
  }

  ngOnInit() {
    this.loadComponent('office');
  }

  loadComponent(apiInputType:any, index:number = 0) {
    const viewContainerRef = this.mainTable.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(MainTableComponent);
    componentRef.instance.apiInputType = apiInputType;
    
    this.pageHeader = this.myTabs[index].value;
  }
}


