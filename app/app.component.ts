import { Component } from 'angular2/core';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@RouteConfig([
  {
    path: '/products',
    name: 'Products',
    component: ProductsComponent
  },
  {
    path: '/detail/:id',
    name: 'ProductDetail',
    component: ProductDetailComponent
  }
])

@Component({
  selector: 'rad-shelf',
  template: `
    <div class="rad-shelf">
    <h1>{{title}}</h1>
    <a [routerLink]="['Products']">Show all products</a>
    <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES], // products component
  providers: [
    ROUTER_PROVIDERS,
    ProductService
  ],
  styles:[`
    .rad-shelf {
      padding: 1em;
    }
  `]
})
export class AppComponent {
  title = 'RadShelf';
}
