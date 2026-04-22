import { Component } from '@angular/core';
import { Aside } from '../../components/aside/aside';
import { Hero } from '../../components/hero/hero';
import { Vehicles } from '../vehicles/vehicles';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Aside,Hero,Vehicles,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 searchText: string = '';
  selectedCategoryID: number = 0;
}
