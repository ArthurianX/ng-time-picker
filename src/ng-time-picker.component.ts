import { ViewContainerRef, Component } from '@angular/core';

@Component({
  selector: '[art-timepicker], art-timepicker'
})
export class ArtTimePickerComponent {

  el: HTMLElement;


  constructor(private viewContainer: ViewContainerRef) {
    this.el = this.viewContainer.element.nativeElement;
  }

  ngAfterViewInit() {


  }


}

