import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';

import { ArtTimePickerComponent} from "./ng-time-picker.component";

@NgModule({
  imports: [ CommonModule],
  declarations: [ArtTimePickerComponent],
  exports: [ ArtTimePickerComponent ]
})
export class ArtTimePickerModule {}

