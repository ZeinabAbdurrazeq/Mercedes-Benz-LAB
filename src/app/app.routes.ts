import { Vehicles } from './pages/vehicles/vehicles';
import { VehicleDetails } from './pages/vehicle-details/vehicle-details';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { guestGuard } from './guards/guest-guard';

import { SearchProducts } from './pages/search-products/search-products';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: Home },
  { path: 'products', component: Home }, 
  { path: 'search-products', component: SearchProducts },
  {
    path: 'vehicle/:id',
    component: VehicleDetails,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'register',
    component: Register,
    canActivate: [guestGuard]
  },
  {
    path: 'login',
    component: Login,
    canActivate: [guestGuard]
  },
  {
    path: '**',
    component: NotFound
  },
];
