webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\n    <div fxFlex>\n        <div>\n            <h3>About Us</h3>\n            <hr>\n        </div>\n    </div>\n\n    <div fxFlex>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n            <div fxFlex=\"70\">\n                <h2>Our History</h2>\n                <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele\n                    in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\n                <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\n            </div>\n            <div fxFlex=\"30\">\n                <mat-card>\n                    <mat-card-header>\n                        <mat-card-title>\n                            <h2>Facts At a Glance</h2>\n                        </mat-card-title>\n                    </mat-card-header>\n                    <mat-card-content>\n                        <dl>\n                            <dt>Started</dt>\n                            <dd>3 Feb. 2013</dd>\n                            <dt>Major Stake Holder</dt>\n                            <dd>HK Fine Foods Inc.</dd>\n                            <dt>Last Year's Turnover</dt>\n                            <dd>$1,250,375</dd>\n                            <dt>Employees</dt>\n                            <dd>40</dd>\n                        </dl>\n                    </mat-card-content>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n\n    <div fxFlex>\n        <mat-card>\n            <blockquote>\n                <h3>You better cut the pizza in four pieces because I'm not hungry enough to eat six.</h3>\n                <footer>-- Yogi Berra,\n                    <cite>The Wit and Wisdom of Yogi Berra,\n                            P. Pepe, Diversion Books, 2014</cite>\n                </footer>\n            </blockquote>\n        </mat-card>\n    </div>\n\n\n    <div fxFlex>\n        <h2>Corporate Leadership</h2>\n        <mat-list>\n            <mat-list-item *ngFor=\"let leader of leaders\">\n                <img matListAvatar src=\"{{leader.image}}\" alt=\"{{leader.name}}\">\n                <h1 matLine>{{leader.name}}</h1>\n                <h1 matLine>{{leader.designation}}</h1>\n                <p matLine>\n                    <span>{{leader.description}}</span>\n                </p>\n            </mat-list-item>\n        </mat-list>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(leaderservice) {
        this.leaderservice = leaderservice;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.leaders = this.leaderservice.getLeaders();
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("../../../../../src/app/app-routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dishdetail_dishdetail_component__ = __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_0__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'dishdetail/:id', component: __WEBPACK_IMPORTED_MODULE_1__dishdetail_dishdetail_component__["a" /* DishdetailComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dishdetail_dishdetail_component__ = __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_promotion_service__ = __webpack_require__("../../../../../src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dishdetail_dishdetail_component__["a" /* DishdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_17__app_app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_dish_service__["a" /* DishService */], __WEBPACK_IMPORTED_MODULE_18__services_promotion_service__["a" /* PromotionService */], __WEBPACK_IMPORTED_MODULE_19__services_leader_service__["a" /* LeaderService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\n    <div fxFlex>\n        <div>\n            <h3>Contact Us</h3>\n            <hr>\n        </div>\n    </div>\n\n    <div fxFlex>\n        <h3>Location Information</h3>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n            <div fxFlex=\"50\" fxFlexOffset=\"20px\">\n                <h4>Our Address</h4>\n                <address>\n\t\t              121, Clear Water Bay Road<br>\n\t\t              Clear Water Bay, Kowloon<br>\n\t\t              HONG KONG<br>\n\t\t              <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n\t\t              <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n\t\t              <i class=\"fa fa-envelope\"></i>: \n                        <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n\t\t           </address>\n                <p></p>\n                <div>\n                    <a mat-raised-button href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\n                    <a mat-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\n                    <a mat-raised-button href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n                </div>\n            </div>\n            <div fxFlex=\"40\">\n                <h4>Map of our Location</h4>\n            </div>\n        </div>\n    </div>\n    <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\">\n        <h3>Send us your Feedback</h3>\n        <p>{{ feedbackForm.value | json }} {{ feedbackForm.status | json }}</p>\n\n        <form novalidate [formGroup]=\"feedbackForm\" (ngSubmit)=\"onSubmit()\">\n            <p>\n                <mat-input-container class=\"half-width\" dividerColor=\"{{feedbackForm.get('firstname').hasError('required') && feedbackForm.get('firstname').touched ? 'warn': 'primary'}}\">\n                    <mat-hint>\n                        <span [hidden]=\"!(feedbackForm.get('firstname').hasError('required') && feedbackForm.get('firstname').touched)\">\n                                First Name is Required\n                        </span>\n                    </mat-hint>\n                    <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n                </mat-input-container>\n                <mat-input-container class=\"half-width\" dividerColor=\"{{feedbackForm.get('lastname').hasError('required') && feedbackForm.get('lastname').touched ? 'warn': 'primary'}}\">\n                    <mat-hint>\n                        <span [hidden]=\"!(feedbackForm.get('lastname').hasError('required') && feedbackForm.get('lastname').touched)\">\n                                        lastname Name is Required\n                                </span>\n                    </mat-hint>\n                    <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n                </mat-input-container>\n            </p>\n            <p>\n                <mat-input-container class=\"half-width\" dividerColor=\"{{feedbackForm.get('telnum').hasError('required') && feedbackForm.get('telnum').touched ? 'warn': 'primary'}}\">\n                    <mat-hint>\n                        <span [hidden]=\"!(feedbackForm.get('telnum').hasError('required') && feedbackForm.get('telnum').touched)\">\n                                        Tele.Num Name is Required\n                                </span>\n                    </mat-hint>\n                    <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" required>\n                </mat-input-container>\n                <mat-input-container class=\"half-width\" dividerColor=\"{{feedbackForm.get('email').hasError('required') && feedbackForm.get('email').touched ? 'warn': 'primary'}}\">\n                    <mat-hint>\n                        <span [hidden]=\"!(feedbackForm.get('email').hasError('required') && feedbackForm.get('email').touched)\">\n                                        email Name is Required\n                                </span>\n                    </mat-hint>\n                    <input matInput formControlName=\"email\" placeholder=\"E-mail\" type=\"email\" required>\n                </mat-input-container>\n            </p>\n            <table class=\"form-size\">\n                <td>\n                    <mat-slide-toggle formControlName=\"agree\">May we contact you?</mat-slide-toggle>\n                </td>\n                <td>\n                    <mat-form-field>\n                        <mat-select placeholder=\"How?\" formControlName=\"contacttype\">\n                            <mat-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n                                {{ ctype }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </td>\n            </table>\n            <p>\n                <mat-input-container class=\"full-width\">\n                    <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\n                </mat-input-container>\n            </p>\n            <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"feedbackForm.invalid\">Submit</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_feedback__ = __webpack_require__("../../../../../src/app/shared/feedback.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.contactType = __WEBPACK_IMPORTED_MODULE_2__shared_feedback__["a" /* ContactType */];
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.createForm = function () {
        this.feedbackForm = this.fb.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            telnum: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            agree: false,
            contacttype: 'None',
            message: ''
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dish\" class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.gt-md=\"space-around center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n\n    <div fxFlex=\"40\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h3>\n                        {{dish.name | uppercase}}\n                    </h3>\n                </mat-card-title>\n            </mat-card-header>\n            <img mat-card-image src=\"{{dish.image}}\" alt=\"{{dish.name}}\">\n            <mat-card-content>\n                <p> {{dish.description}}</p>\n            </mat-card-content>\n            <mat-card-actions>\n                <button mat-button (click)=\"goBack()\">BACK</button>\n                <button mat-button>LIKE</button>\n                <button mat-button>SHARE</button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n\n    <div fxFlex=\"40\">\n        <h3>\n            Comments\n        </h3>\n        <mat-list>\n            <mat-list-item *ngFor=\"let comment of dish.comments\">\n                <p matLine>{{comment.comment}}</p>\n                <p matLine>{{comment.rating}} Stars</p>\n                <p matLine>-- {{comment.author}} {{comment.date | date}}</p>\n            </mat-list-item>\n        </mat-list>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DishdetailComponent = (function () {
    function DishdetailComponent(dishservice, route, location) {
        this.dishservice = dishservice;
        this.route = route;
        this.location = location;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id']; // + sign to convert it to number
        this.dish = this.dishservice.getDish(id);
    };
    DishdetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return DishdetailComponent;
}());
DishdetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dishdetail',
        template: __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _c || Object])
], DishdetailComponent);

