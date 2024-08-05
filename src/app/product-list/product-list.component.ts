import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IProducts, ItemsService } from '../items.service';
import { AppComponent } from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CurrencyPipe } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    AppComponent,
    MatIconModule,
    MatBadgeModule,
    RouterLink,
    CurrencyPipe,
    CartComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  constructor(public itemserviceInfo: ItemsService, private router: Router) {}
  @Input() id!: string;

  @Output() deleteItemEvent: EventEmitter<IProducts> =
    new EventEmitter<IProducts>();

  openProductOverview() {
    this.router.navigate(['/overview', this.item.id]);
  }

  addToCart(item: IProducts) {
    this.itemserviceInfo.addToCart(item);
    this.router.navigate(['/cart']);
  }

  @Input() item = {
    id: '',
    name: 'Table',
    image:
      'https://m.media-amazon.com/images/I/81j-Ml3dQfL._AC_UF1000,1000_QL80_.jpg',
    description: 'Good looking table placed on the ground',
    quantity: '1',
    amount: '650',
  };
}
