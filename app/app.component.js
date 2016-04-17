System.register(['angular2/core', './services/product.service', './products.component', './product-detail.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, product_service_1, products_component_1, product_detail_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (products_component_1_1) {
                products_component_1 = products_component_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'RadShelf';
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/products',
                            name: 'Products',
                            component: products_component_1.ProductsComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'ProductDetail',
                            component: product_detail_component_1.ProductDetailComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'rad-shelf',
                        template: "\n    <div class=\"rad-shelf\">\n    <h1>{{title}}</h1>\n    <a [routerLink]=\"['Products']\">Show all products</a>\n    <router-outlet></router-outlet>\n    </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            product_service_1.ProductService
                        ],
                        styles: ["\n    .rad-shelf {\n      padding: 1em;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map