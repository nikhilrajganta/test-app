import { Injectable } from '@angular/core';

export interface IProducts {
  id: string;
  amount: string;
  image: string;
  name: string;
  quantity: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}
  private productItems: IProducts[] = [];

  getProducts(): Promise<IProducts[]> {
    return fetch('https://66b0ac9e6a693a95b539b890.mockapi.io/data').then(
      (res) => res.json()
    );
  }

  getProductByIdP(id: string): Promise<IProducts> {
    return fetch(`https://66b0ac9e6a693a95b539b890.mockapi.io/data/${id}`).then(
      (res) => res.json()
    );
  }
  addToCart(item: IProducts) {
    const existingItem = this.productItems.find(
      (productItem) => productItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity = (parseInt(existingItem.quantity) + 1).toString();
    } else {
      this.productItems.push({ ...item, quantity: '1' });
    }
  }
  getCartItems(): IProducts[] {
    return this.productItems;
  }
}
