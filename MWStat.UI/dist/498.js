(self["webpackChunkblack_dashboard_angular"] = self["webpackChunkblack_dashboard_angular"] || []).push([[498],{

/***/ 75498:
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutModule": function() { return /* binding */ AdminLayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 47340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 42693);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-layout.routing */ 54439);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ 6311);
/* harmony import */ var src_app_pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/statistic/statistic.component */ 27866);
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/icons/icons.component */ 1712);
/* harmony import */ var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/map/map.component */ 21769);
/* harmony import */ var _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/notifications/notifications.component */ 79261);
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/user/user.component */ 94379);
/* harmony import */ var _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/tables/tables.component */ 51524);
/* harmony import */ var _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/typography/typography.component */ 21735);
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/login/login.component */ 41531);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 10135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 35366);















// import { RtlComponent } from "../../pages/rtl/rtl.component";



var AdminLayoutModule = /** @class */ /*@__PURE__*/ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule.ɵfac = function AdminLayoutModule_Factory(t) { return new (t || AdminLayoutModule)(); };
    AdminLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AdminLayoutModule });
    AdminLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
                _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule,
            ]] });
    return AdminLayoutModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AdminLayoutModule, { declarations: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
            src_app_pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_2__.StatisticComponent,
            _pages_user_user_component__WEBPACK_IMPORTED_MODULE_6__.UserComponent,
            _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_7__.TablesComponent,
            _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_3__.IconsComponent,
            _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_8__.TypographyComponent,
            _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__.NotificationsComponent,
            _pages_map_map_component__WEBPACK_IMPORTED_MODULE_4__.MapComponent,
            src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent
            // RtlComponent
        ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule] });
})();


/***/ }),

/***/ 54439:
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutRoutes": function() { return /* binding */ AdminLayoutRoutes; }
/* harmony export */ });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ 6311);
/* harmony import */ var src_app_pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/statistic/statistic.component */ 27866);
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/icons/icons.component */ 1712);
/* harmony import */ var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/map/map.component */ 21769);
/* harmony import */ var _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/notifications/notifications.component */ 79261);
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/user/user.component */ 94379);
/* harmony import */ var _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/tables/tables.component */ 51524);
/* harmony import */ var _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/typography/typography.component */ 21735);
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/login/login.component */ 41531);









// import { RtlComponent } from "../../pages/rtl/rtl.component";
var AdminLayoutRoutes = [
    { path: "dashboard", component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
    { path: "statistic", component: src_app_pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_1__.StatisticComponent },
    { path: "icons", component: _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_2__.IconsComponent },
    { path: "maps", component: _pages_map_map_component__WEBPACK_IMPORTED_MODULE_3__.MapComponent },
    { path: "notifications", component: _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__.NotificationsComponent },
    { path: "user", component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_5__.UserComponent },
    { path: "tables", component: _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__.TablesComponent },
    { path: "typography", component: _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_7__.TypographyComponent },
    { path: "login", component: src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent }
    // { path: "rtl", component: RtlComponent }
];


/***/ }),

/***/ 6311:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": function() { return /* binding */ DashboardComponent; }
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 72075);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 10135);




