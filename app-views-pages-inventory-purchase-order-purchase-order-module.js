(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-inventory-purchase-order-purchase-order-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/purchase-order/create-purchase-order/create-purchase-order.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/purchase-order/create-purchase-order/create-purchase-order.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet>\n                    <kt-portlet-header title=\"Ajouter Facture\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <form class=\"kt-form\" id=\"print-section\">\n                            <div class=\"row\">\n                                <div class=\"form-group col-lg-2\">\n                                    <label>Le Code du fournisseur</label>\n                                    <input type=\"text\" name=\"provider_code\" class=\"form-control form-control-sm\" placeholder=\"Le code du fournisseur\" [(ngModel)]=\"provider_code\" (change)=\"getProviderByCode()\">\n                                </div>\n                                <div class=\"form-group col-lg-4\">\n                                    <label>Le nom du fournisseur</label>\n                                    <input type=\"text\" name=\"provider_description\" class=\"form-control form-control-sm\" placeholder=\"Le nom du fournisseur\" [(ngModel)]=\"provider_description\">\n                                </div>\n                                <div class=\"form-group col-lg-1\">\n                                    <label style=\"color: white\">i</label>\n                                    <button type=\"button\" (click)=\"open(content)\" class=\"form-control form-control-sm  btn-danger  btn-circle btn-icon\"><i class=\"flaticon-notes\"></i></button>\n                                </div>\n                                <div class=\"form-group col-lg-3 \">\n                                    <label>La date de creation *</label>\n                                    <div class=\"input-group input-group-sm\">\n                                        <input class=\"form-control form-control-sm\" placeholder=\"jj-mm-aaa\" name=\"dp\" [(ngModel)]=\"date1\" ngbDatepicker #d=\"ngbDatepicker\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary btn-icon\" (click)=\"d.toggle()\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-3 \">\n                                    <label>La date d'echancier *</label>\n                                    <div class=\"input-group input-group-sm\">\n                                        <input class=\"form-control form-control-sm\" placeholder=\"jj-mm-aaa\" name=\"dp\" [(ngModel)]=\"date2\" ngbDatepicker #d=\"ngbDatepicker\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary btn-icon\" (click)=\"d.toggle()\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-2 validated\">\n                                    <label for=\"exampleSelects\">Type de BC *</label>\n                                    <select class=\"form-control form-control-sm\" name=\"paymentType\" [(ngModel)]=\"po.po_type_id\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let object of poTypes\" [value]=\"object.id\">{{object.description}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n                                </div>\n                                <div class=\"form-group col-lg-2\">\n                                    <label for=\"exampleSelects\">Taxable</label>\n                                    <div class=\"col-3\">\n                                        <span class=\"kt-switch kt-switch--outline kt-switch--icon kt-switch--dark\">\n                                            <label>\n                                                <input type=\"checkbox\" name=\"dutiable\" [(ngModel)]=\"po.dutiable\" >\n                                                <span></span>\n                                        </label>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-3\">\n                                    <label for=\"exampleSelects\">Tax</label>\n                                    <select class=\"form-control form-control-sm\" id=\"exampleSelects\" name=\"tax\" [(ngModel)]=\"po.tax_id\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let object of taxes\" [value]=\"object.id\">{{object.description}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n                                </div>\n                                <div class=\"form-group col-lg-2\">\n                                    <label for=\"exampleSelects\">Priotitaire</label>\n                                    <div class=\"col-3\">\n                                        <span class=\"kt-switch kt-switch--outline kt-switch--icon kt-switch--dark\">\n                                            <label>\n                                                <input type=\"checkbox\" name=\"priority\" [(ngModel)]=\"po.priority\" >\n                                                <span></span>\n                                        </label>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <button class=\"btn btn-primary btn-elevate col-lg-4\" (click)=\"addNewItem()\">Ajouter une ligne</button>\n                            </div>\n                            <br>\n                            <angular-slickgrid gridId=\"poDetailsGrid\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\" (onAngularGridCreated)=\"angularGridReady($event)\">\n                            </angular-slickgrid>\n\n                            <br>\n                            <div class=\"row \">\n                                <div class=\"col-lg-6\"></div>\n                                <div class=\"col-lg-6 kt-align-right row\">\n                                    <div class=\"form-group col-lg-3\">\n                                        <label>Total HT</label>\n                                        <input type=\"number\" name=\"totalHt\" class=\"form-control form-control-sm\" placeholder=\"\" [(ngModel)]=\"totalHt\" disabled>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"kt-login__actions\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-6 form-group row\">\n\n                                    </div>\n                                    <div class=\"col-lg-6 kt-align-right\">\n                                        <button (click)=\"addPo()\" [className]=\"loading ? 'col-lg-4 btn btn-primary btn-elevate kt-login__btn-primary kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light' : 'col-lg-4 btn btn-primary btn-elevate kt-login__btn-primary'\">Imprimer Bon de commande</button>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </form>\n                    </kt-portlet-body>\n\n                </kt-portlet>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n\n<div class=\"kt-section__content\">\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">La liste des fournisseurs</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n        </div>\n        <div class=\"modal-body\">\n            <angular-slickgrid gridId=\"providersGrid\" [columnDefinitions]=\"providersColumnDefinitions\" [gridOptions]=\"providersGridOptions\" [dataset]=\"providersDataset\" (onAngularGridCreated)=\"providersGridReady($event)\">\n            </angular-slickgrid>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveProvidersCode()\">Sélectionner</button>\n        </div>\n    </ng-template>\n</div>\n\n<div class=\"kt-section__content\">\n    <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Code Produit</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n        </div>\n        <div class=\"modal-body\">\n            <angular-slickgrid gridId=\"productGrid\" [columnDefinitions]=\"productColumnDefinitions\" [gridOptions]=\"productGridOptions\" [dataset]=\"productDataset\" (onAngularGridCreated)=\"productGridReady($event)\">\n            </angular-slickgrid>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveProductCode()\">Sélectionner</button>\n        </div>\n    </ng-template>\n    <button hidden id=\"openProductModal\" class=\"btn btn-primary\" (click)=\"open2(content2)\">Launch demo modal</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/purchase-order/purchase-order.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/purchase-order/purchase-order.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/purchase-order/purchase-orders-list/purchase-orders-list.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/purchase-order/purchase-orders-list/purchase-orders-list.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purchase-orders-list works!</p>\n"

/***/ }),

