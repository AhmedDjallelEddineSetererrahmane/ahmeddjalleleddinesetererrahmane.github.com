(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-inventory-providers-providers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/providers/create-provider/create-provider.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/providers/create-provider/create-provider.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet>\n                    <kt-portlet-header title=\"Ajouter un Fournisseur\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <form class=\"kt-form\" [formGroup]=\"providerForm\">\n                            <div class=\"row\">\n                                <div class=\"form-group col-lg-12 validated\">\n                                    <label>description *</label>\n                                    <input type=\"text\" [className]=\"providerForm.controls['description'].errors && (providerForm.controls['description'].dirty || providerForm.controls['description'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"description\"\n                                        #description formControlName=\"description\" required>\n                                    <div class=\"form-control-feedback\" *ngIf=\"providerForm.controls['description'].errors && (providerForm.controls['description'].dirty || providerForm.controls['description'].touched)\">\n                                        <div *ngIf=\"providerForm.controls['description'].errors.required\" class=\"invalid-feedback\">Ce champs est obligatoire</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-3\">\n                                    <label for=\"exampleSelects\">Type de Fournisseur</label>\n                                    <select class=\"form-control form-control-sm\" id=\"exampleSelects\" formControlName=\"provider_type\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let object of providerTypes\" [value]=\"object.id\">{{object.description}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n                                </div>\n                                <div class=\"form-group col-lg-3\">\n                                    <label for=\"exampleSelects\">Status de Fournisseur</label>\n                                    <select class=\"form-control form-control-sm\" id=\"exampleSelects\" formControlName=\"provider_status\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let object of providerStatus\" [value]=\"object.id\">{{object.description}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n                                </div>\n                                <div class=\"form-group col-lg-6\">\n                                    <label>Addresse</label>\n                                    <input type=\"text\" name=\"address\" class=\"form-control form-control-sm\" placeholder=\"Addresse\" formControlName=\"address\">\n                                </div>\n                                <div class=\"form-group col-lg-6 validated\">\n                                    <label>Nom du contact *</label>\n                                    <input type=\"text\" [className]=\"providerForm.controls['contact_name'].errors && (providerForm.controls['contact_name'].dirty || providerForm.controls['contact_name'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\"\n                                        placeholder=\"Nom du contact\" #contact_name formControlName=\"contact_name\" required>\n                                    <div class=\"form-control-feedback\" *ngIf=\"providerForm.controls['contact_name'].errors && (providerForm.controls['contact_name'].dirty || providerForm.controls['contact_name'].touched)\">\n                                        <div *ngIf=\"providerForm.controls['contact_name'].errors.required\" class=\"invalid-feedback\">Ce champs est obligatoire</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-6 validated\">\n                                    <label>Numero de telephone  *</label>\n                                    <input type=\"text\" [className]=\"providerForm.controls['phone'].errors && (providerForm.controls['phone'].dirty || providerForm.controls['phone'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"phone\"\n                                        #phone formControlName=\"phone\" required>\n                                    <div class=\"form-control-feedback\" *ngIf=\"providerForm.controls['phone'].errors && (providerForm.controls['phone'].dirty || providerForm.controls['phone'].touched)\">\n                                        <div *ngIf=\"providerForm.controls['phone'].errors.required\" class=\"invalid-feedback\">Ce champs est obligatoire</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-3\">\n                                    <label>Fix</label>\n                                    <input type=\"text\" name=\"fix\" class=\"form-control form-control-sm\" placeholder=\"Fix\" formControlName=\"fix\">\n                                </div>\n                                <div class=\"form-group col-lg-3\">\n                                    <label>Fax</label>\n                                    <input type=\"text\" name=\"fax\" class=\"form-control form-control-sm\" placeholder=\"Fax\" formControlName=\"fax\">\n                                </div>\n                                <div class=\"form-group col-lg-3\">\n                                    <label>email</label>\n                                    <input type=\"text\" name=\"email\" class=\"form-control form-control-sm\" placeholder=\"Email\" formControlName=\"email\">\n                                </div>\n                                <div class=\"form-group col-lg-3\">\n                                    <label>Site Web</label>\n                                    <input type=\"text\" name=\"website\" class=\"form-control form-control-sm\" placeholder=\"website\" formControlName=\"website\">\n                                </div>\n                                <div class=\"form-group col-lg-4 validated\">\n                                    <label>RC *</label>\n                                    <input type=\"text\" [className]=\"providerForm.controls['rc'].errors && (providerForm.controls['rc'].dirty || providerForm.controls['rc'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"Registre de Commerce\"\n                                        #rc formControlName=\"rc\">\n                                    <div class=\"form-control-feedback\" *ngIf=\"providerForm.controls['rc'].errors && (providerForm.controls['rc'].dirty || providerForm.controls['rc'].touched)\">\n                                        <div *ngIf=\"providerForm.controls['rc'].errors.required\" class=\"invalid-feedback\">Ce champs est obligatoire</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-4 validated\">\n                                    <label>NIF *</label>\n                                    <input type=\"text\" [className]=\"providerForm.controls['nif'].errors && (providerForm.controls['nif'].dirty || providerForm.controls['nif'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"NIF\" #nif formControlName=\"nif\">\n                                    <div class=\"form-control-feedback\" *ngIf=\"providerForm.controls['nif'].errors && (providerForm.controls['nif'].dirty || providerForm.controls['nif'].touched)\">\n                                        <div *ngIf=\"providerForm.controls['nif'].errors.required\" class=\"invalid-feedback\">Ce champs est obligatoire</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-4 validated\">\n                                    <label>AI *</label>\n                                    <input type=\"text\" [className]=\"providerForm.controls['ai'].errors && (providerForm.controls['ai'].dirty || providerForm.controls['ai'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"AI\" #ai formControlName=\"ai\">\n                                    <div class=\"form-control-feedback\" *ngIf=\"providerForm.controls['ai'].errors && (providerForm.controls['ai'].dirty || providerForm.controls['ai'].touched)\">\n                                        <div *ngIf=\"providerForm.controls['ai'].errors.required\" class=\"invalid-feedback\">Ce champs est obligatoire</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-4\">\n                                    <label for=\"exampleSelects\">Devise</label>\n                                    <select class=\"form-control form-control-sm\" id=\"exampleSelects\" formControlName=\"currency\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let object of currencies\" [value]=\"object.id\">{{object.description}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n                                </div>\n                                <div class=\"form-group col-lg-4\">\n                                    <label for=\"exampleSelects\">Taxable</label>\n                                    <div class=\"col-3\">\n                                        <span class=\"kt-switch kt-switch--outline kt-switch--icon kt-switch--dark\">\n                                            <label>\n                                                <input type=\"checkbox\" name=\"dutiable\" formControlName=\"dutiable\" >\n                                                <span></span>\n                                        </label>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-4\">\n                                    <label for=\"exampleSelects\">Tax</label>\n                                    <select class=\"form-control form-control-sm\" id=\"exampleSelects\" formControlName=\"tax\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let object of taxes\" [value]=\"object.id\">{{object.description}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n                                </div>\n                                <div class=\"row col-lg-12\">\n                                    <button class=\"btn btn-primary btn-elevate col-lg-4\" (click)=\"addNewItem()\">Ajouter un Produit</button>\n                                </div>\n                                <br>\n                                <angular-slickgrid class=\"col-lg-12\" gridId=\"providerproductGrid\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\" (onAngularGridCreated)=\"angularGridReady($event)\">\n                                </angular-slickgrid>\n\n                            </div>\n                            <div class=\"kt-login__actions\">\n                                <button (click)=\"submit()\" [className]=\"loading ? 'btn btn-primary btn-elevate kt-login__btn-primary kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light' : 'btn btn-primary btn-elevate kt-login__btn-primary'\">Ajouter Fournisseur</button>\n                            </div>\n                        </form>\n                    </kt-portlet-body>\n                </kt-portlet>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"kt-section__content\">\n        <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Code Produit</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <angular-slickgrid gridId=\"productGrid\" [columnDefinitions]=\"productColumnDefinitions\" [gridOptions]=\"productGridOptions\" [dataset]=\"productDataset\" (onAngularGridCreated)=\"productGridReady($event)\">\n                </angular-slickgrid>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveProductCode()\">Sélectionner</button>\n            </div>\n        </ng-template>\n        <button hidden id=\"openProductModal\" class=\"btn btn-primary\" (click)=\"open2(content2)\">Launch demo modal</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/providers/providers-list/providers-list.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/providers/providers-list/providers-list.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>providers-list works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/providers/providers.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory/providers/providers.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/views/pages/inventory/providers/create-provider/create-provider.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/providers/create-provider/create-provider.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9wcm92aWRlcnMvY3JlYXRlLXByb3ZpZGVyL2NyZWF0ZS1wcm92aWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/inventory/providers/create-provider/create-provider.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/providers/create-provider/create-provider.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CreateProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProviderComponent", function() { return CreateProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-slickgrid */ "./node_modules/angular-slickgrid/fesm5/angular-slickgrid.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../helpers */ "./src/helpers.ts");









var CreateProviderComponent = /** @class */ (function () {
    function CreateProviderComponent(formBuilder, mService, layoutUtilsService, modalService, inventoryService, router) {
        this.formBuilder = formBuilder;
        this.mService = mService;
        this.layoutUtilsService = layoutUtilsService;
        this.modalService = modalService;
        this.inventoryService = inventoryService;
        this.router = router;
        this.loading = false;
        this.hasFormErrors = false;
        this.productDataset = [];
    }
    CreateProviderComponent.prototype.angularGridReady = function (angularGrid) {
        this.angularGrid = angularGrid;
        this.dataView = angularGrid.dataView;
        this.grid = angularGrid.slickGrid;
        this.gridService = angularGrid.gridService;
    };
    CreateProviderComponent.prototype.ngOnInit = function () {
        this.initProviderForm();
        this.initGrid();
        this.providerTypes = JSON.parse(localStorage.getItem('ProviderType'));
        this.providerStatus = JSON.parse(localStorage.getItem('ProviderStatus'));
        this.currencies = JSON.parse(localStorage.getItem('Currency'));
        this.taxes = JSON.parse(localStorage.getItem('Tax'));
    };
    CreateProviderComponent.prototype.initProviderForm = function () {
        this.provider = new _core_application__WEBPACK_IMPORTED_MODULE_3__["Provider"]();
        this.providerForm = this.formBuilder.group({
            description: [this.provider.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            provider_type: this.provider.provider_type_id,
            provider_status: this.provider.provider_status_id,
            address: this.provider.address,
            contact_name: [this.provider.contact_name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [this.provider.mobile_phone_number, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fix: this.provider.fix,
            fax: this.provider.fax,
            email: this.provider.email,
            website: this.provider.website,
            rc: [this.provider.rc],
            nif: [this.provider.nif],
            ai: [this.provider.ai],
            currency: this.provider.purchase_currency_id,
            dutiable: this.provider.dutiable,
            tax: this.provider.tax_id
        });
    };
    CreateProviderComponent.prototype.initGrid = function () {
        var _this = this;
        this.columnDefinitions = [
            {
                id: 'delete',
                field: 'id',
                excludeFromHeaderMenu: true,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__["Formatters"].deleteIcon,
                minWidth: 30,
                maxWidth: 30,
                // use onCellClick OR grid.onClick.subscribe which you can see down below
                onCellClick: function (e, args) {
                    console.log(args);
                    if (confirm('Êtes-vous sûr de supprimer cette ligne?')) {
                        _this.angularGrid.gridService.deleteItem(args.dataContext);
                    }
                }
            },
            {
                id: 'product_code', name: 'Code Produit', field: 'product_code',
                sortable: true,
                resizable: true,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__["Editors"].text
                },
                onCellChange: function (e, args) {
                    var updateItem = _this.angularGrid.gridService.getDataItemByRowIndex(args.row);
                    var result;
                    _this.mService.getProductByCode(args.dataContext.product_code).subscribe(function (res) { return result = res['data']; }, function (err) { return _this.layoutUtilsService.showActionNotification('Produit avec ce code n\'existe pas', _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Delete, 5000, true, true); }, function () {
                        if (result != null) {
                            updateItem.description = result['description'];
                            updateItem.product_id = result['id'];
                            _this.angularGrid.gridService.updateItem(updateItem);
                        }
                        else {
                            _this.layoutUtilsService.showActionNotification('Produit avec ce code n\'existe pas', _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Delete, 5000, true, true);
                        }
                    });
                }
            },
            {
                id: 'delete',
                field: 'product_id',
                excludeFromHeaderMenu: true,
                formatter: angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__["Formatters"].infoIcon,
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
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__["Editors"].text
                }
            },
            {
                id: 'provider_product_code', name: 'Code Fournisseur', field: 'provider_product_code',
                sortable: true,
                resizable: true,
                width: 130,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__["FieldType"].string,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__["Editors"].text
                }
            },
            {
                id: 'provider_product_price', name: 'Fournisseur Prix', field: 'provider_product_price',
                sortable: true,
                resizable: true,
                type: angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__["FieldType"].float,
                editor: {
                    model: angular_slickgrid__WEBPACK_IMPORTED_MODULE_4__["Editors"].float
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
    CreateProviderComponent.prototype.addNewItem = function () {
        var newId = this.dataset.length;
        var newItem = {
            id: newId,
            provider_id: null,
            product_code: '',
            description: '',
            provider_product_code: null,
            provider_product_price: null,
            created_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().local_ip,
            last_updated_ip_address: Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().local_ip,
            created_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().user_id,
            last_modified_user_id: Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().user_id,
        };
        this.angularGrid.gridService.addItemToDatagrid(newItem, false, true, false, false);
    };
    CreateProviderComponent.prototype.open2 = function (content) {
        this.initProductGrid();
        this.modalService.open(content);
    };
    CreateProviderComponent.prototype.initProductGrid = function () {
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
            { id: 'unit_price', name: 'Prix', field: 'unit_price', filterable: true }
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
    CreateProviderComponent.prototype.productGridReady = function (angularGrid) {
        this.productAngularGrid = angularGrid;
        this.productDataView = angularGrid.dataView;
        this.productGrid = angularGrid.slickGrid;
        this.productGridService = angularGrid.gridService;
    };
    CreateProviderComponent.prototype.saveProductCode = function () {
        var selected = this.productAngularGrid.gridService.getSelectedRowsDataItem()[0];
        var updateItem = this.angularGrid.gridService.getDataItemByRowIndex(this.row_number);
        updateItem.product_code = selected.product_code;
        updateItem.product_id = selected.id;
        updateItem.description = selected.description;
        this.angularGrid.gridService.updateDataGridItem(updateItem);
        this.modalService.dismissAll('Close click');
    };
    CreateProviderComponent.prototype.submit = function () {
        this.hasFormErrors = false;
        var controls = this.providerForm.controls;
        /** check form */
        if (this.providerForm.invalid) {
            console.log('invalid');
            Object.keys(controls).forEach(function (controlName) {
                controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        this.loading = true;
        var tmp = this.prepare();
        this.add(tmp);
    };
    // returns the prepared data for save
    CreateProviderComponent.prototype.prepare = function () {
        var controls = this.providerForm.controls;
        var _provider = new _core_application__WEBPACK_IMPORTED_MODULE_3__["Provider"]();
        _provider.clear();
        _provider.description = controls['description'].value.toString();
        _provider.provider_type_id = controls['provider_type'].value;
        _provider.provider_status_id = controls['provider_status'].value;
        _provider.address = controls['address'].value;
        _provider.contact_name = controls['contact_name'].value;
        _provider.mobile_phone_number = controls['phone'].value;
        _provider.fix = controls['fix'].value;
        _provider.fax = controls['fax'].value;
        _provider.email = controls['email'].value;
        _provider.website = controls['website'].value;
        _provider.rc = controls['rc'].value;
        _provider.nif = controls['nif'].value;
        _provider.ai = controls['ai'].value;
        _provider.purchase_currency_id = controls['currency'].value;
        _provider.dutiable = controls['dutiable'].value;
        _provider.tax_id = controls['tax'].value;
        _provider.created_ip_address = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().local_ip;
        _provider.last_updated_ip_address = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().local_ip;
        _provider.created_user_id = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().user_id;
        _provider.last_modified_user_id = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().user_id;
        return _provider;
    };
    // add product
    CreateProviderComponent.prototype.add = function (_provider) {
        var _this = this;
        var message = "Un nouveau fournisseir est ajout\u00E9 avec succ\u00E9s.";
        this.dataset.forEach(function (element) {
            delete element.description;
            delete element.id;
            delete element.product_code;
        });
        this.inventoryService.addProvider({ 'provider_data': _provider, 'provider_products': this.dataset }).subscribe(function (res) { return console.log(res); }, function (err) {
            _this.layoutUtilsService.showActionNotification('erreur', _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Delete, 5000, true, true);
            _this.loading = false;
        }, function () {
            _this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Create, 5000, true, true);
            _this.loading = false;
            _this.router.navigateByUrl('/demo1/index');
        });
    };
    CreateProviderComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_application__WEBPACK_IMPORTED_MODULE_3__["InvoicingService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: _core_application__WEBPACK_IMPORTED_MODULE_3__["InventoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    CreateProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-create-provider',
            template: __webpack_require__(/*! raw-loader!./create-provider.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/providers/create-provider/create-provider.component.html"),
            styles: [__webpack_require__(/*! ./create-provider.component.scss */ "./src/app/views/pages/inventory/providers/create-provider/create-provider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_application__WEBPACK_IMPORTED_MODULE_3__["InvoicingService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _core_application__WEBPACK_IMPORTED_MODULE_3__["InventoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], CreateProviderComponent);
    return CreateProviderComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/providers/providers-list/providers-list.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/providers/providers-list/providers-list.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9wcm92aWRlcnMvcHJvdmlkZXJzLWxpc3QvcHJvdmlkZXJzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/inventory/providers/providers-list/providers-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/inventory/providers/providers-list/providers-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProvidersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersListComponent", function() { return ProvidersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProvidersListComponent = /** @class */ (function () {
    function ProvidersListComponent() {
    }
    ProvidersListComponent.prototype.ngOnInit = function () {
    };
    ProvidersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-providers-list',
            template: __webpack_require__(/*! raw-loader!./providers-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/providers/providers-list/providers-list.component.html"),
            styles: [__webpack_require__(/*! ./providers-list.component.scss */ "./src/app/views/pages/inventory/providers/providers-list/providers-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProvidersListComponent);
    return ProvidersListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/providers/providers.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/inventory/providers/providers.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS9wcm92aWRlcnMvcHJvdmlkZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/inventory/providers/providers.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/inventory/providers/providers.component.ts ***!
  \************************************************************************/
/*! exports provided: ProvidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersComponent", function() { return ProvidersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");



var ProvidersComponent = /** @class */ (function () {
    function ProvidersComponent(settingsService) {
        this.settingsService = settingsService;
    }
    ProvidersComponent.prototype.ngOnInit = function () {
        this.settingsService.getAll('ProviderType').subscribe(function (res) {
            localStorage.setItem('ProviderType', JSON.stringify(res));
        }, function (err) { return console.log(err); });
        this.settingsService.getAll('ProviderStatus').subscribe(function (res) {
            localStorage.setItem('ProviderStatus', JSON.stringify(res));
        }, function (err) { return console.log(err); });
        this.settingsService.getAll('Currency').subscribe(function (res) {
            localStorage.setItem('Currency', JSON.stringify(res));
        }, function (err) { return console.log(err); });
        this.settingsService.getAll('Tax').subscribe(function (res) {
            localStorage.setItem('Tax', JSON.stringify(res));
        }, function (err) { return console.log(err); });
    };
    ProvidersComponent.ctorParameters = function () { return [
        { type: _core_application__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
    ]; };
    ProvidersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-providers',
            template: __webpack_require__(/*! raw-loader!./providers.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory/providers/providers.component.html"),
            styles: [__webpack_require__(/*! ./providers.component.scss */ "./src/app/views/pages/inventory/providers/providers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_application__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], ProvidersComponent);
    return ProvidersComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory/providers/providers.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/inventory/providers/providers.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProvidersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersModule", function() { return ProvidersModule; });
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
/* harmony import */ var _providers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./providers.component */ "./src/app/views/pages/inventory/providers/providers.component.ts");
/* harmony import */ var _create_provider_create_provider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-provider/create-provider.component */ "./src/app/views/pages/inventory/providers/create-provider/create-provider.component.ts");
/* harmony import */ var _providers_list_providers_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./providers-list/providers-list.component */ "./src/app/views/pages/inventory/providers/providers-list/providers-list.component.ts");











// Components
// Import AG Grid

// addons






var routes = [
    {
        path: '',
        component: _providers_component__WEBPACK_IMPORTED_MODULE_13__["ProvidersComponent"],
        children: [
            {
                path: '',
                redirectTo: 'create-provider',
                pathMatch: 'full'
            },
            {
                path: 'create-provider',
                component: _create_provider_create_provider_component__WEBPACK_IMPORTED_MODULE_14__["CreateProviderComponent"]
            },
            {
                path: 'providers-list',
                component: _providers_list_providers_list_component__WEBPACK_IMPORTED_MODULE_15__["ProvidersListComponent"]
            }
        ]
    }
];
var ProvidersModule = /** @class */ (function () {
    function ProvidersModule() {
    }
    ProvidersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_providers_component__WEBPACK_IMPORTED_MODULE_13__["ProvidersComponent"], _create_provider_create_provider_component__WEBPACK_IMPORTED_MODULE_14__["CreateProviderComponent"], _providers_list_providers_list_component__WEBPACK_IMPORTED_MODULE_15__["ProvidersListComponent"]]
        })
    ], ProvidersModule);
    return ProvidersModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-inventory-providers-providers-module.js.map