var _c0 = function (a0) { return { "active": a0 }; };
var DashboardComponent = /** @class */ /*@__PURE__*/ (function () {
    function DashboardComponent() {
        this.clicked = true;
        this.clicked1 = false;
        this.clicked2 = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
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
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [{
                    label: "Data",
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
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
            datasets: [{
                    label: "My First dataset",
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
        var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
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
                        label: "My First dataset",
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
                labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
                datasets: [{
                        label: "Countries",
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
    DashboardComponent.prototype.updateOptions = function () {
        this.myChartData.data.datasets[0].data = this.data;
        this.myChartData.update();
    };
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
    DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 262, vars: 9, consts: [[1, "content"], [1, "row"], [1, "col-12"], [1, "card", "card-chart"], [1, "card-header"], [1, "col-sm-6", "text-left"], [1, "card-category"], [1, "card-title"], [1, "col-sm-6"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "float-right"], [1, "btn", "btn-sm", "btn-danger", "btn-simple", 3, "ngClass", "click"], ["checked", "checked", "name", "options", "type", "radio"], [1, "d-none", "d-sm-block", "d-md-block", "d-lg-block", "d-xl-block"], [1, "d-block", "d-sm-none"], [1, "tim-icons", "icon-single-02"], ["name", "options", "type", "radio", 1, "d-none", "d-sm-none"], [1, "tim-icons", "icon-gift-2"], ["name", "options", "type", "radio", 1, "d-none"], [1, "tim-icons", "icon-tap-02"], [1, "card-body"], [1, "chart-area"], ["id", "chartBig1"], [1, "col-lg-4"], [1, "tim-icons", "icon-bell-55", "text-danger-states"], ["id", "chartLineRed"], [1, "tim-icons", "icon-delivery-fast", "text-info"], ["id", "CountryChart"], [1, "tim-icons", "icon-send", "text-success"], ["id", "chartLineGreen"], [1, "col-lg-6", "col-md-12"], [1, "card", "card-tasks"], [1, "title", "d-inline"], [1, "card-category", "d-inline"], ["ngbDropdown", ""], ["data-toggle", "dropdown", "ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-link", "btn-icon"], [1, "tim-icons", "icon-settings-gear-63"], ["aria-labelledby", "dropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu-right"], ["href", "javascript:void(0)", "ngbDropdownItem", ""], [1, "table-full-width", "table-responsive"], [1, "table"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "title"], [1, "text-muted"], [1, "td-actions", "text-right"], ["type", "button", "placement", "left", "ngbTooltip", "Edit Task", "container", "body", 1, "btn", "btn-link"], [1, "tim-icons", "icon-pencil"], ["checked", "", "type", "checkbox", "value", "", 1, "form-check-input"], [1, "card"], [1, "table-responsive"], ["id", "", 1, "table", "tablesorter"], [1, "text-primary"], [1, "text-center"]], template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Total Shipments");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Performance");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_label_click_13_listener() { ctx.data = ctx.datasets[0]; ctx.updateOptions(); ctx.clicked = true; ctx.clicked1 = false; return ctx.clicked2 = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Accounts ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_label_click_19_listener() { ctx.data = ctx.datasets[1]; ctx.updateOptions(); ctx.clicked = false; ctx.clicked1 = true; return ctx.clicked2 = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Purchases ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_label_click_25_listener() { ctx.data = ctx.datasets[2]; ctx.updateOptions(); ctx.clicked = false; ctx.clicked1 = false; return ctx.clicked2 = true; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Sessions ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "canvas", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Total Shipments");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " 763,215 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "canvas", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Daily Sales");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " 3,500\u20AC ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "canvas", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Completed Tasks");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " 12,100K ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "canvas", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h6", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Tasks(5)");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "today");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Action ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Another action ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " Something else ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "table", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Update the Documentation");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Dwuamish Head, Seattle, WA 8:47 AM ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "GDPR Compliance");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "input", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Solve the issues");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, " Fifty percent of all respondents said they would be more likely to shop at a company ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "input", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Release v2.0.0");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, " Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "input", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Export the processed files");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, " The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "input", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Arival at export process");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " Capitol Hill, Seattle, WA 12:34 AM ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Simple Table");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "table", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "thead", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Country");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "City");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "th", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Salary");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Dakota Rice");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Niger");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Oud-Turnhout");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "$36,738");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Minerva Hooper");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Cura\u00C3\u00A7ao");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Sinaai-Waas");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "$23,789");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Sage Rodriguez");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Netherlands");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Baileux");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "$56,142");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Philip Chaney");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Korea, South");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Overland Park");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "$38,735");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Doris Greene");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Malawi");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Feldkirchen in K\u00C3\u00A4rnten");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "$63,542");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Mason Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Chile");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "$78,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Jon Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Portugal");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "$98,615");
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
    return DashboardComponent;
}());



/***/ }),

/***/ 1712:
/*!************************************************!*\
  !*** ./src/app/pages/icons/icons.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsComponent": function() { return /* binding */ IconsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);

