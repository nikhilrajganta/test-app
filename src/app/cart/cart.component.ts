import { Component } from '@angular/core';
import { IProducts, ItemsService } from '../items.service';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: IProducts[] = [];

  constructor(private productService: ItemsService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
  }

  total() {
    return this.cartItems.reduce(
      (acc, item) => acc + parseFloat(item.amount),
      0
    );
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
