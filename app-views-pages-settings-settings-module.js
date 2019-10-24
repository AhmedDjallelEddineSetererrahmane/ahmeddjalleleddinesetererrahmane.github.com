(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/settings/settings.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/settings/simple-setting/simple-setting.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/settings/simple-setting/simple-setting.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xl-12\">\n\t\t<div class=\"row row-full-height\">\n\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t<kt-portlet>\n\t\t\t\t\t<kt-portlet-header title=\"parametrages\" [class]=\"'kt-portlet__head--lg'\">\n\t\t\t\t\t</kt-portlet-header>\n\t\t\t\t\t<kt-portlet-body>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 form-group row\">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 kt-align-right\">\n\t\t\t\t\t\t\t\t<button (click)=\"open(content)\" class=\"col-lg-4 btn btn-primary btn-elevate kt-login__btn-primary\">Ajouter</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<angular-slickgrid class=\"col-lg-12\" gridId=\"settingGrid\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\" (onAngularGridCreated)=\"settingGridReady($event)\">\n\t\t\t\t\t\t\t</angular-slickgrid>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t</kt-portlet>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"kt-section__content\">\n\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t\t<div class=\"modal-header\">\n\t\t\t<h4 class=\"modal-title\">Ajouter</h4>\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"form-group col-lg-12\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<input type=\"text\" name=\"desc\" class=\"form-control form-control-sm\" placeholder=\"Description\" [(ngModel)]=\"description\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"addNew()\">Sauvgarder</button>\n\t\t</div>\n\t</ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/settings/settings.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/settings/settings.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/settings/settings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/settings/settings.component.ts ***!
  \************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-settings',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/views/pages/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/settings/settings.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/pages/settings/settings.module.ts ***!
  \*********************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../partials/content/general/material-preview/material-preview.module */ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings.component */ "./src/app/views/pages/settings/settings.component.ts");
/* harmony import */ var _simple_setting_simple_setting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./simple-setting/simple-setting.component */ "./src/app/views/pages/settings/simple-setting/simple-setting.component.ts");

// Angular










// Components
// Import AG Grid

// addons





var routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
        children: [
            {
                path: 'simple-setting/:setting',
                component: _simple_setting_simple_setting_component__WEBPACK_IMPORTED_MODULE_14__["SimpleSettingComponent"]
            }
        ]
    }
];
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_7__["PartialsModule"],
                _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_8__["MaterialPreviewModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([]),
                angular_slickgrid__WEBPACK_IMPORTED_MODULE_12__["AngularSlickgridModule"].forRoot()
            ],
            exports: [],
            providers: [_core_application__WEBPACK_IMPORTED_MODULE_9__["SettingsService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"], _core_application__WEBPACK_IMPORTED_MODULE_9__["DataSharingService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            entryComponents: [],
            declarations: [
                _settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
                _simple_setting_simple_setting_component__WEBPACK_IMPORTED_MODULE_14__["SimpleSettingComponent"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/views/pages/settings/simple-setting/simple-setting.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/settings/simple-setting/simple-setting.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3NldHRpbmdzL3NpbXBsZS1zZXR0aW5nL3NpbXBsZS1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/settings/simple-setting/simple-setting.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/settings/simple-setting/simple-setting.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SimpleSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSettingComponent", function() { return SimpleSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");







var SimpleSettingComponent = /** @class */ (function () {
    function SimpleSettingComponent(route, layoutUtilsService, settingService, modalService) {
        this.route = route;
        this.layoutUtilsService = layoutUtilsService;
        this.settingService = settingService;
        this.modalService = modalService;
        this.setting = '';
        this.columnDefinitions = [];
        this.gridOptions = {};
        this.dataset = [];
        this.description = '';
    }
    SimpleSettingComponent.prototype.settingGridReady = function (angularGrid) {
        this.settingGrid = angularGrid;
        this.dataView = angularGrid.dataView;
        this.grid = angularGrid.slickGrid;
        this.gridService = angularGrid.gridService;
    };
    SimpleSettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            {
                id: 'id', name: 'Id', field: 'id', sortable: true, width: 30,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Formatters"].editIcon,
                onCellClick: function (e, args) {
                    var id = args.dataContext.id;
                }
            },
            { id: 'description', name: 'Description', field: 'description', sortable: true, filterable: true }
        ];
        this.gridOptions = {
            enableAutoResize: true,
            enableCellNavigation: true,
            enableFiltering: true,
            enablePagination: true,
            pagination: {
                pageSizes: [10, 15, 20, 25, 30, 40, 50, 75, 100],
                pageSize: 10,
                totalItems: 0
            },
        };
        this.route.paramMap.subscribe(function (params) {
            console.log(params);
            _this.setting = params['params']['setting'];
            _this.settingService.getAll(_this.setting).subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
        });
    };
    SimpleSettingComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    SimpleSettingComponent.prototype.addNew = function () {
        var _this = this;
        var message = "ajout\u00E9 avec succ\u00E9s.";
        this.settingService.addNew(this.setting, this.description).subscribe(function (res) { return console.log(res); }, function (err) {
            _this.layoutUtilsService.showActionNotification('erreur', _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Delete, 5000, true, true);
        }, function () {
            _this.description = '';
            _this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create, 5000, true, true);
            _this.settingService.getAll(_this.setting).subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
        });
    };
    SimpleSettingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _core_application__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
    ]; };
    SimpleSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-simple-setting',
            template: __webpack_require__(/*! raw-loader!./simple-setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/settings/simple-setting/simple-setting.component.html"),
            styles: [__webpack_require__(/*! ./simple-setting.component.scss */ "./src/app/views/pages/settings/simple-setting/simple-setting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _core_application__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], SimpleSettingComponent);
    return SimpleSettingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-settings-settings-module.js.map