/***/ "./src/app/views/pages/inventory/purchase-order/create-purchase-order/create-purchase-order.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/purchase-order/create-purchase-order/create-purchase-order.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9wdXJjaGFzZS1vcmRlci9jcmVhdGUtcHVyY2hhc2Utb3JkZXIvY3JlYXRlLXB1cmNoYXNlLW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/inventory/purchase-order/create-purchase-order/create-purchase-order.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/purchase-order/create-purchase-order/create-purchase-order.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CreatePurchaseOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePurchaseOrderComponent", function() { return CreatePurchaseOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../app/core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app/core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var CreatePurchaseOrderComponent = /** @class */ (function () {
    function CreatePurchaseOrderComponent(layoutUtilsService, mService, modalService, activeModal, data, datePipe, zone, settingsService, inventoryService) {
        this.layoutUtilsService = layoutUtilsService;
        this.mService = mService;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.data = data;
        this.datePipe = datePipe;
        this.zone = zone;
        this.settingsService = settingsService;
        this.inventoryService = inventoryService;
        this.loading = false;
        this.provider_code = '';
        this.provider_description = '';
        this.providersDataset = [];
        this.productDataset = [];
        this.totalHt = 0;
        this.date1 = new Date();
        this.date2 = new Date();
    }
    CreatePurchaseOrderComponent.prototype.angularGridReady = function (angularGrid) {
        this.angularGrid = angularGrid;
        this.dataView = angularGrid.dataView;
        this.grid = angularGrid.slickGrid;
        this.gridService = angularGrid.gridService;
    };
    CreatePurchaseOrderComponent.prototype.ngOnInit = function () {
        this.initGrid();
        this.po = new _app_core_application__WEBPACK_IMPORTED_MODULE_2__["PurchaseOrder"]();
        this.poTypes = JSON.parse(localStorage.getItem('PurchaseOrderType'));
        this.taxes = JSON.parse(localStorage.getItem('Tax'));
    };
    CreatePurchaseOrderComponent.prototype.initGrid = function () {
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
                    _this.mService.getProductByCode(args.dataContext.product_code).subscribe(function (res) { return result = res['data']; }, function (err) { return _this.layoutUtilsService.showActionNotification('Produit avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true); }, function () {
                        if (result != null) {
                            updateItem.description = result['description'];
                            updateItem.product_id = result['id'];
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
                    _this.row_number = args.row;
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
                },
                onCellChange: function (e, args) {
                    var updateItem = _this.angularGrid.gridService.getDataItemByRowIndex(args.row);
                    updateItem.total_price = args.dataContext.qty * args.dataContext.purchase_price;
                    _this.angularGrid.gridService.updateItem(updateItem);
                    _this.calculateTotals();
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
    CreatePurchaseOrderComponent.prototype.calculateTotals = function () {
        var sum = 0;
        for (var i = 0; i < this.dataset.length; i++) {
            sum += this.dataset[i].total_price;
        }
        this.totalHt = sum;
    };
    CreatePurchaseOrderComponent.prototype.addNewItem = function () {
        var newId = this.dataset.length;
        var newItem = {
            id: newId,
            product_code: '',
            description: '',
            purchase_price: 0,
            product_id: '',
            qty: 1,
            discount: null,
            total_price: 0
        };
        this.angularGrid.gridService.addItemToDatagrid(newItem, false, true, false, false);
    };
    CreatePurchaseOrderComponent.prototype.getProviderByCode = function () {
        var _this = this;
        var result;
        this.inventoryService.getProviderByCode(this.provider_code).subscribe(function (res) { return result = res['data']; }, function (err) { return _this.layoutUtilsService.showActionNotification('Fournisseur avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true); }, function () {
            if (result != null) {
                _this.provider_id = result['provider']['id'];
                _this.provider_description = result['provider']['description'];
            }
            else {
                _this.layoutUtilsService.showActionNotification('Fournisseur avec ce code n\'existe pas', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true);
            }
        });
    };
    CreatePurchaseOrderComponent.prototype.open = function (content) {
        this.initProvidersGrid();
        this.modalService.open(content);
    };
    CreatePurchaseOrderComponent.prototype.initProvidersGrid = function () {
        var _this = this;
        this.providersColumnDefinitions = [
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
        this.providersGridOptions = {
            asyncEditorLoading: false,
            enableColumnPicker: true,
            enableCellNavigation: true,
            enableRowSelection: true,
            enableCheckboxSelector: true,
            autoHeight: true
        };
        this.inventoryService.getAllProviders().subscribe(function (res) { return _this.providersDataset = res; });
    };
    CreatePurchaseOrderComponent.prototype.providersGridReady = function (angularGrid) {
        this.providersAngularGrid = angularGrid;
        this.providersDataView = angularGrid.dataView;
        this.providersGrid = angularGrid.slickGrid;
        this.providersGridService = angularGrid.gridService;
    };
    CreatePurchaseOrderComponent.prototype.saveProvidersCode = function () {
        var selected = this.providersAngularGrid.gridService.getSelectedRowsDataItem()[0];
        this.provider_code = selected.provider_code;
        this.provider_description = selected.description;
        this.provider_id = selected.id;
        this.modalService.dismissAll('Close click');
    };
    CreatePurchaseOrderComponent.prototype.open2 = function (content) {
        this.initProductGrid();
        this.modalService.open(content);
    };
    CreatePurchaseOrderComponent.prototype.initProductGrid = function () {
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
            { id: 'purchase_price', name: 'Prix', field: 'purchase_price', filterable: true }
        ];
        this.productGridOptions = {
            enableFiltering: true,
            asyncEditorLoading: false,
            enableColumnPicker: true,
            enableCellNavigation: true,
            enableRowSelection: true,
            enableCheckboxSelector: true,
            autoHeight: true
        };
        this.mService.getAllProducts().subscribe(function (res) { return _this.productDataset = res; });
    };
    CreatePurchaseOrderComponent.prototype.productGridReady = function (angularGrid) {
        this.productAngularGrid = angularGrid;
        this.productDataView = angularGrid.dataView;
        this.productGrid = angularGrid.slickGrid;
        this.productGridService = angularGrid.gridService;
    };
    CreatePurchaseOrderComponent.prototype.saveProductCode = function () {
        var selected = this.productAngularGrid.gridService.getSelectedRowsDataItem()[0];
        var updateItem = this.angularGrid.gridService.getDataItemByRowIndex(this.row_number);
        updateItem.product_code = selected.product_code;
        updateItem.product_id = selected.id;
        updateItem.description = selected.description;
        this.angularGrid.gridService.updateDataGridItem(updateItem);
        this.modalService.dismissAll('Close click');
    };
    CreatePurchaseOrderComponent.prototype.addPo = function () {
        var _this = this;
        this.po.provider_id = this.provider_id;
        this.po.creation_date = this.date1['year'] + '/' + this.date1['month'] + "/" + this.date1['day'];
        this.po.due_date = this.date2['year'] + '/' + this.date2['month'] + "/" + this.date2['day'];
        this.po.total_amount = this.totalHt;
        this.dataset.forEach(function (element) {
            delete element.product_code;
            delete element.id;
            delete element.description;
            delete element.total_price;
            delete element.rowClass;
        });
        var message = "LE Bon de commande est ajout\u00E9 avec succ\u00E9s.";
        var result;
        this.inventoryService.addPo({ po: this.po, details: this.dataset }).subscribe(function (res) { return result = res; }, function (err) {
            _this.layoutUtilsService.showActionNotification('erreur', _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Delete, 5000, true, true);
            _this.loading = false;
        }, function () {
            _this.layoutUtilsService.showActionNotification(message, _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["MessageType"].Create, 5000, true, true);
            _this.loading = false;
        });
    };
    CreatePurchaseOrderComponent.ctorParameters = function () { return [
        { type: _app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"] },
        { type: _app_core_application__WEBPACK_IMPORTED_MODULE_2__["InvoicingService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
        { type: _app_core_application__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _app_core_application__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
        { type: _app_core_application__WEBPACK_IMPORTED_MODULE_2__["InventoryService"] }
    ]; };
    CreatePurchaseOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-create-purchase-order',
            template: __webpack_require__(/*! raw-loader!./create-purchase-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/purchase-order/create-purchase-order/create-purchase-order.component.html"),
            styles: [__webpack_require__(/*! ./create-purchase-order.component.scss */ "./src/app/views/pages/inventory/purchase-order/create-purchase-order/create-purchase-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_base_crud__WEBPACK_IMPORTED_MODULE_4__["LayoutUtilsService"],
            _app_core_application__WEBPACK_IMPORTED_MODULE_2__["InvoicingService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
            _app_core_application__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _app_core_application__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _app_core_application__WEBPACK_IMPORTED_MODULE_2__["InventoryService"]])
    ], CreatePurchaseOrderComponent);
    return CreatePurchaseOrderComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/purchase-order/purchase-order.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/purchase-order/purchase-order.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9wdXJjaGFzZS1vcmRlci9wdXJjaGFzZS1vcmRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/inventory/purchase-order/purchase-order.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/inventory/purchase-order/purchase-order.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PurchaseOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderComponent", function() { return PurchaseOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");



var PurchaseOrderComponent = /** @class */ (function () {
    function PurchaseOrderComponent(settingsService) {
        this.settingsService = settingsService;
    }
    PurchaseOrderComponent.prototype.ngOnInit = function () {
        this.settingsService.getAll('PurchaseOrderType').subscribe(function (res) {
            localStorage.setItem('PurchaseOrderType', JSON.stringify(res));
        }, function (err) { return console.log(err); });
        this.settingsService.getAll('Tax').subscribe(function (res) {
            localStorage.setItem('Tax', JSON.stringify(res));
        }, function (err) { return console.log(err); });
    };
    PurchaseOrderComponent.ctorParameters = function () { return [
        { type: _core_application__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
    ]; };
    PurchaseOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-purchase-order',
            template: __webpack_require__(/*! raw-loader!./purchase-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/purchase-order/purchase-order.component.html"),
            styles: [__webpack_require__(/*! ./purchase-order.component.scss */ "./src/app/views/pages/inventory/purchase-order/purchase-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_application__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], PurchaseOrderComponent);
    return PurchaseOrderComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/purchase-order/purchase-order.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/inventory/purchase-order/purchase-order.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PurchaseOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderModule", function() { return PurchaseOrderModule; });
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
/* harmony import */ var _purchase_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./purchase-order.component */ "./src/app/views/pages/inventory/purchase-order/purchase-order.component.ts");
/* harmony import */ var _create_purchase_order_create_purchase_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-purchase-order/create-purchase-order.component */ "./src/app/views/pages/inventory/purchase-order/create-purchase-order/create-purchase-order.component.ts");
/* harmony import */ var _purchase_orders_list_purchase_orders_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./purchase-orders-list/purchase-orders-list.component */ "./src/app/views/pages/inventory/purchase-order/purchase-orders-list/purchase-orders-list.component.ts");











// Components
// Import AG Grid

// addons






var routes = [
    {
        path: '',
        component: _purchase_order_component__WEBPACK_IMPORTED_MODULE_13__["PurchaseOrderComponent"],
        children: [
            {
                path: '',
                redirectTo: 'create-po',
                pathMatch: 'full'
            },
            {
                path: 'create-po',
                component: _create_purchase_order_create_purchase_order_component__WEBPACK_IMPORTED_MODULE_14__["CreatePurchaseOrderComponent"]
            },
            {
                path: 'po-list',
                component: _purchase_orders_list_purchase_orders_list_component__WEBPACK_IMPORTED_MODULE_15__["PurchaseOrdersListComponent"]
            }
        ]
    }
];
var PurchaseOrderModule = /** @class */ (function () {
    function PurchaseOrderModule() {
    }
    PurchaseOrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            entryComponents: [],
            declarations: [_purchase_order_component__WEBPACK_IMPORTED_MODULE_13__["PurchaseOrderComponent"], _create_purchase_order_create_purchase_order_component__WEBPACK_IMPORTED_MODULE_14__["CreatePurchaseOrderComponent"], _purchase_orders_list_purchase_orders_list_component__WEBPACK_IMPORTED_MODULE_15__["PurchaseOrdersListComponent"]]
        })
    ], PurchaseOrderModule);
    return PurchaseOrderModule;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/purchase-order/purchase-orders-list/purchase-orders-list.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/purchase-order/purchase-orders-list/purchase-orders-list.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9wdXJjaGFzZS1vcmRlci9wdXJjaGFzZS1vcmRlcnMtbGlzdC9wdXJjaGFzZS1vcmRlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/inventory/purchase-order/purchase-orders-list/purchase-orders-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/purchase-order/purchase-orders-list/purchase-orders-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PurchaseOrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrdersListComponent", function() { return PurchaseOrdersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PurchaseOrdersListComponent = /** @class */ (function () {
    function PurchaseOrdersListComponent() {
    }
    PurchaseOrdersListComponent.prototype.ngOnInit = function () {
    };
    PurchaseOrdersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-purchase-orders-list',
            template: __webpack_require__(/*! raw-loader!./purchase-orders-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/purchase-order/purchase-orders-list/purchase-orders-list.component.html"),
            styles: [__webpack_require__(/*! ./purchase-orders-list.component.scss */ "./src/app/views/pages/inventory/purchase-order/purchase-orders-list/purchase-orders-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PurchaseOrdersListComponent);
    return PurchaseOrdersListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-inventory-purchase-order-purchase-order-module.js.map