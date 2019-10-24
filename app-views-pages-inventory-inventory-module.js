(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-inventory-inventory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/do-inventory/do-inventory.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/do-inventory/do-inventory.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet>\n                    <kt-portlet-header title=\"Inventaire\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <div class=\"kt-portlet__body\">\n                            <div class=\"row\">\n                                <angular-slickgrid class=\"col-lg-12\" gridId=\"mGrid\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\" (onAngularGridCreated)=\"gridReady($event)\">\n                                </angular-slickgrid>\n                            </div>\n                        </div>\n\n                    </kt-portlet-body>\n                </kt-portlet>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"kt-section__content\">\n    <ng-template #content3 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Detail</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n        </div>\n        <div class=\"modal-body\">\n            <angular-slickgrid gridHeight=\"400\" gridId=\"productDetailGrid\" [columnDefinitions]=\"productDetailColumnDefinitions\" [gridOptions]=\"productDetailGridOptions\" [dataset]=\"productDetailDataset\" (onAngularGridCreated)=\"productDetailGridReady($event)\">\n            </angular-slickgrid>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Sauvgarder</button>\n        </div>\n    </ng-template>\n    <button hidden id=\"openProductDetailModal\" class=\"btn btn-primary\" (click)=\"openModal(content3)\">Launch demo modal</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/inventory-consultation/inventory-consultation.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/inventory-consultation/inventory-consultation.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet>\n                    <kt-portlet-header title=\"Consultation de stock\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <div class=\"kt-portlet__body\">\n                            <div class=\"row\">\n                                <angular-slickgrid class=\"col-lg-12\" gridId=\"mGrid\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\" (onAngularGridCreated)=\"gridReady($event)\">\n                                </angular-slickgrid>\n                            </div>\n                        </div>\n\n                    </kt-portlet-body>\n                </kt-portlet>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"kt-section__content\">\n    <ng-template #content3 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Detail</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n        </div>\n        <div class=\"modal-body\">\n            <angular-slickgrid gridHeight=\"400\" gridId=\"productDetailGrid\" [columnDefinitions]=\"productDetailColumnDefinitions\" [gridOptions]=\"productDetailGridOptions\" [dataset]=\"productDetailDataset\" (onAngularGridCreated)=\"productDetailGridReady($event)\">\n            </angular-slickgrid>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\n        </div>\n    </ng-template>\n    <button hidden id=\"openProductDetailModal\" class=\"btn btn-primary\" (click)=\"openModal(content3)\">Launch demo modal</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/inventory.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/inventory.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/providers-credits/providers-credits.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/providers-credits/providers-credits.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-xl-12\">\n            <div class=\"row row-full-height\">\n                <div class=\"col-xl-12\">\n                    <kt-portlet>\n                        <kt-portlet-header title=\"Etat de credit des Fournisseur\" [class]=\"'kt-portlet__head--lg'\">\n                        </kt-portlet-header>\n                        <kt-portlet-body>\n                            <div class=\"row\">\n                                <angular-slickgrid class=\"col-lg-12\" gridId=\"creditGrid\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\" (onAngularGridCreated)=\"gridReady($event)\">\n                                </angular-slickgrid>\n                            </div>\n                        </kt-portlet-body>\n                    </kt-portlet>\n                </div>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/transactions-history/transactions-history.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/transactions-history/transactions-history.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet>\n                    <kt-portlet-header title=\"Journal de Transactions\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <div class=\"kt-portlet__body\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-lg-2 col-form-label\">Date de début:</label>\n                                <div class=\"col-lg-3\">\n                                    <div class=\"input-group input-group-sm\">\n                                        <input class=\"form-control form-control-sm\" placeholder=\"jj-mm-aaa\" name=\"dp\" [(ngModel)]=\"startDate\" ngbDatepicker #d=\"ngbDatepicker\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary btn-icon\" (click)=\"d.toggle()\" type=\"button\">\n                                                    <i class=\"la la-calendar\"></i>\n                                                </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <label class=\"col-lg-2 col-form-label\">Date de fin:</label>\n                                <div class=\"col-lg-3\">\n                                    <div class=\"input-group input-group-sm\">\n                                        <input class=\"form-control form-control-sm\" placeholder=\"jj-mm-aaa\" name=\"dp1\" [(ngModel)]=\"endDate\" ngbDatepicker #d1=\"ngbDatepicker\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary btn-icon\" (click)=\"d1.toggle()\" type=\"button\">\n                                                    <i class=\"la la-calendar\"></i>\n                                                </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-2\">\n                                    <button (click)=\"getData()\" class=\" btn btn-sm btn-danger btn-elevate \">OK</button>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <angular-slickgrid class=\"col-lg-12\" gridId=\"mGrid\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\" (onAngularGridCreated)=\"gridReady($event)\">\n                                </angular-slickgrid>\n                            </div>\n                        </div>\n\n                    </kt-portlet-body>\n                </kt-portlet>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/pages/inventory/do-inventory/do-inventory.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/inventory/do-inventory/do-inventory.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9kby1pbnZlbnRvcnkvZG8taW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/inventory/do-inventory/do-inventory.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/inventory/do-inventory/do-inventory.component.ts ***!
  \******************************************************************************/
/*! exports provided: DoInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoInventoryComponent", function() { return DoInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../helpers */ "./src/helpers.ts");
/* harmony import */ var _app_core_base_crud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../app/core/_base/crud */ "./src/app/core/_base/crud/index.ts");








