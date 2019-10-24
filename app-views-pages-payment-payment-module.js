(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/payment/add-payment/add-payment.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/payment/add-payment/add-payment.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet>\n                    <kt-portlet-header title=\"Ajouter Paiement\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <form class=\"kt-form\" [formGroup]=\"paymentForm\">\n                            <div class=\"row\">\n                                <div class=\"form-group col-lg-2\">\n                                    <label>Le Code du patient</label>\n                                    <input type=\"text\" [className]=\"paymentForm.controls['code'].errors && (paymentForm.controls['code'].dirty || paymentForm.controls['code'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"Le Code du patient\"\n                                        #code formControlName=\"code\" required [(ngModel)]=\"patient_code\" (change)=\"getPatientByCode()\">\n                                    <div class=\"form-control-feedback\" *ngIf=\"paymentForm.controls['code'].errors && (paymentForm.controls['code'].dirty || paymentForm.controls['code'].touched)\">\n                                        <div *ngIf=\"paymentForm.controls['code'].errors.required\" class=\"invalid-feedback\">Le Code est obligatoire</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-4\">\n                                    <label>Le nom du patient</label>\n                                    <input type=\"text\" [className]=\"paymentForm.controls['name'].errors && (paymentForm.controls['name'].dirty || paymentForm.controls['name'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" #name formControlName=\"name\"\n                                        required placeholder=\"Le nom du patient\" [(ngModel)]=\"patient_name\" (change)=\"getPatient()\">>\n                                    <div class=\"form-control-feedback\" *ngIf=\"paymentForm.controls['name'].errors && (paymentForm.controls['name'].dirty || paymentForm.controls['name'].touched)\">\n                                        <div *ngIf=\"paymentForm.controls['name'].errors.required\" class=\"invalid-feedback\">Le nom complet du patient est obligatoire</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-1\">\n                                    <label style=\"color: white\">i</label>\n                                    <button type=\"button\" (click)=\"selectPatient()\" class=\"form-control form-control-sm  btn-danger  btn-circle btn-icon\"><i class=\"flaticon-notes\"></i></button>\n                                </div>\n                                <div class=\"form-group col-lg-3 validated\">\n                                    <label>La date de paiement *</label>\n                                    <div class=\"input-group input-group-sm\">\n                                        <input [className]=\"paymentForm.controls['date'].errors && (paymentForm.controls['date'].dirty || paymentForm.controls['date'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"jj-mm-aaa\" name=\"dp\" formControlName=\"date\"\n                                            ngbDatepicker #d=\"ngbDatepicker\">\n                                        <div class=\"input-group-append\">\n                                            <button class=\"btn btn-primary btn-icon\" (click)=\"d.toggle()\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calendar\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-control-feedback\" *ngIf=\"paymentForm.controls['date'].errors && (paymentForm.controls['date'].dirty || paymentForm.controls['date'].touched)\">\n                                        <div *ngIf=\"paymentForm.controls['date'].errors.required\" class=\"invalid-feedback\">La date est obligatoire</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-2 validated\">\n                                    <label for=\"exampleSelects\">Type de paiement *</label>\n                                    <select class=\"form-control form-control-sm\" name=\"paymentType\" #type formControlName=\"type\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let object of paymentsTypes\" [value]=\"object.id\">{{object.description}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n                                </div>\n                                <div class=\"form-group col-lg-2 validated\">\n                                    <label for=\"exampleSelects\">Status de paiement *</label>\n                                    <select class=\"form-control form-control-sm\" name=\"paymentStatus\" #status formControlName=\"status\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let object of paymentsStatus\" [value]=\"object.id\">{{object.description}}</option>\n\t\t\t\t\t\t\t\t\t</select>\n                                </div>\n\n                                <div class=\"form-group col-lg-4\">\n                                    <label>Le Montant</label>\n                                    <input type=\"number\" [className]=\"paymentForm.controls['amount'].errors && (paymentForm.controls['amount'].dirty || paymentForm.controls['amount'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"Le Montant\"\n                                        #amount formControlName=\"amount\" required>\n                                    <div class=\"form-control-feedback\" *ngIf=\"paymentForm.controls['amount'].errors && (paymentForm.controls['amount'].dirty || paymentForm.controls['amount'].touched)\">\n                                        <div *ngIf=\"paymentForm.controls['amount'].errors.required\" class=\"invalid-feedback\">Le Montant est obligatoire</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-lg-2\">\n                                    <label>Remise</label>\n                                    <input type=\"number\" class=\"form-control form-control-sm\" placeholder=\"Remise\" #amount formControlName=\"discount\">\n                                </div>\n                                <div class=\"form-group col-lg-2\">\n                                    <label>Solde Du patient</label>\n                                    <input type=\"number\" class=\"form-control form-control-sm\" placeholder=\"solde\" #solde name=\"solde\" disabled [value]=\"patientSolde\">\n                                </div>\n                                <div class=\"col-lg-2 form-group \">\n                                    <label>Association</label>\n                                    <div>\n                                        <span class=\"kt-switch kt-switch--outline kt-switch--icon kt-switch--dark\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"is_association\" #association formControlName=\"association\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n                                        </label>\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"kt-login__actions\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-6 form-group row\">\n\n                                    </div>\n                                    <div class=\"col-lg-6 kt-align-right\">\n                                        <button (click)=\"submit()\" [className]=\"loading ? 'col-lg-4 btn btn-primary btn-elevate kt-login__btn-primary kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light' : 'col-lg-4 btn btn-primary btn-elevate kt-login__btn-primary'\">Ajouter Paiement</button>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </form>\n                    </kt-portlet-body>\n\n                </kt-portlet>\n            </div>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/payment/patients-credit/patients-credit.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/payment/patients-credit/patients-credit.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet>\n                    <kt-portlet-header title=\"Etat de credit des patients\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <div class=\"row\">\n                            <angular-slickgrid class=\"col-lg-12\" gridId=\"creditGrid\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\" (onAngularGridCreated)=\"gridReady($event)\">\n                            </angular-slickgrid>\n                        </div>\n                    </kt-portlet-body>\n                </kt-portlet>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet>\n                    <kt-portlet-header title=\"Remise par patients\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <div class=\"row\">\n                            <angular-slickgrid class=\"col-lg-12\" gridId=\"discountsGrid\" [columnDefinitions]=\"discountsColumnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"discountsDataset\" (onAngularGridCreated)=\"discountGridReady($event)\">\n                            </angular-slickgrid>\n                        </div>\n                    </kt-portlet-body>\n                </kt-portlet>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/payment/payment.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/payment/payment.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/views/pages/payment/add-payment/add-payment.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/payment/add-payment/add-payment.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3BheW1lbnQvYWRkLXBheW1lbnQvYWRkLXBheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/payment/add-payment/add-payment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/payment/add-payment/add-payment.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPaymentComponent", function() { return AddPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _patients_create_visit_create_visit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../patients/create-visit/create-visit.component */ "./src/app/views/pages/patients/create-visit/create-visit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helpers */ "./src/helpers.ts");









var AddPaymentComponent = /** @class */ (function () {
    function AddPaymentComponent(patientService, layoutUtilsService, paymentsService, modalService, data, formBuilder, router) {
        this.patientService = patientService;
        this.layoutUtilsService = layoutUtilsService;
        this.paymentsService = paymentsService;
        this.modalService = modalService;
        this.data = data;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loading = false;
        this.hasFormErrors = false;
    }
    AddPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentsTypes = JSON.parse(localStorage.getItem('PaymentType'));
        this.paymentsStatus = JSON.parse(localStorage.getItem('PaymentStatus'));
        this.data.currentMessage.subscribe(function (message) {
            if (message != null) {
                _this.patient_name = message['full_name'];
                _this.patient_id = message['id'];
                _this.patient_code = message['patient_code'];
                _this.patientService.getPatientSolde(_this.patient_id).subscribe(function (res) { return _this.patientSolde = res['solde']; });
            }
        });
        this.initPaymentForm();
    };
    AddPaymentComponent.prototype.initPaymentForm = function () {
        this.payment = new _core_application__WEBPACK_IMPORTED_MODULE_2__["Payment"]();
        this.paymentForm = this.formBuilder.group({
            code: [this.patient_code, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            name: [this.patient_name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            date: [this.payment.payment_date, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            type: [this.payment.payment_type_id],
            status: [this.payment.payment_status_id],
            amount: [this.payment.payment_amount, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            association: [this.payment.is_association],
            discount: [this.payment.discount]
        });
    };
    AddPaymentComponent.prototype.getPatient = function () {
        var _this = this;
        var result;
        this.patientService.getPatientByName({ full_name: this.patient_name }).subscribe(function (res) { return result = res['data']; }, function (err) { return _this.layoutUtilsService.showActionNotification('PATIENT avec ce nom n\'existe pas', _core_base_crud__WEBPACK_IMPORTED_MODULE_3__["MessageType"].Delete, 5000, true, true); }, function () {
            if (result != null) {
                _this.patient_id = result['id'];
                _this.patient_code = result['patient_code'];
                _this.patientService.getPatientSolde(_this.patient_id).subscribe(function (res) { return _this.patientSolde = res['solde']; });
            }
            else {
                _this.layoutUtilsService.showActionNotification('Patient avec ce nom n\'existe pas', _core_base_crud__WEBPACK_IMPORTED_MODULE_3__["MessageType"].Delete, 5000, true, true);
            }
        });
    };
    AddPaymentComponent.prototype.selectPatient = function () {
        this.modalService.open(_patients_create_visit_create_visit_component__WEBPACK_IMPORTED_MODULE_5__["PatientsListModalComponent"], { size: 'lg' });
    };
    AddPaymentComponent.prototype.getPatientByCode = function () {
        var _this = this;
        var result;
        this.patientService.getPatientByCode(this.patient_code).subscribe(function (res) { return result = res['data']; }, function (err) { return _this.layoutUtilsService.showActionNotification('PATIENT avec ce code n\'existe pas', _core_base_crud__WEBPACK_IMPORTED_MODULE_3__["MessageType"].Delete, 5000, true, true); }, function () {
            if (result != null) {
                _this.patient_id = result['id'];
                _this.patient_name = result['full_name'];
                _this.patientService.getPatientSolde(_this.patient_id).subscribe(function (res) { return _this.patientSolde = res['solde']; });
            }
            else {
                _this.layoutUtilsService.showActionNotification('Patient avec ce code n\'existe pas', _core_base_crud__WEBPACK_IMPORTED_MODULE_3__["MessageType"].Delete, 5000, true, true);
            }
        });
    };
    AddPaymentComponent.prototype.submit = function () {
        this.hasFormErrors = false;
        var controls = this.paymentForm.controls;
        /** check form */
        if (this.paymentForm.invalid) {
            console.log('invalid');
            Object.keys(controls).forEach(function (controlName) {
                controls[controlName].markAsTouched();
                console.log(controls[controlName].touched);
            });
            this.hasFormErrors = true;
            return;
        }
        this.loading = true;
        var tmp = this.prepare();
        this.add(tmp);
    };
    // returns the prepared data for save
    AddPaymentComponent.prototype.prepare = function () {
        var controls = this.paymentForm.controls;
        var _payment = new _core_application__WEBPACK_IMPORTED_MODULE_2__["Payment"]();
        _payment.clear();
        _payment.patient_id = this.patient_id;
        var date = controls['date'].value;
        _payment.payment_date = date.year + '/' + date.month + "/" + date.day;
        _payment.payment_type_id = controls['type'].value;
        _payment.payment_status_id = controls['status'].value;
        _payment.payment_amount = controls['amount'].value;
        _payment.is_association = controls['association'].value;
        _payment.discount = controls['discount'].value;
        _payment.created_ip_address = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().local_ip;
        _payment.last_updated_ip_address = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().local_ip;
        _payment.created_user_id = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().user_id;
        _payment.last_modified_user_id = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRequiredFields"])().user_id;
        return _payment;
    };
    // add patient
    AddPaymentComponent.prototype.add = function (_payment) {
        var _this = this;
        var result;
        var message = "Un nouveau paiement est ajout\u00E9 avec succ\u00E9s.";
        this.paymentsService.addPayment(_payment).subscribe(function (res) { return result = res; }, function (err) {
            _this.layoutUtilsService.showActionNotification('erreur', _core_base_crud__WEBPACK_IMPORTED_MODULE_3__["MessageType"].Delete, 5000, true, true);
            _this.loading = false;
        }, function () {
            setTimeout(function () {
                _this.printPayment(result['payment']);
                _this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_3__["MessageType"].Create, 5000, true, true);
                _this.loading = false;
                _this.router.navigateByUrl('/demo1/index');
            }, 0);
        });
    };
    AddPaymentComponent.prototype.printPayment = function (payment) {
        var popupWin;
        var nss = '';
        var adr = '';
        if (payment.patient.social_security_number != null) {
            nss = payment.patient.social_security_number;
        }
        if (payment.patient.address != null) {
            adr = payment.patient.address;
        }
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n    <html lang=\"en\">\n\n<head>\n  <title>Facture " + payment.payment_code + "</title>\n  <style>\n    @import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,700&subset=cyrillic,cyrillic-ext,latin,greek-ext,greek,latin-ext,vietnamese\");\n\n    html,\n    body,\n    div,\n    span,\n    applet,\n    object,\n    iframe,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    p,\n    blockquote,\n    pre,\n    a,\n    abbr,\n    acronym,\n    address,\n    big,\n    cite,\n    code,\n    del,\n    dfn,\n    em,\n    img,\n    ins,\n    kbd,\n    q,\n    s,\n    samp,\n    small,\n    strike,\n    strong,\n    sub,\n    sup,\n    tt,\n    var,\n    b,\n    u,\n    i,\n    center,\n    dl,\n    dt,\n    dd,\n    ol,\n    ul,\n    li,\n    fieldset,\n    form,\n    label,\n    legend,\n    table,\n    caption,\n    tbody,\n    tfoot,\n    thead,\n    tr,\n    th,\n    td,\n    article,\n    aside,\n    canvas,\n    details,\n    embed,\n    figure,\n    figcaption,\n    footer,\n    header,\n    hgroup,\n    menu,\n    nav,\n    output,\n    ruby,\n    section,\n    summary,\n    time,\n    mark,\n    audio,\n    video {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      font: inherit;\n      font-size: 100%;\n      vertical-align: baseline;\n    }\n\n    html {\n      line-height: 1;\n    }\n\n    ol,\n    ul {\n      list-style: none;\n    }\n\n    table {\n      border-collapse: collapse;\n      border-spacing: 0;\n    }\n\n    caption,\n    th,\n    td {\n      text-align: left;\n      font-weight: normal;\n      vertical-align: middle;\n    }\n\n    q,\n    blockquote {\n      quotes: none;\n    }\n\n    q:before,\n    q:after,\n    blockquote:before,\n    blockquote:after {\n      content: \"\";\n      content: none;\n    }\n\n    a img {\n      border: none;\n    }\n\n    article,\n    aside,\n    details,\n    figcaption,\n    figure,\n    footer,\n    header,\n    hgroup,\n    main,\n    menu,\n    nav,\n    section,\n    summary {\n      display: block;\n    }\n\n    /* Invoice styles */\n    /**\n * DON'T override any styles for the <html> and <body> tags, as this may break the layout.\n * Instead wrap everything in one main <div id=\"container\"> element where you may change\n * something like the font or the background of the qo\n */\n    html,\n    body {\n      /* MOVE ALONG, NOTHING TO CHANGE HERE! */\n    }\n\n    /** \n * IMPORTANT NOTICE: DON'T USE '!important' otherwise this may lead to broken print layout.\n * Some browsers may require '!important' in oder to work properly but be careful with it.\n */\n    .clearfix {\n      display: block;\n      clear: both;\n    }\n\n    .hidden {\n      display: none;\n    }\n\n    b,\n    strong,\n    .bold {\n      font-weight: bold;\n    }\n\n    .bold-client {\n      font-weight: bold;\n      font-size: 20px;\n    }\n    #container {\n      font: normal 13px/1.4em 'Open Sans', Sans-serif;\n      margin: 0 auto;\n      padding: 50px 40px;\n      min-height: 1058px;\n      padding-bottom: 9 rem;\n    }\n\n    #memo .company-name {\n      background: #8BA09E url(\"../img/arrows.png\") 560px center no-repeat;\n      background-size: 100px auto;\n      padding: 10px 20px;\n      position: relative;\n      margin-bottom: 15px;\n    }\n\n    #memo .company-name span {\n      color: white;\n      display: inline-block;\n      min-width: 20px;\n      font-size: 36px;\n      font-weight: bold;\n      line-height: 1em;\n    }\n\n    #memo .company-name .right-arrow {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      width: 100px;\n      background: url(\"../img/right-arrow.png\") right center no-repeat;\n      background-size: auto 60px;\n    }\n\n    #memo .logo {\n      float: left;\n      clear: left;\n      margin-left: 20px;\n    }\n\n    #memo .logo img {\n      width: 150px;\n      height: 100px;\n    }\n\n    #memo .company-info {\n      margin-left: 20px;\n      float: left;\n      font-size: 12px;\n      color: #8b8b8b;\n    }\n\n    #memo .company-info div {\n      margin-bottom: 3px;\n      min-width: 20px;\n    }\n\n    #memo .company-info span {\n      display: inline-block;\n      min-width: 20px;\n    }\n\n    #memo:after {\n      content: '';\n      display: block;\n      clear: both;\n    }\n\n    #invoice-info {\n      float: right;\n      margin: 25px 0 0 20px;\n    }\n\n    #invoice-info>div {\n      float: right;\n    }\n\n    #invoice-info>div>span {\n      display: block;\n      min-width: 20px;\n      min-height: 18px;\n      margin-bottom: 3px;\n    }\n\n    #invoice-info>div:last-child {\n      margin-left: 20px;\n    }\n\n    #invoice-info:after {\n      content: '';\n      display: block;\n      clear: both;\n    }\n\n    #client-info {\n      float: left;\n      margin: 5px 20px 0 0;\n      min-width: 220px;\n      text-align: left;\n    }\n\n    #client-info>div {\n      margin-bottom: 3px;\n      min-width: 20px;\n    }\n\n    #client-info span {\n      display: block;\n      min-width: 20px;\n    }\n\n    #invoice-title-number {\n      text-align: center;\n      margin: 20px 0;\n    }\n\n    #invoice-title-number span {\n      display: inline-block;\n      min-width: 20px;\n    }\n\n    #invoice-title-number #title {\n      margin-right: 15px;\n      text-align: right;\n      font-size: 20px;\n      font-weight: bold;\n    }\n\n    #invoice-title-number #number {\n      font-size: 15px;\n      text-align: left;\n    }\n\n    table {\n      table-layout: fixed;\n    }\n\n    table th,\n    table td {\n      vertical-align: top;\n      word-break: keep-all;\n      word-wrap: break-word;\n    }\n\n    #items {\n      margin: 20px 0 35px 0;\n    }\n\n    #items .first-cell,\n    #items table th:first-child,\n    #items table td:first-child {\n      width: 18px;\n      text-align: left;\n    }\n\n    #items table {\n      border-collapse: separate;\n      width: 100%;\n    }\n\n    #items table th {\n      padding: 12px 10px;\n      background: #E6E7E7;\n      border-bottom: 4px solid #487774;\n    }\n    #items table th:nth-child(1) {\n      text-align: left;\n    }\n    #items table th:nth-child(2) {\n      text-align: left;\n    }\n    #items table th:nth-child(3) {\n      text-align: left;\n      width: 40%;\n    }\n    #items table th:nth-child(4) {\n      text-align: right;\n    }\n\n    #items table th:nth-child(5) {\n      text-align: right;\n    }\n\n    #items table th:last-child {\n      text-align: right;\n      padding-right: 20px !important;\n    }\n\n    #items table td {\n      padding: 15px 10px;\n      border-right: 1px solid #CCCCCF;\n    }\n    #items table td:nth-child(1) {\n      text-align: left;\n    }\n    #items table td:nth-child(2) {\n      text-align: left;\n    }\n    #items table td:nth-child(3) {\n      text-align: left;\n      width: 40%;\n    }\n    #items table td:nth-child(4) {\n      text-align: right;\n    }\n\n    #items table td:nth-child(5) {\n      text-align: right;\n    }\n\n    #items table td:last-child {\n      text-align: right;\n      padding-right: 20px !important;\n    }\n    #items table td:first-child {\n      text-align: left;\n      border-right: 0 !important;\n    }\n\n    #items table td:nth-child(2) {\n      text-align: left;\n    }\n\n    #items table td:last-child {\n      border-right: 0 !important;\n      padding-right: 20px !important;\n    }\n\n    .currency {\n      border-bottom: 4px solid #487774;\n      padding: 0 20px;\n    }\n\n    .currency span {\n      font-size: 11px;\n      font-style: italic;\n      color: #8b8b8b;\n      display: inline-block;\n      min-width: 20px;\n    }\n\n    #sums {\n      float: right;\n      background: #8BA09E url(\"../img/left-arrow.png\") -17px bottom no-repeat;\n      background-size: auto 100px;\n      color: white;\n    }\n\n    #sums table tr th,\n    #sums table tr td {\n      min-width: 100px;\n      padding: 8px 20px 8px 35px;\n      text-align: right;\n      font-weight: 600;\n    }\n\n    #sums table tr th {\n      text-align: left;\n      padding-right: 25px;\n    }\n\n    #sums table tr.amount-total th {\n      text-transform: uppercase;\n    }\n\n    #sums table tr.amount-total th,\n    #sums table tr.amount-total td {\n      font-size: 16px;\n      font-weight: bold;\n    }\n\n    #sums table tr:last-child th {\n      text-transform: uppercase;\n    }\n\n    #sums table tr:last-child th,\n    #sums table tr:last-child td {\n      font-size: 16px;\n      font-weight: bold;\n      padding-top: 20px !important;\n      padding-bottom: 40px !important;\n    }\n\n    #terms {\n      margin: 50px 20px 10px 20px;\n    }\n\n    #terms>span {\n      display: inline-block;\n      min-width: 20px;\n      font-weight: bold;\n    }\n\n    #terms>div {\n      margin-top: 10px;\n      min-height: 50px;\n      min-width: 50px;\n    }\n\n    .payment-info {\n      margin: 0 20px;\n    }\n\n    .payment-info span {\n      display: inline-block;\n      min-width: 20px;\n      font-weight: bold;\n    }\n\n    .payment-info div {\n      font-size: 12px;\n      color: #8b8b8b;\n      display: inline-block;\n      min-width: 20px;\n    }\n\n    .ib_bottom_row_commands {\n      margin: 10px 0 0 20px !important;\n    }\n\n    .ibcl_tax_value:before {\n      color: white !important;\n    }\n    #footer {\n      position: absolute;\n      bottom: 1;\n      width: 100%;\n      height: 8 rem;            /* Footer height */\n    }\n    hr {\n      border: 3px solid #8BA09E;\n      }\n    @media print {\n      @page {size: A4 portrait; }\n      html, body {\n          height: 90%;\n          page-break-after: avoid;\n          page-break-before: avoid;\n      }\n      @import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,700&subset=cyrillic,cyrillic-ext,latin,greek-ext,greek,latin-ext,vietnamese\");\n\n      html,\n      body,\n      div,\n      span,\n      applet,\n      object,\n      iframe,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      p,\n      blockquote,\n      pre,\n      a,\n      abbr,\n      acronym,\n      address,\n      big,\n      cite,\n      code,\n      del,\n      dfn,\n      em,\n      img,\n      ins,\n      kbd,\n      q,\n      s,\n      samp,\n      small,\n      strike,\n      strong,\n      sub,\n      sup,\n      tt,\n      var,\n      b,\n      u,\n      i,\n      center,\n      dl,\n      dt,\n      dd,\n      ol,\n      ul,\n      li,\n      fieldset,\n      form,\n      label,\n      legend,\n      table,\n      caption,\n      tbody,\n      tfoot,\n      thead,\n      tr,\n      th,\n      td,\n      article,\n      aside,\n      canvas,\n      details,\n      embed,\n      figure,\n      figcaption,\n      footer,\n      header,\n      hgroup,\n      menu,\n      nav,\n      output,\n      ruby,\n      section,\n      summary,\n      time,\n      mark,\n      audio,\n      video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font: inherit;\n        font-size: 100%;\n        vertical-align: baseline;\n      }\n  \n      html {\n        line-height: 1;\n      }\n  \n      ol,\n      ul {\n        list-style: none;\n      }\n  \n      table {\n        border-collapse: collapse;\n        border-spacing: 0;\n      }\n  \n      caption,\n      th,\n      td {\n        text-align: left;\n        font-weight: normal;\n        vertical-align: middle;\n      }\n  \n      q,\n      blockquote {\n        quotes: none;\n      }\n  \n      q:before,\n      q:after,\n      blockquote:before,\n      blockquote:after {\n        content: \"\";\n        content: none;\n      }\n  \n      a img {\n        border: none;\n      }\n  \n      article,\n      aside,\n      details,\n      figcaption,\n      figure,\n      footer,\n      header,\n      hgroup,\n      main,\n      menu,\n      nav,\n      section,\n      summary {\n        display: block;\n      }\n  \n      /* Invoice styles */\n      /**\n   * DON'T override any styles for the <html> and <body> tags, as this may break the layout.\n   * Instead wrap everything in one main <div id=\"container\"> element where you may change\n   * something like the font or the background of the qo\n   */\n      html,\n      body {\n        /* MOVE ALONG, NOTHING TO CHANGE HERE! */\n      }\n  \n      /** \n   * IMPORTANT NOTICE: DON'T USE '!important' otherwise this may lead to broken print layout.\n   * Some browsers may require '!important' in oder to work properly but be careful with it.\n   */\n      .clearfix {\n        display: block;\n        clear: both;\n      }\n  \n      .hidden {\n        display: none;\n      }\n  \n      b,\n      strong,\n      .bold {\n        font-weight: bold;\n      }\n  \n      .bold-client {\n        font-weight: bold;\n        font-size: 20px;\n      }\n      #container {\n        font: normal 13px/1.4em 'Open Sans', Sans-serif;\n        margin: 0 auto;\n        padding: 50px 40px;\n        min-height: 1058px;\n        padding-bottom: 9 rem;\n      }\n  \n      #memo .company-name {\n        background: #8BA09E url(\"../img/arrows.png\") 560px center no-repeat;\n        background-size: 100px auto;\n        padding: 10px 20px;\n        position: relative;\n        margin-bottom: 15px;\n      }\n  \n      #memo .company-name span {\n        color: white;\n        display: inline-block;\n        min-width: 20px;\n        font-size: 36px;\n        font-weight: bold;\n        line-height: 1em;\n      }\n  \n      #memo .company-name .right-arrow {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        width: 100px;\n        background: url(\"../img/right-arrow.png\") right center no-repeat;\n        background-size: auto 60px;\n      }\n  \n      #memo .logo {\n        float: left;\n        clear: left;\n        margin-left: 20px;\n      }\n  \n      #memo .logo img {\n        width: 150px;\n        height: 100px;\n      }\n  \n      #memo .company-info {\n        margin-left: 20px;\n        float: left;\n        font-size: 12px;\n        color: #8b8b8b;\n      }\n  \n      #memo .company-info div {\n        margin-bottom: 3px;\n        min-width: 20px;\n      }\n  \n      #memo .company-info span {\n        display: inline-block;\n        min-width: 20px;\n      }\n  \n      #memo:after {\n        content: '';\n        display: block;\n        clear: both;\n      }\n  \n      #invoice-info {\n        float: right;\n        margin: 25px 0 0 20px;\n      }\n  \n      #invoice-info>div {\n        float: right;\n      }\n  \n      #invoice-info>div>span {\n        display: block;\n        min-width: 20px;\n        min-height: 18px;\n        margin-bottom: 3px;\n      }\n  \n      #invoice-info>div:last-child {\n        margin-left: 20px;\n      }\n  \n      #invoice-info:after {\n        content: '';\n        display: block;\n        clear: both;\n      }\n  \n      #client-info {\n        float: left;\n        margin: 5px 20px 0 0;\n        min-width: 220px;\n        text-align: left;\n      }\n  \n      #client-info>div {\n        margin-bottom: 3px;\n        min-width: 20px;\n      }\n  \n      #client-info span {\n        display: block;\n        min-width: 20px;\n      }\n  \n      #invoice-title-number {\n        text-align: center;\n        margin: 20px 0;\n      }\n  \n      #invoice-title-number span {\n        display: inline-block;\n        min-width: 20px;\n      }\n  \n      #invoice-title-number #title {\n        margin-right: 15px;\n        text-align: right;\n        font-size: 20px;\n        font-weight: bold;\n      }\n  \n      #invoice-title-number #number {\n        font-size: 15px;\n        text-align: left;\n      }\n  \n      table {\n        table-layout: fixed;\n      }\n  \n      table th,\n      table td {\n        vertical-align: top;\n        word-break: keep-all;\n        word-wrap: break-word;\n      }\n  \n      #items {\n        margin: 20px 0 35px 0;\n      }\n  \n      #items .first-cell,\n      #items table th:first-child,\n      #items table td:first-child {\n        width: 18px;\n        text-align: left;\n      }\n  \n      #items table {\n        border-collapse: separate;\n        width: 100%;\n      }\n  \n      #items table th {\n        padding: 12px 10px;\n        background: #E6E7E7;\n        border-bottom: 4px solid #487774;\n      }\n      #items table th:nth-child(1) {\n        text-align: left;\n      }\n      #items table th:nth-child(2) {\n        text-align: left;\n      }\n      #items table th:nth-child(3) {\n        text-align: left;\n        width: 40%;\n      }\n      #items table th:nth-child(4) {\n        text-align: right;\n      }\n  \n      #items table th:nth-child(5) {\n        text-align: right;\n      }\n  \n      #items table th:last-child {\n        text-align: right;\n        padding-right: 20px !important;\n      }\n  \n      #items table td {\n        padding: 15px 10px;\n        border-right: 1px solid #CCCCCF;\n      }\n      #items table td:nth-child(1) {\n        text-align: left;\n      }\n      #items table td:nth-child(2) {\n        text-align: left;\n      }\n      #items table td:nth-child(3) {\n        text-align: left;\n        width: 40%;\n      }\n      #items table td:nth-child(4) {\n        text-align: right;\n      }\n  \n      #items table td:nth-child(5) {\n        text-align: right;\n      }\n  \n      #items table td:last-child {\n        text-align: right;\n        padding-right: 20px !important;\n      }\n      #items table td:first-child {\n        text-align: left;\n        border-right: 0 !important;\n      }\n  \n      #items table td:nth-child(2) {\n        text-align: left;\n      }\n  \n      #items table td:last-child {\n        border-right: 0 !important;\n        padding-right: 20px !important;\n      }\n  \n      .currency {\n        border-bottom: 4px solid #487774;\n        padding: 0 20px;\n      }\n  \n      .currency span {\n        font-size: 11px;\n        font-style: italic;\n        color: #8b8b8b;\n        display: inline-block;\n        min-width: 20px;\n      }\n  \n      #sums {\n        float: right;\n        background: #8BA09E url(\"../img/left-arrow.png\") -17px bottom no-repeat;\n        background-size: auto 100px;\n        color: white;\n      }\n  \n      #sums table tr th,\n      #sums table tr td {\n        min-width: 100px;\n        padding: 8px 20px 8px 35px;\n        text-align: right;\n        font-weight: 600;\n      }\n  \n      #sums table tr th {\n        text-align: left;\n        padding-right: 25px;\n      }\n  \n      #sums table tr.amount-total th {\n        text-transform: uppercase;\n      }\n  \n      #sums table tr.amount-total th,\n      #sums table tr.amount-total td {\n        font-size: 16px;\n        font-weight: bold;\n      }\n  \n      #sums table tr:last-child th {\n        text-transform: uppercase;\n      }\n  \n      #sums table tr:last-child th,\n      #sums table tr:last-child td {\n        font-size: 16px;\n        font-weight: bold;\n        padding-top: 20px !important;\n        padding-bottom: 40px !important;\n      }\n  \n      #terms {\n        margin: 50px 20px 10px 20px;\n      }\n  \n      #terms>span {\n        display: inline-block;\n        min-width: 20px;\n        font-weight: bold;\n      }\n  \n      #terms>div {\n        margin-top: 10px;\n        min-height: 50px;\n        min-width: 50px;\n      }\n  \n      .payment-info {\n        margin: 0 20px;\n      }\n  \n      .payment-info span {\n        display: inline-block;\n        min-width: 20px;\n        font-weight: bold;\n      }\n  \n      .payment-info div {\n        font-size: 12px;\n        color: #8b8b8b;\n        display: inline-block;\n        min-width: 20px;\n      }\n  \n      .ib_bottom_row_commands {\n        margin: 10px 0 0 20px !important;\n      }\n  \n      .ibcl_tax_value:before {\n        color: white !important;\n      }\n      #footer {\n        position: absolute;\n        bottom: 1;\n        width: 100%;\n        height: 8 rem;            /* Footer height */\n      }\n      hr {\n        border: 3px solid #8BA09E;\n        }\n  }\n\n</style>\n</head>\n\n<body >\n  <div id=\"container\">\n    <section id=\"memo\">\n\n      <div class=\"logo\">\n      <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"666.000000pt\" height=\"123.000000pt\" viewBox=\"0 0 666.000000 123.000000\"\n      preserveAspectRatio=\"xMidYMid meet\">\n     \n     <g transform=\"translate(0.000000,123.000000) scale(0.100000,-0.100000)\"\n     fill=\"#000000\" stroke=\"none\">\n     <path d=\"M685 1216 c-87 -27 -153 -74 -181 -128 -18 -35 -18 -38 6 -38 11 0\n     20 7 20 15 0 8 17 32 39 54 75 75 227 108 351 77 66 -17 100 -38 100 -63 0 -8\n     -16 -34 -35 -58 -28 -34 -32 -44 -20 -49 17 -6 95 85 95 110 0 26 -46 62 -101\n     78 -63 19 -217 20 -274 2z\"/>\n     <path d=\"M4201 1181 c-43 -33 8 -71 53 -42 l28 18 -29 21 c-28 20 -30 20 -52\n     3z\"/>\n     <path d=\"M2298 1165 c-9 -20 -8 -32 5 -57 9 -18 21 -68 27 -112 14 -91 13 -92\n     -66 -102 -94 -11 -134 28 -98 98 16 31 16 32 0 19 -40 -33 -68 -118 -48 -147\n     40 -60 196 -35 242 38 19 29 21 43 16 111 -3 42 -2 77 2 77 4 0 15 13 25 29\n     l17 29 -45 11 c-25 6 -45 16 -45 21 0 19 -21 10 -32 -15z\"/>\n     <path d=\"M2493 1166 c-18 -22 -21 -36 -17 -74 3 -26 8 -76 12 -112 l7 -65 84\n     -3 c66 -2 87 1 102 14 16 15 20 15 41 0 19 -13 55 -16 216 -16 l193 0 15 36\n     c21 50 15 74 -26 102 -48 33 -75 28 -247 -45 -10 -4 -10 2 -2 27 6 17 8 34 5\n     37 -3 4 6 20 21 36 19 21 24 31 15 34 -7 3 -26 16 -43 30 l-30 26 -21 -21\n     c-18 -18 -19 -25 -10 -49 6 -15 14 -54 18 -86 l6 -58 -43 3 -44 3 3 45 4 45\n     -26 -24 c-14 -13 -26 -33 -28 -45 -3 -19 -10 -21 -80 -24 l-76 -3 -7 78 c-4\n     43 -10 91 -14 107 l-7 29 -21 -27z m586 -171 c14 -13 6 -15 -79 -15 -51 0 -91\n     2 -88 5 2 3 22 12 44 20 45 17 101 13 123 -10z\"/>\n     <path d=\"M3454 1173 c-17 -11 -27 -11 -46 -2 -27 12 -68 -1 -68 -22 0 -17 49\n     -30 69 -17 13 8 26 8 52 -1 29 -10 36 -9 52 8 19 19 19 19 -9 34 -25 13 -32\n     13 -50 0z\"/>\n     <path d=\"M4093 1164 c-18 -26 -19 -37 -12 -119 15 -150 -3 -135 158 -135 135\n     0 139 1 145 23 18 69 -4 153 -48 182 -22 15 -31 15 -56 5 -30 -12 -90 -72 -90\n     -90 0 -29 99 -55 115 -30 9 15 32 12 39 -5 5 -13 -10 -15 -98 -15 l-104 0 -7\n     81 c-4 45 -10 93 -14 107 l-7 26 -21 -30z m202 -112 c-9 -2 -24 -1 -33 3 -13\n     5 -14 8 -3 15 9 5 22 3 33 -3 16 -10 16 -12 3 -15z\"/>\n     <path d=\"M5135 1170 c-17 -19 -17 -20 11 -31 21 -8 34 -8 47 1 14 8 27 8 52\n     -1 30 -11 37 -10 55 6 l21 19 -26 14 c-21 11 -33 11 -55 2 -21 -8 -34 -9 -48\n     -1 -28 15 -36 14 -57 -9z\"/>\n     <path d=\"M6302 1158 c-17 -26 -18 -34 -7 -45 12 -11 35 -95 35 -124 0 -6 -18\n     -9 -42 -7 l-41 3 -27 80 -27 80 -21 -34 c-19 -31 -19 -37 -6 -73 8 -22 14 -45\n     14 -50 0 -5 -35 -8 -77 -6 -75 3 -78 4 -76 26 4 35 -15 16 -28 -28 -19 -63\n     -11 -70 77 -70 59 0 82 4 97 17 18 17 19 17 28 0 8 -13 24 -17 79 -17 62 0 71\n     3 82 23 6 12 11 49 10 82 -1 52 2 63 25 87 l25 26 -41 21 c-22 12 -41 26 -41\n     31 0 20 -19 9 -38 -22z\"/>\n     <path d=\"M5567 1159 c-84 -24 -135 -49 -182 -90 -41 -36 -44 -55 -12 -65 12\n     -4 115 -6 228 -6 164 1 210 -1 225 -13 17 -12 -15 -13 -246 -9 -146 3 -271 7\n     -277 10 -8 2 -13 21 -13 45 l0 42 -25 -23 c-14 -13 -25 -34 -25 -47 0 -22 -3\n     -23 -79 -23 l-79 0 -12 35 c-7 20 -23 43 -36 52 -22 14 -26 14 -49 -1 -14 -9\n     -36 -37 -48 -62 -26 -54 -18 -73 38 -88 l38 -11 -49 -23 c-27 -13 -71 -27 -99\n     -31 l-50 -8 50 -8 c94 -15 131 -12 159 14 14 13 28 32 32 43 5 15 16 18 82 18\n     66 0 79 3 90 20 12 20 12 20 32 0 19 -19 34 -20 330 -20 296 0 310 1 320 19 5\n     11 10 36 10 55 0 57 -15 60 -280 66 l-235 5 45 21 c25 12 69 28 97 35 33 8 63\n     23 80 41 31 33 30 33 -60 7z m-559 -151 c19 -19 14 -28 -12 -28 -27 0 -41 14\n     -31 30 8 14 28 13 43 -2z\"/>\n     <path d=\"M712 1152 c-53 -19 -80 -38 -119 -82 -51 -58 -15 -54 44 5 71 71 137\n     85 286 59 23 -4 37 -3 37 4 0 14 -33 21 -120 27 -58 5 -87 1 -128 -13z\"/>\n     <path d=\"M6499 1154 c-34 -40 -37 -56 -23 -143 18 -110 18 -111 37 -74 17 33\n     22 146 8 207 -6 27 -7 27 -22 10z\"/>\n     <path d=\"M3501 1071 c-15 -17 -34 -44 -41 -62 -12 -28 -12 -33 5 -45 25 -19\n     80 -18 96 2 12 14 14 14 26 -2 7 -10 13 -23 13 -30 0 -29 -168 -56 -219 -34\n     -41 16 -47 43 -21 87 30 50 17 53 -19 3 -80 -110 -32 -174 117 -155 76 9 76 9\n     160 -4 62 -9 79 -9 105 4 25 11 40 13 67 5 19 -6 49 -10 67 -10 55 0 123 74\n     123 134 0 24 -59 96 -79 96 -4 0 -13 -12 -20 -27 -13 -29 -13 -29 44 -67 l20\n     -14 -20 -22 c-25 -29 -91 -59 -127 -60 -32 0 -33 5 -13 40 29 51 11 158 -30\n     174 -54 20 -125 -100 -83 -142 18 -18 56 -14 78 8 11 11 20 15 20 10 0 -17\n     -44 -56 -86 -78 -46 -24 -156 -43 -115 -20 39 21 63 76 58 131 -8 96 -72 135\n     -126 78z m43 -37 c26 -10 18 -24 -14 -24 -20 0 -30 5 -30 15 0 16 17 19 44 9z\n     m196 -30 c0 -8 -8 -14 -18 -14 -25 0 -34 11 -21 26 13 15 39 7 39 -12z\"/>\n     <path d=\"M4570 1039 c-9 -16 -8 -23 5 -33 15 -11 15 -14 -5 -38 l-21 -27 29\n     -15 c27 -14 31 -14 47 4 17 19 17 21 1 39 -15 16 -15 19 -1 31 21 17 19 37 -4\n     50 -28 15 -39 13 -51 -11z\"/>\n     <path d=\"M4731 1033 c-12 -25 -10 -29 21 -54 l33 -27 -25 -28 c-34 -36 -79\n     -54 -142 -55 l-53 -1 35 -15 c19 -8 58 -17 87 -20 51 -6 54 -4 91 33 26 26 41\n     52 46 78 7 36 4 42 -30 77 -21 22 -41 39 -44 39 -4 0 -12 -12 -19 -27z\"/>\n     <path d=\"M790 1013 c-55 -20 -67 -78 -24 -112 15 -12 37 -21 50 -21 16 0 24\n     -6 24 -17 0 -36 21 -90 55 -143 41 -64 43 -84 10 -106 -31 -20 -37 -16 -69 49\n     -18 38 -43 67 -86 101 -80 61 -102 97 -98 159 3 54 12 48 -110 71 l-72 14 -6\n     -25 c-4 -13 -3 -43 0 -66 16 -96 73 -174 164 -222 62 -32 72 -41 111 -97 50\n     -75 110 -95 186 -64 54 23 85 62 85 107 0 32 -8 48 -49 92 -26 30 -56 75 -66\n     100 -17 44 -17 46 5 75 16 22 21 38 16 56 -10 41 -77 67 -126 49z\"/>\n     <path d=\"M955 990 c-13 -21 8 -30 70 -30 l64 0 3 -142 c3 -140 4 -143 26 -146\n     22 -3 22 -3 22 142 l0 146 70 0 c63 0 70 2 70 20 0 19 -7 20 -159 20 -96 0\n     -162 -4 -166 -10z\"/>\n     <path d=\"M2628 866 c-23 -17 -23 -23 6 -41 19 -13 28 -14 50 -4 14 7 26 17 26\n     22 0 13 -32 36 -50 36 -8 0 -23 -6 -32 -13z\"/>\n     <path d=\"M6513 773 c-22 -8 -14 -33 10 -32 19 1 19 2 3 6 -15 4 -16 7 -5 13\n     16 10 10 19 -8 13z\"/>\n     <path d=\"M2160 730 c-9 -6 -7 -11 7 -18 11 -6 25 -7 33 -2 8 5 21 5 30 0 18\n     -10 49 5 36 17 -10 10 -90 13 -106 3z\"/>\n     <path d=\"M3153 720 c-6 -9 -7 -23 -3 -31 4 -8 11 -29 15 -46 6 -32 5 -33 -24\n     -33 -21 0 -31 5 -31 15 0 8 -5 15 -10 15 -6 0 -13 -7 -16 -15 -4 -8 -14 -15\n     -24 -15 -14 0 -17 5 -13 23 l6 22 -25 -22 c-13 -13 -34 -23 -47 -23 -18 0 -21\n     4 -16 23 l6 22 -20 -22 c-26 -31 -65 -30 -79 2 -6 14 -16 25 -22 25 -18 0 -70\n     -30 -70 -40 0 -6 -13 -10 -29 -10 -32 0 -41 17 -41 83 0 38 -8 45 -27 26 -10\n     -10 -9 -46 3 -126 4 -29 9 -33 34 -33 16 0 35 6 42 14 11 12 19 11 50 -5 30\n     -15 46 -17 80 -11 24 5 98 7 166 6 138 -3 142 -1 142 75 0 22 5 43 10 46 16\n     10 12 19 -19 36 -26 15 -29 15 -38 -1z\"/>\n     <path d=\"M4333 727 c-9 -14 5 -20 52 -22 28 -1 50 4 56 12 13 15 12 15 -54 17\n     -27 1 -51 -2 -54 -7z\"/>\n     <path d=\"M5250 720 c-7 -12 -7 -27 -2 -37 5 -10 12 -30 16 -45 6 -26 4 -28\n     -24 -28 -22 0 -33 6 -39 22 l-8 22 -12 -22 c-15 -28 -45 -30 -36 -2 3 11 3 20\n     -2 20 -4 0 -14 -9 -21 -20 -7 -12 -23 -20 -38 -20 -21 0 -24 3 -19 23 l6 22\n     -20 -22 c-27 -31 -68 -30 -83 2 -14 31 -26 31 -70 1 -20 -13 -54 -25 -77 -28\n     -43 -4 -49 0 -29 20 18 18 -11 43 -52 44 -40 1 -71 -30 -44 -45 14 -8 14 -11\n     -4 -30 -30 -33 -36 -64 -18 -92 20 -31 89 -42 143 -24 l38 13 -65 12 c-36 6\n     -73 15 -83 19 -23 10 -19 53 5 69 14 9 21 6 33 -12 13 -17 26 -22 59 -22 26 0\n     48 6 56 15 10 13 17 12 51 -5 30 -16 47 -18 76 -12 21 5 96 7 166 5 l128 -3 9\n     26 c6 14 7 37 4 50 -4 17 0 31 11 44 10 11 16 21 14 23 -2 2 -16 11 -31 20\n     -26 16 -28 16 -38 -3z m-313 -106 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17\n     -2 13 -5z\"/>\n     <path d=\"M5739 724 c-10 -13 -10 -17 2 -25 19 -12 46 -11 54 1 4 6 -6 11 -22\n     11 -17 1 -21 3 -10 6 9 2 17 9 17 14 0 15 -26 10 -41 -7z\"/>\n     <path d=\"M2377 723 c-10 -10 -8 -108 3 -137 9 -26 11 -26 119 -26 99 0 111 2\n     121 19 15 30 14 31 -39 31 -55 0 -81 7 -81 22 0 7 21 9 55 6 61 -5 68 1 29 27\n     -33 22 -75 12 -113 -26 -16 -16 -36 -29 -44 -29 -15 0 -27 40 -27 91 0 28 -9\n     36 -23 22z\"/>\n     <path d=\"M3904 709 c-56 -21 -109 -63 -99 -79 4 -6 66 -10 151 -10 89 0 144\n     -4 144 -10 0 -11 -203 -14 -288 -3 -50 6 -53 8 -49 30 5 29 -14 26 -28 -5 -8\n     -18 -18 -22 -57 -22 -45 0 -48 2 -48 26 0 22 -2 25 -15 14 -8 -7 -15 -19 -15\n     -27 0 -11 -17 -13 -82 -11 l-83 3 -5 30 -6 30 -13 -39 c-13 -37 -12 -41 9 -58\n     25 -21 148 -26 167 -7 8 8 17 8 31 0 30 -16 87 -14 102 4 11 13 14 13 27 0 12\n     -12 50 -15 202 -15 196 0 211 3 211 45 0 41 -17 45 -173 45 -81 0 -146 4 -143\n     8 3 5 32 17 66 27 62 19 100 45 64 44 -11 0 -42 -9 -70 -20z\"/>\n     <path d=\"M5894 720 c-6 -6 -9 -34 -7 -63 7 -89 10 -97 41 -97 15 0 33 5 39 11\n     8 8 13 8 17 0 12 -18 284 -14 337 5 24 8 60 14 81 12 20 -1 44 4 53 12 15 12\n     9 16 -52 38 -100 35 -106 36 -133 13 l-25 -20 25 -1 c14 -1 34 -5 45 -10 14\n     -6 2 -9 -41 -9 -53 -1 -62 2 -67 19 -8 32 -48 34 -119 6 -78 -32 -92 -32 -85\n     -6 3 11 1 20 -4 20 -5 0 -14 -9 -21 -20 -15 -24 -43 -26 -52 -4 -3 9 -6 36 -6\n     60 0 44 -7 53 -26 34z m255 -99 c9 -6 0 -10 -28 -13 -41 -4 -57 6 -23 15 28 8\n     36 7 51 -2z\"/>\n     <path d=\"M6311 717 c-17 -21 31 -40 55 -23 9 7 14 18 10 24 -10 16 -51 15 -65\n     -1z\"/>\n     <path d=\"M3264 702 c-8 -13 -9 -35 -2 -77 10 -53 12 -57 24 -40 15 20 18 55 8\n     104 -7 35 -14 39 -30 13z\"/>\n     <path d=\"M5363 701 c-12 -19 -4 -113 10 -128 13 -13 26 48 20 97 -6 54 -12 60\n     -30 31z\"/>\n     <path d=\"M6513 700 c-9 -14 -10 -33 -3 -71 12 -63 15 -67 30 -39 12 23 5 130\n     -8 130 -4 0 -13 -9 -19 -20z\"/>\n     <path d=\"M4396 664 c-3 -8 -1 -24 4 -35 10 -18 7 -19 -47 -19 -43 0 -62 5 -78\n     20 -20 19 -23 19 -35 5 -11 -13 -10 -19 5 -35 17 -18 16 -20 -16 -39 -32 -20\n     -52 -25 -89 -22 -8 0 -1 -6 15 -14 45 -21 73 -18 103 12 25 25 32 27 98 24\n     l72 -3 12 37 c10 30 9 40 -4 60 -19 29 -31 32 -40 9z\"/>\n     <path d=\"M4491 656 c-11 -12 -21 -34 -21 -49 0 -22 5 -27 23 -27 13 0 29 6 37\n     13 8 6 6 1 -5 -12 -26 -30 -67 -51 -102 -52 -25 0 -26 -1 -8 -9 35 -15 91 -11\n     108 8 40 44 44 122 8 142 -14 7 -23 4 -40 -14z m23 -37 c-3 -5 -10 -7 -15 -3\n     -5 3 -7 10 -3 15 3 5 10 7 15 3 5 -3 7 -10 3 -15z\"/>\n     <path d=\"M5801 666 c-11 -13 -11 -20 -3 -28 23 -23 11 -28 -76 -28 -76 0 -91\n     -3 -107 -20 -18 -20 -17 -20 13 -20 38 0 50 -15 19 -24 -41 -11 -75 -6 -98 13\n     -21 17 -22 22 -11 40 7 12 8 21 2 21 -11 0 -40 -53 -40 -74 0 -19 37 -39 57\n     -32 13 5 14 4 3 -9 -17 -21 -10 -26 39 -29 46 -4 62 9 37 27 -14 10 -13 12 10\n     13 14 1 36 11 48 23 17 16 35 21 79 21 52 0 58 2 67 26 14 36 13 49 -8 74 -16\n     20 -19 21 -31 6z m-194 -162 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2\n     13 -5z\"/>\n     <path d=\"M2101 636 c-13 -37 -12 -41 9 -58 17 -14 40 -18 106 -18 74 0 84 2\n     98 22 20 28 20 62 2 77 -21 17 -43 -13 -26 -34 12 -14 3 -16 -76 -13 l-89 3\n     -5 30 -6 30 -13 -39z\"/>\n     <path d=\"M3512 541 c-10 -6 -10 -10 3 -21 12 -10 18 -10 30 0 13 11 13 15 3\n     21 -7 5 -15 9 -18 9 -3 0 -11 -4 -18 -9z\"/>\n     <path d=\"M3675 540 c-3 -5 -4 -14 -1 -19 7 -12 85 -11 93 1 8 15 -19 29 -34\n     17 -8 -7 -18 -7 -32 0 -13 7 -22 8 -26 1z\"/>\n     <path d=\"M37 378 c-38 -86 -47 -138 -24 -138 8 0 19 11 25 25 10 22 18 25 67\n     25 49 0 57 -3 67 -25 8 -18 19 -25 40 -25 15 0 28 2 28 5 0 3 -24 52 -52 110\n     -50 99 -54 105 -83 105 -29 0 -33 -5 -68 -82z m91 -18 c11 -30 10 -30 -23 -30\n     -33 0 -34 1 -24 26 20 53 30 54 47 4z\"/>\n     <path d=\"M270 375 c0 -71 3 -88 20 -105 25 -25 60 -34 117 -27 67 7 76 22 81\n     127 l4 90 -30 0 -31 0 -3 -87 -3 -88 -45 0 -45 0 -3 88 -3 87 -29 0 -30 0 0\n     -85z\"/>\n     <path d=\"M544 447 c-3 -8 -3 -56 -2 -108 l3 -94 84 0 c81 1 84 2 112 33 47 52\n     35 138 -22 168 -37 19 -168 19 -175 1z m156 -42 c7 -9 13 -34 13 -57 0 -50\n     -20 -68 -75 -68 l-38 0 0 70 0 70 44 0 c27 0 48 -6 56 -15z\"/>\n     <path d=\"M820 350 l0 -110 25 0 25 0 0 110 0 110 -25 0 -25 0 0 -110z\"/>\n     <path d=\"M902 443 c2 -13 14 -19 40 -21 l37 -3 3 -87 c3 -87 3 -87 31 -90 l27\n     -3 0 90 0 91 40 0 c33 0 40 3 40 20 0 19 -7 20 -111 20 -100 0 -110 -2 -107\n     -17z\"/>\n     <path d=\"M1150 350 l0 -110 30 0 30 0 0 110 0 110 -30 0 -30 0 0 -110z\"/>\n     <path d=\"M1305 448 c-62 -34 -75 -116 -26 -170 24 -27 36 -32 87 -35 93 -6\n     144 36 144 119 0 21 -10 40 -34 64 -31 31 -39 34 -92 34 -33 0 -68 -6 -79 -12z\n     m108 -29 c30 -16 37 -28 37 -70 0 -48 -26 -71 -76 -67 -51 4 -81 43 -68 90 14\n     48 63 70 107 47z\"/>\n     <path d=\"M1550 350 l0 -110 25 0 c23 0 24 3 27 72 l3 72 55 -72 c45 -59 60\n     -72 82 -72 l28 0 0 110 0 110 -25 0 c-23 0 -24 -3 -27 -72 l-3 -71 -54 71\n     c-45 59 -60 72 -83 72 l-28 0 0 -110z\"/>\n     <path d=\"M2100 314 l0 -76 55 4 c66 6 95 28 95 74 0 46 -38 74 -101 74 l-49 0\n     0 -76z m105 1 c0 -38 -2 -40 -32 -43 -33 -3 -33 -3 -33 43 0 46 0 46 33 43 30\n     -3 32 -5 32 -43z\"/>\n     <path d=\"M2504 377 c-3 -8 -4 -41 -2 -73 2 -47 7 -59 21 -62 13 -3 17 3 17 27\n     0 29 3 31 35 31 24 0 35 5 35 15 0 10 -11 15 -35 15 -53 0 -47 28 8 32 60 4\n     48 22 -18 26 -40 2 -57 -1 -61 -11z\"/>\n     <path d=\"M3194 376 c-3 -7 -4 -40 -2 -72 2 -47 7 -59 21 -62 11 -2 17 3 17 16\n     0 31 11 33 32 7 11 -14 26 -25 34 -25 19 0 18 6 -8 40 -21 30 -21 30 -2 44 29\n     22 7 32 -26 12 l-30 -17 0 35 c0 26 -4 36 -15 36 -9 0 -18 -6 -21 -14z\"/>\n     <path d=\"M3390 375 c0 -9 9 -15 25 -15 22 0 24 -4 27 -57 2 -46 7 -59 21 -61\n     15 -3 17 5 17 57 0 58 1 61 25 61 16 0 25 6 25 15 0 12 -14 15 -70 15 -56 0\n     -70 -3 -70 -15z\"/>\n     <path d=\"M3560 315 l0 -75 65 0 c51 0 65 3 65 15 0 11 -12 15 -51 15 -43 0\n     -50 3 -47 18 2 12 15 18 46 20 56 4 54 22 -3 22 -33 0 -45 4 -45 15 0 11 12\n     15 50 15 38 0 50 4 50 15 0 12 -14 15 -65 15 l-65 0 0 -75z\"/>\n     <path d=\"M3720 315 l0 -75 49 0 c65 0 101 14 101 39 0 11 -4 23 -10 26 -5 3\n     -7 19 -4 34 8 37 -16 51 -85 51 l-51 0 0 -75z m108 33 c-7 -20 -68 -23 -68 -4\n     0 12 10 16 36 16 24 0 34 -4 32 -12z m-14 -44 c30 -12 18 -34 -19 -34 -28 0\n     -35 4 -35 20 0 20 22 26 54 14z\"/>\n     <path d=\"M3900 315 l0 -75 49 0 c65 0 101 14 101 39 0 11 -4 23 -10 26 -5 3\n     -7 19 -4 34 8 37 -16 51 -85 51 l-51 0 0 -75z m108 33 c-7 -20 -68 -23 -68 -4\n     0 12 10 16 36 16 24 0 34 -4 32 -12z m-14 -44 c30 -12 18 -34 -19 -34 -28 0\n     -35 4 -35 20 0 20 22 26 54 14z\"/>\n     <path d=\"M4102 325 c-18 -36 -32 -70 -32 -75 0 -18 29 -10 40 10 7 14 21 20\n     45 20 25 0 35 -5 40 -20 5 -17 45 -30 45 -15 0 3 -16 37 -35 75 -45 90 -60 91\n     -103 5z m68 -12 c0 -7 -9 -13 -20 -13 -23 0 -24 4 -9 32 9 17 13 18 20 7 5 -8\n     9 -20 9 -26z\"/>\n     <path d=\"M4267 384 c-4 -4 -7 -38 -7 -76 l0 -68 65 0 c51 0 65 3 65 15 0 11\n     -12 15 -45 15 l-44 0 -3 57 c-3 52 -14 73 -31 57z\"/>\n     <path d=\"M4556 318 c-25 -57 -30 -74 -18 -76 7 -2 20 6 28 17 20 28 69 28 86\n     1 7 -11 21 -20 30 -20 15 0 12 11 -19 75 -49 98 -63 98 -107 3z m68 6 c9 -23\n     8 -24 -14 -24 -11 0 -20 2 -20 4 0 12 13 36 20 36 4 0 11 -7 14 -16z\"/>\n     <path d=\"M4960 366 c0 -23 -3 -24 -34 -19 -29 4 -37 1 -51 -20 -32 -50 -2 -85\n     73 -84 l42 0 0 73 c0 59 -3 74 -15 74 -9 0 -15 -9 -15 -24z m-6 -58 c14 -22\n     -12 -52 -37 -42 -17 6 -23 44 -10 58 11 11 35 3 47 -16z\"/>\n     <path d=\"M5020 376 c0 -10 9 -16 21 -16 24 0 21 23 -4 28 -10 2 -17 -3 -17\n     -12z\"/>\n     <path d=\"M5730 315 c0 -60 3 -75 15 -75 10 0 15 10 15 34 0 35 21 63 40 51 5\n     -3 10 -24 10 -46 0 -33 3 -40 18 -37 21 4 28 58 12 89 -10 17 -18 20 -46 16\n     -31 -5 -34 -4 -34 19 0 15 -6 24 -15 24 -12 0 -15 -15 -15 -75z\"/>\n     <path d=\"M5923 373 c9 -9 19 -14 23 -11 10 10 -6 28 -24 28 -15 0 -15 -1 1\n     -17z\"/>\n     <path d=\"M6160 375 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0\n     -15 -7 -15 -15z\"/>\n     <path d=\"M5647 359 c-12 -14 -15 -24 -8 -32 5 -7 11 -28 13 -47 3 -30 7 -35\n     31 -38 29 -4 37 12 12 22 -21 8 -19 52 3 61 16 6 16 7 0 19 -10 7 -18 18 -18\n     25 0 17 -14 13 -33 -10z\"/>\n     <path d=\"M6367 359 c-12 -14 -15 -24 -8 -32 5 -7 11 -28 13 -47 3 -30 7 -35\n     31 -38 29 -4 37 12 12 22 -21 8 -19 53 3 65 16 9 16 10 0 16 -10 4 -18 13 -18\n     21 0 20 -13 17 -33 -7z\"/>\n     <path d=\"M2280 294 c0 -66 24 -77 35 -15 4 27 13 41 26 44 34 9 20 26 -21 25\n     l-40 0 0 -54z\"/>\n     <path d=\"M2659 333 c-13 -15 -11 -16 22 -9 49 9 59 -7 12 -20 -27 -8 -39 -17\n     -41 -32 -3 -23 11 -29 76 -30 32 -1 32 -1 32 47 0 35 -4 51 -16 55 -29 11 -71\n     6 -85 -11z m65 -58 c-7 -16 -30 -20 -38 -6 -7 11 4 21 25 21 12 0 16 -5 13\n     -15z\"/>\n     <path d=\"M2790 293 c0 -46 3 -54 18 -51 12 2 18 14 20 41 3 29 7 37 23 37 10\n     0 19 6 19 14 0 9 -13 13 -40 13 l-40 0 0 -54z\"/>\n     <path d=\"M2900 330 c-11 -11 -20 -27 -20 -35 0 -25 38 -55 70 -55 32 0 70 30\n     70 55 0 25 -38 55 -70 55 -17 0 -39 -9 -50 -20z m64 -6 c9 -3 16 -16 16 -29 0\n     -25 -21 -38 -45 -29 -18 7 -20 50 -2 57 6 3 13 6 14 6 1 1 8 -2 17 -5z\"/>\n     <path d=\"M3040 306 c0 -54 12 -64 73 -64 l47 1 0 54 c0 40 -4 53 -15 53 -10 0\n     -15 -10 -15 -28 0 -34 -23 -68 -38 -58 -7 4 -12 25 -12 47 0 32 -3 39 -20 39\n     -17 0 -20 -7 -20 -44z\"/>\n     <path d=\"M4720 306 c0 -54 13 -65 70 -62 l45 2 0 49 c0 39 -4 50 -17 53 -13 3\n     -17 -6 -20 -40 -2 -35 -7 -43 -23 -43 -16 0 -21 8 -23 43 -2 28 -8 42 -18 42\n     -10 0 -14 -12 -14 -44z\"/>\n     <path d=\"M5020 295 c0 -48 2 -55 20 -55 18 0 20 7 20 55 0 48 -2 55 -20 55\n     -18 0 -20 -7 -20 -55z\"/>\n     <path d=\"M5106 337 c-24 -17 -24 -67 0 -84 39 -29 114 -1 114 42 0 43 -75 71\n     -114 42z m58 -13 c21 -8 21 -50 0 -58 -32 -12 -57 27 -32 52 14 14 12 14 32 6z\"/>\n     <path d=\"M5244 341 c-2 -2 -4 -33 -4 -68 l0 -63 -1540 0 c-1362 0 -1540 -2\n     -1540 -15 0 -13 248 -15 2176 -15 1736 0 2175 3 2172 13 -4 9 -138 13 -616 15\n     -588 2 -612 3 -612 21 0 14 6 17 25 13 51 -9 86 56 50 92 -15 14 -98 20 -111\n     7z m85 -30 c14 -24 -8 -55 -32 -45 -17 6 -24 44 -10 57 12 13 32 7 42 -12z\"/>\n     <path d=\"M5394 335 c-3 -7 -4 -30 -2 -51 2 -27 8 -40 21 -42 14 -3 17 4 17 33\n     0 29 5 37 25 45 14 5 25 14 25 19 0 15 -81 11 -86 -4z\"/>\n     <path d=\"M5507 332 c-23 -26 -21 -58 5 -76 44 -31 108 -7 108 39 0 48 -80 74\n     -113 37z m57 -8 c21 -8 21 -50 0 -58 -32 -12 -57 27 -32 52 14 14 12 14 32 6z\"/>\n     <path d=\"M5887 332 c-49 -54 30 -122 89 -77 18 14 17 15 -20 13 -24 -2 -41 2\n     -43 10 -3 8 8 12 36 12 29 0 41 4 41 14 0 42 -73 62 -103 28z m64 -17 c0 -5\n     -9 -11 -21 -13 -20 -3 -27 8 -13 22 10 9 34 3 34 -9z\"/>\n     <path d=\"M6020 335 c-17 -20 1 -41 41 -50 16 -4 29 -11 29 -16 0 -12 -37 -12\n     -45 1 -3 5 -13 6 -22 3 -14 -6 -14 -8 3 -20 33 -24 104 -10 104 22 0 17 -30\n     35 -59 35 -12 0 -21 5 -21 11 0 7 12 9 35 5 20 -4 35 -3 35 2 0 25 -81 30\n     -100 7z\"/>\n     <path d=\"M6160 295 c0 -42 3 -55 15 -55 12 0 15 13 15 55 0 42 -3 55 -15 55\n     -12 0 -15 -13 -15 -55z\"/>\n     <path d=\"M6230 335 c-19 -23 -5 -42 34 -49 20 -4 36 -11 36 -16 0 -13 -37 -13\n     -45 0 -3 5 -13 6 -22 3 -14 -6 -14 -8 3 -20 24 -18 69 -16 89 3 23 23 14 38\n     -28 48 -49 12 -48 29 1 20 34 -7 36 -6 23 9 -17 21 -74 22 -91 2z\"/>\n     <path d=\"M6457 332 c-50 -55 29 -123 89 -77 18 14 17 15 -20 13 -24 -2 -41 2\n     -43 10 -4 9 17 12 81 12 51 0 86 4 86 10 0 6 -20 10 -43 10 -31 0 -49 6 -62\n     20 -23 25 -67 26 -88 2z m61 -20 c2 -7 -6 -12 -17 -12 -21 0 -27 11 -14 24 9\n     9 26 2 31 -12z\"/>\n     <path d=\"M2367 264 c-9 -10 2 -24 19 -24 8 0 14 7 14 15 0 15 -21 21 -33 9z\"/>\n     <path d=\"M2826 127 c-27 -19 -17 -59 17 -71 21 -8 31 -6 43 6 15 15 14 16 -17\n     15 -28 -2 -34 2 -34 18 0 16 6 20 33 19 34 -2 43 10 16 20 -24 9 -38 7 -58 -7z\"/>\n     <path d=\"M2920 130 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n     -10 -4 -10 -10z\"/>\n     <path d=\"M3027 119 c-10 -11 -17 -30 -15 -42 3 -25 35 -35 52 -16 8 9 7 11 -6\n     6 -10 -3 -20 -2 -23 3 -4 6 5 10 19 10 29 0 35 17 10 27 -8 3 -13 12 -10 19 8\n     21 -7 17 -27 -7z\"/>\n     <path d=\"M3137 133 c-10 -10 -8 -71 2 -78 5 -3 11 7 13 22 l4 28 12 -27 c6\n     -16 15 -28 20 -28 4 0 13 12 19 28 l11 27 1 -27 c2 -47 21 -31 21 17 0 53 -23\n     63 -42 18 l-11 -28 -10 28 c-10 26 -26 34 -40 20z\"/>\n     <path d=\"M3340 95 c0 -25 5 -45 10 -45 6 0 10 7 10 17 0 15 1 15 18 0 25 -23\n     35 -21 22 3 -6 11 -8 25 -4 31 4 7 -1 9 -15 4 -17 -5 -21 -2 -21 14 0 12 -4\n     21 -10 21 -5 0 -10 -20 -10 -45z\"/>\n     <path d=\"M3680 95 l0 -45 40 0 c22 0 40 5 40 10 0 6 -13 10 -30 10 -41 0 -38\n     20 3 21 27 2 28 2 7 6 -40 7 -48 23 -12 23 18 0 32 5 32 10 0 6 -18 10 -40 10\n     l-40 0 0 -45z\"/>\n     <path d=\"M3860 95 c0 -46 16 -63 22 -23 5 32 28 35 28 4 0 -14 5 -26 10 -26 6\n     0 10 14 10 30 0 28 -8 35 -37 31 -7 -1 -13 5 -13 14 0 8 -4 15 -10 15 -5 0\n     -10 -20 -10 -45z\"/>\n     <path d=\"M4035 128 c-9 -23 -2 -69 10 -69 6 0 11 10 13 21 4 24 27 21 27 -3 0\n     -22 19 -23 23 -2 4 19 -17 47 -32 42 -6 -2 -16 3 -23 12 -10 15 -12 14 -18 -1z\"/>\n     <path d=\"M4130 130 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n     -10 -4 -10 -10z\"/>\n     <path d=\"M4220 124 c0 -10 -6 -14 -14 -11 -8 3 -22 -1 -33 -8 -26 -20 -6 -49\n     36 -52 30 -1 31 0 31 43 0 24 -4 44 -10 44 -5 0 -10 -7 -10 -16z m-5 -34 c11\n     -17 -5 -32 -21 -19 -7 6 -11 15 -8 20 7 12 21 11 29 -1z\"/>\n     <path d=\"M4304 125 c-8 -20 4 -35 26 -35 10 0 22 -5 26 -12 5 -8 -2 -9 -24 -5\n     -19 4 -32 2 -32 -4 0 -15 27 -22 55 -15 34 9 31 35 -5 47 -16 6 -27 15 -24 20\n     3 5 13 5 24 -1 27 -14 34 -12 20 5 -16 19 -59 19 -66 0z\"/>\n     <path d=\"M4419 122 c-27 -32 -31 -43 -19 -57 15 -18 46 -20 56 -4 4 8 0 9 -15\n     4 -12 -3 -21 -2 -21 4 0 5 12 11 28 13 l27 3 -22 19 c-12 11 -20 23 -17 28 9\n     14 -1 9 -17 -10z\"/>\n     <path d=\"M4530 130 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n     -10 -4 -10 -10z\"/>\n     <path d=\"M4575 123 c-10 -22 -7 -55 6 -68 5 -5 9 1 9 18 0 15 4 27 8 27 4 0 8\n     9 8 20 0 25 -21 26 -31 3z\"/>\n     <path d=\"M4700 130 c0 -5 7 -10 15 -10 10 0 15 -11 15 -35 0 -19 5 -35 10 -35\n     6 0 10 16 10 35 0 24 5 35 15 35 8 0 15 5 15 10 0 6 -18 10 -40 10 -22 0 -40\n     -4 -40 -10z\"/>\n     <path d=\"M4870 95 c0 -25 5 -45 10 -45 6 0 10 20 10 45 0 25 -4 45 -10 45 -5\n     0 -10 -20 -10 -45z\"/>\n     <path d=\"M4999 119 c-16 -31 4 -71 34 -67 17 2 23 11 25 37 5 50 -37 71 -59\n     30z m41 -24 c0 -14 -4 -25 -10 -25 -5 0 -10 11 -10 25 0 14 5 25 10 25 6 0 10\n     -11 10 -25z\"/>\n     <path d=\"M5087 134 c-15 -15 -6 -25 16 -19 18 6 20 5 10 -6 -10 -10 -9 -15 5\n     -26 15 -13 14 -14 -11 -10 -18 3 -26 0 -24 -7 5 -17 42 -19 55 -3 17 20 0 71\n     -24 75 -11 2 -23 0 -27 -4z\"/>\n     <path d=\"M5172 128 c-16 -16 -15 -53 3 -68 21 -17 50 -8 53 17 2 15 -4 24 -25\n     31 l-28 10 30 1 c23 1 27 4 15 11 -20 13 -34 12 -48 -2z m38 -48 c0 -5 -7 -10\n     -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z\"/>\n     <path d=\"M5296 124 c-19 -18 -20 -28 -6 -55 13 -23 43 -25 60 -4 14 17 6 33\n     -24 45 -21 9 -21 9 2 9 13 1 20 5 17 11 -9 15 -31 12 -49 -6z m34 -44 c0 -5\n     -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z\"/>\n     <path d=\"M5377 133 c-14 -13 -6 -24 13 -18 11 3 20 2 20 -3 0 -5 -9 -17 -20\n     -27 -28 -25 -25 -35 10 -35 17 0 30 5 30 10 0 6 -7 10 -15 10 -12 0 -10 5 6\n     21 16 16 18 23 8 35 -12 15 -41 19 -52 7z\"/>\n     <path d=\"M5502 128 c-16 -16 -15 -53 3 -68 21 -17 50 -8 53 17 2 15 -4 24 -25\n     31 l-28 10 28 1 c16 1 26 5 22 11 -8 14 -38 13 -53 -2z m38 -48 c0 -5 -7 -10\n     -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z\"/>\n     <path d=\"M5575 130 c-3 -5 4 -10 15 -10 17 0 20 -4 15 -17 -15 -37 -17 -53 -6\n     -53 6 0 11 8 11 18 0 9 7 26 15 36 8 11 15 23 15 28 0 12 -58 10 -65 -2z\"/>\n     <path d=\"M5706 124 c-11 -27 -7 -36 14 -31 22 6 35 -7 25 -23 -4 -7 -13 -6\n     -27 1 -16 9 -19 8 -16 -3 6 -18 36 -22 53 -8 23 19 18 37 -12 48 -25 9 -26 10\n     -5 11 30 1 28 21 -2 21 -13 0 -27 -7 -30 -16z\"/>\n     <path d=\"M5801 114 c-26 -33 -26 -44 -2 -44 11 0 22 -6 24 -12 7 -18 29 12 22\n     30 -3 8 -5 22 -5 33 0 26 -15 24 -39 -7z m15 -31 c-10 -10 -19 5 -10 18 6 11\n     8 11 12 0 2 -7 1 -15 -2 -18z\"/>\n     <path d=\"M2958 118 c-8 -23 7 -63 26 -66 15 -3 16 -1 4 18 -11 19 -11 23 0 27\n     10 4 10 8 1 19 -14 17 -25 18 -31 2z\"/>\n     <path d=\"M4478 118 c-8 -23 7 -63 26 -66 15 -3 16 -1 4 18 -11 19 -11 23 0 27\n     10 4 10 8 1 19 -14 17 -25 18 -31 2z\"/>\n     <path d=\"M3270 110 c-12 -8 -10 -10 10 -11 25 -1 25 -1 -3 -11 -36 -13 -30\n     -32 11 -36 29 -3 32 -1 32 26 0 18 -6 32 -16 36 -19 7 -16 8 -34 -4z m30 -34\n     c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z\"/>\n     <path d=\"M3430 110 c-12 -8 -10 -10 10 -10 l25 -1 -23 -10 c-32 -12 -22 -34\n     16 -36 29 -1 32 2 32 27 0 36 -29 50 -60 30z m35 -40 c-3 -5 -10 -10 -16 -10\n     -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z\"/>\n     <path d=\"M3528 112 c-12 -2 -18 -13 -18 -33 0 -18 4 -28 10 -24 6 3 10 15 10\n     26 0 10 5 19 10 19 6 0 10 -11 10 -25 0 -31 17 -33 22 -3 5 32 28 35 28 4 0\n     -14 5 -26 10 -26 11 0 14 60 3 61 -5 0 -21 1 -38 3 -16 1 -38 1 -47 -2z\"/>\n     <path d=\"M3792 111 c-8 -4 -12 -19 -10 -32 2 -18 9 -24 27 -24 13 0 27 7 29\n     15 4 12 3 13 -10 3 -16 -14 -28 -8 -28 15 0 9 7 13 20 9 24 -6 27 8 4 17 -19\n     7 -16 8 -32 -3z\"/>\n     <path d=\"M3960 110 c-12 -8 -10 -10 10 -10 l25 -1 -23 -10 c-32 -12 -22 -34\n     16 -36 27 -1 32 2 32 21 0 38 -29 56 -60 36z m35 -40 c-3 -5 -10 -10 -16 -10\n     -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z\"/>\n     <path d=\"M4790 105 c-28 -34 23 -77 54 -44 8 9 6 10 -11 6 -13 -3 -26 -1 -29\n     4 -3 5 6 9 20 9 31 0 34 15 7 30 -25 13 -26 13 -41 -5z m37 -11 c-3 -3 -12 -4\n     -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z\"/>\n     <path d=\"M2920 80 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5\n     0 -10 -13 -10 -30z\"/>\n     <path d=\"M4130 80 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5\n     0 -10 -13 -10 -30z\"/>\n     <path d=\"M4530 80 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5\n     0 -10 -13 -10 -30z\"/>\n     <path d=\"M4620 60 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n     -10 -4 -10 -10z\"/>\n     <path d=\"M4910 60 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\n     -10 -4 -10 -10z\"/>\n     </g>\n     </svg>\n      </div>\n\n      <div class=\"company-info\">\n\n      </div>\n\n    </section>\n\n    <div class=\"clearfix\"></div>\n    <br>\n    <br>\n    <br>\n\n    <section id=\"client-info\">\n      <div>\n        <span class=\"bold-client\">LE CLIENT : " + this.patient_name + "</span>\n      </div>\n\n      <div>\n        <span>Code Client : " + this.patient_code + "</span>\n      </div>\n\n    </section>\n\n    <section id=\"invoice-info\">\n    <div>\n      <span class=\"bold-client\">LE:  " + payment.payment_date + "</span>\n\n    </div>\n\n  </section>\n\n    <div class=\"clearfix\"></div>\n\n    <section id=\"invoice-title-number\">\n\n      <span id=\"title\">Bon de Paiement Client N\u00B0 :</span>\n      <span id=\"number\">" + payment.payment_code + "</span>\n\n    </section>\n\n    <div class=\"clearfix\"></div>\n\n\n\n    <div class=\"clearfix\"></div>\n    <div class=\"clearfix\"></div>\n    <br>\n    <br>\n    <br>\n\n    <section id=\"client-info\">\n      <div>\n        <span class=\"bold\">        Montant de Paiement : " + payment.payment_amount + "         Dinars Alg\u00E9rien</span>\n        <span class=\"bold\">        Montant de Remise : " + payment.discount + "         Dinars Alg\u00E9rien</span>\n        <span class=\"bold\">        Solde Du Patient : " + (this.patientSolde + payment.payment_amount + payment.discount) + "  Dinars Alg\u00E9rien</span>\n\n\n\n      <div>\n\n    </section>\n    \n    <footer id=\"footer\">\n\n    <hr>\n    <div class=\"payment-info\">\n      <div>ART N\u00B0:19015414021</div>\n      <div>NIF N\u00B0:169190104464195</div>\n      <div>NIS N\u00B0:196919010446492</div>\n      <div>RIB N\u00B0:02900191220201426362 TRUST BANK</div>\n    </div>\n\n    <section id=\"terms\">\n\n      <span>Adresse: Lotissement MAKAM CHACHID 2 eme Tranche N\u00B014 - S\u00E9tif</span>\n      <div>T\u00E9l/Fax: 036 62 67 54 Mail: tebbalaudiology@gmail.com</div>\n\n    </section>\n\n    </footer>\n  </div>\n\n</body>\n<script>\nsetTimeout(function(){window.print();window.close()},2000)\n</script>\n</html>\n    ");
        popupWin.document.close();
    };
    AddPaymentComponent.ctorParameters = function () { return [
        { type: _core_application__WEBPACK_IMPORTED_MODULE_2__["PatientsService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_3__["LayoutUtilsService"] },
        { type: _core_application__WEBPACK_IMPORTED_MODULE_2__["PaymentsService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: _core_application__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    AddPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-add-payment',
            template: __webpack_require__(/*! raw-loader!./add-payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/payment/add-payment/add-payment.component.html"),
            styles: [__webpack_require__(/*! ./add-payment.component.scss */ "./src/app/views/pages/payment/add-payment/add-payment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_application__WEBPACK_IMPORTED_MODULE_2__["PatientsService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_3__["LayoutUtilsService"],
            _core_application__WEBPACK_IMPORTED_MODULE_2__["PaymentsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _core_application__WEBPACK_IMPORTED_MODULE_2__["DataSharingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddPaymentComponent);
    return AddPaymentComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/payment/patients-credit/patients-credit.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/payment/patients-credit/patients-credit.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3BheW1lbnQvcGF0aWVudHMtY3JlZGl0L3BhdGllbnRzLWNyZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/payment/patients-credit/patients-credit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/payment/patients-credit/patients-credit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PatientsCreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsCreditComponent", function() { return PatientsCreditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");



var PatientsCreditComponent = /** @class */ (function () {
    function PatientsCreditComponent(paymentsService) {
        this.paymentsService = paymentsService;
        this.columnDefinitions = [];
        this.gridOptions = {};
        this.dataset = [];
        this.discountsColumnDefinitions = [];
        this.discountsDataset = [];
    }
    PatientsCreditComponent.prototype.gridReady = function (angularGrid) {
        this.creditGrid = angularGrid;
        this.dataView = angularGrid.dataView;
        this.grid = angularGrid.slickGrid;
        this.gridService = angularGrid.gridService;
    };
    PatientsCreditComponent.prototype.discountGridReady = function (angularGrid) {
        this.discountsGrid = angularGrid;
        this.discountsDataView = angularGrid.dataView;
        this.Grid = angularGrid.slickGrid;
        this.discountsGridService = angularGrid.gridService;
    };
    PatientsCreditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            {
                id: 'id', name: 'Id', field: 'id', sortable: true, width: 30,
            },
            { id: 'patient_code', name: 'Code', field: 'patient.patient_code', sortable: true, width: 80, filterable: true },
            { id: 'patient_name', name: 'Nom', field: 'patient.full_name', sortable: true, width: 170, filterable: true },
            { id: 'phone', name: 'N Tel', field: 'patient.mobile_phone_number_1', sortable: true, filterable: true },
            { id: 'payments', name: 'Paiements', field: 'payments', sortable: true, filterable: true },
            { id: 'credit', name: 'Credit', field: 'credit', filterable: true },
            { id: 'discount', name: 'Remise', field: 'discount', filterable: true },
            { id: 'solde', name: 'Solde', field: 'solde', sortable: true, filterable: true }
        ];
        this.discountsColumnDefinitions = [
            {
                id: 'id', name: 'Id', field: 'id', sortable: true, width: 30,
            },
            { id: 'patient_code', name: 'Code', field: 'patient.patient_code', sortable: true, width: 80, filterable: true },
            { id: 'patient_name', name: 'Nom', field: 'patient.full_name', sortable: true, width: 170, filterable: true },
            { id: 'phone', name: 'N Tel', field: 'patient.mobile_phone_number_1', sortable: true, filterable: true },
            { id: 'discount', name: 'Remise', field: 'discount', filterable: true },
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
        this.paymentsService.getPatientsCredit().subscribe(function (res) { return _this.dataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
        this.paymentsService.getPatientsDiscounts().subscribe(function (res) { return _this.discountsDataset = res; }, function (err) { return console.log('errro'); }, function () { return console.log('finish'); });
    };
    PatientsCreditComponent.ctorParameters = function () { return [
        { type: _core_application__WEBPACK_IMPORTED_MODULE_2__["PaymentsService"] }
    ]; };
    PatientsCreditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-patients-credit',
            template: __webpack_require__(/*! raw-loader!./patients-credit.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/payment/patients-credit/patients-credit.component.html"),
            styles: [__webpack_require__(/*! ./patients-credit.component.scss */ "./src/app/views/pages/payment/patients-credit/patients-credit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_application__WEBPACK_IMPORTED_MODULE_2__["PaymentsService"]])
    ], PatientsCreditComponent);
    return PatientsCreditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/payment/payment.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/pages/payment/payment.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/payment/payment.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/payment/payment.component.ts ***!
  \**********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/application */ "./src/app/core/application/index.ts");



var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(settingsService) {
        this.settingsService = settingsService;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.settingsService.getAll('PaymentType').subscribe(function (res) {
            localStorage.setItem('PaymentType', JSON.stringify(res));
        }, function (err) { return console.log(err); });
        this.settingsService.getAll('PaymentStatus').subscribe(function (res) {
            localStorage.setItem('PaymentStatus', JSON.stringify(res));
        }, function (err) { return console.log(err); });
    };
    PaymentComponent.ctorParameters = function () { return [
        { type: _core_application__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
    ]; };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-payment',
            template: __webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/views/pages/payment/payment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_application__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/payment/payment.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/pages/payment/payment.module.ts ***!
  \*******************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
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
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment.component */ "./src/app/views/pages/payment/payment.component.ts");
/* harmony import */ var _add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-payment/add-payment.component */ "./src/app/views/pages/payment/add-payment/add-payment.component.ts");
/* harmony import */ var _patients_credit_patients_credit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patients-credit/patients-credit.component */ "./src/app/views/pages/payment/patients-credit/patients-credit.component.ts");

// Angular









// tslint:disable-next-line:max-line-length

// Import AG Grid

// addons







var routes = [
    {
        path: '',
        component: _payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"],
        children: [
            {
                path: '',
                redirectTo: 'add-payment',
                pathMatch: 'full'
            },
            {
                path: 'add-payment',
                component: _add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_15__["AddPaymentComponent"]
            },
            {
                path: 'patients-credit',
                component: _patients_credit_patients_credit_component__WEBPACK_IMPORTED_MODULE_16__["PatientsCreditComponent"]
            }
        ]
    },
];
var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                angular_slickgrid__WEBPACK_IMPORTED_MODULE_12__["AngularSlickgridModule"].forRoot(),
                ngx_print__WEBPACK_IMPORTED_MODULE_13__["NgxPrintModule"]
            ],
            // tslint:disable-next-line:max-line-length
            providers: [_core_application__WEBPACK_IMPORTED_MODULE_9__["SettingsService"], _core_application__WEBPACK_IMPORTED_MODULE_9__["PatientsService"], _core_application__WEBPACK_IMPORTED_MODULE_9__["DoctorsService"], _core_application__WEBPACK_IMPORTED_MODULE_9__["AssociationsService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"], _core_application__WEBPACK_IMPORTED_MODULE_9__["DataSharingService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _core_application__WEBPACK_IMPORTED_MODULE_9__["PaymentsService"]],
            declarations: [
                _payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"],
                _add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_15__["AddPaymentComponent"],
                _patients_credit_patients_credit_component__WEBPACK_IMPORTED_MODULE_16__["PatientsCreditComponent"]
            ]
        })
    ], PaymentModule);
    return PaymentModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-payment-payment-module.js.map