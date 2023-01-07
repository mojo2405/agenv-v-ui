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

  constructor(public dialog: MatDialog, private googleAPIService: GoogleApiService){
    
  }

  ngOnInit() {
    this.loadComponent('office');
  }

  loadComponent(apiInputType:string) {
    const viewContainerRef = this.mainTable.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(MainTableComponent);
    componentRef.instance.apiInputType = apiInputType;
  }
}


