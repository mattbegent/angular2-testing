import {Component, OnInit} from 'angular2/core';
import {Product} from './models/product';
import { RouteParams } from 'angular2/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'rad-product-detail',
  template: `
    <div *ngIf="product">
      <h2>{{product.name}}</h2>
      <button (click)="goBack()">Back</button>
    </div>
  `
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private _productService: ProductService,
    private _routeParams: RouteParams) {
    }
  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._productService.getProduct(id)
      .then(product => this.product = product);
  }
  goBack() {
    window.history.back();
  }
}
