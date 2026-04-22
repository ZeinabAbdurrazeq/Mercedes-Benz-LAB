import { Store } from './../../models/store';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  
  store: Store = new Store(
    'Mercedes-Benz',
    ['Branch 1', 'Branch 2'],
    './assets/Mercedes-Benz-logo-black.webp',
  );

  StoreOwner: string = 'Karl Benz';
}
