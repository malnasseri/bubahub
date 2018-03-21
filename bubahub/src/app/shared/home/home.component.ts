import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { Product } from '../../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../../shared/models/app-user';
import { ProductService } from '../../shared/services/product.service';
import 'rxjs/add/operator/switchMap';
import { AuthService } from '../../shared/services/auth.service';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	 appUser: AppUser;
	products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;
  constructor( 
  	private auth: AuthService,
  	private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
    ) { }

 async ngOnInit() {
 	this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts() { 
    this.productService
      .getAll()
      .switchMap(prducts => {
        this.products = prducts ;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();      
      });
  }


  private applyFilter() { 
    this.filteredProducts = (this.category) ? 
    this.products.filter(p => p.category === this.category) : 
    this.products;
  }
login() { 
    this.auth.login();
  }


  
}








  
