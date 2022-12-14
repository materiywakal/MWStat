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
    AdminLayoutModule.??fac = function AdminLayoutModule_Factory(t) { return new (t || AdminLayoutModule)(); };
    AdminLayoutModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({ type: AdminLayoutModule });
    AdminLayoutModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({ imports: [[
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
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](AdminLayoutModule, { declarations: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
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
    DashboardComponent.??fac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
    DashboardComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 262, vars: 9, consts: [[1, "content"], [1, "row"], [1, "col-12"], [1, "card", "card-chart"], [1, "card-header"], [1, "col-sm-6", "text-left"], [1, "card-category"], [1, "card-title"], [1, "col-sm-6"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "float-right"], [1, "btn", "btn-sm", "btn-danger", "btn-simple", 3, "ngClass", "click"], ["checked", "checked", "name", "options", "type", "radio"], [1, "d-none", "d-sm-block", "d-md-block", "d-lg-block", "d-xl-block"], [1, "d-block", "d-sm-none"], [1, "tim-icons", "icon-single-02"], ["name", "options", "type", "radio", 1, "d-none", "d-sm-none"], [1, "tim-icons", "icon-gift-2"], ["name", "options", "type", "radio", 1, "d-none"], [1, "tim-icons", "icon-tap-02"], [1, "card-body"], [1, "chart-area"], ["id", "chartBig1"], [1, "col-lg-4"], [1, "tim-icons", "icon-bell-55", "text-danger-states"], ["id", "chartLineRed"], [1, "tim-icons", "icon-delivery-fast", "text-info"], ["id", "CountryChart"], [1, "tim-icons", "icon-send", "text-success"], ["id", "chartLineGreen"], [1, "col-lg-6", "col-md-12"], [1, "card", "card-tasks"], [1, "title", "d-inline"], [1, "card-category", "d-inline"], ["ngbDropdown", ""], ["data-toggle", "dropdown", "ngbDropdownToggle", "", "type", "button", 1, "btn", "btn-link", "btn-icon"], [1, "tim-icons", "icon-settings-gear-63"], ["aria-labelledby", "dropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu-right"], ["href", "javascript:void(0)", "ngbDropdownItem", ""], [1, "table-full-width", "table-responsive"], [1, "table"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], [1, "title"], [1, "text-muted"], [1, "td-actions", "text-right"], ["type", "button", "placement", "left", "ngbTooltip", "Edit Task", "container", "body", 1, "btn", "btn-link"], [1, "tim-icons", "icon-pencil"], ["checked", "", "type", "checkbox", "value", "", 1, "form-check-input"], [1, "card"], [1, "table-responsive"], ["id", "", 1, "table", "tablesorter"], [1, "text-primary"], [1, "text-center"]], template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Total Shipments");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h2", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Performance");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardComponent_Template_label_click_13_listener() { ctx.data = ctx.datasets[0]; ctx.updateOptions(); ctx.clicked = true; ctx.clicked1 = false; return ctx.clicked2 = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, " Accounts ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardComponent_Template_label_click_19_listener() { ctx.data = ctx.datasets[1]; ctx.updateOptions(); ctx.clicked = false; ctx.clicked1 = true; return ctx.clicked2 = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Purchases ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "i", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DashboardComponent_Template_label_click_25_listener() { ctx.data = ctx.datasets[2]; ctx.updateOptions(); ctx.clicked = false; ctx.clicked1 = false; return ctx.clicked2 = true; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "input", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " Sessions ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "i", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "canvas", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Total Shipments");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "i", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, " 763,215 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "canvas", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Daily Sales");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](52, "i", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, " 3,500\u20AC ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](56, "canvas", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Completed Tasks");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](63, "i", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, " 12,100K ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](67, "canvas", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "h6", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Tasks(5)");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "p", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "today");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "button", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](78, "i", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "a", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, " Action ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "a", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, " Another action ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "a", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, " Something else ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "table", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](94, "input", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](96, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](99, "Update the Documentation");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101, " Dwuamish Head, Seattle, WA 8:47 AM ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](104, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](109, "input", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](111, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, "GDPR Compliance");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](116, " The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](119, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](124, "input", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](126, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "Solve the issues");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](131, " Fifty percent of all respondents said they would be more likely to shop at a company ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](134, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](139, "input", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](141, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "Release v2.0.0");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, " Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](149, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](154, "input", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](156, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Export the processed files");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, " The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](164, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "label", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](169, "input", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "span", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](171, "span", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "p", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "Arival at export process");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "p", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, " Capitol Hill, Seattle, WA 12:34 AM ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "td", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "button", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](179, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "div", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](184, "Simple Table");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "div", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "table", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "thead", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](189, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](191, "Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, "Country");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](195, "City");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "th", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](197, "Salary");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](199, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](201, "Dakota Rice");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](203, "Niger");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](205, "Oud-Turnhout");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](206, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](207, "$36,738");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](208, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "Minerva Hooper");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](212, "Cura\u00C3\u00A7ao");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](214, "Sinaai-Waas");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](215, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](216, "$23,789");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](218, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](219, "Sage Rodriguez");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](220, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](221, "Netherlands");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](223, "Baileux");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](224, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](225, "$56,142");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](227, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](228, "Philip Chaney");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](229, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](230, "Korea, South");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](232, "Overland Park");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](233, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](234, "$38,735");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](236, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](237, "Doris Greene");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](238, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](239, "Malawi");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](241, "Feldkirchen in K\u00C3\u00A4rnten");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](242, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](243, "$63,542");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](245, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](246, "Mason Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](247, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](248, "Chile");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](250, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](252, "$78,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](255, "Jon Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](256, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](257, "Portugal");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](258, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](259, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "td", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](261, "$98,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](3, _c0, ctx.clicked === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](5, _c0, ctx.clicked1 === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](7, _c0, ctx.clicked2 === true));
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
    IconsComponent.??fac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(); };
    IconsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: IconsComponent, selectors: [["app-icons"]], decls: 513, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "title"], [1, "category"], ["href", "https://nucleoapp.com/?ref=1712"], [1, "card-body", "all-icons"], [1, "font-icon-list", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-6", "col-xs-6"], [1, "font-icon-detail"], [1, "tim-icons", "icon-alert-circle-exc"], [1, "tim-icons", "icon-align-center"], [1, "tim-icons", "icon-align-left-2"], [1, "tim-icons", "icon-app"], [1, "tim-icons", "icon-atom"], [1, "tim-icons", "icon-attach-87"], [1, "tim-icons", "icon-badge"], [1, "tim-icons", "icon-bag-16"], [1, "tim-icons", "icon-bank"], [1, "tim-icons", "icon-basket-simple"], [1, "tim-icons", "icon-bell-55"], [1, "tim-icons", "icon-bold"], [1, "tim-icons", "icon-book-bookmark"], [1, "tim-icons", "icon-double-right"], [1, "tim-icons", "icon-bulb-63"], [1, "tim-icons", "icon-bullet-list-67"], [1, "tim-icons", "icon-bus-front-12"], [1, "tim-icons", "icon-button-power"], [1, "tim-icons", "icon-camera-18"], [1, "tim-icons", "icon-calendar-60"], [1, "tim-icons", "icon-caps-small"], [1, "tim-icons", "icon-cart"], [1, "tim-icons", "icon-chart-bar-32"], [1, "tim-icons", "icon-chart-pie-36"], [1, "tim-icons", "icon-chat-33"], [1, "tim-icons", "icon-check-2"], [1, "tim-icons", "icon-cloud-download-93"], [1, "tim-icons", "icon-cloud-upload-94"], [1, "tim-icons", "icon-coins"], [1, "tim-icons", "icon-compass-05"], [1, "tim-icons", "icon-controller"], [1, "tim-icons", "icon-credit-card"], [1, "tim-icons", "icon-delivery-fast"], [1, "tim-icons", "icon-email-85"], [1, "tim-icons", "icon-gift-2"], [1, "tim-icons", "icon-globe-2"], [1, "tim-icons", "icon-headphones"], [1, "tim-icons", "icon-heart-2"], [1, "tim-icons", "icon-html5"], [1, "tim-icons", "icon-double-left"], [1, "tim-icons", "icon-image-02"], [1, "tim-icons", "icon-istanbul"], [1, "tim-icons", "icon-key-25"], [1, "tim-icons", "icon-laptop"], [1, "tim-icons", "icon-light-3"], [1, "tim-icons", "icon-link-72"], [1, "tim-icons", "icon-lock-circle"], [1, "tim-icons", "icon-map-big"], [1, "tim-icons", "icon-minimal-down"], [1, "tim-icons", "icon-minimal-left"], [1, "tim-icons", "icon-minimal-right"], [1, "tim-icons", "icon-minimal-up"], [1, "tim-icons", "icon-mobile"], [1, "tim-icons", "icon-molecule-40"], [1, "tim-icons", "icon-money-coins"], [1, "tim-icons", "icon-notes"], [1, "tim-icons", "icon-palette"], [1, "tim-icons", "icon-paper"], [1, "tim-icons", "icon-pin"], [1, "tim-icons", "icon-planet"], [1, "tim-icons", "icon-puzzle-10"], [1, "tim-icons", "icon-pencil"], [1, "tim-icons", "icon-satisfied"], [1, "tim-icons", "icon-scissors"], [1, "tim-icons", "icon-send"], [1, "tim-icons", "icon-settings-gear-63"], [1, "tim-icons", "icon-settings"], [1, "tim-icons", "icon-wifi"], [1, "tim-icons", "icon-single-02"], [1, "tim-icons", "icon-single-copy-04"], [1, "tim-icons", "icon-sound-wave"], [1, "tim-icons", "icon-spaceship"], [1, "tim-icons", "icon-square-pin"], [1, "tim-icons", "icon-support-17"], [1, "tim-icons", "icon-tablet-2"], [1, "tim-icons", "icon-tag"], [1, "tim-icons", "icon-tap-02"], [1, "tim-icons", "icon-tie-bow"], [1, "tim-icons", "icon-time-alarm"], [1, "tim-icons", "icon-trash-simple"], [1, "tim-icons", "icon-trophy"], [1, "tim-icons", "icon-tv-2"], [1, "tim-icons", "icon-upload"], [1, "tim-icons", "icon-user-run"], [1, "tim-icons", "icon-vector"], [1, "tim-icons", "icon-video-66"], [1, "tim-icons", "icon-wallet-43"], [1, "tim-icons", "icon-volume-98"], [1, "tim-icons", "icon-watch-time"], [1, "tim-icons", "icon-world"], [1, "tim-icons", "icon-zoom-split"], [1, "tim-icons", "icon-refresh-01"], [1, "tim-icons", "icon-refresh-02"], [1, "tim-icons", "icon-shape-star"], [1, "tim-icons", "icon-components"], [1, "tim-icons", "icon-triangle-right-17"], [1, "tim-icons", "icon-button-pause"], [1, "tim-icons", "icon-simple-remove"], [1, "tim-icons", "icon-simple-add"], [1, "tim-icons", "icon-simple-delete"]], template: function IconsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "100 Awesome Nucleo Icons");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Handcrafted by our friends from ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " NucleoApp ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "icon-alert-circle-exc");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "icon-align-center");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "icon-align-left-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "icon-app");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "icon-atom");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "icon-attach-87");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "i", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "icon-badge");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "icon-bag-16");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "icon-bank");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "i", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "icon-basket-simple");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "icon-bell-55");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "icon-bold");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "icon-book-bookmark");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "icon-double-right");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "i", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "icon-bulb-63");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "icon-bullet-list-67");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "i", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "icon-bus-front-12");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "i", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "icon-button-power");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "i", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "icon-camera-18");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "i", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "icon-calendar-60");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "i", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "icon-caps-small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "i", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "icon-cart");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "i", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "icon-chart-bar-32");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "i", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "icon-chart-pie-36");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "i", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "icon-chat-33");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "i", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "icon-check-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "i", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "icon-cloud-download-93");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "i", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "icon-cloud-upload-94");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "i", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "icon-coins");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "i", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "icon-compass-05");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "i", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "icon-controller");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "i", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "icon-credit-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "i", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "icon-delivery-fast");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "i", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "icon-email-85");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](185, "i", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "icon-gift-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "i", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "icon-globe-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "i", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "icon-headphones");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](200, "i", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "icon-heart-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](205, "i", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "icon-html5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](210, "i", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "icon-double-left");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](215, "i", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "icon-image-02");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](220, "i", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "icon-istanbul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](225, "i", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "icon-key-25");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](230, "i", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "icon-laptop");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](235, "i", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "icon-light-3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](240, "i", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "icon-link-72");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](245, "i", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "icon-lock-circle");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](250, "i", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "icon-map-big");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](255, "i", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "icon-minimal-down");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](260, "i", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "icon-minimal-left");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](265, "i", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "icon-minimal-right");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](270, "i", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "icon-minimal-up");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](275, "i", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "icon-mobile");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "i", 64);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "icon-molecule-40");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](285, "i", 65);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "icon-money-coins");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](290, "i", 66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "icon-notes");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](295, "i", 67);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "icon-palette");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](300, "i", 68);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, "icon-paper");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](305, "i", 69);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "icon-pin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](310, "i", 70);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "icon-planet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](315, "i", 71);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "icon-puzzle-10");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](320, "i", 72);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "icon-pencil");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](325, "i", 73);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "icon-satisfied");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](330, "i", 74);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](332, "icon-scissors");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](333, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](335, "i", 75);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "icon-send");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](340, "i", 76);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "icon-settings-gear-63");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](345, "i", 77);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "icon-settings");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](350, "i", 78);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "icon-wifi");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](355, "i", 79);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "icon-single-02");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](360, "i", 80);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](361, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](362, "icon-single-copy-04");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](365, "i", 81);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "icon-sound-wave");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](370, "i", 82);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "icon-spaceship");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](375, "i", 83);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "icon-square-pin");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](380, "i", 84);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "icon-support-17");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](385, "i", 85);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "icon-tablet-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](390, "i", 86);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, "icon-tag");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](395, "i", 87);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "icon-tap-02");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](400, "i", 88);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "icon-tie-bow");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](405, "i", 89);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "icon-time-alarm");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](410, "i", 90);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, "icon-trash-simple");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](415, "i", 91);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "icon-trophy");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](420, "i", 92);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "icon-tv-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](425, "i", 93);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](427, "icon-upload");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](430, "i", 94);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "icon-user-run");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](435, "i", 95);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "icon-vector");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](440, "i", 96);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, "icon-video-66");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](445, "i", 97);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "icon-wallet-43");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](450, "i", 98);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "icon-volume-98");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](455, "i", 99);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, "icon-watch-time");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](460, "i", 100);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](462, "icon-world");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](465, "i", 101);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "icon-zoom-split");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](470, "i", 102);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](472, "icon-refresh-01");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](475, "i", 103);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](477, "icon-refresh-02");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](480, "i", 104);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](482, "icon-shape-star");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](485, "i", 105);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "icon-components");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](490, "i", 106);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "icon-triangle-right-17");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](495, "i", 107);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, "icon-button-pause");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](500, "i", 108);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, "icon-simple-remove");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](505, "i", 109);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "icon-simple-add");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](510, "i", 110);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, "icon-simple-delete");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
    LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_httpWrapper_service__WEBPACK_IMPORTED_MODULE_0__.HttpWrapper)); };
    LoginComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 2, consts: [[1, "content"], [1, "row"], [1, "col-md-4"], [1, "card"], [1, "card-header"], [1, "title"], [1, "card-body"], [3, "ngSubmit"], [1, "col-md-8", "pr-md-1"], [1, "form-group"], ["id", "username", "placeholder", "Username", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "password", "placeholder", "Password", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-fill", "btn-danger"]], template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "form", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.login(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, " Username ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.username = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, " Password ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.password = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.username);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.password);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], encapsulation: 2 });
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
    MapComponent.??fac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
    MapComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 8, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-plain"], [1, "card-header"], [1, "card-body"], ["id", "map", 1, "map"]], template: function MapComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Google Maps");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_ngb_alert_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.staticAlertClosed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " This is a notification with close button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", "info")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_12_Template(rf, ctx) {
    if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_ngb_alert_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.staticAlertClosed1 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " This is a notification with close button and icon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", "info")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_13_Template(rf, ctx) {
    if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_ngb_alert_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.staticAlertClosed2 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", "info")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_20_Template(rf, ctx) {
    if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_ngb_alert_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r14.staticAlertClosed3 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Primary - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " This is a regular notification made with \".alert-primary\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", "primary")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_21_Template(rf, ctx) {
    if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_ngb_alert_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r16.staticAlertClosed4 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Info - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " This is a regular notification made with \".alert-info\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", "info")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_22_Template(rf, ctx) {
    if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_ngb_alert_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r18.staticAlertClosed5 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Success - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " This is a regular notification made with \".alert-success\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", "success")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_23_Template(rf, ctx) {
    if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_ngb_alert_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r20.staticAlertClosed6 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Warning - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " This is a regular notification made with \".alert-warning\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", "warning")("dismissible", false);
    }
}
function NotificationsComponent_ngb_alert_24_Template(rf, ctx) {
    if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_ngb_alert_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r22.staticAlertClosed7 = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Danger - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " This is a regular notification made with \".alert-danger\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", "danger")("dismissible", false);
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
    NotificationsComponent.??fac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
    NotificationsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 59, vars: 10, consts: [[1, "content"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [3, "type", "dismissible"], [3, "type", "dismissible", 4, "ngIf"], ["class", " alert-with-icon", "data-notify", "container", 3, "type", "dismissible", 4, "ngIf"], [1, "col-md-12"], [1, "places-buttons"], [1, "col-md-6", "ml-auto", "mr-auto", "text-center"], [1, "category"], [1, "col-lg-8", "ml-auto", "mr-auto"], [1, "col-md-4"], [1, "btn", "btn-danger", "btn-block", 3, "click"], ["type", "button", "aria-hidden", "true", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], [1, "tim-icons", "icon-simple-remove"], ["data-notify", "container", 1, "alert-with-icon", 3, "type", "dismissible"], ["data-notify", "icon", 1, "tim-icons", "icon-bell-55"], ["data-notify", "message"]], template: function NotificationsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Notifications Style");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ngb-alert", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " This is a plain notification ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, NotificationsComponent_ngb_alert_11_Template, 5, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, NotificationsComponent_ngb_alert_12_Template, 6, 2, "ngb-alert", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, NotificationsComponent_ngb_alert_13_Template, 6, 2, "ngb-alert", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Notification states");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, NotificationsComponent_ngb_alert_20_Template, 7, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, NotificationsComponent_ngb_alert_21_Template, 7, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, NotificationsComponent_ngb_alert_22_Template, 7, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, NotificationsComponent_ngb_alert_23_Template, 7, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, NotificationsComponent_ngb_alert_24_Template, 7, 2, "ngb-alert", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Notifications Places");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Click to view notifications");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_Template_button_click_39_listener() { return ctx.showNotification("top", "left"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Top Left ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_Template_button_click_42_listener() { return ctx.showNotification("top", "center"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Top Center ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_Template_button_click_45_listener() { return ctx.showNotification("top", "right"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Top Right ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_Template_button_click_51_listener() { return ctx.showNotification("bottom", "left"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Bottom Left ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_Template_button_click_54_listener() { return ctx.showNotification("bottom", "center"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Bottom Center ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationsComponent_Template_button_click_57_listener() { return ctx.showNotification("bottom", "right"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Bottom Right ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", "info")("dismissible", false);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.staticAlertClosed);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.staticAlertClosed1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.staticAlertClosed2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.staticAlertClosed3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.staticAlertClosed4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.staticAlertClosed5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.staticAlertClosed6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.staticAlertClosed7);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    }
    if (rf & 2) {
        var firstSubDataset_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](firstSubDataset_r1.Username);
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
    StatisticComponent.??fac = function StatisticComponent_Factory(t) { return new (t || StatisticComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_httpWrapper_service__WEBPACK_IMPORTED_MODULE_2__.HttpWrapper)); };
    StatisticComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: StatisticComponent, selectors: [["app-statistic"]], decls: 130, vars: 8, consts: [[1, "content"], [1, "row"], [1, "col-12"], [1, "card", "card-chart"], [1, "card-header"], [1, "col-sm-6", "text-left"], [1, "card-category"], [1, "card-title"], [1, "col-sm-6"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "float-right"], [1, "btn", "btn-sm", "btn-danger", "btn-simple", 3, "ngClass", "click"], ["checked", "checked", "name", "options", "type", "radio"], [1, "d-none", "d-sm-block", "d-md-block", "d-lg-block", "d-xl-block"], [1, "d-block", "d-sm-none"], [1, "tim-icons", "icon-single-02"], ["name", "options", "type", "radio", 1, "d-none", "d-sm-none"], [1, "tim-icons", "icon-gift-2"], [1, "card-body"], [1, "chart-area"], ["id", "chartBig1"], [1, "col-6"], [1, "card"], [1, "table-responsive"], ["mat-table", "", 1, "table", "tablesorter", 3, "dataSource"], [1, "text-primary"], ["mat-header-row", ""], ["mat-header-cell", ""], ["mat-header-cell", "", 1, "text-center"], ["mat-row", ""], ["mat-cell", "", 4, "matCellDef"], ["mat-cell", "", 1, "text-center"], ["id", "", 1, "table", "tablesorter"], [1, "text-center"], ["mat-cell", ""]], template: function StatisticComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "h5", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "Statistic");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "h2", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "Accounts");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function StatisticComponent_Template_label_click_13_listener() { ctx.data = ctx.datasets[0]; ctx.updateOptions(); ctx.clicked = true; ctx.clicked1 = false; return ctx.clicked2 = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](14, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, " Followers ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](18, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function StatisticComponent_Template_label_click_19_listener() { ctx.data = ctx.datasets[1]; ctx.updateOptions(); ctx.clicked = false; ctx.clicked1 = true; return ctx.clicked2 = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, " Following ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](24, "i", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "canvas", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](33);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "table", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "thead", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "tr", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "th", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40, "Username");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "th", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](42, "Actions");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "tr", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](45, StatisticComponent_td_45_Template, 2, 1, "td", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "td", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](47, "Unfollow");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](52, "Simple Table");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "table", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "thead", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](59, "Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](61, "Country");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](63, "City");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "th", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, "Salary");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](69, "Dakota Rice");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](71, "Niger");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](72, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](73, "Oud-Turnhout");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](75, "$36,738");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](77, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](78, "Minerva Hooper");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](80, "Cura\u00C3\u00A7ao");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](81, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](82, "Sinaai-Waas");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](83, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](84, "$23,789");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](85, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](87, "Sage Rodriguez");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](89, "Netherlands");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](90, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](91, "Baileux");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](92, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](93, "$56,142");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](94, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](95, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](96, "Philip Chaney");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](97, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](98, "Korea, South");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](99, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](100, "Overland Park");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](101, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](102, "$38,735");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](103, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](104, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](105, "Doris Greene");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](106, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](107, "Malawi");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](108, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](109, "Feldkirchen in K\u00C3\u00A4rnten");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](110, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](111, "$63,542");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](112, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](113, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](114, "Mason Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](115, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](116, "Chile");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](117, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](118, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](119, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](120, "$78,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](121, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](122, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](123, "Jon Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](124, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](125, "Portugal");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](126, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](127, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](128, "td", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](129, "$98,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](4, _c0, ctx.clicked === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](6, _c0, ctx.clicked1 === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.newTableTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.firstSubDataset);
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
    TablesComponent.??fac = function TablesComponent_Factory(t) { return new (t || TablesComponent)(); };
    TablesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TablesComponent, selectors: [["app-tables"]], decls: 168, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "table-responsive"], ["id", "", 1, "table", "tablesorter"], [1, "text-primary"], [1, "text-center"], [1, "card", "card-plain"], [1, "category"]], template: function TablesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Simple Table");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "thead", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Country");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "City");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Salary");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Dakota Rice");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Niger");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Oud-Turnhout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "$36,738");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Minerva Hooper");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Cura\u00C3\u00A7ao");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Sinaai-Waas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "$23,789");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Sage Rodriguez");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Netherlands");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Baileux");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "$56,142");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Philip Chaney");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Korea, South");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Overland Park");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "$38,735");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Doris Greene");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Malawi");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Feldkirchen in K\u00C3\u00A4rnten");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "$63,542");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Mason Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Chile");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "$78,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Jon Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Portugal");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "$98,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Table on Plain Background");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Here is a subtitle for this table");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "table", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "thead", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Country");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "City");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "th", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Salary");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Dakota Rice");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Niger");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Oud-Turnhout");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "$36,738");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Minerva Hooper");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Cura\u00C3\u00A7ao");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Sinaai-Waas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "$23,789");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Sage Rodriguez");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Netherlands");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Baileux");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "$56,142");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Philip Chaney");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Korea, South");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Overland Park");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "$38,735");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Doris Greene");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Malawi");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Feldkirchen in K\u00C3\u00A4rnten");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "$63,542");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Mason Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Chile");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "$78,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Jon Porter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Portugal");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Gloucester");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "td", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "$98,615");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
    TypographyComponent.??fac = function TypographyComponent_Factory(t) { return new (t || TypographyComponent)(); };
    TypographyComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TypographyComponent, selectors: [["app-typography"]], decls: 165, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", "mb-5"], [1, "card-category"], [1, "card-title"], [1, "card-body"], [1, "typography-line"], [1, "blockquote", "blockquote-danger"], [1, "text-muted"], [1, "text-primary"], [1, "text-info"], [1, "text-success"], [1, "text-warning"], [1, "text-danger"], [1, "col-md-3"], [1, "list-unstyled"], [1, "list-inline"], [1, "list-inline-item"]], template: function TypographyComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Black Table Heading");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Created using Poppins Font Family");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Header 1 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Header 2 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Header 3 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Header 4 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Header 5 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Header 6 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " The Life of Black Dashboard");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Paragraph ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u00E2\u0080\u0099s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Quote ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "blockquote");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that'\u0099s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\" ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " - Noaa ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Muted Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Primary Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Info Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Success Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Warning Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " Danger Text ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Small Tag ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " Header with small subtitle ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, " Use \"small\" tag for the headers ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " Lists ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Unordered List");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "ul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "li", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "ul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Ordered List");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "ol");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "List item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Unstyled List");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "ul", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "List item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "List Item");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Inline List");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "ul", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "li", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "List1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "li", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "List2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "li", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "List3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, " Code ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, " This is ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " .css-class-as-code ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " , an example of an inline code element. Wrap inline code within a ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "...");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " tag. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "pre");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "1. #This is an example of preformatted text.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "\n\n2. #Here is another line of code\n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
    UserComponent.??fac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
    UserComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 93, vars: 0, consts: [[1, "content"], [1, "row"], [1, "col-md-8"], [1, "card"], [1, "card-header"], [1, "title"], [1, "card-body"], [1, "col-md-5", "pr-md-1"], [1, "form-group"], ["disabled", "", "placeholder", "Company", "type", "text", "value", "Creative Code Inc.", 1, "form-control"], [1, "col-md-3", "px-md-1"], ["placeholder", "Username", "type", "text", "value", "michael23", 1, "form-control"], [1, "col-md-4", "pl-md-1"], ["for", "exampleInputEmail1"], ["placeholder", "mike@email.com", "type", "email", 1, "form-control"], [1, "col-md-6", "pr-md-1"], ["placeholder", "Company", "type", "text", "value", "Mike", 1, "form-control"], [1, "col-md-6", "pl-md-1"], ["placeholder", "Last Name", "type", "text", "value", "Andrew", 1, "form-control"], [1, "col-md-12"], ["placeholder", "Home Address", "type", "text", "value", "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09", 1, "form-control"], [1, "col-md-4", "pr-md-1"], ["placeholder", "City", "type", "text", "value", "Mike", 1, "form-control"], [1, "col-md-4", "px-md-1"], ["placeholder", "Country", "type", "text", "value", "Andrew", 1, "form-control"], ["placeholder", "ZIP Code", "type", "number", 1, "form-control"], ["cols", "80", "placeholder", "Here can be your description", "rows", "4", "value", "Mike", 1, "form-control"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-fill", "btn-danger"], [1, "col-md-4"], [1, "card", "card-user"], [1, "card-text"], [1, "author"], [1, "block", "block-one"], [1, "block", "block-two"], [1, "block", "block-three"], [1, "block", "block-four"], ["href", "javascript:void(0)"], ["alt", "...", "src", "assets/img/emilyz.jpg", 1, "avatar"], [1, "description"], [1, "card-description"], [1, "button-container"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-round", "btn-facebook"], [1, "fab", "fa-facebook"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-round", "btn-twitter"], [1, "fab", "fa-twitter"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-round", "btn-google"], [1, "fab", "fa-google-plus"]], template: function UserComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Edit Profile");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Company (disabled) ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Username ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Email address ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " First Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Last Name ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Address ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " City ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Country ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "input", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Postal Code ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "input", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " About Me ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "textarea", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Save");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "p", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "div", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "div", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "div", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "img", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h5", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Mike Andrew");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Ceo/Co-Founder");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019\u0080\u0099 bed design but the back is... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "button", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "i", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "button", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], encapsulation: 2 });
    return UserComponent;
}());



/***/ })

}]);