var _a, _b, _c;
//# sourceMappingURL=dishdetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"start center\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.gt-sm=\"center center\" fxLayoutWrap fxLayoutGap=\"10px\">\n\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n        <div fxLayout=\"row\">\n            <div fxFlex=\"40\" fxFlexOffset=\"20px\">\n                <h4>Links</h4>\n                <mat-list>\n                    <mat-list-item><a mat-button routerLink=\"/home\">Home</a></mat-list-item>\n                    <mat-list-item><a mat-button routerLink=\"/about\">About</a></mat-list-item>\n                    <mat-list-item><a mat-button routerLink=\"/menu\">Menu</a></mat-list-item>\n                    <mat-list-item><a mat-button routerLink=\"/contact\">Contact</a></mat-list-item>\n                </mat-list>\n            </div>\n            <div fxFlex=\"50\">\n                <h4>Our Address</h4>\n                <address style=\"text-size: 80%\">\n          121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n            </div>\n        </div>\n    </div>\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"45%\">\n        <div style=\"text-align:center\">\n            <a mat-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\"><i class=\"fa fa-google-plus fa-lg\"></i></a>\n            <a mat-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\"><i class=\"fa fa-facebook fa-lg\"></i></a>\n            <a mat-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\"><i class=\"fa fa-linkedin fa-lg\"></i></a>\n            <a mat-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter fa-lg\"></i></a>\n            <a mat-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\"><i class=\"fa fa-youtube fa-lg\"></i></a>\n            <a mat-icon-button class=\"btn-mail\" href=\"mailto:\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\n        </div>\n    </div>\n    <div fxFlex=\"100\" fxFlexAlign=\"center center\">\n        <div style=\"text-align:center;\">\n            <p>© Copyright 2015 Ristorante Con Fusion</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px; }\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important; }\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important; }\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important; }\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important; }\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span><img src=\"/assets/images/logo.png\" height=30 width=41></span>\n    <a mat-button routerLink=\"/home\" routerLinkActive=\"active\"><span class=\"fa fa-home fa-lg\"></span> Home</a>\n    <a mat-button routerLink=\"/about\" routerLinkActive=\"active\"><span class=\"fa fa-info fa-lg\"></span> About</a>\n    <a mat-button routerLink=\"/menu\" routerLinkActive=\"active\"><span class=\"fa fa-list fa-lg\"></span> Menu</a>\n    <a mat-button routerLink=\"/contact\" routerLinkActive=\"active\"><span class=\"fa fa-address-card fa-lg\"></span> Contact</a>\n    <span class=\"flex-spacer\"></span>\n    <a mat-button (click)=\"openLoginForm()\"><span class=\"fa fa-sign-in fa-lg\">Login</span></a>\n</mat-toolbar>\n\n<div class=\"container jumbotron\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"start center\" fxLayoutAlign.sm=\"start center\" fxLayoutAlign.gt-sm=\"center center\" fxLayoutGap=\"10px\">\n\n    <div fxFlex fxFlex.gt-sm=\"50%\">\n        <h1>Ristorante Con Fusion</h1>\n        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>\n    </div>\n    <div fxFlex fxFlex.gt-sm=\"20%\">\n        <img src=\"/assets/images/logo.png\" alt=\"Logo\">\n    </div>\n    <div fxFlex></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px; }\n\n.active {\n  background: #4527A0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], { width: '500px', height: '450px' });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign.gt-mat=\"space-around center\" fxLayoutGap=\"10px\">\n\n    <mat-card *ngIf=\"dish\" fxFlex>\n        <mat-card-header>\n            <div mat-card-avatar></div>\n            <mat-card-title>\n                <h3>{{dish.name | uppercase}}</h3>\n            </mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src={{dish.image}} alt={{dish.name}}>\n        <mat-card-content>\n            <p>{{dish.description}}\n            </p>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card *ngIf=\"promotion\" fxFlex>\n        <mat-card-header>\n            <div mat-card-avatar></div>\n            <mat-card-title>\n                <h3>{{promotion.name | uppercase}}</h3>\n            </mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src={{promotion.image}} alt={{promotion.name}}>\n        <mat-card-content>\n            <p>{{promotion.description}}\n            </p>\n        </mat-card-content>\n    </mat-card>\n    <mat-card *ngIf=\"leader\" fxFlex>\n        <mat-card-header>\n            <div mat-card-avatar></div>\n            <mat-card-title>\n                <h3>{{leader.name | uppercase}}</h3>\n            </mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src={{leader.image}} alt={{leader.name}}>\n        <mat-card-content>\n            <p matLine>{{leader.designation}}</p>\n            <p>{{leader.description}}</p>\n        </mat-card-content>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__ = __webpack_require__("../../../../../src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(dishservice, promotionservice, leaderservice) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.dish = this.dishservice.getFeaturedDish();
        this.promotion = this.promotionservice.getFeaturedPromotion();
        this.leader = this.leaderservice.getFeaturedLeader();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar mat-dialog-title color=\"primary\">\n    Login\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>&times;</button>\n</mat-toolbar>\n\n<p>{{ user | json}}</p>\n<form novalidate #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-dialog-content>\n        <p>\n            <mat-input-container dividerColor=\"{{username.invalid && !username.pristine ? 'warn': 'primary'}}\">\n                <input matInput placeholder=\"Username\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\" required>\n                <mat-hint>\n                    <span [hidden]=\"username.pristine\">\n                    <span [hidden]=\"!username.errors?.required\">Username Is Required</span>\n                    </span>\n                </mat-hint>\n            </mat-input-container>\n        </p>\n        <p>\n            <mat-input-container dividerColor=\"{{password.invalid && !password.pristine ? 'warn': 'primary'}}\">\n                <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required>\n                <mat-hint>\n                    <span [hidden]=\"password.pristine\">\n                    <span [hidden]=\"!password.errors?.required\">Password Is Required</span>\n                    </span>\n                </mat-hint>\n            </mat-input-container>\n        </p>\n        <p>\n            <mat-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">\n                Remember Me\n            </mat-checkbox>\n        </p>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n        <span class=\"flex-spacer\"></span>\n        <button mat-button mat-dialog-close>Cancel</button>\n        <button mat-button type=\"submit\" class=\"background-primary text-floral-white\" [disabled]=\"loginForm.form.invalid\">Submit</button>\n    </mat-dialog-actions>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(dialogref) {
        this.dialogref = dialogref;
        this.user = { remember: false };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log('User:', this.user);
        this.dialogref.close();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <div fxFlex>\n        <div>\n            <h3>Menu</h3>\n            <hr>\n        </div>\n    </div>\n    <div fxFlex>\n        <mat-grid-list cols=\"2\" rowHeight=\"200px\">\n            <mat-grid-tile *ngFor=\"let dish of dishes\" [routerLink]=\"['/dishdetail', dish.id]\">\n                <img height=\"200px\" src=\"{{dish.image}}\" alt=\"{{dish.name}}\">\n                <mat-grid-tile-footer>\n                    <h1 matLine>{{dish.name | uppercase}}</h1>\n                </mat-grid-tile-footer>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { DISHES } from '../shared/dishes';

