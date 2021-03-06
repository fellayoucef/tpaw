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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-style: italic;\r\n    text-align: center;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwRUFBMEU7SUFDMUUsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0tBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCAjMGZiOGFkIDAlLCAjMWZjOGRiIDUxJSwgIzJjYjVlOCA3NSUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <!-- menu du haut de page -->\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" routerLink=\"/\"><i class=\"wi wi-thermometer\"></i></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/\">Accueil\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <!-- fin : menu du haut de page -->\n\n<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <!-- <app-meteo></app-meteo> -->\n\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '⛅ Weather webapp @Master 3ir²';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meteo/meteo.component */ "./src/app/meteo/meteo.component.ts");
/* harmony import */ var _meteo_detail_meteo_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meteo-detail/meteo-detail.component */ "./src/app/meteo-detail/meteo-detail.component.ts");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxchart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxchart */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxchart.ts");










var appRoutes = [
    {
        path: 'meteo/:name',
        component: _meteo_detail_meteo_detail_component__WEBPACK_IMPORTED_MODULE_8__["MeteoDetailComponent"]
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_7__["MeteoComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _meteo_meteo_component__WEBPACK_IMPORTED_MODULE_7__["MeteoComponent"],
                _meteo_detail_meteo_detail_component__WEBPACK_IMPORTED_MODULE_8__["MeteoDetailComponent"], jqwidgets_scripts_jqwidgets_ts_angular_jqxchart__WEBPACK_IMPORTED_MODULE_9__["jqxChartComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forecast.ts":
/*!*****************************!*\
  !*** ./src/app/forecast.ts ***!
  \*****************************/
/*! exports provided: Forecast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forecast", function() { return Forecast; });
var Forecast = /** @class */ (function () {
    function Forecast() {
    }
    return Forecast;
}());

/*export class ForecastWeather {
  constructor(public cityName: string,
      public description: string,
      public temp: string,
      public date: string,
      public img: string) {}
}*/


/***/ }),

/***/ "./src/app/meteo-detail/meteo-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/meteo-detail/meteo-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{list-style:none;}\r\n\r\n.bleu{color:blue;\r\npadding-right:10px;\r\n}\r\n\r\n.rouge{color: red;\r\n  padding-left:15px;\r\n}\r\n\r\n.imgweather{width:50%;\r\n  height: 50%;}\r\n\r\n.graph{margin-top: -63%;\r\n  padding-left: 28%;}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0ZW8tZGV0YWlsL21ldGVvLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsZ0JBQWdCLENBQUM7O0FBRXBCLE1BQU0sV0FBVztBQUNqQixtQkFBbUI7Q0FDbEI7O0FBQ0QsT0FBTyxXQUFXO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRCxZQUFZLFVBQVU7RUFDcEIsWUFBWSxDQUFDOztBQUViLE9BQU8saUJBQWlCO0VBQ3hCLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvbWV0ZW8tZGV0YWlsL21ldGVvLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7bGlzdC1zdHlsZTpub25lO31cclxuXHJcbi5ibGV1e2NvbG9yOmJsdWU7XHJcbnBhZGRpbmctcmlnaHQ6MTBweDtcclxufVxyXG4ucm91Z2V7Y29sb3I6IHJlZDtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxufVxyXG5cclxuLmltZ3dlYXRoZXJ7d2lkdGg6NTAlO1xyXG4gIGhlaWdodDogNTAlO31cclxuXHJcbiAgLmdyYXBoe21hcmdpbi10b3A6IC02MyU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyOCU7fVxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/meteo-detail/meteo-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/meteo-detail/meteo-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- meteo de la ville selectionnée -->\n<div *ngIf=\"meteo && meteo.cod === 200\">\n\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/\">🏠</a>\n      </li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Météo pour {{meteo.name}}</li>\n    </ol>\n  </nav>\n\n\n  <div class=\"car\" style=\"width:300px; margin: 0 \" v-if=\"meteo\">\n    <div class=\"car-header\" style=\"text-transform: uppercase;\">\n      {{meteo.name}}.{{ meteo.sys.country }}\n    </div>\n<div>{{ meteo.dt * 1000 | date:'EEEE d LLL' }}</div>\n    <!-- <img class=\"car-img-top\" style=\"width:300px;\" src=\"https://maps.googleapis.com/maps/api/staticmap?markers={{meteo.coord.lat}},{{meteo.coord.lon}}&zoom=5&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg\"\n      alt=\"Card image cap\"> -->\n    <div class=\"card-body\">\n      <h3 class=\"car-title\">\n        {{meteo.main.temp}}&#8451;<br>\n        <img class=\"imgweather\" src=\"https://openweathermap.org/img/w/{{meteo.weather[0].icon}}.png\" alt=\"\" />\n\n      </h3>\n      <p class=\"card-text\" style=\"text-transform: uppercase;\">{{meteo.weather[0].description}}</p>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        <i class=\"wi wi-cloud\"></i> Nuage: {{meteo.clouds.all}} %\n      </li>\n      <li class=\"list-group-item\">\n          <i class=\"wi wi-rain\"></i> Humidité: {{meteo.main.humidity}} %\n      </li>\n      <li class=\"list-group-item\">\n        <i class=\"wi wi-windy\"></i> Vent: {{meteo.wind.speed}} km/h\n      </li>\n      <li class=\"list-group-item\">\n        <i class=\"wi wi-sunrise\"></i> Levé du soleil: {{ meteo.sys.sunrise * 1000 | date:'shortTime' }}\n      </li>\n      <li class=\"list-group-item\">\n        <i class=\"wi wi-sunset\"></i> Couché du soleil: {{ meteo.sys.sunset * 1000 | date:'shortTime' }}\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"alert alert-danger\" *ngIf=\"meteo && meteo.cod !== 200\">\n\n  {{meteo.message}} (erreur {{meteo.cod}})\n</div>\n\n\n\n<div *ngIf=\"forecast && forecast.cod == 200\">\n\n\n<table class=\"table  \" v-if=\"forecast\">\n\n  <tr>\n\n    <td><ul>\n      <li>{{forecast.list[8].dt_txt | date: \"EEEE d\"}}</li>\n      <li><img class=\"icon\" src=\"https://openweathermap.org/img/w/{{forecast.list[8].weather[0].icon}}.png\" alt=\"\" /></li>\n      <li> <span class=\"bleu\">{{forecast.list[8].main.temp_min}}&#8451;</span> <span class=\"rouge\">{{forecast.list[8].main.temp_max}}&#8451;</span></li>\n      <li>{{forecast.list[8].weather[0].description}}</li>\n    </ul></td>\n\n    <td><ul>\n      <li>{{forecast.list[16].dt_txt | date: \"EEEE d\"}}</li>\n      <li><img class=\"icon\" src=\"https://openweathermap.org/img/w/{{forecast.list[16].weather[0].icon}}.png\" alt=\"\" /></li>\n      <li> <span class=\"bleu\">{{forecast.list[16].main.temp_min}}&#8451;</span> <span class=\"rouge\">{{forecast.list[16].main.temp_max}}&#8451;</span></li>\n      <li>{{forecast.list[16].weather[0].description}}</li>\n    </ul></td>\n\n    <td><ul>\n      <li>{{forecast.list[24].dt_txt | date: \"EEEE d\"}}</li>\n      <li ><img class=\"icon\" src=\"https://openweathermap.org/img/w/{{forecast.list[24].weather[0].icon}}.png\" alt=\"\" /></li>\n      <li> <span class=\"bleu\">{{forecast.list[24].main.temp_min}}&#8451;</span> <span class=\"rouge\">{{forecast.list[24].main.temp_max}}&#8451;</span></li>\n      <li>{{forecast.list[24].weather[0].description}}</li>\n    </ul></td>\n\n    <td><ul>\n      <li>{{forecast.list[32].dt_txt | date: \"EEEE d\"}}</li>\n      <li><img class=\"icon\" src=\"https://openweathermap.org/img/w/{{forecast.list[32].weather[0].icon}}.png\" alt=\"\" /></li>\n      <li> <span class=\"bleu\">{{forecast.list[32].main.temp_min}}&#8451;</span> <span class=\"rouge\">{{forecast.list[32].main.temp_max}}&#8451;</span></li>\n      <li>{{forecast.list[32].weather[0].description}}</li>\n    </ul></td>\n\n    <td><ul>\n      <li>{{forecast.list[39].dt_txt | date: \"EEEE d\"}}</li>\n      <li><img class=\"ico\" src=\"https://openweathermap.org/img/w/{{forecast.list[39].weather[0].icon}}.png\" alt=\"\" /></li>\n      <li> <span class=\"bleu\">{{forecast.list[39].main.temp_min}}&#8451;</span> <span class=\"rouge\">{{forecast.list[39].main.temp_max}}&#8451;</span></li>\n      <li>{{forecast.list[39].weather[0].description}}</li>\n    </ul></td>\n\n  </tr>\n\n</table>\n\n<div class=\"alert alert-danger\" *ngIf=\"forecasst && forecast.cod !== 200\">\n\n    {{forecast.message}} (erreur {{forecast.cod}})\n  </div>\n\n</div>\n\n<div class=\"graph\">\n  <jqxChart #myChart\n  [width]=\"getWidth()\" [height]=\"500\"\n  [showLegend]=\"false\" [enableAnimations]=\"true\" [padding]=\"padding\"\n  [title]=\"'Forecast of the day'\"\n  [description]=\"'Températures prévue pour la journée'\"\n  [titlePadding]=\"titlePadding\" [source]=\"sampleData\" [xAxis]=\"xAxis\"\n  [valueAxis]=\"valueAxis\" [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme08'\">\n</jqxChart>\n</div>\n\n\n\n\n<!-- <div class=\"forecast\" *ngFor=\"let forecast of forecast\">\n  <div class=\"day\">\n    <h2 class=\"date\">{{forecast.date | date: 'MMMMd'}}</h2>\n    <img src=\"https://openweathermap.org/img/w/{{forecast.img}}.png\">\n    <h2 class=\"description\">{{forecast.description}}</h2>\n    <h3 class=\"tempM\">{{forecast.temp}}&#8451;</i></h3>\n  </div>\n</div> -->\n\n"

/***/ }),

