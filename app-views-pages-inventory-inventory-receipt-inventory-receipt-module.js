(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-inventory-inventory-receipt-inventory-receipt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/inventory-receipt/create-receipt/create-receipt.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/inventory-receipt/create-receipt/create-receipt.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet>\n                    <kt-portlet-header title=\"Ajouter Une Reception\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <form class=\"kt-form\" id=\"print-section\">\n                            <div class=\"row\">\n                                <div class=\"form-group col-lg-2\">\n                                    <label>Le Code du BC</label>\n                                    <input type=\"text\" name=\"poCode\" class=\"form-control form-control-sm\" placeholder=\"Le code du Bon de commande\" [(ngModel)]=\"poCode\" (change)=\"getPoByCode()\">\n                                </div>\n                                <div class=\"form-group col-lg-1\">\n                                    <label style=\"color: white\">i</label>\n                                    <button type=\"button\" (click)=\"openModal(content)\" class=\"form-control form-control-sm  btn-danger  btn-circle btn-icon\"><i class=\"flaticon-notes\"></i></button>\n                                </div>\n                                <div class=\"form-group col-lg-2\">\n                                    <label>Le Code du Fournisseur</label>\n                                    <input type=\"text\" name=\"providerCode\" class=\"form-control form-control-sm\" placeholder=\"Le code du fournisseur\" [(ngModel)]=\"providerCode\" (change)=\"getProviderByCode()\">\n                                </div>\n                                <div class=\"form-group col-lg-1\">\n                                    <label style=\"color: white\">i</label>\n                                    <button type=\"button\" (click)=\"openModal(content4)\" class=\"form-control form-control-sm  btn-danger  btn-circle btn-icon\"><i class=\"flaticon-notes\"></i></button>\n                                </div>\n                                <div class=\"form-group col-lg-3 \">\n                                    <label>La date de creation *</label>\n                                    <div class=\"input-group input-group-sm\">\n                                        <input class=\"form-control form-control-sm\" placeholder=\"jj-mm-aaa\" name=\"dp\" [(ngModel)]=\"date1\" ngbDatepicker #d=\"ngbDatepicker\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary btn-icon\" (click)=\"d.toggle()\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-3 \">\n                                    <label>La date de Reception *</label>\n                                    <div class=\"input-group input-group-sm\">\n                                        <input class=\"form-control form-control-sm\" placeholder=\"jj-mm-aaa\" name=\"dp1\" [(ngModel)]=\"date2\" ngbDatepicker #d1=\"ngbDatepicker\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary btn-icon\" (click)=\"d1.toggle()\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-2\">\n                                    <label for=\"exampleSelects\">Taxable</label>\n                                    <div class=\"col-3\">\n                                        <span class=\"kt-switch kt-switch--outline kt-switch--icon kt-switch--dark\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"dutiable\" [(ngModel)]=\"inventoryReceipt.dutiable\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n                                        </label>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-3\">\n                                    <label for=\"exampleSelects\">Tax</label>\n                                    <select class=\"form-control form-control-sm\" id=\"exampleSelects\" name=\"tax\" [(ngModel)]=\"inventoryReceipt.tax_id\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let object of taxes\" [value]=\"object.id\">{{object.description}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n                                </div>\n                                <div class=\"form-group col-lg-2\">\n                                    <label for=\"exampleSelects\">Priotitaire</label>\n                                    <div class=\"col-3\">\n                                        <span class=\"kt-switch kt-switch--outline kt-switch--icon kt-switch--dark\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"priority\" [(ngModel)]=\"inventoryReceipt.priority\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n                                        </label>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <button class=\"btn btn-primary btn-elevate col-lg-4\" (click)=\"addNewItem()\">Ajouter une ligne</button>\n                            </div>\n                            <br>\n                            <angular-slickgrid gridId=\"poDetailsGrid\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\" (onAngularGridCreated)=\"angularGridReady($event)\">\n                            </angular-slickgrid>\n\n                            <br>\n                            <div class=\"row \">\n                                <div class=\"col-lg-6\"></div>\n                                <div class=\"col-lg-6 kt-align-right row\">\n                                    <div class=\"form-group col-lg-3\">\n                                        <label>Total HT</label>\n                                        <input type=\"number\" name=\"totalHt\" class=\"form-control form-control-sm\" placeholder=\"\" [(ngModel)]=\"totalHt\" disabled>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"kt-login__actions\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-6 form-group row\">\n\n                                    </div>\n                                    <div class=\"col-lg-6 kt-align-right\">\n                                        <button (click)=\"addInventoryReceipt()\" [className]=\"loading ? 'col-lg-4 btn btn-primary btn-elevate kt-login__btn-primary kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light' : 'col-lg-4 btn btn-primary btn-elevate kt-login__btn-primary'\">Ajouter la Reception</button>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </form>\n                    </kt-portlet-body>\n\n                </kt-portlet>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n\n<div class=\"kt-section__content\">\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">La liste des Bon de commande</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n        </div>\n        <div class=\"modal-body\">\n            <angular-slickgrid gridHeight=\"400\" gridId=\"poGrid\" [columnDefinitions]=\"poColumnDefinitions\" [gridOptions]=\"poGridOptions\" [dataset]=\"poDataset\" (onAngularGridCreated)=\"poGridReady($event)\">\n            </angular-slickgrid>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePoCode()\">Sélectionner</button>\n        </div>\n    </ng-template>\n</div>\n\n\n<div class=\"kt-section__content\">\n    <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Code Produit</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n        </div>\n        <div class=\"modal-body\">\n            <angular-slickgrid gridHeight=\"400\" gridId=\"productGrid\" [columnDefinitions]=\"productColumnDefinitions\" [gridOptions]=\"productGridOptions\" [dataset]=\"productDataset\" (onAngularGridCreated)=\"productGridReady($event)\">\n            </angular-slickgrid>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveProductCode()\">Sélectionner</button>\n        </div>\n    </ng-template>\n    <button hidden id=\"openProductModal\" class=\"btn btn-primary\" (click)=\"openModal(content2)\">Launch demo modal</button>\n</div>\n\n<div class=\"kt-section__content\">\n    <ng-template #content3 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Detail de la Reception</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n        </div>\n        <div class=\"modal-body\">\n            <angular-slickgrid gridHeight=\"400\" gridId=\"productDetailGrid\" [columnDefinitions]=\"productDetailColumnDefinitions\" [gridOptions]=\"productDetailGridOptions\" [dataset]=\"productDetailDataset\" (onAngularGridCreated)=\"productDetailGridReady($event)\">\n            </angular-slickgrid>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Sauvgarder</button>\n        </div>\n    </ng-template>\n    <button hidden id=\"openProductDetailModal\" class=\"btn btn-primary\" (click)=\"openModal(content3)\">Launch demo modal</button>\n</div>\n<div class=\"kt-section__content\">\n    <ng-template #content4 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">La liste des Fournisseur</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n        </div>\n        <div class=\"modal-body\">\n            <angular-slickgrid gridHeight=\"400\" gridId=\"providerGrid\" [columnDefinitions]=\"providerColumnDefinitions\" [gridOptions]=\"providerGridOptions\" [dataset]=\"providerDataset\" (onAngularGridCreated)=\"providerGridReady($event)\">\n            </angular-slickgrid>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveProviderCode()\">Sélectionner</button>\n        </div>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/inventory-receipt/receipts-list/receipts-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/inventory-receipt/receipts-list/receipts-list.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet>\n                    <kt-portlet-header title=\"Journal de reception\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <div class=\"kt-portlet__body\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-lg-2 col-form-label\">Date de début:</label>\n                                <div class=\"col-lg-3\">\n                                    <div class=\"input-group input-group-sm\">\n                                        <input class=\"form-control form-control-sm\" placeholder=\"jj-mm-aaa\" name=\"dp\" [(ngModel)]=\"startDate\" ngbDatepicker #d=\"ngbDatepicker\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary btn-icon\" (click)=\"d.toggle()\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <label class=\"col-lg-2 col-form-label\">Date de fin:</label>\n                                <div class=\"col-lg-3\">\n                                    <div class=\"input-group input-group-sm\">\n                                        <input class=\"form-control form-control-sm\" placeholder=\"jj-mm-aaa\" name=\"dp1\" [(ngModel)]=\"endDate\" ngbDatepicker #d1=\"ngbDatepicker\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary btn-icon\" (click)=\"d1.toggle()\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-2\">\n                                    <button (click)=\"getData()\" class=\" btn btn-sm btn-danger btn-elevate \">OK</button>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <angular-slickgrid class=\"col-lg-12\" gridId=\"mGrid\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\" (onAngularGridCreated)=\"gridReady($event)\">\n                                </angular-slickgrid>\n                            </div>\n                        </div>\n\n                    </kt-portlet-body>\n                </kt-portlet>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/pages/inventory/inventory-receipt/create-receipt/create-receipt.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory-receipt/create-receipt/create-receipt.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9pbnZlbnRvcnktcmVjZWlwdC9jcmVhdGUtcmVjZWlwdC9jcmVhdGUtcmVjZWlwdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/inventory/inventory-receipt/create-receipt/create-receipt.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory-receipt/create-receipt/create-receipt.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CreateReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReceiptComponent", function() { return CreateReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../app/core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app/core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../helpers */ "./src/helpers.ts");








var CreateReceiptComponent = /** @class */ (function () {
    function CreateReceiptComponent(layoutUtilsService, mService, modalService, inventoryService, router) {
        this.layoutUtilsService = layoutUtilsService;
        this.mService = mService;
        this.modalService = modalService;
        this.inventoryService = inventoryService;
        this.router = router;
        this.loading = false;
        this.poCode = null;
        this.poId = null;
        this.poDetail = [];
        this.providerCode = null;
        this.poDataset = [];
        this.providerDataset = [];
        this.productDataset = [];
        this.productDetailDataset = [];
        this.receptionDetailsByProduct = [];
        this.totalHt = 0;
        this.date1 = new Date();
        this.date2 = new Date();
    }
    CreateReceiptComponent.prototype.ngOnInit = function () {
        this.initGrid();
        this.initProductGrid();
        this.initpoGrid();
        this.initProvidersGrid();
        this.inventoryReceipt = new _app_core_application__WEBPACK_IMPORTED_MODULE_2__["InventoryReceipt"]();
        this.taxes = JSON.parse(localStorage.getItem('Tax'));
    };
    CreateReceiptComponent.prototype.angularGridReady = function (angularGrid) {
        this.angularGrid = angularGrid;
        this.dataView = angularGrid.dataView;
        this.grid = angularGrid.slickGrid;
        this.gridService = angularGrid.gridService;
    };
    CreateReceiptComponent.prototype.initGrid = function () {
        var _this = this;
        this.columnDefinitions = [
            {
                id: 'delete',
                field: 'id',
                excludeFromHeaderMenu: true,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Formatters"].deleteIcon,
                minWidth: 30,
                maxWidth: 30,
                // use onCellClick OR grid.onClick.subscribe which you can see down below
                onCellClick: function (e, args) {
                    console.log(args);
                    if (confirm('Êtes-vous sûr de supprimer cette ligne?')) {
                        _this.angularGrid.gridService.deleteItem(args.dataContext);
                        _this.calculateTotals();
                    }
                }
            },
            {
                id: 'product_code', name: 'Code Produit', field: 'product_code',
                sortable: true,
                resizable: true,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                },
                onCellChange: function (e, args) {
                    var updateItem = _this.angularGrid.gridService.getDataItemByRowIndex(args.row);
                    var result;
                    _this.mService.getProductByCode(args.dataContext.product_code).subscribe(function (res) { return result = res['data']; }, 
                    // tslint:disable-next-line:max-line-length
                    function (err) { return _this.layoutUtilsService.showActionNotification('Produit avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true); }, function () {
                        if (result != null) {
                            updateItem.description = result.description;
                            updateItem.product_id = result.id;
                            updateItem.purchase_price = result.purchase_price;
                            updateItem.total_price = updateItem.received_qty * updateItem.purchase_price;
                            _this.angularGrid.gridService.updateItem(updateItem);
                            _this.calculateTotals();
                        }
                        else {
                            _this.layoutUtilsService.showActionNotification('Produit avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true);
                        }
                    });
                }
            },
            {
                id: 'delete',
                field: 'product_id',
                excludeFromHeaderMenu: true,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Formatters"].infoIcon,
                minWidth: 30,
                maxWidth: 30,
                onCellClick: function (e, args) {
                    _this.rowNumber = args.row;
                    var element = document.getElementById('openProductModal');
                    element.click();
                }
            },
            {
                id: 'product_description', name: 'Description', field: 'description',
                sortable: true,
                resizable: true,
                width: 130,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                }
            },
            {
                id: 'purchase_price', name: 'Prix U', field: 'purchase_price',
                sortable: true,
                resizable: true,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].number,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                },
                onCellChange: function (e, args) {
                    var updateItem = _this.angularGrid.gridService.getDataItemByRowIndex(args.row);
                    updateItem.total_price = args.dataContext.qty * args.dataContext.purchase_price;
                    _this.angularGrid.gridService.updateItem(updateItem);
                    _this.calculateTotals();
                }
            },
            {
                id: 'quantity', name: 'QTE', field: 'qty',
                sortable: true,
                width: 50,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].number,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                }
            },
            {
                id: 'received_qty', name: 'QTE Receptionee', field: 'received_qty',
                sortable: true,
                width: 50,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].number,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                },
                onCellChange: function (e, args) {
                    var updateItem = _this.angularGrid.gridService.getDataItemByRowIndex(args.row);
                    updateItem.total_price = args.dataContext.received_qty * args.dataContext.purchase_price;
                    _this.angularGrid.gridService.updateItem(updateItem);
                    _this.calculateTotals();
                }
            },
            {
                id: 'serial_number', name: 'Numero de series', field: 'serial_number',
                sortable: true,
                resizable: true,
                width: 100,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                }
            },
            {
                id: 'batch_number', name: 'Numero de Lot', field: 'batch_number',
                sortable: true,
                resizable: true,
                width: 100,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                }
            },
            {
                id: 'discount', name: 'Remise', field: 'discount',
                sortable: true,
                resizable: true,
                width: 50,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].number,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                },
                onCellChange: function (e, args) {
                    var updateItem = _this.angularGrid.gridService.getDataItemByRowIndex(args.row);
                    updateItem.total_price = (args.dataContext.qty * args.dataContext.purchase_price) * (args.dataContext.discount / 100);
                    _this.angularGrid.gridService.updateItem(updateItem);
                    _this.calculateTotals();
                }
            },
            {
                id: 'total_price', name: 'Prix', field: 'total_price',
                sortable: true,
                resizable: true,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].number,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                }
            },
            {
                id: 'details',
                field: 'details',
                excludeFromHeaderMenu: true,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Formatters"].editIcon,
                minWidth: 30,
                maxWidth: 30,
                onCellClick: function (e, args) {
                    _this.rowNumber = args.row;
                    // tslint:disable-next-line:max-line-length
                    _this.initProductDetailGrid(args.dataContext.product_id, args.dataContext.description, args.dataContext.product_code, args.dataContext.received_qty);
                    var element = document.getElementById('openProductDetailModal');
                    element.click();
                }
            }
        ];
        this.gridOptions = {
            asyncEditorLoading: false,
            editable: true,
            enableColumnPicker: true,
            enableCellNavigation: true,
            enableRowSelection: true
        };
        this.dataset = [];
    };
    CreateReceiptComponent.prototype.calculateTotals = function () {
        var sum = 0;
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < this.dataset.length; i++) {
            sum += this.dataset[i].total_price;
        }
        this.totalHt = sum;
    };
    CreateReceiptComponent.prototype.addNewItem = function () {
        var newId = this.dataset.length;
        var newItem = {
            id: newId,
            product_code: '',
            description: '',
            purchase_price: 0,
            product_id: '',
            qty: 1,
            received_qty: 1,
            discount: null,
            total_price: 0,
            serial_number: '',
            batch_number: '',
            created_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().local_ip,
            last_updated_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().local_ip,
            created_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().user_id,
            last_modified_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().user_id
        };
        this.angularGrid.gridService.addItemToDatagrid(newItem, false, true, false, false);
    };
    CreateReceiptComponent.prototype.getPoByCode = function () {
        var _this = this;
        var result;
        this.inventoryService.getPoByCode(this.poCode).subscribe(function (res) { return result = res['data']; }, function (err) { return _this.layoutUtilsService.showActionNotification('BC avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true); }, function () {
            if (result != null) {
                _this.providerId = result.po.provider_id;
                _this.poId = result.po.id;
                _this.poDetail = result.details;
                var newId_1 = _this.dataset.length;
                _this.poDetail.forEach(function (element) {
                    var newItem = {
                        id: newId_1,
                        product_code: element.product.product_code,
                        description: element.product.description,
                        purchase_price: element.purchase_price,
                        product_id: element.product_id,
                        qty: element.qty,
                        received_qty: 0,
                        discount: element.discount,
                        total_price: element.purchase_price * element.qty,
                        created_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().local_ip,
                        last_updated_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().local_ip,
                        created_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().user_id,
                        last_modified_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().user_id
                    };
                    _this.angularGrid.gridService.addItemToDatagrid(newItem, false, true, false, false);
                });
            }
            else {
                _this.layoutUtilsService.showActionNotification('BC avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true);
            }
        });
    };
    CreateReceiptComponent.prototype.initpoGrid = function () {
        var _this = this;
        this.poColumnDefinitions = [
            {
                id: 'delete',
                name: 'id',
                field: 'id',
                excludeFromHeaderMenu: true,
                minWidth: 30,
                maxWidth: 30,
                selectable: true
            },
            {
                id: 'code',
                name: 'Code',
                field: 'po_code',
            },
            {
                id: 'date',
                name: 'Date de Creation',
                field: 'creation_date '
            },
        ];
        this.poGridOptions = {
            asyncEditorLoading: false,
            enableColumnPicker: true,
            enableCellNavigation: true,
            enableRowSelection: true,
            enableCheckboxSelector: true,
            enableAutoResize: true
        };
        this.inventoryService.getAllPo().subscribe(function (res) { return _this.poDataset = res; });
    };
    CreateReceiptComponent.prototype.poGridReady = function (angularGrid) {
        this.poAngularGrid = angularGrid;
        this.poDataView = angularGrid.dataView;
        this.poGrid = angularGrid.slickGrid;
        this.poGridService = angularGrid.gridService;
    };
    CreateReceiptComponent.prototype.savePoCode = function () {
        var _this = this;
        var selectedId = this.poAngularGrid.gridService.getSelectedRowsDataItem()[0].id;
        var po;
        this.inventoryService.getPo(selectedId).subscribe(function (res) { return po = res['data']; }, function (err) { return console.log(err); }, function () {
            _this.providerId = po.po.provider_id;
            _this.poId = po.po.id;
            _this.poDetail = po.details;
            _this.poCode = po.po.po_code;
            _this.poDetail.forEach(function (element) {
                var newId = _this.dataset.length;
                var newItem = {
                    id: newId,
                    product_code: element.product.product_code,
                    description: element.product.description,
                    purchase_price: element.purchase_price,
                    product_id: element.product_id,
                    qty: element.qty,
                    received_qty: 0,
                    discount: element.discount,
                    total_price: element.purchase_price * element.qty,
                    created_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().local_ip,
                    last_updated_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().local_ip,
                    created_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().user_id,
                    last_modified_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().user_id
                };
                _this.angularGrid.gridService.addItemToDatagrid(newItem, false, true, false, false);
            });
        });
        this.modalService.dismissAll('Close click');
    };
    CreateReceiptComponent.prototype.openModal = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    CreateReceiptComponent.prototype.initProductGrid = function () {
        var _this = this;
        this.productColumnDefinitions = [
            {
                id: 'delete',
                name: 'id',
                field: 'id',
                excludeFromHeaderMenu: true,
                minWidth: 30,
                maxWidth: 30,
                selectable: true
            },
            { id: 'product_code', name: 'Code', field: 'product_code', sortable: true, width: 50, filterable: true },
            { id: 'description', name: 'Description', field: 'description', sortable: true, width: 170, filterable: true },
            { id: 'purchase_price', name: 'Prix d\'Achats', field: 'purchase_price', filterable: true }
        ];
        this.productGridOptions = {
            enableFiltering: true,
            asyncEditorLoading: false,
            enableColumnPicker: true,
            enableCellNavigation: true,
            enableRowSelection: true,
            enableCheckboxSelector: true,
            enableAutoResize: true
        };
        this.mService.getAllProducts().subscribe(function (res) { return _this.productDataset = res; });
    };
    CreateReceiptComponent.prototype.productGridReady = function (angularGrid) {
        this.productAngularGrid = angularGrid;
        this.productDataView = angularGrid.dataView;
        this.productGrid = angularGrid.slickGrid;
        this.productGridService = angularGrid.gridService;
    };
    CreateReceiptComponent.prototype.saveProductCode = function () {
        var selected = this.productAngularGrid.gridService.getSelectedRowsDataItem()[0];
        var updateItem = this.angularGrid.gridService.getDataItemByRowIndex(this.rowNumber);
        updateItem.product_code = selected.product_code;
        updateItem.product_id = selected.id;
        updateItem.description = selected.description;
        updateItem.purchase_price = selected.purchase_price;
        updateItem.total_price = updateItem.received_qty * updateItem.purchase_price;
        this.calculateTotals();
        this.angularGrid.gridService.updateDataGridItem(updateItem);
        this.modalService.dismissAll('Close click');
    };
    CreateReceiptComponent.prototype.initProductDetailGrid = function (productId, productDescription, productCode, qty) {
        var _this = this;
        this.productDetailColumnDefinitions = [
            {
                id: 'delete',
                field: 'id',
                excludeFromHeaderMenu: true,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Formatters"].deleteIcon,
                minWidth: 30,
                maxWidth: 30,
                // use onCellClick OR grid.onClick.subscribe which you can see down below
                onCellClick: function (e, args) {
                    console.log(args);
                    if (confirm('Êtes-vous sûr de supprimer cette ligne?')) {
                        _this.angularGrid.gridService.deleteItem(args.dataContext);
                        _this.calculateTotals();
                    }
                }
            },
            {
                id: 'product_code', name: 'Code Produit', field: 'product_code',
                sortable: true,
                resizable: true,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                },
                onCellChange: function (e, args) {
                    var updateItem = _this.angularGrid.gridService.getDataItemByRowIndex(args.row);
                    var result;
                    _this.mService.getProductByCode(args.dataContext.product_code).subscribe(function (res) { return result = res['data']; }, function (err) { return _this.layoutUtilsService.showActionNotification('Produit avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true); }, function () {
                        if (result != null) {
                            updateItem.description = result.description;
                            updateItem.product_id = result.id;
                            _this.angularGrid.gridService.updateItem(updateItem);
                            _this.calculateTotals();
                        }
                        else {
                            _this.layoutUtilsService.showActionNotification('Produit avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true);
                        }
                    });
                }
            },
            {
                id: 'delete',
                field: 'product_id',
                excludeFromHeaderMenu: true,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Formatters"].infoIcon,
                minWidth: 30,
                maxWidth: 30,
                onCellClick: function (e, args) {
                    _this.rowNumber = args.row;
                    var element = document.getElementById('openProductModal');
                    element.click();
                }
            },
            {
                id: 'product_description', name: 'Description', field: 'description',
                sortable: true,
                resizable: true,
                width: 130,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                }
            },
            {
                id: 'serial_number', name: 'Numero de series', field: 'serial_number',
                sortable: true,
                resizable: true,
                width: 400,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
                }
            },
            {
                id: 'batch_number', name: 'Numero de Lot', field: 'batch_number',
                sortable: true,
                resizable: true,
                width: 400,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__["Editors"].text
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
                created_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().local_ip,
                last_updated_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().local_ip,
                created_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().user_id,
                last_modified_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().user_id
            });
        }
    };
    CreateReceiptComponent.prototype.productDetailGridReady = function (angularGrid) {
        this.productDetailAngularGrid = angularGrid;
        this.productDetailDataView = angularGrid.dataView;
        this.productDetailGrid = angularGrid.slickGrid;
        this.productDetailGridService = angularGrid.gridService;
    };
    CreateReceiptComponent.prototype.save = function () {
        this.receptionDetailsByProduct = this.receptionDetailsByProduct.concat(this.productDetailDataset);
        this.modalService.dismissAll('Close click');
    };
    CreateReceiptComponent.prototype.getProviderByCode = function () {
        var _this = this;
        var result;
        this.inventoryService.getProviderByCode(this.providerCode).subscribe(function (res) { return result = res['data']; }, function (err) { return _this.layoutUtilsService.showActionNotification('Fournisseur avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true); }, function () {
            if (result != null) {
                _this.providerId = result['provider']['id'];
            }
            else {
                _this.layoutUtilsService.showActionNotification('Fournisseur avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true);
            }
        });
    };
    CreateReceiptComponent.prototype.providerGridReady = function (angularGrid) {
        this.providerAngularGrid = angularGrid;
        this.providerDataView = angularGrid.dataView;
        this.providerGrid = angularGrid.slickGrid;
        this.providerGridService = angularGrid.gridService;
    };
    CreateReceiptComponent.prototype.initProvidersGrid = function () {
        var _this = this;
        this.providerColumnDefinitions = [
            {
                id: 'delete',
                name: 'id',
                field: 'id',
                excludeFromHeaderMenu: true,
                minWidth: 30,
                maxWidth: 30,
                selectable: true
            },
            {
                id: 'code',
                name: 'Code',
                field: 'provider_code',
            },
            {
                id: 'description',
                name: 'Description',
                field: 'description'
            },
        ];
        this.providerGridOptions = {
            asyncEditorLoading: false,
            enableColumnPicker: true,
            enableCellNavigation: true,
            enableRowSelection: true,
            enableCheckboxSelector: true,
            enableAutoResize: true
        };
        this.inventoryService.getAllProviders().subscribe(function (res) { return _this.providerDataset = res; });
    };
    CreateReceiptComponent.prototype.saveProviderCode = function () {
        var selected = this.providerAngularGrid.gridService.getSelectedRowsDataItem()[0];
        this.providerCode = selected.provider_code;
        this.providerId = selected.id;
        this.modalService.dismissAll('Close click');
    };
    CreateReceiptComponent.prototype.addInventoryReceipt = function () {
        var _this = this;
        this.inventoryReceipt.po_id = this.poId;
        this.inventoryReceipt.provider_id = this.providerId;
        this.inventoryReceipt.total_amount = this.totalHt;
        this.inventoryReceipt.creation_date = this.date1['year'] + '/' + this.date1['month'] + '/' + this.date1['day'];
        this.inventoryReceipt.ship_date = this.date2['year'] + '/' + this.date2['month'] + '/' + this.date2['day'];
        this.inventoryReceipt.created_ip_address = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().local_ip;
        this.inventoryReceipt.last_updated_ip_address = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().local_ip;
        this.inventoryReceipt.created_user_id = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().user_id;
        this.inventoryReceipt.last_modified_user_id = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRequiredFields"])().user_id;
        this.dataset.forEach(function (element) {
            if (element.received_qty === 0) {
                _this.dataset.splice(_this.dataset.indexOf(element), 1);
            }
            else {
                delete element.product_code;
                delete element.id;
                delete element.description;
                delete element.qty;
                delete element.rowClass;
            }
        });
        this.receptionDetailsByProduct.forEach(function (element) {
            delete element.id,
                delete element.product_code;
            delete element.description;
        });
        var message = "La Reception est ajout\u00E9 avec succ\u00E9s.";
        var result;
        this.inventoryService.addInventoryReceipt({
            ir: this.inventoryReceipt,
            details: this.dataset,
            detailsByProduct: this.receptionDetailsByProduct
        }).subscribe(function (res) { return result = res; }, function (err) {
            _this.layoutUtilsService.showActionNotification('erreur', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true);
            _this.loading = false;
        }, function () {
            _this.layoutUtilsService.showActionNotification(message, _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Create, 5000, true, true);
            _this.loading = false;
            _this.router.navigateByUrl('/demo1/index');
        });
    };
    CreateReceiptComponent.ctorParameters = function () { return [
        { type: _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _app_core_application__WEBPACK_IMPORTED_MODULE_2__["InvoicingService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: _app_core_application__WEBPACK_IMPORTED_MODULE_2__["InventoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    CreateReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-create-receipt',
            template: __webpack_require__(/*! raw-loader!./create-receipt.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/inventory-receipt/create-receipt/create-receipt.component.html"),
            styles: [__webpack_require__(/*! ./create-receipt.component.scss */ "./src/app/views/pages/inventory/inventory-receipt/create-receipt/create-receipt.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _app_core_application__WEBPACK_IMPORTED_MODULE_2__["InvoicingService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _app_core_application__WEBPACK_IMPORTED_MODULE_2__["InventoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CreateReceiptComponent);
    return CreateReceiptComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9pbnZlbnRvcnktcmVjZWlwdC9pbnZlbnRvcnktcmVjZWlwdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.component.ts ***!
  \****************************************************************************************/
/*! exports provided: InventoryReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryReceiptComponent", function() { return InventoryReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");



var InventoryReceiptComponent = /** @class */ (function () {
    function InventoryReceiptComponent(settingsService) {
        this.settingsService = settingsService;
    }
    InventoryReceiptComponent.prototype.ngOnInit = function () {
        this.settingsService.getAll('Tax').subscribe(function (res) {
            localStorage.setItem('Tax', JSON.stringify(res));
        }, function (err) { return console.log(err); });
    };
    InventoryReceiptComponent.ctorParameters = function () { return [
        { type: _core_application__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
    ]; };
    InventoryReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-inventory-receipt',
            template: __webpack_require__(/*! raw-loader!./inventory-receipt.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.component.html"),
            styles: [__webpack_require__(/*! ./inventory-receipt.component.scss */ "./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_application__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], InventoryReceiptComponent);
    return InventoryReceiptComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.module.ts ***!
  \*************************************************************************************/
/*! exports provided: InventoryReceiptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryReceiptModule", function() { return InventoryReceiptModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../partials/content/general/material-preview/material-preview.module */ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _inventory_receipt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inventory-receipt.component */ "./src/app/views/pages/inventory/inventory-receipt/inventory-receipt.component.ts");
/* harmony import */ var _create_receipt_create_receipt_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-receipt/create-receipt.component */ "./src/app/views/pages/inventory/inventory-receipt/create-receipt/create-receipt.component.ts");
/* harmony import */ var _receipts_list_receipts_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./receipts-list/receipts-list.component */ "./src/app/views/pages/inventory/inventory-receipt/receipts-list/receipts-list.component.ts");











// Components
// Import AG Grid

// addons






var routes = [
    {
        path: '',
        component: _inventory_receipt_component__WEBPACK_IMPORTED_MODULE_13__["InventoryReceiptComponent"],
        children: [
            {
                path: '',
                redirectTo: 'create-receipt',
                pathMatch: 'full'
            },
            {
                path: 'create-receipt',
                component: _create_receipt_create_receipt_component__WEBPACK_IMPORTED_MODULE_14__["CreateReceiptComponent"]
            },
            {
                path: 'receipts-list',
                component: _receipts_list_receipts_list_component__WEBPACK_IMPORTED_MODULE_15__["ReceiptsListComponent"]
            }
        ]
    }
];
var InventoryReceiptModule = /** @class */ (function () {
    function InventoryReceiptModule() {
    }
    InventoryReceiptModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            providers: [_core_application__WEBPACK_IMPORTED_MODULE_9__["SettingsService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"], _core_application__WEBPACK_IMPORTED_MODULE_9__["DataSharingService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _core_application__WEBPACK_IMPORTED_MODULE_9__["InvoicingService"], _core_application__WEBPACK_IMPORTED_MODULE_9__["InventoryService"]],
            declarations: [_inventory_receipt_component__WEBPACK_IMPORTED_MODULE_13__["InventoryReceiptComponent"], _create_receipt_create_receipt_component__WEBPACK_IMPORTED_MODULE_14__["CreateReceiptComponent"], _receipts_list_receipts_list_component__WEBPACK_IMPORTED_MODULE_15__["ReceiptsListComponent"]]
        })
    ], InventoryReceiptModule);
    return InventoryReceiptModule;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/inventory-receipt/receipts-list/receipts-list.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory-receipt/receipts-list/receipts-list.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9pbnZlbnRvcnktcmVjZWlwdC9yZWNlaXB0cy1saXN0L3JlY2VpcHRzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/inventory/inventory-receipt/receipts-list/receipts-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/inventory-receipt/receipts-list/receipts-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ReceiptsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsListComponent", function() { return ReceiptsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var ReceiptsListComponent = /** @class */ (function () {
    function ReceiptsListComponent(mService, router, datePipe) {
        this.mService = mService;
        this.router = router;
        this.datePipe = datePipe;
        this.columnDefinitions = [];
        this.gridOptions = {};
        this.dataset = [];
    }
    ReceiptsListComponent.prototype.gridReady = function (angularGrid) {
        this.mGrid = angularGrid;
        this.dataView = angularGrid.dataView;
        this.grid = angularGrid.slickGrid;
        this.gridService = angularGrid.gridService;
    };
    ReceiptsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            {
                id: 'id', name: 'Id', field: 'id', sortable: true, width: 30
            },
            { id: 'product_code', name: 'Code', field: 'product.product_code', sortable: true, width: 50, filterable: true },
            { id: 'description', name: 'Description', field: 'product.description', sortable: true, width: 150, filterable: true },
            { id: 'received_qty', name: 'QTE receptionee', field: 'received_qty', sortable: true, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber } },
            { id: 'receipt_code', name: 'Code de Bon de reception', field: 'inventory_receipt.receipt_code', sortable: true, filterable: true },
            { id: 'ship_date', name: 'Date de reception', field: 'ship_date', sortable: true, filterable: true },
            { id: 'price', name: 'Prix', field: 'purchase_price', filterable: true, filter: { model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["Filters"].compoundInputNumber }, type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number, },
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
        this.mService.getReceptionHistory({ start_date: firstDay, end_date: lastDay }).subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
    };
    ReceiptsListComponent.prototype.getData = function () {
        var _this = this;
        this.mService.getReceptionHistory({
            start_date: this.startDate.year + '/' + this.startDate.month + '/' + this.startDate.day,
            end_date: this.endDate.year + '/' + this.endDate.month + '/' + this.endDate.day
        }).subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
    };
    ReceiptsListComponent.ctorParameters = function () { return [
        { type: _core_application__WEBPACK_IMPORTED_MODULE_3__["InventoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
    ]; };
    ReceiptsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-receipts-list',
            template: __webpack_require__(/*! raw-loader!./receipts-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/inventory-receipt/receipts-list/receipts-list.component.html"),
            styles: [__webpack_require__(/*! ./receipts-list.component.scss */ "./src/app/views/pages/inventory/inventory-receipt/receipts-list/receipts-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_application__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], ReceiptsListComponent);
    return ReceiptsListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-inventory-inventory-receipt-inventory-receipt-module.js.map