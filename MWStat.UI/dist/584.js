(self["webpackChunkblack_dashboard_angular"] = self["webpackChunkblack_dashboard_angular"] || []).push([[584],{

/***/ 76584:
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutModule": function() { return /* binding */ AuthLayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-layout.routing */ 90425);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 10135);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 42693);
/* harmony import */ var _pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/rtl/rtl.component */ 98577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);









var AuthLayoutModule = /** @class */ /*@__PURE__*/ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule.ɵfac = function AuthLayoutModule_Factory(t) { return new (t || AuthLayoutModule)(); };
    AuthLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthLayoutModule });
    AuthLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_0__.AuthLayoutRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule
            ]] });
    return AuthLayoutModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthLayoutModule, { declarations: [_pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_1__.RtlComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule] });
})();


/***/ }),

/***/ 90425:
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutRoutes": function() { return /* binding */ AuthLayoutRoutes; }
/* harmony export */ });
/* harmony import */ var _pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/rtl/rtl.component */ 98577);

var AuthLayoutRoutes = [
    { path: 'rtl', component: _pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_0__.RtlComponent },
];


/***/ }),

/***/ 98577:
/*!********************************************!*\
  !*** ./src/app/pages/rtl/rtl.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RtlComponent": function() { return /* binding */ RtlComponent; }
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 72075);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 10135);