var MenuComponent = (function () {
    function MenuComponent(dishService) {
        this.dishService = dishService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.dishes = this.dishService.getDishes();
    };
    MenuComponent.prototype.onSelect = function (dish) {
        this.selectedDish = dish;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/dish.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dishes__ = __webpack_require__("../../../../../src/app/shared/dishes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DishService = (function () {
    function DishService() {
    }
    DishService.prototype.getDishes = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_dishes__["a" /* DISHES */];
    };
    DishService.prototype.getDish = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1__shared_dishes__["a" /* DISHES */].filter(function (dish) { return dish.id === id; })[0];
    };
    DishService.prototype.getFeaturedDish = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_dishes__["a" /* DISHES */].filter(function (dish) { return dish.featured; })[0];
    };
    return DishService;
}());
DishService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DishService);

//# sourceMappingURL=dish.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/leader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_leaders__ = __webpack_require__("../../../../../src/app/shared/leaders.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaderService = (function () {
    function LeaderService() {
    }
    LeaderService.prototype.getLeaders = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_leaders__["a" /* LEADERS */];
    };
    LeaderService.prototype.getLeader = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1__shared_leaders__["a" /* LEADERS */].filter(function (dish) { return dish.id === id; })[0];
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_leaders__["a" /* LEADERS */].filter(function (dish) { return dish.featured; })[0];
    };
    return LeaderService;
}());
LeaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LeaderService);

