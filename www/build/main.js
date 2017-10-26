webpackJsonp([3],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/raphael_b/Documents/apps/ekit/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center class="ptext">\n    <h2 text-center>OCHA ROLAC</h2>\n    <p>La Oficina Regional de OCHA para América Latina y el Caribe (OCHA - ROLAC) tiene su sede en la Ciudad de Panamá.<br><br>\n\nMás de 25 trabajadores humanitarios, tanto nacionales como internacionales, laboran en OCHA desde Panamá para asegurar que los socios humanitarios nacionales y regionales trabajan mejor juntos durante las emergencias. \n</p>\n  \n\n    <strong>Clayton, Ciudad del Saber,</strong><br>\n    Ave. Vicente Bonilla, Edif. 119 A6B<br>\n\n\n  \n\n  <strong>E-mail:</strong> ocha-rolac@un.org<br>\n  <strong>Teléfono:</strong> (507) 317 1748<br>\n  <strong>Teléfono de emergencia:</strong> (507) 6679-1861<br>\n</div>\n<br><br>\n</ion-content>\n'/*ion-inline-end:"/Users/raphael_b/Documents/apps/ekit/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_detail_detail__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetailPage = (function () {
    function DetailPage(fileOpener, alertCtrl, transfer, platform, file, actionSheetCtrl, navCtrl, navParams, loadingCtrl, detailProvider) {
        var _this = this;
        this.fileOpener = fileOpener;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.platform = platform;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.detailProvider = detailProvider;
        this.storageDirectory = '';
        this.id = this.navParams.get('id');
        this.platform.ready().then(function () {
            if (_this.platform.is('ios')) {
                _this.storageDirectory = _this.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = _this.file.externalDataDirectory;
            }
        });
    }
    DetailPage.prototype.presentAlert = function (texto) {
        var alert = this.alertCtrl.create({
            title: texto,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    DetailPage.prototype.downloadFile = function (nombre) {
        var _this = this;
        this.platform.ready().then(function () {
            var fileTransfer = _this.transfer.create();
            var url = encodeURI('http://sara.un-ocha.org/uploads/documentos/pdf/' + nombre);
            fileTransfer.download(url, _this.storageDirectory + nombre).then(function (entry) {
                _this.fileOpener.open(entry.toURL(), 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error openening file', e); });
            }, function (error) {
                console.log('download complete: ' + error);
                _this.presentAlert('Error en la descarga : ');
                _this.presentAlert('Error code : ' + error.code);
            });
        });
    };
    DetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.detailProvider.getDetail(this.id).
            subscribe(function (posts) {
            _this.datos = posts.archivo;
            loading.dismiss();
            console.log(_this.datos);
        });
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/raphael_b/Documents/apps/ekit/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>detail</ion-title>\n    <ion-buttons end *ngFor="let post of datos">\n        <button ion-button icon-only (click)="downloadFile(post.nombre_archivo);">\n          <ion-icon name="download"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="downloadFile(post.nombre_archivo);">\n          <ion-icon name="share"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n  <div *ngFor="let post of datos">\n  <h4>{{post.nombre}}</h4>\n  <div [innerHTML]="post.descripcion">\n  \n\n  </div>\n  \n  </div>\n  \n</ion-content>\n\n\n        \n\n\n'/*ion-inline-end:"/Users/raphael_b/Documents/apps/ekit/src/pages/detail/detail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["b" /* FileTransferObject */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_detail_detail__["a" /* DetailProvider */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcarpetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_weather_weather__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SubcarpetaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubcarpetaPage = (function () {
    function SubcarpetaPage(navCtrl, navParams, weatherProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.weatherProvider = weatherProvider;
        this.loadingCtrl = loadingCtrl;
        this.nombre = this.navParams.get('thing2');
        this.carpeta = this.navParams.get('thing1');
        this.subcarpeta = this.navParams.get('thing3');
        this.busca(this.navParams.get('thing1'));
        console.log(this.navParams.get('thing2'));
        console.log(this.navParams.get('thing1'));
    }
    SubcarpetaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubcarpetaPage');
    };
    SubcarpetaPage.prototype.busca = function (tipo) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(tipo);
        loading.present();
        this.weatherProvider.getSubCarpetas(tipo).
            subscribe(function (posts) {
            _this.datos = posts.subcarpetas;
            loading.dismiss();
            console.log(_this.datos);
        });
    };
    SubcarpetaPage.prototype.goToTheLists = function (tipo, nombre, sub) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */], {
            thing1: tipo,
            thing2: nombre,
            thing3: sub,
        });
    };
    return SubcarpetaPage;
}());
SubcarpetaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subcarpeta',template:/*ion-inline-start:"/Users/raphael_b/Documents/apps/ekit/src/pages/subcarpeta/subcarpeta.html"*/'<!--\n  Generated template for the SubcarpetaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h5>Select Folder</h5>\n    \n        <ion-list>\n            <ion-item *ngFor="let post of datos" (click)="goToTheLists(carpeta,nombre,subcarpeta)">\n  \n              <ion-icon ios="ios-folder" md="md-folder"></ion-icon>\n  \n              <h4>{{post.nombre}}</h4>\n            </ion-item>\n          </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/raphael_b/Documents/apps/ekit/src/pages/subcarpeta/subcarpeta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_weather_weather__["a" /* WeatherProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SubcarpetaPage);

//# sourceMappingURL=subcarpeta.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		275,
		2
	],
	"../pages/detail/detail.module": [
		276,
		1
	],
	"../pages/subcarpeta/subcarpeta.module": [
		277,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailProvider = (function () {
    function DetailProvider(http) {
        this.http = http;
        console.log('Hello DetailProvider Provider');
    }
    DetailProvider.prototype.getDetail = function (id) {
        return this.http.get('http://sara.un-ocha.org/rckit_detail/' + id)
            .map(function (res) { return res.json(); });
    };
    return DetailProvider;
}());
DetailProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DetailProvider);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_subcarpeta_subcarpeta__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listPage = __WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */];
    }
    HomePage.prototype.goToTheLists = function (tipo, nombre, sub) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */], {
            thing1: tipo,
            thing2: nombre,
            thing3: sub,
        });
    };
    HomePage.prototype.goToTheSubolders = function (tipo, nombre) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_subcarpeta_subcarpeta__["a" /* SubcarpetaPage */], {
            thing1: tipo,
            thing2: nombre
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/raphael_b/Documents/apps/ekit/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Emergency Kit</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="imagenbg" text-center>\n    <h1>EMERGENCY KIT</h1>\n    <h3>OCHA ROLAC</h3>\n  </div>\n  <br><br>\n  <p text-center>In this application you will be able to see the necessary tools for the main actions that must be developed during an emergency\n    </p>\n  \n  <div class="row">\n    <div class="col col-100 menu-main" (click)="goToTheLists(\'1\',\'CHECKLIST AND HANDBOOK\',\'0\')">\n        <ion-icon name="folder"></ion-icon><br>\n        CHECKLIST AND HANDBOOK\n    </div>\n    <div class="col col-100 menu-main" (click)="goToTheLists(\'2\',\'DIRECTORIES\',\'0\')">\n        <ion-icon name="folder"></ion-icon><br>\n        DIRECTORIES\n    </div>\n  </div>\n  \n  <div class="row">\n    <div class="col col-50 menu-main" (click)="goToTheSubolders(\'3\',\'TEMPLATES\')">\n        <ion-icon name="folder"></ion-icon><br>\n        TEMPLATES\n    </div>\n    <div class="col col-50 menu-main" (click)="goToTheLists(\'4\',\'HUMANITARIAN RESPONSE PLAN\',\'0\')">\n        <ion-icon name="folder"></ion-icon><br>\n        HUMANITARIAN RESPONSE PLAN\n    </div>\n  </div>\n  \n\n    <br><br>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/raphael_b/Documents/apps/ekit/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_subcarpeta_subcarpeta__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_document_viewer__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_weather_weather__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_detail_detail__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(163);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_subcarpeta_subcarpeta__["a" /* SubcarpetaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subcarpeta/subcarpeta.module#SubcarpetaPageModule', name: 'SubcarpetaPage', segment: 'subcarpeta', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_subcarpeta_subcarpeta__["a" /* SubcarpetaPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_weather_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_15__providers_detail_detail__["a" /* DetailProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/raphael_b/Documents/apps/ekit/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"/Users/raphael_b/Documents/apps/ekit/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apikey = '';
        console.log('Hello WeatherProvider Provider');
        this.url;
    }
    WeatherProvider.prototype.getWeather = function (tipo, sub) {
        return this.http.get("http://sara.un-ocha.org/mobile_files/" + tipo + "/" + sub)
            .map(function (res) { return res.json(); });
    };
    WeatherProvider.prototype.getSubCarpetas = function (tipo) {
        return this.http.get("http://sara.un-ocha.org/rckit_subcarpetas/" + tipo)
            .map(function (res) { return res.json(); });
    };
    return WeatherProvider;
}());
WeatherProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], WeatherProvider);

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_weather_weather__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_detail_detail__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListPage = (function () {
    function ListPage(socialSharing, actionSheetCtrl, fileOpener, alertCtrl, transfer, platform, file, navCtrl, navParams, weatherProvider, loadingCtrl) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.fileOpener = fileOpener;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.platform = platform;
        this.file = file;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.weatherProvider = weatherProvider;
        this.loadingCtrl = loadingCtrl;
        this.storageDirectory = '';
        this.searchQuery = '';
        this.showSearchbar = false;
        console.log(this.navParams.get('thing1'));
        this.nombre = this.navParams.get('thing2');
        this.busca(this.navParams.get('thing1'), this.navParams.get('thing3'));
        this.platform.ready().then(function () {
            if (_this.platform.is('ios')) {
                _this.storageDirectory = _this.file.documentsDirectory;
            }
            else if (_this.platform.is('android')) {
                _this.storageDirectory = _this.file.externalDataDirectory;
            }
        });
    }
    ListPage.prototype.presentAlert = function (texto) {
        var alert = this.alertCtrl.create({
            title: texto,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ListPage.prototype.viewerDocument = function (nombre, nombre2, tipo) {
        var _this = this;
        if (tipo == "pdf") {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            this.platform.ready().then(function () {
                var fileTransfer = _this.transfer.create();
                _this.tipo_file = encodeURI('http://sara.un-ocha.org/uploads/documentos/pdf/' + nombre);
                _this.codigo = 'application/' + tipo;
                if (tipo != 'pdf') {
                    _this.tipo_file = encodeURI('http://sara.un-ocha.org/uploads/documentos/office/' + nombre);
                    _this.codigo = 'application/msword';
                }
                fileTransfer.download(_this.tipo_file, _this.storageDirectory + nombre).then(function (entry) {
                    //this.presentAlert(entry.toURL());
                    //this.document.viewDocument(entry.toURL(), 'application/pdf', options);
                    loading_1.dismiss();
                    _this.fileOpener.open(entry.toURL(), 'application/' + tipo)
                        .then(function () { return console.log('File is opened'); })
                        .catch(function (e) { return _this.presentAlert("You don't have an application available for reading PDF files"); });
                }, function (error) {
                    //this.presentAlert(error.code);
                });
            });
        }
        else {
            this.regularShare(nombre, nombre2, tipo);
        }
    };
    ListPage.prototype.busca = function (tipo, sub) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.weatherProvider.getWeather(tipo, sub).
            subscribe(function (posts) {
            _this.datos = posts.files;
            _this.initializeItems();
            loading.dismiss();
            console.log(_this.datos);
        });
    };
    ListPage.prototype.goToTheDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_detail_detail__["a" /* DetailPage */], {
            id: item
        });
    };
    ListPage.prototype.initializeItems = function () {
        this.items = this.datos;
    };
    ListPage.prototype.toggleSearchbar = function () {
        this.showSearchbar = !this.showSearchbar;
    };
    ListPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        console.log(this.items);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ListPage.prototype.onPress = function () {
        console.log('pressed');
    };
    ListPage.prototype.regularShare = function (nombre, nombre2, tipo) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.platform.ready().then(function () {
            var fileTransfer = _this.transfer.create();
            _this.tipo_file = encodeURI('http://sara.un-ocha.org/uploads/documentos/pdf/' + nombre);
            if (tipo != 'pdf') {
                _this.tipo_file = encodeURI('http://sara.un-ocha.org/uploads/documentos/office/' + nombre);
            }
            fileTransfer.download(_this.tipo_file, _this.storageDirectory + nombre).then(function (entry) {
                loading.dismiss();
                // share(message, subject, file, url)
                _this.socialSharing.share("This a file shared from Emergency Kit APP by OCHA ROLAC", nombre2, entry.toURL(), null);
            }, function (error) { });
        });
    };
    ListPage.prototype.presentActionSheet = function (nombre, nombre2, tipo) {
        var _this = this;
        if (tipo == 'pdf') {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'File options',
                buttons: [
                    {
                        text: 'Download',
                        icon: 'download',
                        handler: function () {
                            _this.viewerDocument(nombre, nombre2, tipo);
                        }
                    }, {
                        text: 'Share',
                        icon: 'share',
                        handler: function () {
                            _this.regularShare(nombre, nombre2, tipo);
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'File options',
                buttons: [
                    {
                        text: 'Share',
                        icon: 'share',
                        handler: function () {
                            _this.regularShare(nombre, nombre2, tipo);
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/raphael_b/Documents/apps/ekit/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{nombre}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="toggleSearchbar()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar class="divtoolbar" *ngIf="showSearchbar">\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="action-sheets-basic-page">\n  <h5>Document List <br> <span class="label-info">Press item for more options</span></h5>\n  <!-- <ion-list>\n    <ion-item-sliding text-wrap *ngFor="let post of items" (tap)="viewerDocument(post.nombre_archivo)">\n      <ion-item>\n        <ion-icon ios="ios-list-box" md="md-list-box"></ion-icon>\n        <h4>{{post.fecha_modifica.date | date: \'d MMM yyyy\' }}</h4>\n        <p>{{post.nombre}}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button (click)="regularShare()"><ion-icon ios="ios-share" md="md-share"></ion-icon></button>\n        <button ion-button color="secondary" (click)="share(item)"><ion-icon ios="ios-download" md="md-download"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n-->\n      <div class="listaall">\n          \n          <div class="item-lista" *ngFor="let post of items" (tap)="viewerDocument(post.nombre_archivo,post.nombre,post.tipo_adjunto)" (press)="presentActionSheet(post.nombre_archivo,post.nombre,post.tipo_adjunto)">\n\n            <ion-icon ios="ios-list-box" md="md-list-box"></ion-icon>\n\n            <h4>{{post.dfecha }}</h4>\n            <p>{{post.nombre}}</p>\n            \n          </div>\n\n        </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/raphael_b/Documents/apps/ekit/src/pages/list/list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["b" /* FileTransferObject */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_weather_weather__["a" /* WeatherProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map