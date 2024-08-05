import { Component } from '@angular/core';
import { IProducts, ItemsService } from '../items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [CurrencyPipe, MatButtonModule],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.scss',
})
export class ProductOverviewComponent {
  item!: IProducts;
  msg = '';

  constructor(
    private productsService: ItemsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string;

    this.productsService
      .getProductByIdP(id)
      .then((data) => {
        this.item = data;
      })
      .catch(() => {
        this.msg = 'Something went wrong 🥲';
      });
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