var IconsComponent = /** @class */ /*@__PURE__*/ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () { };
    IconsComponent.ɵfac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(); };
    IconsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsComponent, selectors: [["app-icons"]], decls: 513, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "title"], [1, "category"], ["href", "https://nucleoapp.com/?ref=1712"], [1, "card-body", "all-icons"], [1, "font-icon-list", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-6", "col-xs-6"], [1, "font-icon-detail"], [1, "tim-icons", "icon-alert-circle-exc"], [1, "tim-icons", "icon-align-center"], [1, "tim-icons", "icon-align-left-2"], [1, "tim-icons", "icon-app"], [1, "tim-icons", "icon-atom"], [1, "tim-icons", "icon-attach-87"], [1, "tim-icons", "icon-badge"], [1, "tim-icons", "icon-bag-16"], [1, "tim-icons", "icon-bank"], [1, "tim-icons", "icon-basket-simple"], [1, "tim-icons", "icon-bell-55"], [1, "tim-icons", "icon-bold"], [1, "tim-icons", "icon-book-bookmark"], [1, "tim-icons", "icon-double-right"], [1, "tim-icons", "icon-bulb-63"], [1, "tim-icons", "icon-bullet-list-67"], [1, "tim-icons", "icon-bus-front-12"], [1, "tim-icons", "icon-button-power"], [1, "tim-icons", "icon-camera-18"], [1, "tim-icons", "icon-calendar-60"], [1, "tim-icons", "icon-caps-small"], [1, "tim-icons", "icon-cart"], [1, "tim-icons", "icon-chart-bar-32"], [1, "tim-icons", "icon-chart-pie-36"], [1, "tim-icons", "icon-chat-33"], [1, "tim-icons", "icon-check-2"], [1, "tim-icons", "icon-cloud-download-93"], [1, "tim-icons", "icon-cloud-upload-94"], [1, "tim-icons", "icon-coins"], [1, "tim-icons", "icon-compass-05"], [1, "tim-icons", "icon-controller"], [1, "tim-icons", "icon-credit-card"], [1, "tim-icons", "icon-delivery-fast"], [1, "tim-icons", "icon-email-85"], [1, "tim-icons", "icon-gift-2"], [1, "tim-icons", "icon-globe-2"], [1, "tim-icons", "icon-headphones"], [1, "tim-icons", "icon-heart-2"], [1, "tim-icons", "icon-html5"], [1, "tim-icons", "icon-double-left"], [1, "tim-icons", "icon-image-02"], [1, "tim-icons", "icon-istanbul"], [1, "tim-icons", "icon-key-25"], [1, "tim-icons", "icon-laptop"], [1, "tim-icons", "icon-light-3"], [1, "tim-icons", "icon-link-72"], [1, "tim-icons", "icon-lock-circle"], [1, "tim-icons", "icon-map-big"], [1, "tim-icons", "icon-minimal-down"], [1, "tim-icons", "icon-minimal-left"], [1, "tim-icons", "icon-minimal-right"], [1, "tim-icons", "icon-minimal-up"], [1, "tim-icons", "icon-mobile"], [1, "tim-icons", "icon-molecule-40"], [1, "tim-icons", "icon-money-coins"], [1, "tim-icons", "icon-notes"], [1, "tim-icons", "icon-palette"], [1, "tim-icons", "icon-paper"], [1, "tim-icons", "icon-pin"], [1, "tim-icons", "icon-planet"], [1, "tim-icons", "icon-puzzle-10"], [1, "tim-icons", "icon-pencil"], [1, "tim-icons", "icon-satisfied"], [1, "tim-icons", "icon-scissors"], [1, "tim-icons", "icon-send"], [1, "tim-icons", "icon-settings-gear-63"], [1, "tim-icons", "icon-settings"], [1, "tim-icons", "icon-wifi"], [1, "tim-icons", "icon-single-02"], [1, "tim-icons", "icon-single-copy-04"], [1, "tim-icons", "icon-sound-wave"], [1, "tim-icons", "icon-spaceship"], [1, "tim-icons", "icon-square-pin"], [1, "tim-icons", "icon-support-17"], [1, "tim-icons", "icon-tablet-2"], [1, "tim-icons", "icon-tag"], [1, "tim-icons", "icon-tap-02"], [1, "tim-icons", "icon-tie-bow"], [1, "tim-icons", "icon-time-alarm"], [1, "tim-icons", "icon-trash-simple"], [1, "tim-icons", "icon-trophy"], [1, "tim-icons", "icon-tv-2"], [1, "tim-icons", "icon-upload"], [1, "tim-icons", "icon-user-run"], [1, "tim-icons", "icon-vector"], [1, "tim-icons", "icon-video-66"], [1, "tim-icons", "icon-wallet-43"], [1, "tim-icons", "icon-volume-98"], [1, "tim-icons", "icon-watch-time"], [1, "tim-icons", "icon-world"], [1, "tim-icons", "icon-zoom-split"], [1, "tim-icons", "icon-refresh-01"], [1, "tim-icons", "icon-refresh-02"], [1, "tim-icons", "icon-shape-star"], [1, "tim-icons", "icon-components"], [1, "tim-icons", "icon-triangle-right-17"], [1, "tim-icons", "icon-button-pause"], [1, "tim-icons", "icon-simple-remove"], [1, "tim-icons", "icon-simple-add"], [1, "tim-icons", "icon-simple-delete"]], template: function IconsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "100 Awesome Nucleo Icons");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Handcrafted by our friends from ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " NucleoApp ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "icon-alert-circle-exc");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "icon-align-center");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "icon-align-left-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "icon-app");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "icon-atom");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "icon-attach-87");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "icon-badge");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "icon-bag-16");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "icon-bank");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "icon-basket-simple");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "icon-bell-55");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "icon-bold");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "icon-book-bookmark");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "icon-double-right");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "icon-bulb-63");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "icon-bullet-list-67");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "icon-bus-front-12");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "icon-button-power");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "icon-camera-18");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "icon-calendar-60");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "icon-caps-small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "icon-cart");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "icon-chart-bar-32");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "icon-chart-pie-36");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "icon-chat-33");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "icon-check-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "icon-cloud-download-93");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "icon-cloud-upload-94");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "icon-coins");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "icon-compass-05");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "icon-controller");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "icon-credit-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "icon-delivery-fast");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "icon-email-85");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "icon-gift-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "icon-globe-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "icon-headphones");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "icon-heart-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "icon-html5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "icon-double-left");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "icon-image-02");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "icon-istanbul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "i", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "icon-key-25");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "i", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "icon-laptop");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "i", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "icon-light-3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "i", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "icon-link-72");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "i", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "icon-lock-circle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "i", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "icon-map-big");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "i", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "icon-minimal-down");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "i", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "icon-minimal-left");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "icon-minimal-right");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "icon-minimal-up");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "i", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "icon-mobile");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "icon-molecule-40");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "i", 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "icon-money-coins");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "i", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "icon-notes");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "i", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "icon-palette");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "icon-paper");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "i", 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "icon-pin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 70);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "icon-planet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "i", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "icon-puzzle-10");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "i", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "icon-pencil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "i", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "icon-satisfied");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "i", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "icon-scissors");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "i", 75);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "icon-send");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "i", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "icon-settings-gear-63");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "i", 77);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "icon-settings");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "i", 78);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "icon-wifi");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "i", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "icon-single-02");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "icon-single-copy-04");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "i", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "icon-sound-wave");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "i", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "icon-spaceship");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "i", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "icon-square-pin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "i", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "icon-support-17");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "i", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "icon-tablet-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "i", 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "icon-tag");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "i", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "icon-tap-02");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "i", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "icon-tie-bow");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "i", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "icon-time-alarm");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "i", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "icon-trash-simple");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "i", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "icon-trophy");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "i", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "icon-tv-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "i", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "icon-upload");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "i", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "icon-user-run");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "i", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "icon-vector");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "i", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "icon-video-66");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "i", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "icon-wallet-43");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](450, "i", 98);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "icon-volume-98");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "i", 99);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "icon-watch-time");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "i", 100);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "icon-world");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "i", 101);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "icon-zoom-split");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "i", 102);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "icon-refresh-01");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "i", 103);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "icon-refresh-02");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "i", 104);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "icon-shape-star");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "i", 105);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "icon-components");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](490, "i", 106);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "icon-triangle-right-17");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "i", 107);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "icon-button-pause");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](500, "i", 108);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "icon-simple-remove");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](505, "i", 109);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "icon-simple-add");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](510, "i", 110);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "icon-simple-delete");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return IconsComponent;
}());



