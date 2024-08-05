import { Component } from '@angular/core';
import { IProducts, ItemsService } from '../items.service';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

interface QuantityOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatButtonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: IProducts[] = [];
  quantityOptions: QuantityOption[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
  ];

  constructor(private productService: ItemsService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
  }

  grandTotal(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + this.getSubtotal(item),
      0
    );
  }

  getSubtotal(item: IProducts): number {
    return parseFloat(item.amount) * parseInt(item.quantity);
  }
  updateQuantity(item: IProducts) {
    // Update the cart item with the selected quantity
    this.productService.updateCartItemQuantity(item.id, item.quantity);
  }
  removeItem(item: IProducts) {
    this.productService.removeFromCart(item);
    this.cartItems = this.productService.getCartItems();
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