/***/ "./src/app/meteo-detail/meteo-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/meteo-detail/meteo-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MeteoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeteoDetailComponent", function() { return MeteoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_meteo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/meteo.service */ "./src/app/services/meteo.service.ts");





var MeteoDetailComponent = /** @class */ (function () {
    function MeteoDetailComponent(route, meteoService, location) {
        this.route = route;
        this.meteoService = meteoService;
        this.location = location;
        this.sampleData = [];
        this.xAxis = {
            dataField: "date",
            visible: false,
            showLegend: false,
            showGridLines: false
        };
        this.valueAxis = {
            dataField: "temp",
            visible: false,
            showGridLines: false
        };
        this.seriesGroups = [
            {
                type: "area",
                series: [
                    {
                        labels: {
                            backgroundOpacity: 0.9,
                            borderOpacity: 0.3
                        }
                    },
                    { dataField: "temp", displayText: "Température °C" }
                ]
            }
        ];
    }
    MeteoDetailComponent.prototype.getWidth = function () {
        if (document.body.offsetWidth < 850) {
            return "90%";
        }
        return 800;
    };
    MeteoDetailComponent.prototype.ngOnInit = function () {
        this.getMeteo();
        this.getFiveDaysForecast();
    };
    MeteoDetailComponent.prototype.getMeteo = function () {
        var _this = this;
        var name = this.route.snapshot.paramMap.get("name");
        console.log("getmeteo", name);
        this.meteoService
            .getMeteo(name)
            .then(function (meteo) { return (_this.meteo = meteo); })
            .catch(function (fail) { return (_this.meteo = fail); });
    };
    MeteoDetailComponent.prototype.getFiveDaysForecast = function () {
        var _this = this;
        var name = this.route.snapshot.paramMap.get("name");
        console.log("getFiveDaysForecast", name);
        this.meteoService
            .getFiveDaysForecast(name)
            .then(function (resp) {
            _this.forecast = resp;
            _this.sampleData = resp.list
                .map(function (item) {
                return { 'temp': item.main.temp, 'date': item.dt_txt };
            })
                .slice(0, 8);
            console.log("fore", _this.forecast);
            console.log("values", _this.sampleData);
        })
            .catch(function (fail) {
            _this.forecast = fail;
            console.log("fore fail", _this.forecast);
        });
    };
    MeteoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-meteo-detail",
            template: __webpack_require__(/*! ./meteo-detail.component.html */ "./src/app/meteo-detail/meteo-detail.component.html"),
            styles: [__webpack_require__(/*! ./meteo-detail.component.css */ "./src/app/meteo-detail/meteo-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_meteo_service__WEBPACK_IMPORTED_MODULE_4__["MeteoService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], MeteoDetailComponent);
    return MeteoDetailComponent;
}());