/***/ }),

/***/ 41531:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _services_httpWrapper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/httpWrapper.service */ 67915);
/* harmony import */ var src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/api.constants */ 9167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 31041);





var LoginComponent = /** @class */ /*@__PURE__*/ (function () {
    function LoginComponent(http) {
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        this.http.get(src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiConstants.ACCOUNT_LOGIN + "?username=" + this.username + "&password=" + this.password)
            .subscribe(function (result) {
            console.log(result.headers.keys());
        });
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_httpWrapper_service__WEBPACK_IMPORTED_MODULE_0__.HttpWrapper)); };
    LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 2, consts: [[1, "content"], [1, "row"], [1, "col-md-4"], [1, "card"], [1, "card-header"], [1, "title"], [1, "card-body"], [3, "ngSubmit"], [1, "col-md-8", "pr-md-1"], [1, "form-group"], ["id", "username", "placeholder", "Username", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "password", "placeholder", "Password", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-fill", "btn-danger"]], template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.login(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Username ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.username = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Password ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.password = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.username);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.password);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], encapsulation: 2 });
    return LoginComponent;
}());



/***/ }),

/***/ 21769:
/*!********************************************!*\
  !*** ./src/app/pages/map/map.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": function() { return /* binding */ MapComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);

var MapComponent = /** @class */ /*@__PURE__*/ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#1d2c4d"
                        }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#8ec3b9"
                        }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#1a3646"
                        }]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#4b6878"
                        }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#64779e"
                        }]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#4b6878"
                        }]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#334e87"
                        }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#023e58"
                        }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#283d6a"
                        }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#6f9ba5"
                        }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#1d2c4d"
                        }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#023e58"
                        }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#3C7680"
                        }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#304a7d"
                        }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#98a5be"
                        }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#1d2c4d"
                        }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#2c6675"
                        }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#9d2a80"
                        }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#9d2a80"
                        }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#b0d5ce"
                        }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#023e58"
                        }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#98a5be"
                        }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#1d2c4d"
                        }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#283d6a"
                        }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#3a4762"
                        }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#0e1626"
                        }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#4e6d70"
                        }]
                }
            ]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
    MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 8, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-plain"], [1, "card-header"], [1, "card-body"], ["id", "map", 1, "map"]], template: function MapComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Google Maps");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return MapComponent;
}());



/***/ }),

/***/ 79261:
/*!****************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": function() { return /* binding */ NotificationsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 3492);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 10135);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61116);





