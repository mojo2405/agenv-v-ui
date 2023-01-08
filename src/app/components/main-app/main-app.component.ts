import { Component, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { GoogleApiService } from 'src/app/services/googleapi.service';
import { MainTableComponent } from '../tables/main-table.component';
import { MainTableDirective } from '../tables/main-table.directive';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent {
  @ViewChild(MainTableDirective, {static: true}) mainTable!: MainTableDirective;
  myTabs:any = [
    {key:'office', value: "משרד"},
    {key:'yad2', value: "יד2"},
    {key: 'rent', value: "השכרה"},
    {key: 'commercial', value: "מסחרי"}
  ];
  pageHeader = this.myTabs.office;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

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