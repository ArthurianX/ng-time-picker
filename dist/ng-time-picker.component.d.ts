import { ViewContainerRef } from '@angular/core';
export declare class ArtTimePickerComponent {
    private viewContainer;
    el: HTMLElement;
    hours: [any];
    minutes: [number];
    selectedFormat: string;
    constructor(viewContainer: ViewContainerRef);
    ngAfterViewInit(): void;
    setHour(hour: any): void;
    setMinute(minute: any): void;
}