function NotificationsComponent_ngb_alert_11_Template(rf, ctx) {
    if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_ngb_alert_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.staticAlertClosed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This is a notification with close button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "info")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_12_Template(rf, ctx) {
    if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_ngb_alert_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.staticAlertClosed1 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This is a notification with close button and icon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "info")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_13_Template(rf, ctx) {
    if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_ngb_alert_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.staticAlertClosed2 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "info")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_20_Template(rf, ctx) {
    if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_ngb_alert_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.staticAlertClosed3 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Primary - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This is a regular notification made with \".alert-primary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "primary")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_21_Template(rf, ctx) {
    if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_ngb_alert_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.staticAlertClosed4 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Info - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This is a regular notification made with \".alert-info\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "info")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_22_Template(rf, ctx) {
    if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_ngb_alert_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.staticAlertClosed5 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Success - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This is a regular notification made with \".alert-success\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "success")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_23_Template(rf, ctx) {
    if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_ngb_alert_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.staticAlertClosed6 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Warning - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This is a regular notification made with \".alert-warning\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "warning")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_24_Template(rf, ctx) {
    if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_ngb_alert_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.staticAlertClosed7 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Danger - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This is a regular notification made with \".alert-danger\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "danger")("dismissible", false);
    }
}
var NotificationsComponent = /** @class */ /*@__PURE__*/ (function () {
    function NotificationsComponent(toastr) {
        this.toastr = toastr;
        this.staticAlertClosed = false;
        this.staticAlertClosed1 = false;
        this.staticAlertClosed2 = false;
        this.staticAlertClosed3 = false;
        this.staticAlertClosed4 = false;
        this.staticAlertClosed5 = false;
        this.staticAlertClosed6 = false;
        this.staticAlertClosed7 = false;
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var color = Math.floor((Math.random() * 5) + 1);
        switch (color) {
            case 1:
                this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
                    disableTimeOut: true,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-info alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 2:
                this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
                    disableTimeOut: true,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-success alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 3:
                this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
                    disableTimeOut: true,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-warning alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 4:
                this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
                    disableTimeOut: true,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: "alert alert-danger alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 5:
                this.toastr.show('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
                    disableTimeOut: true,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-primary alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            default:
                break;
        }
    };
    NotificationsComponent.prototype.ngOnInit = function () { };
    NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
    NotificationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 59, vars: 10, consts: [[1, "content"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "type", "dismissible"], [3, "type", "dismissible", 4, "ngIf"], ["class", " alert-with-icon", "data-notify", "container", 3, "type", "dismissible", 4, "ngIf"], [1, "col-md-12"], [1, "places-buttons"], [1, "col-md-6", "ml-auto", "mr-auto", "text-center"], [1, "category"], [1, "col-lg-8", "ml-auto", "mr-auto"], [1, "col-md-4"], [1, "btn", "btn-danger", "btn-block", 3, "click"], ["type", "button", "aria-hidden", "true", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], [1, "tim-icons", "icon-simple-remove"], ["data-notify", "container", 1, "alert-with-icon", 3, "type", "dismissible"], ["data-notify", "icon", 1, "tim-icons", "icon-bell-55"], ["data-notify", "message"]], template: function NotificationsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Notifications Style");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-alert", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " This is a plain notification ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NotificationsComponent_ngb_alert_11_Template, 5, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NotificationsComponent_ngb_alert_12_Template, 6, 2, "ngb-alert", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NotificationsComponent_ngb_alert_13_Template, 6, 2, "ngb-alert", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Notification states");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NotificationsComponent_ngb_alert_20_Template, 7, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NotificationsComponent_ngb_alert_21_Template, 7, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NotificationsComponent_ngb_alert_22_Template, 7, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NotificationsComponent_ngb_alert_23_Template, 7, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NotificationsComponent_ngb_alert_24_Template, 7, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Notifications Places");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Click to view notifications");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_39_listener() { return ctx.showNotification("top", "left"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Top Left ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_42_listener() { return ctx.showNotification("top", "center"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Top Center ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_45_listener() { return ctx.showNotification("top", "right"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Top Right ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_51_listener() { return ctx.showNotification("bottom", "left"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Bottom Left ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_54_listener() { return ctx.showNotification("bottom", "center"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Bottom Center ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_57_listener() { return ctx.showNotification("bottom", "right"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Bottom Right ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "info")("dismissible", false);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed7);
            }
        }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbAlert, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], encapsulation: 2 });
    return NotificationsComponent;
}());



/***/ }),

/***/ 27866:
/*!********************************************************!*\
  !*** ./src/app/pages/statistic/statistic.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticComponent": function() { return /* binding */ StatisticComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 72075);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/api.constants */ 9167);
/* harmony import */ var src_app_services_httpWrapper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/httpWrapper.service */ 67915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 47340);








