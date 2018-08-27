(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/animations/animation.ts":
/*!*************************************!*\
  !*** ./src/animations/animation.ts ***!
  \*************************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var NAVIGATION_ICON = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('navigationIcon', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '60px',
        height: '60px',
        'border-radius': '100%',
        cursor: 'pointer',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease-out')),
]);
var SMOOTH_CONTAINER = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('smoothContainer', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease-out')]),
]);
var Animation = {
    NAVIGATION_ICON: NAVIGATION_ICON,
    SMOOTH_CONTAINER: SMOOTH_CONTAINER,
};


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<landing-page></landing-page>\n<footer-fixed></footer-fixed>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'resume';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_typing_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-typing-animation */ "./node_modules/angular-typing-animation/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_footer_fixed_footer_fixed_nav_item_footer_fixed_nav_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component */ "./src/app/layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component.ts");
/* harmony import */ var _layouts_footer_fixed_footer_fixed_footer_fixed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/footer-fixed/footer-fixed/footer-fixed.component */ "./src/app/layouts/footer-fixed/footer-fixed/footer-fixed.component.ts");
/* harmony import */ var _layouts_footer_fixed_footer_nav_icon_footer_nav_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component */ "./src/app/layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component.ts");
/* harmony import */ var _layouts_landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/landing-page/landing-page/landing-page.component */ "./src/app/layouts/landing-page/landing-page/landing-page.component.ts");
/* harmony import */ var _directives_smooth_container_smooth_container_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/smooth-container/smooth-container.directive */ "./src/app/directives/smooth-container/smooth-container.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var COMPONENTS = [
    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
    _layouts_footer_fixed_footer_fixed_footer_fixed_component__WEBPACK_IMPORTED_MODULE_6__["FooterFixedComponent"],
    _layouts_footer_fixed_footer_nav_icon_footer_nav_icon_component__WEBPACK_IMPORTED_MODULE_7__["FooterNavIconComponent"],
    _layouts_footer_fixed_footer_fixed_nav_item_footer_fixed_nav_item_component__WEBPACK_IMPORTED_MODULE_5__["FooterFixedNavItemComponent"],
    _layouts_landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponent"],
];
var DIRECTIVES = [angular_typing_animation__WEBPACK_IMPORTED_MODULE_3__["TypingAnimationDirective"], _directives_smooth_container_smooth_container_directive__WEBPACK_IMPORTED_MODULE_9__["SmoothContainerDirective"]];
var IMPORTS = [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: COMPONENTS.concat(DIRECTIVES),
            imports: IMPORTS.slice(),
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/smooth-container/smooth-container.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/directives/smooth-container/smooth-container.directive.ts ***!
  \***************************************************************************/
/*! exports provided: SmoothContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothContainerDirective", function() { return SmoothContainerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmoothContainerDirective = /** @class */ (function () {
    function SmoothContainerDirective() {
    }
    Object.defineProperty(SmoothContainerDirective.prototype, "change", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@smoothContainer'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SmoothContainerDirective.prototype, "change", null);
    SmoothContainerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[smoothContainer]',
        })
    ], SmoothContainerDirective);
    return SmoothContainerDirective;
}());



/***/ }),

/***/ "./src/app/layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@hover]=\"hoverState\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  cursor: pointer; }\n  :host::first-letter {\n    font-size: 115%; }\n"

/***/ }),

/***/ "./src/app/layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FooterFixedNavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterFixedNavItemComponent", function() { return FooterFixedNavItemComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var styleNormal = {
    color: 'transparent',
    'text-shadow': '0 0 3px rgba(0,0,0,0.5)',
};
var styleHover = {
    color: 'black',
    'text-shadow': '0 0 0',
    'font-size': '16px',
};
var FooterFixedNavItemComponent = /** @class */ (function () {
    function FooterFixedNavItemComponent() {
        this.hoverState = false;
    }
    FooterFixedNavItemComponent.prototype._mouseover = function () {
        this.hoverState = true;
    };
    FooterFixedNavItemComponent.prototype._mouseout = function () {
        this.hoverState = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FooterFixedNavItemComponent.prototype, "_mouseover", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FooterFixedNavItemComponent.prototype, "_mouseout", null);
    FooterFixedNavItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer-fixed-nav-item',
            template: __webpack_require__(/*! ./footer-fixed-nav-item.component.html */ "./src/app/layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component.html"),
            styles: [__webpack_require__(/*! ./footer-fixed-nav-item.component.scss */ "./src/app/layouts/footer-fixed/footer-fixed-nav-item/footer-fixed-nav-item.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('hover', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(styleHover)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(styleNormal)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out')),
                ]),
            ],
        })
    ], FooterFixedNavItemComponent);
    return FooterFixedNavItemComponent;
}());



/***/ }),