/***/ }),

/***/ "./src/app/meteo/meteo.component.css":
/*!*******************************************!*\
  !*** ./src/app/meteo/meteo.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGVvL21ldGVvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/meteo/meteo.component.html":
/*!********************************************!*\
  !*** ./src/app/meteo/meteo.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">🏠</li>\n  </ol>\n</nav>\n\n<form (ngSubmit)=\"onSubmit()\">\n  <div class=\"input-group\">\n    <input type=\"search\" placeholder=\"Ville ...\" id=\"name\" name=\"name\" class=\"form-control\" required minlength=\"3\"\n      [(ngModel)]=\"city.name\" #name=\"ngModel\">\n\n    <span class=\"input-group-btn\">\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!name.valid\">Go!</button>\n    </span>\n  </div>\n  <small *ngIf=\"city.name\" class=\"text-muted\">\n    {{city.name.length}} caractères\n  </small>\n\n  <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n\n    <div *ngIf=\"name.errors.required\">\n      La saisie de la ville est obligatoire\n    </div>\n    <div *ngIf=\"name.errors.minlength\">\n      Doit contenit au moins 3 caratères.\n    </div>\n  </div>\n</form>\n\n<hr/>\n\n<!-- Listing des villes, boucle sur l'array : cityList -->\n<h4>Liste des villes ({{cityList.length}})</h4>\n<ul class=\"list-group\">\n  <li *ngFor=\"let city of cityList\"  class=\"list-group-item d-flex justify-content-between align-items-center\">\n    <a  routerLink=\"/meteo/{{city.name}}\" class=\"d-block w-100\">\n      {{city.name}}    \n    </a>\n    <button (click)=\"remove(city)\" class=\"btn btn-secondary btn-sm pull-right\" title=\"Supprimer de la liste\">&times;</button>\n  </li>\n</ul>\n\n<div class=\"alert alert-primary\" role=\"alert\" *ngIf=\"cityList.length==0\">\n  Aucune ville de saisie!\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/meteo/meteo.component.ts":
/*!******************************************!*\
  !*** ./src/app/meteo/meteo.component.ts ***!
  \******************************************/