function StatisticComponent_td_45_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var firstSubDataset_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](firstSubDataset_r1.Username);
    }
}
var _c0 = function (a0) { return { "active": a0 }; };
var StatisticComponent = /** @class */ /*@__PURE__*/ (function () {
    function StatisticComponent(http) {
        this.http = http;
        this.clicked = true;
        this.clicked1 = false;
        this.clicked2 = false;
        this.minFollowers = Number.MAX_VALUE;
        this.maxFollowers = 0;
        this.minFollowing = Number.MAX_VALUE;
        this.maxFollowing = 0;
        this.newTableTitle = 'New Followers';
        this.lostTableTitle = 'Lost Followers';
    }
    StatisticComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiConstants.STATISTIC_GET_FOLLOWERS_AND_FOLLOWING)
            .subscribe(function (result) {
            var chart_labels = [];
            var dataset = [];
            _this.newFollowersDataset = [result.body.length];
            _this.newFollowingsDataset = [result.body.length];
            _this.lostFollowersDataset = [result.body.length];
            _this.lostFollowingsDataset = [result.body.length];
            for (var i = 0; i < 2; i++) {
                dataset[i] = [];
            }
            for (var i = 0; i < result.body.length; i++) {
                _this.newFollowersDataset[i] = [];
                _this.newFollowingsDataset[i] = [];
                _this.lostFollowersDataset[i] = [];
                _this.lostFollowingsDataset[i] = [];
            }
            var counter = 0;
            result.body.forEach(function (element) {
                chart_labels.push((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(element.StampDateTime, 'dd/MM/yyyy HH:mm', 'ru-RU'));
                dataset[0].push(element.FollowersCount);
                dataset[1].push(element.FollowingCount);
                for (var i = 0; i < element.Accounts.length; i++) {
                    if (element.Accounts[i].Relation == src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiConstants.RELATION_TYPE.NewFollower) {
                        _this.newFollowersDataset[counter].push({ Username: element.Accounts[i].Username, ProfilePicUrl: element.Accounts[i].ProfilePicUrl });
                    }
                    if (element.Accounts[i].Relation == src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiConstants.RELATION_TYPE.LostFollower) {
                        _this.lostFollowersDataset[counter].push({ Username: element.Accounts[i].Username, ProfilePicUrl: element.Accounts[i].ProfilePicUrl });
                    }
                    if (element.Accounts[i].Relation == src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiConstants.RELATION_TYPE.NewFollowing) {
                        _this.newFollowingsDataset[counter].push({ Username: element.Accounts[i].Username, ProfilePicUrl: element.Accounts[i].ProfilePicUrl });
                    }
                    if (element.Accounts[i].Relation == src_app_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiConstants.RELATION_TYPE.LostFollowing) {
                        _this.lostFollowingsDataset[counter].push({ Username: element.Accounts[i].Username, ProfilePicUrl: element.Accounts[i].ProfilePicUrl });
                    }
                }
                _this.firstSubDataset = _this.newFollowersDataset[_this.newFollowersDataset.length - 1];
                _this.secondSubDataset = _this.lostFollowersDataset[_this.lostFollowersDataset.length - 1];
                if (_this.minFollowers > element.FollowersCount) {
                    _this.minFollowers = element.FollowersCount;
                }
                if (_this.maxFollowers < element.FollowersCount) {
                    _this.maxFollowers = element.FollowersCount;
                }
                if (_this.minFollowing > element.FollowingCount) {
                    _this.minFollowing = element.FollowingCount;
                }
                if (_this.maxFollowing < element.FollowingCount) {
                    _this.maxFollowing = element.FollowingCount;
                }
                counter++;
            });
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
                                suggestedMin: 0,
                                suggestedMax: _this.maxFollowers,
                                padding: 20,
                                fontColor: "#9a9a9a",
                                precision: 0
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
            _this.datasets = dataset;
            _this.data = _this.datasets[0];
            _this.canvas = document.getElementById("chartBig1");
            _this.ctx = _this.canvas.getContext("2d");
            var gradientStroke = _this.ctx.createLinearGradient(0, 230, 0, 50);
            gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
            gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
            gradientStroke.addColorStop(0, 'rgba(233,32,16,0)');
            var config = {
                type: 'line',
                data: {
                    labels: chart_labels,
                    datasets: [{
                            label: "Followers",
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
                            data: _this.data,
                        }]
                },
                options: gradientChartOptionsConfigurationWithTooltipRed
            };
            _this.myChartData = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(_this.ctx, config);
        });
    };
    StatisticComponent.prototype.updateOptions = function () {
        this.myChartData.data.datasets[0].data = this.data;
        if (this.clicked1) {
            this.myChartData.options.scales.yAxes[0].ticks.suggestedMax = this.maxFollowers;
            this.myChartData.data.datasets[0].label = 'Followers';
            this.newTableTitle = 'New Followers';
            this.lostTableTitle = 'Lost Followers';
        }
        else {
            this.myChartData.options.scales.yAxes[0].ticks.suggestedMax = this.maxFollowing;
            this.myChartData.data.datasets[0].label = 'Following';
            this.newTableTitle = 'New Followings';
            this.lostTableTitle = 'Lost Followings';
        }
        this.myChartData.update();
    };
    StatisticComponent.ɵfac = function StatisticComponent_Factory(t) { return new (t || StatisticComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_httpWrapper_service__WEBPACK_IMPORTED_MODULE_2__.HttpWrapper)); };
    StatisticComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StatisticComponent, selectors: [["app-statistic"]], decls: 130, vars: 8, consts: [[1, "content"], [1, "row"], [1, "col-12"], [1, "card", "card-chart"], [1, "card-header"], [1, "col-sm-6", "text-left"], [1, "card-category"], [1, "card-title"], [1, "col-sm-6"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "float-right"], [1, "btn", "btn-sm", "btn-danger", "btn-simple", 3, "ngClass", "click"], ["checked", "checked", "name", "options", "type", "radio"], [1, "d-none", "d-sm-block", "d-md-block", "d-lg-block", "d-xl-block"], [1, "d-block", "d-sm-none"], [1, "tim-icons", "icon-single-02"], ["name", "options", "type", "radio", 1, "d-none", "d-sm-none"], [1, "tim-icons", "icon-gift-2"], [1, "card-body"], [1, "chart-area"], ["id", "chartBig1"], [1, "col-6"], [1, "card"], [1, "table-responsive"], ["mat-table", "", 1, "table", "tablesorter", 3, "dataSource"], [1, "text-primary"], ["mat-header-row", ""], ["mat-header-cell", ""], ["mat-header-cell", "", 1, "text-center"], ["mat-row", ""], ["mat-cell", "", 4, "matCellDef"], ["mat-cell", "", 1, "text-center"], ["id", "", 1, "table", "tablesorter"], [1, "text-center"], ["mat-cell", ""]], template: function StatisticComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Statistic");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h2", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Accounts");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatisticComponent_Template_label_click_13_listener() { ctx.data = ctx.datasets[0]; ctx.updateOptions(); ctx.clicked = true; ctx.clicked1 = false; return ctx.clicked2 = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Followers ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatisticComponent_Template_label_click_19_listener() { ctx.data = ctx.datasets[1]; ctx.updateOptions(); ctx.clicked = false; ctx.clicked1 = true; return ctx.clicked2 = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Following ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "canvas", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "table", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "thead", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "tr", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Username");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Actions");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "tr", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, StatisticComponent_td_45_Template, 2, 1, "td", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "td", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Unfollow");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Simple Table");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "table", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "thead", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Country");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "City");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "th", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Salary");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Dakota Rice");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Niger");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Oud-Turnhout");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "$36,738");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Minerva Hooper");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Cura\u00C3\u00A7ao");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Sinaai-Waas");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "$23,789");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Sage Rodriguez");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Netherlands");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Baileux");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "$56,142");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Philip Chaney");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Korea, South");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Overland Park");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "$38,735");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Doris Greene");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Malawi");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Feldkirchen in K\u00C3\u00A4rnten");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "$63,542");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Mason Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Chile");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "$78,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Jon Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Portugal");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "$98,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx.clicked === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.clicked1 === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.newTableTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.firstSubDataset);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell], encapsulation: 2 });
    return StatisticComponent;
}());



