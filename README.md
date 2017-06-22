# ng-time-picker
Angular 4 time picker component

## TITLE


* Module `ng-time-picker` 
* Class name `ArtTimePickerModule`

[Demo](https://rawgit.com/ArthurianX/ng-time-picker/master/app/index.html)


## Install

1. install ng-time-picker

        $ npm install ng-time-picker --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng-time-picker'] = 'ng-time-picker/dist/ng-time-picker.umd.js';

3. import ArtTimePickerModule to your AppModule
        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { ArtTimePickerModule } from 'ng-time-picker';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, ArtTimePickerComponent],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

         
For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