/*! exports provided: MeteoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeteoComponent", function() { return MeteoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meteoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meteoItem */ "./src/app/meteoItem.ts");



var MeteoComponent = /** @class */ (function () {
    function MeteoComponent() {
        this.city = {
            name: '',
            id: null,
            weather: null
        };
    }
    MeteoComponent.prototype.ngOnInit = function () {
        if (localStorage.cityList !== undefined) {
            this.cityList = JSON.parse(localStorage.cityList);
        }
        else {
            this.cityList = [];
        }
    };
    MeteoComponent.prototype.onSubmit = function () {
        if (this.isCityExist(this.city.name) === false) {
            var currentCity = new _meteoItem__WEBPACK_IMPORTED_MODULE_2__["MeteoItem"]();
            currentCity.name = this.city.name;
            this.cityList.push(currentCity);
            this.saveCityList();
            console.log(this.city.name, 'ajouté à la dans la liste');
        }
        else {
            console.log(this.city.name, 'existe déjà dans la liste');
        }
    };
    MeteoComponent.prototype.remove = function (_city) {
        // on utilise 'filter' pour retourne une liste avec tous les items ayant un nom différent de _city.name
        this.cityList = this.cityList.filter(function (item) {
            return item.name != _city.name;
        });
        this.saveCityList();
    };
    MeteoComponent.prototype.isCityExist = function (_cityName) {
        // la méthode 'filter' retourne une liste contenant tous les items ayant un nom égale à _cityName
        // doc. sur filter : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
        if (this.cityList.filter(function (item) {
            return item.name.toUpperCase() == _cityName.toUpperCase();
        }).length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    MeteoComponent.prototype.saveCityList = function () {
        localStorage.cityList = JSON.stringify(this.cityList);
    };
    MeteoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meteo',
            template: __webpack_require__(/*! ./meteo.component.html */ "./src/app/meteo/meteo.component.html"),
            styles: [__webpack_require__(/*! ./meteo.component.css */ "./src/app/meteo/meteo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MeteoComponent);
    return MeteoComponent;
}());



/***/ }),

/***/ "./src/app/meteoItem.ts":
/*!******************************!*\
  !*** ./src/app/meteoItem.ts ***!
  \******************************/
/*! exports provided: MeteoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeteoItem", function() { return MeteoItem; });
var MeteoItem = /** @class */ (function () {
    function MeteoItem() {
    }
    return MeteoItem;
}());



/***/ }),

