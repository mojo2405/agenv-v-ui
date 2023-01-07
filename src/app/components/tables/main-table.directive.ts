import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mainTable]',
})
export class MainTableDirective {
  constructor(public viewContainerRef: ViewContainerRef) { 

  }
}