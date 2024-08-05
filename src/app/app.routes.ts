import { Routes } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductDashboardComponent,
  },
  { path: 'overview/:id', component: ProductOverviewComponent },
  //   {
  //     path: '**',
  //     component: PageNotFoundComponent,
  //   },
];
