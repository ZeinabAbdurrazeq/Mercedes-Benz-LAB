import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiclesService } from '../../Services/vehicle-service';
import { IProduct, ICategory } from '../../models/Iproduct';
import { RouterModule } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search-products.html',
  styleUrls: ['./search-products.css']
})
export class SearchProducts implements OnInit {
  searchQuery: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  selectedCategoryId: number | null = null;
  
  categories: ICategory[] = [];
  results: IProduct[] = [];
  isLoading: boolean = false;

  constructor(
    private vehiclesService: VehiclesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.vehiclesService.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }

  onSearch(): void {
    this.isLoading = true;
    const params: any = {};
    if (this.searchQuery) params.title = this.searchQuery;
    if (this.minPrice !== null) params.price_min = this.minPrice;
    if (this.maxPrice !== null) params.price_max = this.maxPrice;
    if (this.selectedCategoryId !== null) params.categoryId = this.selectedCategoryId;

    this.vehiclesService.searchProducts(params).subscribe({
      next: (data) => {
        this.results = data;
        this.isLoading = false;
        this.toastr.success('Search completed successfully', 'Success');
      },
      error: () => {
        this.isLoading = false;
        this.toastr.error('Failed to fetch search results', 'Error');
      }
    });
  }
}
