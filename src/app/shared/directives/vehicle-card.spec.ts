import { VehicleCard } from './vehicle-card';
import { ElementRef } from '@angular/core';

describe('VehicleCard', () => {

  it('should create an instance', () => {

    const mockElement =
      new ElementRef(document.createElement('div'));

    const directive =
      new VehicleCard(mockElement);

    expect(directive).toBeTruthy();

  });

});