//# sourceMappingURL=leader.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/promotion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_promotions__ = __webpack_require__("../../../../../src/app/shared/promotions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromotionService = (function () {
    function PromotionService() {
    }
    PromotionService.prototype.getPromotions = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_promotions__["a" /* PROMOTIONS */];
    };
    PromotionService.prototype.getPromotion = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1__shared_promotions__["a" /* PROMOTIONS */].filter(function (dish) { return dish.id === id; })[0];
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_promotions__["a" /* PROMOTIONS */].filter(function (dish) { return dish.featured; })[0];
    };
    return PromotionService;
}());
PromotionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PromotionService);

//# sourceMappingURL=promotion.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dishes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DISHES; });
var DISHES = [
    {
        id: 0,
        name: 'Uthappizza',
        image: '/assets/images/uthappizza.png',
        category: 'mains',
        label: 'Hot',
        featured: true,
        price: '4.99',
        // tslint:disable-next-line:max-line-length
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: 1,
        name: 'Zucchipakoda',
        image: '/assets/images/zucchipakoda.png',
        category: 'appetizer',
        label: '',
        price: '1.99',
        featured: false,
        description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: 2,
        name: 'Vadonut',
        image: '/assets/images/vadonut.png',
        category: 'appetizer',
        label: 'New',
        price: '1.99',
        featured: false,
        description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: 3,
        name: 'ElaiCheese Cake',
        image: '/assets/images/elaicheesecake.png',
        category: 'dessert',
        label: '',
        featured: false,
        price: '2.99',
        description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    }
];
//# sourceMappingURL=dishes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/feedback.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Feedback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactType; });
var Feedback = (function () {
    function Feedback() {
    }
    return Feedback;
}());

