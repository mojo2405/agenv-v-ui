import { NgModule } from "@angular/core";
import { AptDataComponent } from "./apt-data.componont";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        AptDataComponent,
    ],
    imports: [
        MatButtonModule
    ],
    providers: [],
    exports: [AptDataComponent],
    bootstrap: []
  })
  export class AptDataModule { }