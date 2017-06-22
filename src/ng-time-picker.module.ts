import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ArtTimePickerComponent} from "./ng-time-picker.component";

@NgModule({
  imports: [ CommonModule, BrowserAnimationsModule],
  declarations: [ArtTimePickerComponent],
  exports: [ ArtTimePickerComponent ]
})
export class ArtTimePickerModule {}

