import { ICategory } from './../../models/Iproduct';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CreditCardPipe } from '../../shared/directives/pipes/credit-card-pipe';
import { Clock } from '../clock/clock';
import { VehiclesService } from '../../Services/vehicle-service';

@Component({
  selector: 'app-aside',
  imports: [FormsModule, DatePipe, CreditCardPipe, Clock],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside implements OnInit {
  
  @Output() searchChanged = new EventEmitter<string>();
  @Output() categoryChanged = new EventEmitter<number>();

  searchText: string = '';
  selectedCategoryID: number = 0;
  today: Date = new Date();
  creditCard: string = '1234567812345678';

  categories: ICategory[] = [];

  constructor(private vehiclesService: VehiclesService) {}

  ngOnInit(): void {
    this.vehiclesService.getCategories().subscribe(data => {
      this.categories = [{ id: 0, name: 'All Categories' }, ...data];
    });
  }

  onSearch() {
    // console.log(this.searchText);
    this.searchChanged.emit(this.searchText);
  }

  selectCategory(id: number) {
    this.selectedCategoryID = id;
    this.categoryChanged.emit(id);
  }

  // onSearch(){
  //   console.log(this.searchText);
  //   this.searchChanged.emit(this.course);
  // }
}
