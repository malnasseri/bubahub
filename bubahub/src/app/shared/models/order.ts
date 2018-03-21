import { ShoppingCart } from './shopping-cart';

export class Order { 
  datePlaced: number;
  finalTotal: number; 
  finalQuantity: number;
  items: any[];

  constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
    this.datePlaced = new Date().getTime();

    this.items = shoppingCart.items.map(i => {
      this.finalTotal = shoppingCart.totalPrice;
      this.finalQuantity = shoppingCart.totalItemsCount;
  
      return {

        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
        
      }
    })    
  }
}