// import { Store } from '../../models/store';
// import { CommonModule } from '@angular/common';
// import { IProduct, ICategory } from './../../models/Iproduct';
// import { Component } from '@angular/core';
// import { Input } from '@angular/core';
// import { VehicleCard } from '../../shared/directives/vehicle-card';
// import { VehicleDetails } from '../../pages/vehicle-details/vehicle-details';
// @Component({
//   selector: 'app-vehicles',
//   imports: [CommonModule, VehicleCard,VehicleDetails],
//   templateUrl: './vehicles.html',
//   styleUrl: './vehicles.css',
// })
// export class Vehicles {
//   @Input() searchText: string = '';
//   @Input() selectedCategoryID: number = 0;

//   categories: ICategory[] = [
//     { ID: 0, Name: 'All Categories' },
//     { ID: 1, Name: 'Sedan' },
//     { ID: 2, Name: 'SUV' },
//     { ID: 3, Name: 'Sports / AMG' },
//   ];

//   VehiclesList: IProduct[] = [
//     // ── Category 1: Sedan ──
//     {
//       ID: 1,
//       Name: 'Mercedes C-Class',
//       Quantity: 5,
//       Price: 1250000,
//       Img: 'https://www.mercedes-benz.com/assets/vehicles/g-class/electric-g-class/highlight-stage/mercedes-benz-g-class-electric-stage-3840x2160-04-2024.jpeg?im=Resize=(1255)',
//       CategoryID: 1,
//     },
//     {
//       ID: 2,
//       Name: 'Mercedes E-Class',
//       Quantity: 0,
//       Price: 1850000,
//       Img: 'https://images.unsplash.com/photo-1740001574106-327a951ee247?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lcmNlZGVzJTIwYW1nJTIwZ3R8ZW58MHx8MHx8fDA%3D',
//       CategoryID: 1,
//     },
//     {
//       ID: 3,
//       Name: 'Mercedes S-Class',
//       Quantity: 3,
//       Price: 3200000,
//       Img: 'https://images.unsplash.com/photo-1669234226129-8ede05b40eff?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVyY2VkZXMlMjBnbGV8ZW58MHx8MHx8fDA%3D',
//       CategoryID: 1,
//     },
//     {
//       ID: 4,
//       Name: 'Mercedes CLA',
//       Quantity: 2,
//       Price: 980000,
//       Img: 'https://images.unsplash.com/photo-1577615792595-d38014354328?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVyY2VkZXMlMjBnbGV8ZW58MHx8MHx8fDA%3D',
//       CategoryID: 1,
//     },
//     // ── Category 2: SUV ──
//     {
//       ID: 5,
//       Name: 'Mercedes GLE',
//       Quantity: 4,
//       Price: 2100000,
//       Img: 'https://images.unsplash.com/photo-1686562483617-3cf08d81e117?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBjJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D',
//       CategoryID: 2,
//     },
//     {
//       ID: 6,
//       Name: 'Mercedes G-Wagon',
//       Quantity: 5,
//       Price: 4500000,
//       Img: 'https://www.mercedes-benz.com/assets/vehicles/mercedes-benz-classics/class-of-its-own/teaser/mercedes-benz-cla-teaser-2560x1440-06-2025.jpeg?im=Resize=(1255)',
//       CategoryID: 2,
//     },
//     {
//       ID: 7,
//       Name: 'Mercedes GLC',
//       Quantity: 0,
//       Price: 1750000,
//       Img: 'https://plus.unsplash.com/premium_photo-1737553374688-09502af61740?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVyY2VkZXMlMjBjJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D',
//       CategoryID: 2,
//     },
//     // ── Category 3: Sports / AMG ──
//     {
//       ID: 8,
//       Name: 'Mercedes AMG GT',
//       Quantity: 3,
//       Price: 3800000,
//       Img: 'https://images.unsplash.com/photo-1685270386713-7044bc1a7c84?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lcmNlZGVzJTIwYW1nJTIwZ3R8ZW58MHx8MHx8fDA%3D',
//       CategoryID: 3,
//     },
//     {
//       ID: 9,
//       Name: 'Mercedes AMG C63',
//       Quantity: 1,
//       Price: 2900000,
//       Img: 'https://images.unsplash.com/photo-1686556761699-67f1c9e4858b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lcmNlZGVzJTIwYW1nJTIwZ3R8ZW58MHx8MHx8fDA%3D',
//       CategoryID: 3,
//     },
//     {
//       ID: 10,
//       Name: 'Mercedes SL 500',
//       Quantity: 2,
//       Price: 3500000,
//       Img: 'https://images.unsplash.com/photo-1618863099278-75222d755814?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVyY2VkZXMlMjBhbWclMjBndHxlbnwwfHwwfHx8MA%3D%3D',
//       CategoryID: 3,
//     },
//     {
//       ID: 11,
//       Name: 'Mercedes G-Wagon',
//       Quantity: 2,
//       Price: 4500000,
//       Img: 'https://images.unsplash.com/photo-1740001574106-327a951ee247?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lcmNlZGVzJTIwYW1nJTIwZ3R8ZW58MHx8MHx8fDA%3D',
//       CategoryID: 3,
//     },
//     {
//       ID: 12,
//       Name: 'Mercedes GLC',
//       Quantity: 0,
//       Price: 1750000,
//       Img: 'https://images.unsplash.com/photo-1577615792595-d38014354328?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVyY2VkZXMlMjBnbGV8ZW58MHx8MHx8fDA%3D',
//       CategoryID: 3,
//     },
//   ];

//   //===================================================
//   //              Buy Button Handling
//   //===================================================

//   buy(product: IProduct) {
//     if (product.Quantity > 0) {
//       product.Quantity--;
//     }
//   }

//   //===================================================
//   //              alert(Details) Handling
//   //====================================================
//   showDetails(product: IProduct) {
//     alert(
//       `Name: ${product.Name}` +
//         `\nPrice: ${product.Price} EGP` +
//         `\nCategory: ${this.categories.find((c) => c.ID === product.CategoryID)?.Name}`,
//     );
//   }

//   //===================================================
//   //              alert(Details) Handling
//   //====================================================

//   get filteredProducts() {
//     return this.VehiclesList.filter(
//       (p) =>
//         p.Name.toLowerCase().includes(this.searchText.toLowerCase()) &&
//         (this.selectedCategoryID == 0 || p.CategoryID == this.selectedCategoryID),
//     );
//   }

//   //===================================================
//   //              (Details page) Handling
//   //====================================================
//   selectedVehicle: any = null;

//   viewDetails(vehicle: any) {
//     this.selectedVehicle = vehicle;
//   }

//   closeDetails() {
//     this.selectedVehicle = null;
//   }
// }
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/Iproduct';
import { VehiclesService } from '../../Services/vehicle-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vehicles.html',
  styleUrls: ['./vehicles.css'],
})
export class Vehicles implements OnInit {
  @Input() searchText: string = '';
  @Input() selectedCategoryID: number = 0;

  products: IProduct[] = [];

  constructor(private vehiclesService: VehiclesService) {}

  ngOnInit(): void {
    this.vehiclesService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  get filteredProducts(): IProduct[] {
    return this.products.filter(
      (p) =>
        p.title.toLowerCase().includes(this.searchText.toLowerCase()) &&
        (this.selectedCategoryID === 0 || p.category.id === this.selectedCategoryID)
    );
  }

  buy(product: IProduct): void {
    this.vehiclesService.buy(product);
  }
}