/***/ "./src/app/services/meteo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/meteo.service.ts ***!
  \*******************************************/
/*! exports provided: MeteoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeteoService", function() { return MeteoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meteoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meteoItem */ "./src/app/meteoItem.ts");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forecast */ "./src/app/forecast.ts");




var MeteoService = /** @class */ (function () {
    function MeteoService() {
    }
    MeteoService.prototype.getMeteo = function (name) {
        console.log('from service', name);
        var m = new _meteoItem__WEBPACK_IMPORTED_MODULE_2__["MeteoItem"]();
        return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&units=metric&lang=fr&appid=8e21ca097f8593edf70ddc460b4b3840')
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            console.log(json);
            // test du code retour
            // 200 = OK
            // 404 = city not found
            if (json.cod === 200) {
                return Promise.resolve(json);
            }
            else {
                m.weather = json;
                console.error('Météo introuvable pour ' + name
                    + ' (' + json.message + ')');
                return Promise.reject('Météo introuvable pour ' + name
                    + ' (' + json.message + ')');
            }
        });
    };
    MeteoService.prototype.getFiveDaysForecast = function (name) {
        console.log('forecast from service', name);
        var f = new _forecast__WEBPACK_IMPORTED_MODULE_3__["Forecast"]();
        return fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + name + '&units=metric&lang=fr&appid=8e21ca097f8593edf70ddc460b4b3840')
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            console.log(data);
            // test du code retour
            // 200 = OK
            // 404 = city not found
            if (data.cod == 200) {
                return Promise.resolve(data);
            }
            else {
                f.forecastweather = data;
                console.error('Forecast introuvable pour ' + name
                    + ' (' + data.message + ')');
                return Promise.reject('forecast introuvable pour ' + name
                    + ' (' + data.message + ')');
            }
        });
    };
    MeteoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MeteoService);
    return MeteoService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fella\Documents\testangularmeteo\tp6\meteo-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map