var ContactType = ['None', 'Tel', 'E-mail'];
//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ "../../../../../src/app/shared/leaders.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEADERS; });
var LEADERS = [
    {
        id: 0,
        name: 'Peter Pan',
        image: '/assets/images/alberto.png',
        designation: 'Chief Epicurious Officer',
        abbr: 'CEO',
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother\'s wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.'
    },
    {
        id: 1,
        name: 'Dhanasekaran Witherspoon',
        image: '/assets/images/alberto.png',
        designation: 'Chief Food Officer',
        abbr: 'CFO',
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!'
    },
    {
        id: 2,
        name: 'Agumbe Tang',
        image: '/assets/images/alberto.png',
        designation: 'Chief Taste Officer',
        abbr: 'CTO',
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick.'
    },
    {
        id: 3,
        name: 'Alberto Somayya',
        image: '/assets/images/alberto.png',
        designation: 'Executive Chef',
        abbr: 'EC',
        featured: true,
        // tslint:disable-next-line:max-line-length
        description: 'Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!'
    }
];
//# sourceMappingURL=leaders.js.map

/***/ }),

/***/ "../../../../../src/app/shared/promotions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROMOTIONS; });
var PROMOTIONS = [
    {
        id: 0,
        name: 'Weekend Grand Buffet',
        image: '/assets/images/buffet.png',
        label: 'New',
        price: '19.99',
        featured: true,
        // tslint:disable-next-line:max-line-length
        description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
    }
];
//# sourceMappingURL=promotions.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map