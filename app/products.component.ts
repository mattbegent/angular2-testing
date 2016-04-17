import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {Product} from './models/product';
import {ProductService} from './services/product.service';
import {ProductDetailComponent} from './product-detail.component';


@Component({
  selector: 'rad-products',
  directives: [ProductDetailComponent],
  template:`
    <h1>{{title}}</h1>
    <rad-product-detail [product]="selectedProduct"></rad-product-detail>
    <ul class="products">
      <li *ngFor="#product of products" (click)="gotoDetail(product)">
        <h2>{{product.name}}</h2>
        <img src="{{product.image}}" class="products__image">
        <p>{{product.summary}}</p>
      </li>
    </ul>
    `,
    styles:[`
      .products {
        list-style: none;
        margin: 0 0 1em 0;
        padding: 0;
      }
      .products li {
        display: inline-block;
        border: 1px solid #444;
        margin-right: 1em;
        max-width: 20%;
        padding: 1em;
      }
      .products__image {
        max-width: 100%;
      }
    `]
})
export class ProductsComponent implements OnInit {
  title = 'Products';
  products: Product[];
  selectedProduct: Product;
  constructor(private _productService: ProductService, private _router: Router) { }
  getProducts() {
    this._productService.getProducts().then(products => this.products = products);
  }
  ngOnInit() {
    this.getProducts();
  }
  // onSelect(product: Product) {
  //   console.log(product);
  //   this.selectedProduct = product;
  // }
  gotoDetail(product: Product) {
    let link = ['ProductDetail', { id: product.id }];
    this._router.navigate(link);
  }
}
