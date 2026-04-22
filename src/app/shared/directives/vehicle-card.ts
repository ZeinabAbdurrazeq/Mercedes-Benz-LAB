import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVehicleCard]',
})
export class VehicleCard {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.borderRadius = '15px';
    this.el.nativeElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    this.el.nativeElement.style.padding = '10px';
  }
}

