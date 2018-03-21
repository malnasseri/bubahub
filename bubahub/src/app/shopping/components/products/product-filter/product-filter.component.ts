import { CategoryService } from '../../../../shared/services/category.service';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../../../shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../../../../shared/models/shopping-cart';
import { AuthService } from '../../../../shared/services/auth.service';
import { AppUser } from '../../../../shared/models/app-user';
import { Router } from '@angular/router';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  
  categories$;
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  searchValue:string;
  @Input('category') category;

  constructor(categoryService: CategoryService, private auth: AuthService, private shoppingCartService: ShoppingCartService) {
    this.categories$ = categoryService.getAll();
  }

  async ngOnInit() { 
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }
  clearBasket() {
      
 this.searchValue = '';
  }

}





