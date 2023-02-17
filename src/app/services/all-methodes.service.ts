import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllMethodesService {
  private items: Array<any> = [] ;
  private storageKey = 'mon-panier';

  constructor() { 
    const storedItems = localStorage.getItem(this.storageKey);
    if (storedItems) {
      this.items = JSON.parse(storedItems) ;
    }
  }

  ajouterAuPanier(item: any){
    this.items.push(item) ;
    console.log("Valeur de ma donnée" + this.items) ;

    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  getItems() {
    console.log("Valeur de ma donnée" + this.items) ;

    return this.items ;
  }

  viderPanier(){
    this.items = [] ;
    localStorage.removeItem(this.storageKey);
  }

  // getTotal() {
  //   let total = 0;
  //   for (let i = 0; i < this.items.length; i++) {
  //     total += this.items[i].price * this.items[i].quantity;
  //   }
  //   return total;
  // }

  getTotals() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const price = parseFloat(item.prix);
      // const quantity = parseFloat(item.quantity);
      if (!isNaN(price)) {
        total += price ;
      }
    } 
    return total ; 
  }
  /*
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const price = parseFloat(item.prix);
      // const quantity = parseFloat(item.quantity);
      if (!isNaN(price)) {
        total += price ;
      }
    }
  
    let discount = null;
  
    // 80% auront 10% de réduction sur leur commande dès 30 euros d’achat
    if (total >= 30 && Math.random() < 0.8) {
      discount = { type: 'percentage', value: 10 };
    }
  
    // 15% auront 50% de réduction sur le 2nd menu acheté
    if (this.items.length >= 2 && Math.random() < 0.15) {
      const index = Math.floor(this.items.length / 2);
      const item = this.items[index];
      discount = { type: 'percentage', value: 50, item };
    }
  
    // 5% auront un menu de 35 euros gratuit
    if (Math.random() < 0.05) {
      discount = { type: 'fixed', value: 35 };
    }
  
    total = this.applyDiscount(total, discount);
    
    console.log(total) ;
    return total;
  }
  
  applyDiscount(total: number, discount: any = null) {
    if (discount) {
      switch (discount.type) {
        case 'percentage':
          total = total - (total * (discount.value / 100));
          break;
        case 'fixed':
          total = total - discount.value;
          break;
        default:
          break;
      }
    }
  
    return total;
  }
  */
  getTotal(promoCode: string) {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const price = parseFloat(item.prix);
      if (!isNaN(price)) {
        total += price;
      }
    }
  
    let discount = null;
  
    switch(promoCode) {
      case 'promo1':
        // 80% auront 10% de réduction sur leur commande dès 30 euros d’achat
        if (total >= 30 && Math.random() < 0.8) {
          discount = { type: 'percentage', value: 10 };
        }
        break;
      case 'promo2':
        // 15% auront 50% de réduction sur le 2nd menu acheté
        if (this.items.length >= 2 && Math.random() < 0.15) {
          const index = Math.floor(this.items.length / 2);
          const item = this.items[index];
          discount = { type: 'percentage', value: 50, item };
        }
        break;
      case 'promo3':
        // 5% auront un menu de 35 euros gratuit
        if (Math.random() < 0.05) {
          discount = { type: 'fixed', value: 35 };
        }
        break;
      default:
        break;
    }
  
    total = this.applyDiscount(total, discount);
    
    console.log(total);
    return total;
  }

    
  applyDiscount(total: number, discount: any = null) {
    if (discount) {
      switch (discount.type) {
        case 'percentage':
          total = total - (total * (discount.value / 100));
          break;
        case 'fixed':
          total = total - discount.value;
          break;
        default:
          break;
      }
    }
  
    return total;
  }
  
  
}
