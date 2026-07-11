import { isPlatformBrowser } from '@angular/common';
import { Component, computed, effect, inject, PLATFORM_ID, signal } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  items = signal<CartItem[]>(this.loadFromStorage());
  
    // TODO 1: computed que sume price * qty de todos los items    
  total = computed(() => this.items().reduce((acc, item) => acc + item.price * item.qty, 0));
  
   // TODO 2: computed booleano, true si total() >= 50000
  freeShipping = computed(() => this.total() >= 50000); 

  constructor() {
    // TODO 3: effect que persista `items()` en localStorage 
    // cada vez que cambien (usar JSON.stringify)
    effect(() => {
      localStorage.setItem('cartItems', JSON.stringify(this.items()));
    }); 
  }

  private loadFromStorage(): CartItem[] {
    if (!this.isBrowser) return [];

    try {
      return JSON.parse(localStorage.getItem('cartItems') ?? '[]');
    } catch {
      return []; // JSON corrupto o inexistente
    }
  }

  // TODO 4: agregar un item de forma inmutable
  // (si el id ya existe en el carrito, sumar qty en vez de duplicar)
  addItem(item: CartItem) {
    const existingItemIndex = this.items().findIndex(i => i.id === item.id);
    if(existingItemIndex !== -1) {
      const updatedItems = [...this.items()];
      updatedItems[existingItemIndex] = { ...updatedItems[existingItemIndex], qty: updatedItems[existingItemIndex].qty + item.qty };
      this.items.set(updatedItems);
    } else {
      this.items.update(items => [...items, item]);
    }
  }

  resetCart() {
    this.items.set([]);
  }  
}