/***/ }),

/***/ 51524:
/*!**************************************************!*\
  !*** ./src/app/pages/tables/tables.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesComponent": function() { return /* binding */ TablesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);

var TablesComponent = /** @class */ /*@__PURE__*/ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () { };
    TablesComponent.ɵfac = function TablesComponent_Factory(t) { return new (t || TablesComponent)(); };
    TablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablesComponent, selectors: [["app-tables"]], decls: 168, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "table-responsive"], ["id", "", 1, "table", "tablesorter"], [1, "text-primary"], [1, "text-center"], [1, "card", "card-plain"], [1, "category"]], template: function TablesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Simple Table");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Country");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "City");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Salary");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Dakota Rice");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Niger");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Oud-Turnhout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "$36,738");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Minerva Hooper");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cura\u00C3\u00A7ao");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sinaai-Waas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "$23,789");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sage Rodriguez");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Netherlands");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Baileux");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "$56,142");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Philip Chaney");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Korea, South");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Overland Park");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "$38,735");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Doris Greene");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Malawi");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Feldkirchen in K\u00C3\u00A4rnten");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "$63,542");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Mason Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Chile");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "$78,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Jon Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Portugal");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "$98,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Table on Plain Background");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Here is a subtitle for this table");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "table", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "thead", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Country");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "City");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Salary");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Dakota Rice");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Niger");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Oud-Turnhout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "$36,738");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Minerva Hooper");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Cura\u00C3\u00A7ao");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Sinaai-Waas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "$23,789");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sage Rodriguez");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Netherlands");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Baileux");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "$56,142");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Philip Chaney");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Korea, South");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Overland Park");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "$38,735");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Doris Greene");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Malawi");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Feldkirchen in K\u00C3\u00A4rnten");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "$63,542");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Mason Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Chile");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "$78,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Jon Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Portugal");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "$98,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return TablesComponent;
}());



