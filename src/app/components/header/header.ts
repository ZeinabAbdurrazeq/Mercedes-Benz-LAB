import { Store } from './../../models/store';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../Services/AuthService';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  store: Store = new Store('Mercedes-Benz', ['Branch 1', 'Branch 2'], './assets/images.png');
  StoreOwner: string[] = ['Karl Benz', 'Gottlieb Daimler'];

  constructor(
    public authService: AuthService, 
    private router: Router,
    private toastr: ToastrService
  ) {}

  onLogout() {
    this.authService.logout();
    this.toastr.info('You have been logged out.', 'Logout');
    this.router.navigate(['/login']);
  }
}