/***/ "./src/app/layouts/footer-fixed/footer-fixed/footer-fixed.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/footer-fixed/footer-fixed/footer-fixed.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer-nav-icon></footer-nav-icon>\n<!-- <div class=\"item-container\" *ngFor=\"let item of items\">\n  <footer-fixed-nav-item class=\"nav-item\">{{ item.name }}</footer-fixed-nav-item>\n</div> -->\n"

/***/ }),

/***/ "./src/app/layouts/footer-fixed/footer-fixed/footer-fixed.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/footer-fixed/footer-fixed/footer-fixed.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  bottom: 40px;\n  left: 40px; }\n\n.item-container {\n  font-size: 14px;\n  height: 22px;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  text-align: left;\n  text-transform: uppercase; }\n"

/***/ }),

/***/ "./src/app/layouts/footer-fixed/footer-fixed/footer-fixed.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/footer-fixed/footer-fixed/footer-fixed.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FooterFixedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterFixedComponent", function() { return FooterFixedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterFixedComponent = /** @class */ (function () {
    function FooterFixedComponent() {
        this.items = [
            { name: 'who am I?', value: 'whoami' },
            { name: 'experience', value: 'experience' },
            { name: 'skillset', value: 'skillset' },
        ];
    }
    FooterFixedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer-fixed',
            template: __webpack_require__(/*! ./footer-fixed.component.html */ "./src/app/layouts/footer-fixed/footer-fixed/footer-fixed.component.html"),
            styles: [__webpack_require__(/*! ./footer-fixed.component.scss */ "./src/app/layouts/footer-fixed/footer-fixed/footer-fixed.component.scss")],
        })
    ], FooterFixedComponent);
    return FooterFixedComponent;
}());



/***/ }),

/***/ "./src/app/layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"circle\" [@navigationIcon]=\"hoverState\">\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 70px;\n  width: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.circle {\n  width: 55px;\n  height: 55px;\n  border-radius: 3px;\n  background-color: #fcedb6;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.circle div {\n    height: 4px;\n    width: 19px;\n    border-radius: 1px;\n    background-color: #333;\n    margin-top: 4px; }\n\n.circle div:first-child {\n      margin: 0; }\n"

/***/ }),

/***/ "./src/app/layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FooterNavIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNavIconComponent", function() { return FooterNavIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../animations/animation */ "./src/animations/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterNavIconComponent = /** @class */ (function () {
    function FooterNavIconComponent() {
        this.hover = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    FooterNavIconComponent.prototype.onHover = function (event) {
        this.hover.next(!this.hover.value);
    };
    Object.defineProperty(FooterNavIconComponent.prototype, "hoverState", {
        get: function () {
            return this._hoverState;
        },
        enumerable: true,
        configurable: true
    });
    FooterNavIconComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hover.asObservable().subscribe(function (val) {
            _this._hoverState = val;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], FooterNavIconComponent.prototype, "onHover", null);
    FooterNavIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer-nav-icon',
            template: __webpack_require__(/*! ./footer-nav-icon.component.html */ "./src/app/layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component.html"),
            styles: [__webpack_require__(/*! ./footer-nav-icon.component.scss */ "./src/app/layouts/footer-fixed/footer-nav-icon/footer-nav-icon.component.scss")],
            animations: [_animations_animation__WEBPACK_IMPORTED_MODULE_2__["Animation"].NAVIGATION_ICON],
        })
    ], FooterNavIconComponent);
    return FooterNavIconComponent;
}());



/***/ }),

/***/ "./src/app/layouts/landing-page/landing-page/landing-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/landing-page/landing-page/landing-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div smoothContainer class=\"title-container\">\n    <div class=\"greeting\">\n        <span typingAnimation\n            [typeSpeed]=\"40\"\n            [startDelay]=\"0\"\n            [hideCursorOnComplete]=\"true\"\n            (complete)=\"typeSubHeading = true\"\n        >Hello, I'm Peter\n        </span>\n    </div>\n    <div class=\"sub-heading\">\n        <span typingAnimation\n            [typeSpeed]=\"20\"\n            [hideCursorOnComplete]=\"true\"\n            [condition]=\"typeSubHeading\"\n        >want to meet your next employee?\n        </span>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/landing-page/landing-page/landing-page.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/landing-page/landing-page/landing-page.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.8px; }\n\n.title-container {\n  background-color: #fcedb6;\n  padding: 0 30px;\n  width: 100%;\n  overflow: hidden; }\n\n.title-container .greeting {\n    display: block;\n    font-size: 60px; }\n\n.title-container .sub-heading {\n    display: block;\n    font-size: 20px;\n    padding-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/layouts/landing-page/landing-page/landing-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/landing-page/landing-page/landing-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../animations/animation */ "./src/animations/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.typeSubHeading = false;
    }
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/layouts/landing-page/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/layouts/landing-page/landing-page/landing-page.component.scss")],
            animations: [_animations_animation__WEBPACK_IMPORTED_MODULE_1__["Animation"].SMOOTH_CONTAINER],
        })
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/PeterSkopal/resume/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map