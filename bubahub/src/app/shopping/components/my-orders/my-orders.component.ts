import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Order } from '../../../shared/models/order';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
 orders$;
   cart$;
   showSelected: boolean;
    hideme = {};
  
   constructor(private orderService: OrderService, private shoppingCartService: ShoppingCartService, private authService: AuthService) { 
     this.hideme = {};
    this.showSelected = false;



    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
    this.cart$ =  this.shoppingCartService.getCart();

    let cartId = localStorage.getItem('cartId');


    
    
  }
   showButton(event: Event): void {
        let elementId: string = (event.target as Element).id;
    // console.log(event.target.id); 
        this.showSelected = true;
    }
    hideButton(event: Event): void {
        let elementId: string = (event.target as Element).id;
      // console.log(event.target.id); 
        this.showSelected = false;
    }

}






