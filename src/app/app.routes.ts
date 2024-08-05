import { Routes } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductDashboardComponent,
  },
  { path: 'cart', component: CartComponent },
  { path: 'overview/:id', component: ProductOverviewComponent },

  //   {
  //     path: '**',
  //     component: PageNotFoundComponent,
  //   },
];
