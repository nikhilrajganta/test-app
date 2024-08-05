import { Component } from '@angular/core';
import { IProducts, ItemsService } from '../items.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [ProductListComponent, MatIconModule],
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
})
export class ProductDashboardComponent {
  allitems: Array<IProducts> = [];
  filteredItems: Array<IProducts> = [];

  updateFilteredItems(items: Array<IProducts>) {
    this.filteredItems = items;
  }
  constructor(private productService: ItemsService, private router: Router) {}
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().then((data) => (this.allitems = data));
  }
  opencart() {
    this.router.navigate(['/cart']);
  }
}