var _c0 = function (a0) { return { "active": a0 }; };
var RtlComponent = /** @class */ /*@__PURE__*/ (function () {
    function RtlComponent() {
        this.clicked = true;
        this.clicked1 = false;
        this.clicked2 = false;
    }
    RtlComponent.prototype.ngOnInit = function () {
        var gradientChartOptionsConfigurationWithTooltipBlue = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#2380f7"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#2380f7"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipPurple = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(225,78,202,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipRed = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(233,32,16,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipOrange = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 50,
                            suggestedMax: 110,
                            padding: 20,
                            fontColor: "#ff8a76"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(220,53,69,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#ff8a76"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipGreen = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 50,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(0,242,195,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }]
            }
        };
        var gradientBarChartConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 120,
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }]
            }
        };
        this.canvas = document.getElementById("chartLineRed");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
        gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
        var data = {
            labels: ['يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            datasets: [{
                    label: "البيانات",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#ec250d',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#ec250d',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#ec250d',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [80, 100, 70, 80, 120, 80],
                }]
        };
        var myChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(this.ctx, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipRed
        });
        this.canvas = document.getElementById("chartLineGreen");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
        var data = {
            labels: ['يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
            datasets: [{
                    label: "مجموعة بياناتي الأولى",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#00d6b4',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#00d6b4',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#00d6b4',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [90, 27, 60, 12, 80],
                }]
        };
        var myChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(this.ctx, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipGreen
        });
        var chart_labels = ['يناير', 'فبراير', 'مارس', 'أبريل', ' مايو', ' يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
        this.datasets = [
            [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
            [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
            [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
        ];
        this.data = this.datasets[0];
        this.canvas = document.getElementById("chartBig1");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
        gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
        var config = {
            type: 'line',
            data: {
                labels: chart_labels,
                datasets: [{
                        label: "مجموعة بياناتي الأولى",
                        fill: true,
                        backgroundColor: gradientStroke,
                        borderColor: '#ec250d',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: '#ec250d',
                        pointBorderColor: 'rgba(255,255,255,0)',
                        pointHoverBackgroundColor: '#ec250d',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: this.data,
                    }]
            },
            options: gradientChartOptionsConfigurationWithTooltipRed
        };
        this.myChartData = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(this.ctx, config);
        this.canvas = document.getElementById("CountryChart");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
        gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
        var myChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(this.ctx, {
            type: 'bar',
            responsive: true,
            legend: {
                display: false
            },
            data: {
                labels: ['الولايات المتحدة الأمريكية', 'ألمانيا', 'أستراليا', 'المملكة المتحدة', 'رومانيا', 'البرازيل'],
                datasets: [{
                        label: "بلدان",
                        fill: true,
                        backgroundColor: gradientStroke,
                        hoverBackgroundColor: gradientStroke,
                        borderColor: '#1f8ef1',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [53, 20, 10, 80, 100, 45],
                    }]
            },
            options: gradientBarChartConfiguration
        });
    };
    RtlComponent.prototype.updateOptions = function () {
        this.myChartData.data.datasets[0].data = this.data;
        this.myChartData.update();
    };
    RtlComponent.ɵfac = function RtlComponent_Factory(t) { return new (t || RtlComponent)(); };
    RtlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RtlComponent, selectors: [["app-rtl"]], decls: 262, vars: 9, consts: [[1, "content"], [1, "row"], [1, "col-12"], [1, "card", "card-chart"], [1, "card-header"], [1, "col-sm-6", "text-right"], [1, "card-category"], [1, "card-title"], [1, "col-sm-6"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-sm", "btn-danger", "btn-simple", "active", 3, "ngClass", "click"], ["type", "radio", "name", "options", "checked", ""], [1, "d-none", "d-sm-block", "d-md-block", "d-lg-block", "d-xl-block"], [1, "d-block", "d-sm-none"], [1, "tim-icons", "icon-single-02"], [1, "btn", "btn-sm", "btn-danger", "btn-simple", 3, "ngClass", "click"], ["type", "radio", "name", "options", 1, "d-none", "d-sm-none"], [1, "tim-icons", "icon-gift-2"], ["type", "radio", "name", "options", 1, "d-none"], [1, "tim-icons", "icon-tap-02"], [1, "card-body"], [1, "chart-area"], ["id", "chartBig1"], [1, "col-lg-4", "text-right"], [1, "tim-icons", "icon-bell-55", "text-danger-states"], ["id", "chartLineRed"], [1, "tim-icons", "icon-delivery-fast", "text-info"], ["id", "CountryChart"], [1, "tim-icons", "icon-send", "text-success"], ["id", "chartLineGreen"], [1, "col-lg-6", "col-sm-6", "text-center"], [1, "card", "card-tasks", "text-left"], [1, "card-header", "text-right"], [1, "title", "d-inline"], [1, "card-category", "d-inline"], ["ngbDropdown", "", 1, "float-left"], ["ngbDropdownToggle", "", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link"], [1, "tim-icons", "icon-settings-gear-63"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownMenuLink"], ["href", "javascript:void(0)", "ngbDropdownItem", ""], ["href", "javascript:void(0", "ngbDropdownItem", ""], [1, "table-full-width", "table-responsive"], [1, "table"], [1, "text-center"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "text-right"], [1, "title"], [1, "text-muted"], [1, "td-actions"], ["type", "button", "placement", "right", "ngbTooltip", "\u062A\u062D\u0631\u064A\u0631 \u0627\u0644\u0645\u0647\u0645\u0629", "container", "body", 1, "btn", "btn-link"], [1, "tim-icons", "icon-pencil"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "col-lg-6", "col-sm-6"], [1, "card"], [1, "table-responsive"], ["id", "", 1, "table", "tablesorter"], [1, "text-primary"]], template: function RtlComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0634\u062D\u0646\u0627\u062A");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0623\u062F\u0627\u0621");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RtlComponent_Template_label_click_13_listener() { ctx.data = ctx.datasets[0]; ctx.updateOptions(); ctx.clicked = true; ctx.clicked1 = false; return ctx.clicked2 = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u062D\u0633\u0627\u0628\u0627\u062A");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RtlComponent_Template_label_click_19_listener() { ctx.data = ctx.datasets[1]; ctx.updateOptions(); ctx.clicked = false; ctx.clicked1 = true; return ctx.clicked2 = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RtlComponent_Template_label_click_25_listener() { ctx.data = ctx.datasets[2]; ctx.updateOptions(); ctx.clicked = false; ctx.clicked1 = false; return ctx.clicked2 = true; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u062C\u0644\u0633\u0627\u062A");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "canvas", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u0634\u062D\u0646\u0627\u062A \u0643\u0627\u0645\u0644\u0629");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " 763,215");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "canvas", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0627\u0644\u064A\u0648\u0645\u064A\u0629");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " 3,500\u20AC");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "canvas", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " 12,100K");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "canvas", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h6", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u062A\u062A\u0628\u0639");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u0627\u0644\u064A\u0648\u0645");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\u0639\u0645\u0644");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "\u0639\u0645\u0644 \u0622\u062E\u0631");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\u0634\u064A\u0621 \u0622\u062E\u0631 \u0647\u0646\u0627");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "table", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "label", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "span", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "td", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "\u0645\u0631\u0643\u0632 \u0645\u0639\u0627\u0644\u062C\u0629 \u0645\u0648\u0642\u0639 \u0645\u062D\u0648\u0631");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "\u0646\u0635 \u0622\u062E\u0631 \u0647\u0646\u0627\u0627\u0644\u0648\u062B\u0627\u0626\u0642");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "td", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "label", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "span", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "td", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "\u0644\u0627\u0645\u062A\u062B\u0627\u0644 GDPR");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "\u0627\u0644\u0646\u0627\u062A\u062C \u0627\u0644\u0645\u062D\u0644\u064A \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0647\u0648 \u0646\u0638\u0627\u0645 \u064A\u062A\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u062D\u0645\u0627\u064A\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0644\u0645\u0648\u0627\u0637\u0646\u064A \u0623\u0648\u0631\u0648\u0628\u0627 \u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062A\u0645 \u062F\u0627\u062E\u0644 \u0627\u0644\u062F\u0648\u0644 \u0627\u0644\u0623\u0639\u0636\u0627\u0621 \u0641\u064A \u0627\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "button", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "input", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "span", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "td", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "p", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "\u0627\u0644\u0642\u0636\u0627\u064A\u0627\u0627\u0644\u0642\u0636\u0627\u064A\u0627");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "p", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "\u0633\u064A\u0643\u0648\u0646\u0648\u0646\u0642\u0627\u0644 50\u066A \u0645\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u062C\u064A\u0628\u064A\u0646 \u0623\u0646\u0647\u0645 \u0633\u064A\u0643\u0648\u0646\u0648\u0646 \u0623\u0643\u062B\u0631 \u0639\u0631\u0636\u0629 \u0644\u0644\u062A\u0633\u0648\u0642 \u0641\u064A \u0634\u0631\u0643\u0629");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "td", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "button", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "i", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "label", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "input", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "span", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "td", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0645\u062A \u0645\u0639\u0627\u0644\u062C\u062A\u0647\u0627");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "\u0643\u0645\u0627 \u064A\u0628\u064A\u0646 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0623\u0646 \u0627\u0644\u0645\u0633\u062A\u0647\u0644\u0643\u064A\u0646 \u0644\u0646 \u064A\u063A\u0641\u0631\u0648\u0627 \u0634\u0631\u0643\u0629 \u0628\u0633\u0647\u0648\u0644\u0629 \u0628\u0645\u062C\u0631\u062F \u062D\u062F\u0648\u062B \u062E\u0631\u0642 \u064A\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A\u0647\u0645 \u0627\u0644\u0634\u062E\u0635\u064A\u0629.");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "td", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "label", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "input", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "span", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "td", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "p", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u0635\u062F\u064A\u0631");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0633\u064A\u0621 \u0625\u0646\u0637\u0644\u0627\u0642 \u0641\u064A \u0642\u0628\u0644, \u0645\u0633\u0627\u0639\u062F\u0629 \u0648\u0627\u0644\u0645\u0627\u0646\u064A\u0627 \u0623\u062E\u0630 \u0642\u062F. \u0628\u0644 \u0623\u0645\u0627 \u0623\u0645\u0627\u0645 \u0645\u0627\u0634\u0627\u0621 \u0627\u0644\u0634\u062A\u0627\u0621\u060C, \u062A\u0643\u0627\u0644\u064A\u0641 \u0627\u0644\u0625\u0642\u062A\u0635\u0627\u062F\u064A \u0628\u0640 \u062D\u064A\u0646. \u0663\u0660 \u064A\u062A\u0639\u0644\u0651\u0642 \u0644\u0644\u0625\u062A\u062D\u0627\u062F \u0648\u0644\u0645, \u0648\u062A\u0645 \u0647\u0646\u0627\u0643 \u0645\u062F\u064A\u0646\u0629 \u0628\u062A\u062D\u062F\u0651\u064A \u0625\u0630, \u0643\u0627\u0646 \u0628\u0644 \u0639\u0645\u0644");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "td", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "button", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "label", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "input", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "span", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "td", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "\u0627\u0644\u0627\u0641\u0631\u0627\u062C \u0639\u0646 v2.0.0");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "\u0639\u0646 \u0631\u0626\u064A\u0633 \u0637\u0648\u0643\u064A\u0648 \u0627\u0644\u0628\u0648\u0644\u0646\u062F\u064A \u0644\u0645\u0651, \u0645\u0627\u064A\u0648 \u0645\u0631\u062C\u0639 \u0648\u0628\u0627\u0621\u062A \u0642\u0628\u0644 \u0647\u0648, \u062A\u0633\u0645\u0651\u0649 \u0627\u0644\u0637\u0631\u064A\u0642 \u0627\u0644\u0625\u0642\u062A\u0635\u0627\u062F\u064A \u0630\u0627\u062A \u0623\u0646. \u0644\u063A\u0627\u062A \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0627\u0644\u0641\u0631\u0646\u0633\u064A\u0629 \u062F\u0627\u0631 \u0627\u0646, \u0628\u064A\u0646 \u0628\u062A\u062E\u0635\u064A\u0635 \u0627\u0644\u0633\u0627\u062D\u0629 \u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629 \u0623\u0645. \u0648 \u0627\u0644\u0622\u062E");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "td", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "button", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "i", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "\u062C\u062F\u0648\u0644 \u0628\u0633\u064A\u0637");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "table", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "thead", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, " \u0627\u0633\u0645 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, " \u0628\u0644\u062F ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, " \u0645\u062F\u064A\u0646\u0629 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "th", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, " \u0631\u0627\u062A\u0628 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, " \u0631\u0627\u064A\u0633 \u062F\u0627\u0643\u0648\u062A\u0627 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, " \u0627\u0644\u0646\u064A\u062C\u0631 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, " \u0627\u0644\u0639\u0648\u062F-\u062A\u0648\u0631\u0646\u0647\u0627\u0648\u062A ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, " $36,738 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, " \u0645\u064A\u0646\u064A\u0631\u0641\u0627 \u0647\u0648\u0628\u0631 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, " \u0643\u0648\u0631\u0627\u0633\u0627\u0648 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, " \u0633\u064A\u0646\u0627\u0621 \u0648\u0627\u0633 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, " $23,789 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, " \u0633\u064A\u062C \u0631\u0648\u062F\u0631\u064A\u062C\u064A\u0632 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, " \u0647\u0648\u0644\u0646\u062F\u0627 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, " \u0628\u0627\u064A\u0644\u064A ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, " $56,142 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, " \u0641\u064A\u0644\u064A\u0628 \u0634\u0627\u0646\u064A\u0647 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, " \u0643\u0648\u0631\u064A\u0627\u060C \u062C\u0646\u0648\u0628 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, " \u0627\u0648\u0641\u0631\u0644\u0627\u0646\u062F \u0628\u0627\u0631\u0643 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, " $38,735 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, " \u062F\u0648\u0631\u064A\u0633 \u063A\u0631\u064A\u0646 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, " \u0645\u0627\u0644\u0627\u0648\u064A ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, " \u0627\u0644\u0645\u0646\u0639 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, " $63,542 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, " \u0645\u064A\u0633\u0648\u0646 \u0628\u0648\u0631\u062A\u0631 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, " \u062A\u0634\u064A\u0644\u064A ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, " \u063A\u0644\u0648\u0633\u062A\u0631 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, " $78,615 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, " \u062C\u0648\u0646 \u0628\u0648\u0631\u062A\u0631 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, " \u0627\u0644\u0628\u0631\u062A\u063A\u0627\u0644 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, " \u063A\u0644\u0648\u0633\u062A\u0631 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "td", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, " $98,615 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.clicked === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.clicked1 === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.clicked2 === true));
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip], encapsulation: 2 });
    return RtlComponent;
}());



/***/ })

}]);