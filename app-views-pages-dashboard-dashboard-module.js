(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n    <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n        <div class=\"row row-no-padding row-col-separator-xl\">\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data1\"></kt-widget1>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data2\"></kt-widget1>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data3\"></kt-widget1>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data4\"></kt-widget1>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data5\"></kt-widget1>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data6\"></kt-widget1>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data7\"></kt-widget1>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data8\"></kt-widget1>\r\n            </div>\r\n        </div>\r\n    </kt-portlet-body>\r\n</kt-portlet>\r\n\r\n<kt-portlet>\r\n    <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n        <div class=\"row row-no-padding row-col-separator-xl\">\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data9\"></kt-widget1>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data10\"></kt-widget1>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data11\"></kt-widget1>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n                <kt-widget1 [data]=\"data12\"></kt-widget1>\r\n            </div>\r\n        </div>\r\n    </kt-portlet-body>\r\n</kt-portlet>\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-6\">\r\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n            <kt-portlet-header [title]=\"'Statistique du paiement'\">\r\n            </kt-portlet-header>\r\n            <kt-portlet-body>\r\n                <kt-widget12 [labels]=\"dashbordReportsData.payments_amount_monthly.days\" [dataset]=\"dashbordReportsData.payments_amount_monthly.values\" [total]=\"dashbordReportsData.payment_amount_month\"></kt-widget12>\r\n            </kt-portlet-body>\r\n        </kt-portlet>\r\n    </div>\r\n    <div class=\"col-xl-6\">\r\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n            <kt-portlet-header [title]=\"'Statistique CA'\">\r\n            </kt-portlet-header>\r\n            <kt-portlet-body>\r\n                <kt-widget12 [labels]=\"dashbordReportsData.encasement_amount_monthly.days\" [dataset]=\"dashbordReportsData.encasement_amount_monthly.values\" [total]=\"dashbordReportsData.encasement_amount_month\"></kt-widget12>\r\n            </kt-portlet-body>\r\n        </kt-portlet>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-6\">\r\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n            <kt-portlet-header [title]=\"'Bonus Par Employee'\">\r\n            </kt-portlet-header>\r\n            <kt-portlet-body>\r\n                <table class=\"table table-bordered table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Employee</th>\r\n                            <th>Bonus</th>\r\n\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of dashbordReportsData.get_users_bonus;let i = index\">\r\n                            <td>{{item.user}}</td>\r\n                            <td>{{item.bonus}}</td>\r\n\r\n                        </tr>\r\n\r\n                    </tbody>\r\n                </table>\r\n            </kt-portlet-body>\r\n        </kt-portlet>\r\n    </div>\r\n    <div class=\"col-xl-6\">\r\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n            <kt-portlet-header [title]=\"'Bonus Par Employee'\">\r\n            </kt-portlet-header>\r\n            <kt-portlet-body>\r\n                <div id=\"chartdiv\" style=\"width: 100%; height: 350px\"></div>\r\n            </kt-portlet-body>\r\n        </kt-portlet>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- <kt-portlet>\r\n\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t<div class=\"row row-no-padding row-col-separator-xl\">\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<kt-widget1></kt-widget1>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<kt-widget14 [title]=\"'Daily Sales'\" [desc]=\"'Check out each collumn for more details'\"></kt-widget14>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<kt-widget14 [title]=\"'Revenue Change'\" [desc]=\"'Revenue change breakdown by cities'\"></kt-widget14>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</kt-portlet-body>\r\n</kt-portlet>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-4\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Download Files'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget4 [data]=\"widget4_1\">\r\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\r\n\t\t\t\t\t\t<div class=\"kt-widget4__tools\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-clean btn-icon btn-sm\">\r\n\t\t\t\t\t\t\t\t<i class=\"flaticon2-download-symbol-of-down-arrow-in-a-rectangle\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</kt-widget4>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-xl-4\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'New Users'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget4 [data]=\"widget4_2\">\r\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\r\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm\" [ngClass]=\"item.buttonClass\">Follow</a>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</kt-widget4>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-xl-4\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Latest Updates'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget4 [data]=\"widget4_3\">\r\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\r\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</kt-widget4>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-8\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Exclusive Datatable'\" [class]=\"'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu></kt-context-menu>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<kt-data-table></kt-data-table>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-xl-4\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Authors Profit'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget4 [data]=\"widget4_4\">\r\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\r\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</kt-widget4>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-8\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Best Sellers'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-widget5></kt-widget5>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-xl-4\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Recent Activities'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body>\r\n\t\t\t\t<kt-timeline2></kt-timeline2>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div> -->\r\n\r\n\r\n<!--\r\n<kt-portlet>\r\n\t<kt-portlet-header>\r\n\t\t<ng-container ktPortletTitle>\r\n\t\t</ng-container>\r\n\t\t<ng-container ktPortletTools>\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<kt-portlet-body></kt-portlet-body>\r\n\t<kt-portlet-footer></kt-portlet-footer>\r\n</kt-portlet>\r\n-->"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL0U6XFxNWURBVEFcXERFVkVMT1BQSU5HXFxBY3Npb21lX1RlY2hub2xvZ2llc19Qcm9qZWN0c1xcTUVEX05FV1xcRlJPTlQtRU5EXFxkZWZhdWx0L3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0MsYUFBQTtBQ0RIIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHQ6Om5nLWRlZXAge1xyXG5cdFx0bmdiLXRhYnNldCA+IC5uYXYtdGFicyB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCBuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");

// Angular

// Lodash

// Services
// Widgets model




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(zone, layoutConfigService, reportsService) {
        this.zone = zone;
        this.layoutConfigService = layoutConfigService;
        this.reportsService = reportsService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportsService.getDashboardReports().subscribe(function (res) { return _this.dashbordReportsData = res; }, function (err) { return console.log(err); }, function () {
            _this.initChart();
            _this.data1 = [
                {
                    title: 'Patient',
                    desc: 'Nombre de patient Ajourdhui',
                    value: _this.dashbordReportsData.today_patient_number,
                    valueClass: 'kt-font-brand'
                },
                {
                    title: 'Patient',
                    desc: 'Nombre de patient Mois',
                    value: _this.dashbordReportsData.month_patient_number,
                    valueClass: 'kt-font-danger'
                }
            ];
            _this.data2 = [
                {
                    title: 'Audiometries',
                    desc: 'Nombre audiometries Aujourdhui',
                    value: _this.dashbordReportsData.today_audiometries_number,
                    valueClass: 'kt-font-success'
                }, {
                    title: 'Audiometries',
                    desc: 'Nombre audiometries mois',
                    value: _this.dashbordReportsData.month_audiometries_number,
                    valueClass: 'kt-font-success'
                }
            ];
            _this.data3 = [
                {
                    title: 'Devis',
                    desc: 'Nombre de devis Ajourdhui',
                    value: _this.dashbordReportsData.today_quotations_number,
                    valueClass: 'kt-font-brand'
                }, {
                    title: 'Devis',
                    desc: 'Nombre de devis Mois',
                    value: _this.dashbordReportsData.month_quotations_number,
                    valueClass: 'kt-font-danger'
                }
            ];
            _this.data4 = [
                {
                    title: 'Facture',
                    desc: 'Nombre facture Aujourdhui',
                    value: _this.dashbordReportsData.today_invoices_number,
                    valueClass: 'kt-font-success'
                }, {
                    title: 'Facture',
                    desc: 'Nombre facture mois',
                    value: _this.dashbordReportsData.month_invoices_number,
                    valueClass: 'kt-font-success'
                }
            ];
            _this.data5 = [
                {
                    title: 'Réception',
                    desc: 'Nombre de reception Aujourdhui',
                    value: _this.dashbordReportsData.get_reception_number_today,
                    valueClass: 'kt-font-dark'
                }, {
                    title: 'Réception',
                    desc: 'Nombre de reception mois',
                    value: _this.dashbordReportsData.get_reception_number_month,
                    valueClass: 'kt-font-dark'
                }
            ];
            _this.data6 = [
                {
                    title: 'Réception',
                    desc: 'Montant de reception Aujourdhui',
                    value: _this.dashbordReportsData.get_reception_amount_today,
                    valueClass: 'kt-font-dark'
                }, {
                    title: 'Réception',
                    desc: 'Montant de reception mois',
                    value: _this.dashbordReportsData.get_reception_amount_month,
                    valueClass: 'kt-font-dark'
                }
            ];
            _this.data7 = [
                {
                    title: 'Remise',
                    desc: 'Nombre Remise Aujourdhui',
                    value: _this.dashbordReportsData.get_discount_number_today,
                    valueClass: 'kt-font-warning'
                }, {
                    title: 'Remise',
                    desc: 'Nombre Remise mois',
                    value: _this.dashbordReportsData.get_discount_number_month,
                    valueClass: 'kt-font-warning'
                }
            ];
            _this.data8 = [
                {
                    title: 'Remise',
                    desc: 'Montant Remise Aujourdhui',
                    value: _this.dashbordReportsData.get_discounts_amount_today,
                    valueClass: 'kt-font-warning'
                }, {
                    title: 'Remise',
                    desc: 'Montant Remise mois',
                    value: _this.dashbordReportsData.get_discounts_amount_month,
                    valueClass: 'kt-font-warning'
                }
            ];
            _this.data9 = [
                {
                    title: 'Paiement',
                    desc: 'Montant de paiement aujourdhui',
                    value: _this.dashbordReportsData.payment_amount_today,
                    valueClass: 'kt-font-success'
                }, {
                    title: 'Paiement',
                    desc: 'Montant de paiement mois',
                    value: _this.dashbordReportsData.payment_amount_month,
                    valueClass: 'kt-font-success'
                }
            ];
            _this.data10 = [
                {
                    title: 'Chiffre affaire',
                    desc: 'Chiffre affaire aujourdhui',
                    value: _this.dashbordReportsData.encasement_amount_today,
                    valueClass: 'kt-font-danger'
                }, {
                    title: 'Chiffre affaire',
                    desc: 'Chiffre affaire mois',
                    value: _this.dashbordReportsData.encasement_amount_month,
                    valueClass: 'kt-font-danger'
                }
            ];
            _this.data11 = [
                {
                    title: 'creance fournisseur',
                    desc: 'Montant de creance fournisseur aujourdhui',
                    value: _this.dashbordReportsData.get_provider_debts_today,
                    valueClass: 'kt-font-dark'
                }, {
                    title: 'creance fournisseur',
                    desc: 'Montant de creance fournisseur mois',
                    value: _this.dashbordReportsData.get_provider_debts_month,
                    valueClass: 'kt-font-dark'
                }
            ];
            _this.data12 = [
                {
                    title: 'paiement fournisseur',
                    desc: 'Montant paiement fournisseur aujourdhui',
                    value: _this.dashbordReportsData.get_providers_payments_today,
                    valueClass: 'kt-font-info'
                }, {
                    title: 'paiemnt fournisseur',
                    desc: 'Montant paiement fournisseur mois',
                    value: _this.dashbordReportsData.get_providers_payments_month,
                    valueClass: 'kt-font-infos'
                }
            ];
        });
        // @ts-ignore
        this.widget4_1 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/files/doc.svg',
                title: 'Metronic Documentation',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/jpg.svg',
                title: 'Project Launch Evgent',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Full Developer Manual For 4.7',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/javascript.svg',
                title: 'Make JS Great Again',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/zip.svg',
                title: 'Download Ziped version OF 5.0',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Finance Report 2016/2017',
                url: 'https://keenthemes.com.my/metronic',
            },
        ]);
        // @ts-ignore
        this.widget4_2 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/users/100_4.jpg',
                username: 'Anna Strong',
                desc: 'Visual Designer,Google Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-brand'
            }, {
                pic: './assets/media/users/100_14.jpg',
                username: 'Milano Esco',
                desc: 'Product Designer, Apple Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-warning'
            }, {
                pic: './assets/media/users/100_11.jpg',
                username: 'Nick Bold',
                desc: 'Web Developer, Facebook Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-danger'
            }, {
                pic: './assets/media/users/100_1.jpg',
                username: 'Wilter Delton',
                desc: 'Project Manager, Amazon Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-success'
            }, {
                pic: './assets/media/users/100_5.jpg',
                username: 'Nick Stone',
                desc: 'Visual Designer, Github Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-dark'
            },
        ]);
        // @ts-ignore
        this.widget4_3 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                icon: 'flaticon-pie-chart-1 kt-font-info',
                title: 'Metronic v6 has been arrived!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$500',
                valueColor: 'kt-font-info'
            }, {
                icon: 'flaticon-safe-shield-protection kt-font-success',
                title: 'Metronic community meet-up 2019 in Rome.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1260',
                valueColor: 'kt-font-success'
            }, {
                icon: 'flaticon2-line-chart kt-font-danger',
                title: 'Metronic Angular 8 version will be landing soon..',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1080',
                valueColor: 'kt-font-danger'
            }, {
                icon: 'flaticon2-pie-chart-1 kt-font-primary',
                title: 'ale! Purchase Metronic at 70% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-primary'
            }, {
                icon: 'flaticon2-rocket kt-font-brand',
                title: 'Metronic VueJS version is in progress. Stay tuned!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+134',
                valueColor: 'kt-font-brand'
            }, {
                icon: 'flaticon2-notification kt-font-warning',
                title: 'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-warning'
            }, {
                icon: 'flaticon2-file kt-font-focus',
                title: 'Metronic React version is in progress.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+13%',
                valueColor: 'kt-font-focus'
            },
        ]);
        // @ts-ignore
        this.widget4_4 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/client-logos/logo5.png',
                title: 'Trump Themes',
                desc: 'Make Metronic Great Again',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$2500',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo4.png',
                title: 'StarBucks',
                desc: 'Good Coffee & Snacks',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$290',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo3.png',
                title: 'Phyton',
                desc: 'A Programming Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$17',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo2.png',
                title: 'GreenMakers',
                desc: 'Make Green Great Again',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$2.50',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo1.png',
                title: 'FlyThemes',
                desc: 'A Let\'s Fly Fast Again Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+200',
                valueColor: 'kt-font-brand'
            },
        ]);
    };
    DashboardComponent.prototype.initChart = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            // Create chart instance
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["XYChart"]);
            // Add data
            chart.data = _this.dashbordReportsData.get_users_bonus;
            // Create axes
            var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["CategoryAxis"]());
            categoryAxis.dataFields.category = "user";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            // categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
            // 	if (target.dataItem && target.dataItem.index & 2 == 2) {
            // 		return dy + 25;
            // 	}
            // 	return dy;
            // });
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ValueAxis"]());
            // Create series
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ColumnSeries"]());
            series.dataFields.valueY = "bonus";
            series.dataFields.categoryX = "user";
            series.name = "Bonus";
            series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            series.columns.template.fillOpacity = .8;
            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            _this.chart = chart;
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] },
        { type: _core_application__WEBPACK_IMPORTED_MODULE_4__["ReportsService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _core_application__WEBPACK_IMPORTED_MODULE_4__["ReportsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/application */ "./src/app/core/application/index.ts");

// Angular



// Core Module




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
                    },
                ]),
            ],
            providers: [_core_application__WEBPACK_IMPORTED_MODULE_7__["ReportsService"]],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-dashboard-dashboard-module.js.map