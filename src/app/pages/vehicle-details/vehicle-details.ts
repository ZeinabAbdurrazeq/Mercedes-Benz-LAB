import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../models/Iproduct';
import { VehiclesService } from '../../Services/vehicle-service';

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vehicle-details.html',
  styleUrls: ['./vehicle-details.css'],
})
export class VehicleDetails implements OnInit {
  vehicle?: IProduct;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehiclesService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.vehicleService.getProductById(id).subscribe({
        next: (data) => {
          this.vehicle = data;
        },
        error: (err) => {
          console.error('Product not found', err);
        }
      });
    }
  }

  get categoryName(): string {
    return this.vehicle?.category?.name || 'Unknown';
  }
}