var DoInventoryComponent = /** @class */ (function () {
    function DoInventoryComponent(layoutUtilsService, mService, modalService, datePipe) {
        this.layoutUtilsService = layoutUtilsService;
        this.mService = mService;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.columnDefinitions = [];
        this.gridOptions = {};
        this.dataset = [];
        this.productDetailDataset = [];
    }
    DoInventoryComponent.prototype.gridReady = function (angularGrid) {
        this.mGrid = angularGrid;
        this.dataView = angularGrid.dataView;
        this.grid = angularGrid.slickGrid;
        this.gridService = angularGrid.gridService;
    };
    DoInventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            { id: 'product_code', name: 'Code', field: 'product.product_code', sortable: true, width: 50, filterable: true },
            { id: 'description', name: 'Description', field: 'product.description', sortable: true, width: 150, filterable: true },
            { id: 'actual_qty', name: 'QTE Actuelle', field: 'actual_qty', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
            { id: 'initial_qty', name: 'QTE INITIAL', field: 'initial_qty', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
            { id: 'changed_qty', name: 'QTE Changee', field: 'changed_qty', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
            { id: 'pmp', name: 'PMP', field: 'pmp', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
            {
                id: 'new_value',
                name: 'Nouvelle qte',
                field: 'new_value',
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Editors"].integer
                },
                onCellChange: function (e, args) {
                    _this.mService.doInventory(args.dataContext.product_id, {
                        actual_qty: args.dataContext.new_value,
                        changed_qty: args.dataContext.new_value - args.dataContext.actual_qty,
                        initial_qty: args.dataContext.actual_qty,
                        created_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getRequiredFields"])().local_ip,
                        last_updated_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getRequiredFields"])().local_ip,
                        created_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getRequiredFields"])().user_id,
                        last_modified_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getRequiredFields"])().user_id
                    }).subscribe(function (res) { return _this.layoutUtilsService.showActionNotification('Inventaire effectue avec succes', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_7__["MessageType"].Create, 5000, true, true); }, function (error) { return console.log(error); }, function () {
                        _this.mService.getInventory().subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); });
                    });
                }
            },
            {
                id: 'details',
                field: 'details',
                excludeFromHeaderMenu: true,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Formatters"].editIcon,
                minWidth: 30,
                maxWidth: 30,
                onCellClick: function (e, args) {
                    _this.productId = args.dataContext.product_id;
                    // tslint:disable-next-line:max-line-length
                    _this.initProductDetailGrid(args.dataContext.product_id, args.dataContext.product.description, args.dataContext.product.product_code, args.dataContext.actual_qty);
                    var element = document.getElementById('openProductDetailModal');
                    element.click();
                }
            }
        ];
        this.gridOptions = {
            enableAutoResize: true,
            enableCellNavigation: true,
            enableFiltering: true,
            enablePagination: true,
            editable: true,
            pagination: {
                pageSizes: [10, 15, 20, 25, 30, 40, 50, 75, 100],
                pageSize: 10,
                totalItems: 0
            },
            dataItemColumnValueExtractor: function getItemColumnValue(item, column) {
                var val = undefined;
                try {
                    // tslint:disable-next-line:no-eval
                    val = eval('item.' + column.field);
                }
                catch (e) {
                    // ignore
                }
                return val;
            }
        };
        this.mService.getInventory().subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
    };
    DoInventoryComponent.prototype.initProductDetailGrid = function (productId, productDescription, productCode, qty) {
        var _this = this;
        this.productDetailColumnDefinitions = [
            {
                id: 'delete',
                field: 'id',
                excludeFromHeaderMenu: true,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Formatters"].deleteIcon,
                minWidth: 30,
                maxWidth: 30,
                // use onCellClick OR grid.onClick.subscribe which you can see down below
                onCellClick: function (e, args) {
                    console.log(args);
                    if (confirm('Êtes-vous sûr de supprimer cette ligne?')) {
                        _this.productDetailGrid.gridService.deleteItem(args.dataContext);
                    }
                }
            },
            {
                id: 'product_code', name: 'Code Produit', field: 'product_code',
                sortable: true,
                resizable: true,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Editors"].text
                }
            },
            {
                id: 'product_description', name: 'Description', field: 'description',
                sortable: true,
                resizable: true,
                width: 130,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Editors"].text
                }
            },
            {
                id: 'serial_number', name: 'Numero de series', field: 'serial_number',
                sortable: true,
                resizable: true,
                width: 400,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Editors"].text
                }
            },
            {
                id: 'batch_number', name: 'Numero de Lot', field: 'batch_number',
                sortable: true,
                resizable: true,
                width: 400,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Editors"].text
                }
            }
        ];
        this.productDetailGridOptions = {
            asyncEditorLoading: false,
            editable: true,
            enableColumnPicker: true,
            enableCellNavigation: true,
            enableRowSelection: true,
            enableAutoResize: true
        };
        this.productDetailDataset = [];
        for (var i = 0; i < qty; i++) {
            this.productDetailDataset.push({
                id: i,
                inventory_receipt_id: null,
                product_code: productCode,
                description: productDescription,
                product_id: productId,
                serial_number: '',
                batch_number: '',
                created_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getRequiredFields"])().local_ip,
                last_updated_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getRequiredFields"])().local_ip,
                created_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getRequiredFields"])().user_id,
                last_modified_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getRequiredFields"])().user_id
            });
        }
    };
    DoInventoryComponent.prototype.productDetailGridReady = function (angularGrid) {
        this.productDetailAngularGrid = angularGrid;
        this.productDetailDataView = angularGrid.dataView;
        this.productDetailGrid = angularGrid.slickGrid;
        this.productDetailGridService = angularGrid.gridService;
    };
    DoInventoryComponent.prototype.save = function () {
        var _this = this;
        this.productDetailDataset.forEach(function (element) {
            delete element.product_code;
            delete element.description;
        });
        this.mService.doInventoryDetail(this.productId, { details: this.productDetailDataset }).subscribe(function (res) { return _this.layoutUtilsService.showActionNotification('Inventaire effectue avec succes', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_7__["MessageType"].Create, 5000, true, true); }, function (err) { return _this.layoutUtilsService.showActionNotification('Erreur', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_7__["MessageType"].Create, 5000, true, true); }, function () { return _this.modalService.dismissAll('Close click'); });
    };
    DoInventoryComponent.prototype.openModal = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    DoInventoryComponent.ctorParameters = function () { return [
        { type: _app_core_base_crud__WEBPACK_IMPORTED_MODULE_7__["LayoutUtilsService"] },
        { type: _core_application__WEBPACK_IMPORTED_MODULE_3__["InventoryService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
    ]; };
    DoInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-do-inventory',
            template: __webpack_require__(/*! raw-loader!./do-inventory.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/do-inventory/do-inventory.component.html"),
            styles: [__webpack_require__(/*! ./do-inventory.component.scss */ "./src/app/views/pages/inventory/do-inventory/do-inventory.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_base_crud__WEBPACK_IMPORTED_MODULE_7__["LayoutUtilsService"],
            _core_application__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], DoInventoryComponent);
    return DoInventoryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/inventory-consultation/inventory-consultation.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory-consultation/inventory-consultation.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9pbnZlbnRvcnktY29uc3VsdGF0aW9uL2ludmVudG9yeS1jb25zdWx0YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/inventory/inventory-consultation/inventory-consultation.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory-consultation/inventory-consultation.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: InventoryConsultationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryConsultationComponent", function() { return InventoryConsultationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var InventoryConsultationComponent = /** @class */ (function () {
    function InventoryConsultationComponent(mService, modalService, datePipe) {
        this.mService = mService;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.columnDefinitions = [];
        this.gridOptions = {};
        this.dataset = [];
        this.productDetailDataset = [];
    }
    InventoryConsultationComponent.prototype.gridReady = function (angularGrid) {
        this.mGrid = angularGrid;
        this.dataView = angularGrid.dataView;
        this.grid = angularGrid.slickGrid;
        this.gridService = angularGrid.gridService;
    };
    InventoryConsultationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            {
                id: 'id', name: 'Id', field: 'id', sortable: true, width: 30
            },
            { id: 'product_code', name: 'Code', field: 'product.product_code', sortable: true, width: 50, filterable: true },
            { id: 'description', name: 'Description', field: 'product.description', sortable: true, width: 150, filterable: true },
            { id: 'actual_qty', name: 'QTE Actuelle', field: 'actual_qty', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
            { id: 'initial_qty', name: 'QTE INITIAL', field: 'initial_qty', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
            { id: 'changed_qty', name: 'QTE Changee', field: 'changed_qty', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
            { id: 'pmp', name: 'PMP', field: 'pmp', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
            {
                id: 'details',
                field: 'details',
                excludeFromHeaderMenu: true,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Formatters"].editIcon,
                minWidth: 30,
                maxWidth: 30,
                onCellClick: function (e, args) {
                    // tslint:disable-next-line:max-line-length
                    _this.initProductDetailGrid(args.dataContext.product_id);
                    var element = document.getElementById('openProductDetailModal');
                    element.click();
                }
            }
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
            dataItemColumnValueExtractor: function getItemColumnValue(item, column) {
                var val = undefined;
                try {
                    // tslint:disable-next-line:no-eval
                    val = eval('item.' + column.field);
                }
                catch (e) {
                    // ignore
                }
                return val;
            }
        };
        this.mService.getInventory().subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
    };
    InventoryConsultationComponent.prototype.openModal = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    InventoryConsultationComponent.prototype.initProductDetailGrid = function (productId) {
        var _this = this;
        this.productDetailColumnDefinitions = [
            {
                id: 'product_code', name: 'Code Produit', field: 'product.product_code',
                sortable: true,
                resizable: true,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].string
            },
            {
                id: 'product_description', name: 'Description', field: 'product.description',
                sortable: true,
                resizable: true,
                width: 130,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].string
            },
            {
                id: 'serial_number', name: 'Numero de series', field: 'serial_number',
                sortable: true,
                resizable: true,
                width: 400,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].string,
            },
            {
                id: 'batch_number', name: 'Numero de Lot', field: 'batch_number',
                sortable: true,
                resizable: true,
                width: 400,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].string
            }
        ];
        this.productDetailGridOptions = {
            asyncEditorLoading: false,
            editable: true,
            enableColumnPicker: true,
            enableCellNavigation: true,
            enableRowSelection: true,
            enableAutoResize: true,
            dataItemColumnValueExtractor: function getItemColumnValue(item, column) {
                var val = undefined;
                try {
                    // tslint:disable-next-line:no-eval
                    val = eval('item.' + column.field);
                }
                catch (e) {
                    // ignore
                }
                return val;
            }
        };
        this.mService.getInventoryDetails(productId).subscribe(function (res) { return _this.productDetailDataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
    };
    InventoryConsultationComponent.prototype.productDetailGridReady = function (angularGrid) {
        this.productDetailAngularGrid = angularGrid;
        this.productDetailDataView = angularGrid.dataView;
        this.productDetailGrid = angularGrid.slickGrid;
        this.productDetailGridService = angularGrid.gridService;
    };
    InventoryConsultationComponent.ctorParameters = function () { return [
        { type: _core_application__WEBPACK_IMPORTED_MODULE_3__["InventoryService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
    ]; };
    InventoryConsultationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-inventory-consultation',
            template: __webpack_require__(/*! raw-loader!./inventory-consultation.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/inventory-consultation/inventory-consultation.component.html"),
            styles: [__webpack_require__(/*! ./inventory-consultation.component.scss */ "./src/app/views/pages/inventory/inventory-consultation/inventory-consultation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_application__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], InventoryConsultationComponent);
    return InventoryConsultationComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/inventory.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/inventory/inventory.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory.component.ts ***!
  \**************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InventoryComponent = /** @class */ (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-inventory',
            template: __webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.scss */ "./src/app/views/pages/inventory/inventory.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/inventory.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory.module.ts ***!
  \***********************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory.component */ "./src/app/views/pages/inventory/inventory.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../partials/content/general/material-preview/material-preview.module */ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _invoicing_products_products_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../invoicing/products/products.module */ "./src/app/views/pages/invoicing/products/products.module.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _transactions_history_transactions_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transactions-history/transactions-history.component */ "./src/app/views/pages/inventory/transactions-history/transactions-history.component.ts");
/* harmony import */ var _inventory_consultation_inventory_consultation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inventory-consultation/inventory-consultation.component */ "./src/app/views/pages/inventory/inventory-consultation/inventory-consultation.component.ts");
/* harmony import */ var _providers_credits_providers_credits_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./providers-credits/providers-credits.component */ "./src/app/views/pages/inventory/providers-credits/providers-credits.component.ts");
/* harmony import */ var _do_inventory_do_inventory_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./do-inventory/do-inventory.component */ "./src/app/views/pages/inventory/do-inventory/do-inventory.component.ts");



















var routes = [
    { path: 'providers', loadChildren: function () { return __webpack_require__.e(/*! import() | app-views-pages-inventory-providers-providers-module */ "app-views-pages-inventory-providers-providers-module").then(__webpack_require__.bind(null, /*! app/views/pages/inventory/providers/providers.module */ "./src/app/views/pages/inventory/providers/providers.module.ts")).then(function (m) { return m.ProvidersModule; }); } },
    { path: 'po', loadChildren: function () { return __webpack_require__.e(/*! import() | app-views-pages-inventory-purchase-order-purchase-order-module */ "app-views-pages-inventory-purchase-order-purchase-order-module").then(__webpack_require__.bind(null, /*! app/views/pages/inventory/purchase-order/purchase-order.module */ "./src/app/views/pages/inventory/purchase-order/purchase-order.module.ts")).then(function (m) { return m.PurchaseOrderModule; }); } },
    { path: 'inventory-receipts', loadChildren: function () { return __webpack_require__.e(/*! import() | app-views-pages-inventory-inventory-receipt-inventory-receipt-module */ "app-views-pages-inventory-inventory-receipt-inventory-receipt-module").then(__webpack_require__.bind(null, /*! app/views/pages/inventory/inventory-receipt/inventory-receipt.module */ "./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.module.ts")).then(function (m) { return m.InventoryReceiptModule; }); } },
    { path: 'providers-payments', loadChildren: function () { return __webpack_require__.e(/*! import() | app-views-pages-inventory-providers-payments-providers-payments-module */ "app-views-pages-inventory-providers-payments-providers-payments-module").then(__webpack_require__.bind(null, /*! app/views/pages/inventory/providers-payments/providers-payments.module */ "./src/app/views/pages/inventory/providers-payments/providers-payments.module.ts")).then(function (m) { return m.ProvidersPaymentsModule; }); } },
    {
        path: 'transactions-history',
        component: _transactions_history_transactions_history_component__WEBPACK_IMPORTED_MODULE_15__["TransactionsHistoryComponent"]
    },
    {
        path: 'inventory-consultation',
        component: _inventory_consultation_inventory_consultation_component__WEBPACK_IMPORTED_MODULE_16__["InventoryConsultationComponent"]
    },
    {
        path: 'providers-credit',
        component: _providers_credits_providers_credits_component__WEBPACK_IMPORTED_MODULE_17__["ProvidersCreditsComponent"]
    },
    {
        path: 'do-inventory',
        component: _do_inventory_do_inventory_component__WEBPACK_IMPORTED_MODULE_18__["DoInventoryComponent"]
    }
];
var InventoryModule = /** @class */ (function () {
    function InventoryModule() {
    }
    InventoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_7__["PartialsModule"],
                _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_8__["MaterialPreviewModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _invoicing_products_products_module__WEBPACK_IMPORTED_MODULE_11__["ProductsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__["AgGridModule"].withComponents([]),
                angular_slickgrid__WEBPACK_IMPORTED_MODULE_13__["AngularSlickgridModule"].forRoot()
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            providers: [_core_application__WEBPACK_IMPORTED_MODULE_14__["SettingsService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"], _core_application__WEBPACK_IMPORTED_MODULE_14__["DataSharingService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _core_application__WEBPACK_IMPORTED_MODULE_14__["InventoryService"]],
            entryComponents: [],
            declarations: [
                _inventory_component__WEBPACK_IMPORTED_MODULE_3__["InventoryComponent"],
                _transactions_history_transactions_history_component__WEBPACK_IMPORTED_MODULE_15__["TransactionsHistoryComponent"],
                _inventory_consultation_inventory_consultation_component__WEBPACK_IMPORTED_MODULE_16__["InventoryConsultationComponent"],
                _providers_credits_providers_credits_component__WEBPACK_IMPORTED_MODULE_17__["ProvidersCreditsComponent"],
                _do_inventory_do_inventory_component__WEBPACK_IMPORTED_MODULE_18__["DoInventoryComponent"]
            ]
        })
    ], InventoryModule);
    return InventoryModule;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/providers-credits/providers-credits.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/providers-credits/providers-credits.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9wcm92aWRlcnMtY3JlZGl0cy9wcm92aWRlcnMtY3JlZGl0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/inventory/providers-credits/providers-credits.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/providers-credits/providers-credits.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProvidersCreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersCreditsComponent", function() { return ProvidersCreditsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");



var ProvidersCreditsComponent = /** @class */ (function () {
    function ProvidersCreditsComponent(inventoryService) {
        this.inventoryService = inventoryService;
        this.columnDefinitions = [];
        this.gridOptions = {};
        this.dataset = [];
    }
    ProvidersCreditsComponent.prototype.gridReady = function (angularGrid) {
        this.creditGrid = angularGrid;
        this.dataView = angularGrid.dataView;
        this.grid = angularGrid.slickGrid;
        this.gridService = angularGrid.gridService;
    };
    ProvidersCreditsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            {
                id: 'id', name: 'Id', field: 'id', sortable: true, width: 30,
            },
            { id: 'provider_code', name: 'Code', field: 'provider.provider_code', sortable: true, width: 80, filterable: true },
            { id: 'provider_description', name: 'Nom', field: 'provider.description', sortable: true, width: 170, filterable: true },
            { id: 'payments', name: 'Paiements', field: 'payments', sortable: true, filterable: true },
            { id: 'credit', name: 'Credit', field: 'credit', filterable: true },
            { id: 'solde', name: 'Solde', field: 'solde', sortable: true, filterable: true }
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
            dataItemColumnValueExtractor: function getItemColumnValue(item, column) {
                var val = undefined;
                try {
                    val = eval("item." + column.field);
                }
                catch (e) {
                    // ignore
                }
                return val;
            }
        };
        // fill the dataset with your data
        this.inventoryService.getProvidersCredit().subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
    };
    ProvidersCreditsComponent.ctorParameters = function () { return [
        { type: _core_application__WEBPACK_IMPORTED_MODULE_2__["InventoryService"] }
    ]; };
    ProvidersCreditsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-providers-credits',
            template: __webpack_require__(/*! raw-loader!./providers-credits.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/providers-credits/providers-credits.component.html"),
            styles: [__webpack_require__(/*! ./providers-credits.component.scss */ "./src/app/views/pages/inventory/providers-credits/providers-credits.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_application__WEBPACK_IMPORTED_MODULE_2__["InventoryService"]])
    ], ProvidersCreditsComponent);
    return ProvidersCreditsComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/transactions-history/transactions-history.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/transactions-history/transactions-history.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS90cmFuc2FjdGlvbnMtaGlzdG9yeS90cmFuc2FjdGlvbnMtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/inventory/transactions-history/transactions-history.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/transactions-history/transactions-history.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TransactionsHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsHistoryComponent", function() { return TransactionsHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var TransactionsHistoryComponent = /** @class */ (function () {
    function TransactionsHistoryComponent(mService, router, datePipe) {
        this.mService = mService;
        this.router = router;
        this.datePipe = datePipe;
        this.columnDefinitions = [];
        this.gridOptions = {};
        this.dataset = [];
    }
    TransactionsHistoryComponent.prototype.gridReady = function (angularGrid) {
        this.mGrid = angularGrid;
        this.dataView = angularGrid.dataView;
        this.grid = angularGrid.slickGrid;
        this.gridService = angularGrid.gridService;
    };
    TransactionsHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            {
                id: 'id', name: 'Id', field: 'id', sortable: true, width: 30
            },
            { id: 'product_code', name: 'Code', field: 'product.product_code', sortable: true, width: 50, filterable: true },
            { id: 'description', name: 'Description', field: 'product.description', sortable: true, width: 150, filterable: true },
            { id: 'date', name: 'Date ', field: 'date', sortable: true, filterable: true },
            { id: 'transaction_type', name: 'Type de transaction ', field: 'transaction_type', sortable: true, filterable: true },
            { id: 'actual_qty', name: 'QTE Actuelle', field: 'actual_qty', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
            { id: 'initial_qty', name: 'QTE INITIAL', field: 'initial_qty', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
            { id: 'changed_qty', name: 'QTE Changee', field: 'changed_qty', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
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
            dataItemColumnValueExtractor: function getItemColumnValue(item, column) {
                var val = undefined;
                try {
                    // tslint:disable-next-line:no-eval
                    val = eval('item.' + column.field);
                }
                catch (e) {
                    // ignore
                }
                return val;
            }
        };
        // fill the dataset with  data
        var date = new Date();
        var firstDay = this.datePipe.transform(new Date(date.getFullYear(), date.getMonth(), 1), 'yyyy-MM-dd');
        var lastDay = this.datePipe.transform(date, 'yyyy-MM-dd');
        this.mService.getTransactionsHistory({ start_date: firstDay, end_date: lastDay }).subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
    };
    TransactionsHistoryComponent.prototype.getData = function () {
        var _this = this;
        this.mService.getTransactionsHistory({
            start_date: this.startDate.year + '/' + this.startDate.month + '/' + this.startDate.day,
            end_date: this.endDate.year + '/' + this.endDate.month + '/' + this.endDate.day
        }).subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
    };
    TransactionsHistoryComponent.ctorParameters = function () { return [
        { type: _core_application__WEBPACK_IMPORTED_MODULE_3__["InventoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
    ]; };
    TransactionsHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-transactions-history',
            template: __webpack_require__(/*! raw-loader!./transactions-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/transactions-history/transactions-history.component.html"),
            styles: [__webpack_require__(/*! ./transactions-history.component.scss */ "./src/app/views/pages/inventory/transactions-history/transactions-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_application__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], TransactionsHistoryComponent);
    return TransactionsHistoryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-inventory-inventory-module.js.map