/***/ }),

/***/ 21735:
/*!**********************************************************!*\
  !*** ./src/app/pages/typography/typography.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyComponent": function() { return /* binding */ TypographyComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);

var TypographyComponent = /** @class */ /*@__PURE__*/ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent.ɵfac = function TypographyComponent_Factory(t) { return new (t || TypographyComponent)(); };
    TypographyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypographyComponent, selectors: [["app-typography"]], decls: 165, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", "mb-5"], [1, "card-category"], [1, "card-title"], [1, "card-body"], [1, "typography-line"], [1, "blockquote", "blockquote-danger"], [1, "text-muted"], [1, "text-primary"], [1, "text-info"], [1, "text-success"], [1, "text-warning"], [1, "text-danger"], [1, "col-md-3"], [1, "list-unstyled"], [1, "list-inline"], [1, "list-inline-item"]], template: function TypographyComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Black Table Heading");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created using Poppins Font Family");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Header 1 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Header 2 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Header 3 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Header 4 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Header 5 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Header 6 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Paragraph ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u00E2\u0080\u0099s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Quote ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that'\u0099s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\" ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " - Noaa ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Muted Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Primary Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Info Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Success Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Warning Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Danger Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Small Tag ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Header with small subtitle ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Use \"small\" tag for the headers ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Lists ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Unordered List");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Ordered List");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "ol");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "List item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Unstyled List");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "List item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Inline List");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "ul", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "List1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "List2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "List3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Code ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " This is ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " .css-class-as-code ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " , an example of an inline code element. Wrap inline code within a ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "...");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " tag. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "pre");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "1. #This is an example of preformatted text.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\n\n2. #Here is another line of code\n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return TypographyComponent;
}());



/***/ }),

/***/ 94379:
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": function() { return /* binding */ UserComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 31041);


var UserComponent = /** @class */ /*@__PURE__*/ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
    UserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 93, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-8"], [1, "card"], [1, "card-header"], [1, "title"], [1, "card-body"], [1, "col-md-5", "pr-md-1"], [1, "form-group"], ["disabled", "", "placeholder", "Company", "type", "text", "value", "Creative Code Inc.", 1, "form-control"], [1, "col-md-3", "px-md-1"], ["placeholder", "Username", "type", "text", "value", "michael23", 1, "form-control"], [1, "col-md-4", "pl-md-1"], ["for", "exampleInputEmail1"], ["placeholder", "mike@email.com", "type", "email", 1, "form-control"], [1, "col-md-6", "pr-md-1"], ["placeholder", "Company", "type", "text", "value", "Mike", 1, "form-control"], [1, "col-md-6", "pl-md-1"], ["placeholder", "Last Name", "type", "text", "value", "Andrew", 1, "form-control"], [1, "col-md-12"], ["placeholder", "Home Address", "type", "text", "value", "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09", 1, "form-control"], [1, "col-md-4", "pr-md-1"], ["placeholder", "City", "type", "text", "value", "Mike", 1, "form-control"], [1, "col-md-4", "px-md-1"], ["placeholder", "Country", "type", "text", "value", "Andrew", 1, "form-control"], ["placeholder", "ZIP Code", "type", "number", 1, "form-control"], ["cols", "80", "placeholder", "Here can be your description", "rows", "4", "value", "Mike", 1, "form-control"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-fill", "btn-danger"], [1, "col-md-4"], [1, "card", "card-user"], [1, "card-text"], [1, "author"], [1, "block", "block-one"], [1, "block", "block-two"], [1, "block", "block-three"], [1, "block", "block-four"], ["href", "javascript:void(0)"], ["alt", "...", "src", "assets/img/emilyz.jpg", 1, "avatar"], [1, "description"], [1, "card-description"], [1, "button-container"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-round", "btn-facebook"], [1, "fab", "fa-facebook"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-round", "btn-twitter"], [1, "fab", "fa-twitter"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-round", "btn-google"], [1, "fab", "fa-google-plus"]], template: function UserComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit Profile");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Company (disabled) ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Username ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Email address ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " First Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Last Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Address ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " City ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Country ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Postal Code ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " About Me ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "textarea", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Save");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "p", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Mike Andrew");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Ceo/Co-Founder");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019\u0080\u0099 bed design but the back is... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], encapsulation: 2 });
    return UserComponent;
}());



/***/ })

}]);