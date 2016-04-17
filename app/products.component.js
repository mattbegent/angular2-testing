System.register(['angular2/core', 'angular2/router', './services/product.service', './product-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, product_service_1, product_detail_component_1;
    var ProductsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            }],
        execute: function() {
            ProductsComponent = (function () {
                function ProductsComponent(_productService, _router) {
                    this._productService = _productService;
                    this._router = _router;
                    this.title = 'Products';
                }
                ProductsComponent.prototype.getProducts = function () {
                    var _this = this;
                    this._productService.getProducts().then(function (products) { return _this.products = products; });
                };
                ProductsComponent.prototype.ngOnInit = function () {
                    this.getProducts();
                };
                // onSelect(product: Product) {
                //   console.log(product);
                //   this.selectedProduct = product;
                // }
                ProductsComponent.prototype.gotoDetail = function (product) {
                    var link = ['ProductDetail', { id: product.id }];
                    this._router.navigate(link);
                };
                ProductsComponent = __decorate([
                    core_1.Component({
                        selector: 'rad-products',
                        directives: [product_detail_component_1.ProductDetailComponent],
                        template: "\n    <h1>{{title}}</h1>\n    <rad-product-detail [product]=\"selectedProduct\"></rad-product-detail>\n    <ul class=\"products\">\n      <li *ngFor=\"#product of products\" (click)=\"gotoDetail(product)\">\n        <h2>{{product.name}}</h2>\n        <img src=\"{{product.image}}\" class=\"products__image\">\n        <p>{{product.summary}}</p>\n      </li>\n    </ul>\n    ",
                        styles: ["\n      .products {\n        list-style: none;\n        margin: 0 0 1em 0;\n        padding: 0;\n      }\n      .products li {\n        display: inline-block;\n        border: 1px solid #444;\n        margin-right: 1em;\n        max-width: 20%;\n        padding: 1em;\n      }\n      .products__image {\n        max-width: 100%;\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
                ], ProductsComponent);
                return ProductsComponent;
            }());
            exports_1("ProductsComponent", ProductsComponent);
        }
    }
});
//# sourceMappingURL=products.component.js.map