(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-md-6 col-md-offset-3\">\r\n    <div *ngIf=\"isLoading\" align=\"center\">\r\n      <app-loading-spinner></app-loading-spinner>\r\n    </div>\r\n\r\n    <!-- <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n      <p>{{ error }}</p>\r\n    </div> -->\r\n\r\n    <form #authForm=\"ngForm\" (ngSubmit)=\"onSubmit(authForm)\" *ngIf=\"!isLoading\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">E-Mail</label>\r\n        <input type=\"email\" id=\"email\" class=\"form-control\" ngModel required email name=\"nm_email\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" id=\"password\" class=\"form-control\" ngModel required minlength=\"6\" name=\"nm_password\" />\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"authForm.invalid\">\r\n          {{ isLoginMode ? 'Login' : 'Sign Up' }}</button> |\r\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"onSwitchMode()\">Switch to\r\n          {{ isLoginMode ? ' Sign Up' : 'Login' }}</button>\r\n      </div>\r\n    </form>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div class=\"btm\">\n        <div class=\"pull-left\" *ngIf=\"(isPanelistAuthenticated || isAdminAuthenticated)\">\n            <strong class=\"list-group-item-heading\">User: {{ user.email }}.<br /> Session expires in :\n                {{ sessionTimerAsString }}</strong>\n        </div>\n        <span class=\"pull-right\">\n            <strong class=\"list-group-item-heading\">Utility be Abhaykumar Lodha&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <br /> (+91) 8600 25 9997.</strong>\n        </span>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-alert></app-alert>\r\n<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a [routerLink]=\"['']\" href=\"#\" class=\"navbar-brand\">Profile Managment </a>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li [routerLinkActive]=\"['active']\">\r\n                    <a [routerLink]=\"['auth']\"\r\n                        *ngIf=\"!(isPanelistAuthenticated || isAdminAuthenticated)\">Authenticate</a>\r\n                </li>\r\n\r\n                <li class=\"dropdown\" appDropDown *ngIf=\"isAdminAuthenticated\">\r\n                    <a style=\"cursor:pointer;\" class=\"dropdown-toggle\" role=\"button\">Master<span\r\n                            class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['users']\">Users</a></li>\r\n                        <li><a [routerLink]=\"['skills']\">Skillsets</a></li>\r\n                        <li><a [routerLink]=\"['locations']\">Locations</a></li>\r\n                        <li><a [routerLink]=\"['requirements']\">Requirements</a></li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <li [routerLinkActive]=\"['active']\" *ngIf=\"(isPanelistAuthenticated || isAdminAuthenticated)\">\r\n                    <a [routerLink]=\"['profiles']\">Create a Profile</a>\r\n                </li>\r\n\r\n                <li class=\"dropdown\" appDropDown *ngIf=\"isAdminAuthenticated\">\r\n                    <a style=\"cursor:pointer;\" class=\"dropdown-toggle\" role=\"button\">Reports<span\r\n                            class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['users']\">Daywise evaluation details</a></li>\r\n                        <li><a style=\"cursor:pointer;\">All profiles</a></li>\r\n                    </ul>\r\n                </li>\r\n\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li [routerLinkActive]=\"['active']\" *ngIf=\"(isPanelistAuthenticated || isAdminAuthenticated)\">\r\n                    <a [routerLink]=\"['']\" (click)=\"onLogout()\">Logout</a>\r\n                </li>\r\n                <!-- <li class=\"dropdown\" appDropDown *ngIf=\"(isPanelistAuthenticated || isAdminAuthenticated)\">\r\n                    <a style=\"cursor:pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage<span\r\n                            class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a style=\"cursor:pointer;\">Save Data</a></li>\r\n                        <li><a style=\"cursor:pointer;\">Fetch Data</a></li>\r\n                    </ul>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/location-edit/location-edit.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/location-edit/location-edit.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"col-sm-5 form-group\">\n            <label for=\"name\">Name of Location</label>\n            <input\n              type=\"text\"\n              id=\"location_name\"\n              class=\"form-control\"\n              name=\"location_name\"\n              ngModel\n              required\n            >\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button\n              class=\"btn btn-success\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button> &nbsp;\n            <button\n              class=\"btn btn-danger\"\n              type=\"button\"\n              (click)=\"onDelete()\"\n              *ngIf=\"editMode\">Delete</button> &nbsp;\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-10\">\n        <app-location-edit></app-location-edit>\n        <hr>\n        <!-- <button class=\"btn btn-success\" type=\"button\" (click)=\"onLoadLocations()\">Load existing locations</button> | -->\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"onSubmit()\">Submit changes</button>\n        <hr>\n        <ul class=\"list-group\">\n            <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let location of locations; let i = index\"\n                (click)=\"onEditItem(i)\">\n                {{ location.name }}\n            </a>\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profile-edit/profile-edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profile-edit/profile-edit.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile-edit works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profiles.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profiles.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-5\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Profile</button>\n            </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <label for=\"\">Filter by (Name/Number) : </label>\n                <input type=\"text\" [(ngModel)]=\"filterString\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <a style=\"cursor: pointer;\" [routerLink]=\"[index]\" routerLinkActive=\"active\"\n                    class=\"list-group-item clearfix\"\n                    *ngFor=\"let profile of profiles | filterListValues:'Profile':filterString; let i = index\">\n\n                    <div class=\"pull-left\">\n                        <h4 class=\"list-group-item-heading\">{{ profile.name }}</h4>\n                        <p class=\"list-group-item-text\">{{ profile.contactNumber }}</p>\n                        <p class=\"list-group-item-text\">{{ profile.matchingRequirement.skill.asString }}</p>\n                        <p class=\"list-group-item-text\">{{ profile.matchingRequirement.location.name }}</p>\n                    </div>\n                    <!-- <span class=\"pull-right\">\n                        <img [src]=\"recipe.imagePath\" alt=\"{{ recipe.name }}\" class=\"img-responsive\"\n                            style=\"max-height: 50px;\">\n                    </span> -->\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-7\">\n        <router-outlet></router-outlet>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirement-edit/requirement-edit.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirement-edit/requirement-edit.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n            <div class=\"row\">\n\n                <div class=\"col-sm-5 form-group\">\n                    <label for=\"skill\">Required Skill</label>\n                    <select id=\"skill\" class=\"form-control\" [ngModel]=\"selectedRequirement.skill.asString\" required\n                        name=\"nm_skill\">\n                        <option [value]=\"skill.asString\" *ngFor=\"let skill of skills\">{{skill.asString}}</option>\n                    </select>\n                </div>\n\n                <div class=\"col-sm-5 form-group\">\n                    <label for=\"location\">Required Location</label>\n                    <select id=\"location\" class=\"form-control\" [ngModel]=\"selectedRequirement.location.name\" required\n                        name=\"nm_location\">\n                        <option [value]=\"location.name\" *ngFor=\"let location of locations\">{{location.name}}</option>\n                    </select>\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <button class=\"btn btn-success\" type=\"submit\"\n                        [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button> &nbsp;\n                    <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n                    &nbsp;\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirements.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirements.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-10\">\n        <app-requirement-edit></app-requirement-edit>\n        <hr>\n        <!-- <button class=\"btn btn-success\" type=\"button\" (click)=\"onLoadSkills()\">Load existing requirements</button> | -->\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"onSubmit()\">Submit Changes</button>\n        <hr>\n        <ul class=\"list-group\">\n            <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let requirement of requirements | filterRequirements:'Select skill'; let i = index\"\n                (click)=\"onEditItem(i)\">\n                {{ requirement.skill.asString }} | {{ requirement.location.name }}\n            </a>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\" (click)=\"onClose()\" *ngIf=\"!!message\">\r\n</div>\r\n<div class=\"alert-box\" *ngIf=\"!!message\">\r\n    <p>{{ message }}</p>\r\n    <div class=\"alert-box-actions\">\r\n        <button class=\"btn btn-primary\" (click)=\"onClose()\">Close</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skill-edit/skill-edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skill-edit/skill-edit.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"col-sm-5 form-group\">\n            <label for=\"name\">Technology</label>\n            <input\n              type=\"text\"\n              id=\"technology\"\n              class=\"form-control\"\n              name=\"technology\"\n              ngModel\n              required\n            >\n          </div>\n          <div class=\"col-sm-2 form-group\">\n            <label for=\"amount\">Experience</label>\n            <input\n              type=\"text\"\n              id=\"experience\"\n              class=\"form-control\"\n              name=\"experience\"\n              ngModel\n              required\n            >\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button\n              class=\"btn btn-success\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button> &nbsp;\n            <button\n              class=\"btn btn-danger\"\n              type=\"button\"\n              (click)=\"onDelete()\"\n              *ngIf=\"editMode\">Delete</button> &nbsp;\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xs-10\">\n        <app-skill-edit></app-skill-edit>\n        <hr>\n        <!-- <button class=\"btn btn-success\" type=\"button\" (click)=\"onLoadSkills()\">Load existing skills</button> | -->\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"onSubmit()\">Submit Changes</button>\n        <hr>\n        <ul class=\"list-group\">\n            <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let skill of skills; let i = index\"\n                (click)=\"onEditItem(i)\">\n                {{ skill.asString }}\n            </a>\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-edit/user-edit.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-edit/user-edit.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div>\n        <div *ngIf=\"isLoading\" align=\"center\">\n            <app-loading-spinner></app-loading-spinner>\n        </div>\n\n        <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\" *ngIf=\"!isLoading\">\n            <div class=\"form-group\">\n                <label for=\"email\">E-Mail</label>\n                <input type=\"email\" id=\"email\" class=\"form-control\" [ngModel]=\"userDtl.user_name\"\n                required email\n                name=\"nm_email\"\n                [readonly]=\"editMode\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" id=\"password\" class=\"form-control\" ngModel required minlength=\"6\"\n                    name=\"nm_password\"\n                    [value]=\"editMode ? '123456' : '' \"\n                    [disabled]=\"editMode\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"status\">User Type</label>\n                <select id=\"status\" class=\"form-control\" [ngModel]=\"userDtl.user_type\" required\n                    name=\"nm_user_type\">\n                    <option value=\"Admin\">Admin</option>\n                    <option value=\"Panelist\">Panelist</option>\n                </select>\n            </div>\n            <div>\n                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"userForm.invalid\">\n                    {{ editMode ? 'Update User' :  'Create User'}}</button>\n            </div>\n        </form>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-start/user-start.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-start/user-start.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Please select/add a user.</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/users/users.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/users/users.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-3\" align=\"right\">\n    <button class=\"btn btn-primary\" [routerLink]=\"['/','users','adduser']\">Add New User</button>\n    <hr>\n\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <label for=\"\">Filter by (Email) : </label>\n        <input type=\"text\" [(ngModel)]=\"filterString\">\n      </div>\n    </div>\n\n    <ul class=\"list-group\">\n      <a class=\"list-group-item text-break\" style=\"cursor: pointer\"\n        *ngFor=\"let usrDtl of userDetails | filterListValues:'UserDetail':filterString; let i = index\"\n        [routerLink]=\"['edit',i]\" align=\"right\">\n        {{ usrDtl.user_name }} ({{ usrDtl.user_type }})\n      </a>\n    </ul>\n  </div>\n  <div class=\"col-xs-12 col-md-8 col-lg-6\">\n    <router-outlet></router-outlet>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _user_user_start_user_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user-start/user-start.component */ "./src/app/user/user-start/user-start.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/user/users/users.component.ts");
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _user_users_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/users-resolver.service */ "./src/app/user/users-resolver.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth-admin.guard */ "./src/app/auth/auth-admin.guard.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./requirements/requirements.component */ "./src/app/requirements/requirements.component.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/profiles/profiles.component.ts");














const routes = [
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
    {
        path: 'users', component: _user_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
        resolve: [_user_users_resolver_service__WEBPACK_IMPORTED_MODULE_7__["UsersResolverService"]],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AuthAdminGuard"]],
        children: [
            { path: '', component: _user_user_start_user_start_component__WEBPACK_IMPORTED_MODULE_4__["UserStartComponent"] },
            { path: 'adduser', component: _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"] },
            {
                path: 'edit/:id', component: _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"],
                resolve: [_user_users_resolver_service__WEBPACK_IMPORTED_MODULE_7__["UsersResolverService"]]
            }
        ]
    },
    {
        path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AuthAdminGuard"]]
    },
    {
        path: 'requirements', component: _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_12__["RequirementsComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AuthAdminGuard"]]
    },
    {
        path: 'locations', component: _locations_locations_component__WEBPACK_IMPORTED_MODULE_11__["LocationsComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AuthAdminGuard"]]
    },
    {
        path: 'profiles', component: _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_13__["ProfilesComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authSvc) {
        this.authSvc = authSvc;
    }
    ngOnInit() {
        this.authSvc.autoLogin();
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/alert/alert.component */ "./src/app/shared/alert/alert.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/user/users/users.component.ts");
/* harmony import */ var _user_user_start_user_start_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user-start/user-start.component */ "./src/app/user/user-start/user-start.component.ts");
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "./src/app/auth/auth-interceptor.service.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _skills_skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./skills/skill-edit/skill-edit.component */ "./src/app/skills/skill-edit/skill-edit.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _locations_location_edit_location_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./locations/location-edit/location-edit.component */ "./src/app/locations/location-edit/location-edit.component.ts");
/* harmony import */ var _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./requirements/requirements.component */ "./src/app/requirements/requirements.component.ts");
/* harmony import */ var _requirements_requirement_edit_requirement_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./requirements/requirement-edit/requirement-edit.component */ "./src/app/requirements/requirement-edit/requirement-edit.component.ts");
/* harmony import */ var _requirements_requirement_filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./requirements/requirement-filter.pipe */ "./src/app/requirements/requirement-filter.pipe.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/profiles/profiles.component.ts");
/* harmony import */ var _profiles_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./profiles/profile-edit/profile-edit.component */ "./src/app/profiles/profile-edit/profile-edit.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _shared_filter_list_values_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/filter-list-values.pipe */ "./src/app/shared/filter-list-values.pipe.ts");



























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["DropDownDirective"],
            _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"],
            _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__["LoadingSpinnerComponent"],
            _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"],
            _user_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
            _user_user_start_user_start_component__WEBPACK_IMPORTED_MODULE_13__["UserStartComponent"],
            _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__["UserEditComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_16__["SkillsComponent"],
            _skills_skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_17__["SkillEditComponent"],
            _locations_locations_component__WEBPACK_IMPORTED_MODULE_18__["LocationsComponent"],
            _locations_location_edit_location_edit_component__WEBPACK_IMPORTED_MODULE_19__["LocationEditComponent"],
            _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_20__["RequirementsComponent"],
            _requirements_requirement_edit_requirement_edit_component__WEBPACK_IMPORTED_MODULE_21__["RequirementEditComponent"],
            _requirements_requirement_filter_pipe__WEBPACK_IMPORTED_MODULE_22__["RequirementFilterPipe"],
            _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_23__["ProfilesComponent"],
            _profiles_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_24__["ProfileEditComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
            _shared_filter_list_values_pipe__WEBPACK_IMPORTED_MODULE_26__["FilterListValuesPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptorService"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-admin.guard.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-admin.guard.ts ***!
  \******************************************/
/*! exports provided: AuthAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdminGuard", function() { return AuthAdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");






let AuthAdminGuard = class AuthAdminGuard {
    constructor(authSvc, dataSvc) {
        this.authSvc = authSvc;
        this.dataSvc = dataSvc;
    }
    canActivate(route, router) {
        return this.authSvc.user
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), //Subscribe to take only one value and unsubscribe
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((user) => {
            if (!!user) {
                console.log("AuthAdminGuard : " + this.authSvc.isUserAdmin);
                return this.dataSvc.isUserAnAdmin(user.email);
            }
            else {
                console.log("AuthAdminGuard : False");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
            }
        }));
    }
};
AuthAdminGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"] }
];
AuthAdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], AuthAdminGuard);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthInterceptorService = class AuthInterceptorService {
    constructor(authSvc) {
        this.authSvc = authSvc;
    }
    intercept(req, next) {
        return this.authSvc.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(user => {
            if (!user)
                return next.handle(req);
            const newReq = req.clone({ params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('auth', user.Token) });
            return next.handle(newReq);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _shared_application_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/application-event.service */ "./src/app/shared/application-event.service.ts");






let AuthComponent = class AuthComponent {
    constructor(authSvc, router, dataSvc, evtSvc) {
        this.authSvc = authSvc;
        this.router = router;
        this.dataSvc = dataSvc;
        this.evtSvc = evtSvc;
        this.isLoginMode = true;
        this.isLoading = false;
    }
    onSwitchMode() {
        if (this.isLoginMode) {
            this.evtSvc.generateEvent(new _shared_application_event_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationEvent"]("ForAlertComponent", "Can't Signup. Please use Login mode or contact Administrator to get registered."));
            //this.isLoginMode = !this.isLoginMode;
        }
    }
    onSubmit(authForm) {
        if (!this.isLoginMode) {
            return;
        }
        const email = authForm.value.nm_email;
        const password = authForm.value['nm_password'];
        if (authForm.valid) {
            this.isLoading = true;
        }
        let authObs;
        if (!this.isLoginMode && authForm.valid) {
            //Signup
            authObs = this.authSvc.signup(email, password, true);
        }
        else if (authForm.valid) {
            //Login
            authObs = this.authSvc.login(email, password);
        }
        authObs.subscribe(response => {
            this.isLoading = false;
            this.router.navigate(["/"]);
            this.dataSvc.isUserAnAdmin(email).subscribe(response => {
                this.authSvc.setIsAdmin(response);
            });
        }, errMsg => {
            this.evtSvc.generateEvent(new _shared_application_event_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationEvent"]("ForAlertComponent", errMsg));
            this.isLoading = false;
        });
        authForm.reset();
    }
    ngOnDestroy() { }
};
AuthComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] },
    { type: _shared_application_event_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationEventService"] }
];
AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate(route, router) {
        return this.authSvc.user
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), //Subscribe to take only one value and unsubscribe
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            if (!!user)
                return true;
            else {
                return this.router.createUrlTree(['/auth']);
                //false;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");









;
let AuthService = class AuthService {
    constructor(http, router, dataSvc) {
        this.http = http;
        this.router = router;
        this.dataSvc = dataSvc;
        //Same as subject, but can be used to get last emitted value without even subscribing.
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.isUserAdmin = false;
        this.adminFlagchanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.token = null;
    }
    //Sign Up URL
    //Template : https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    //Actual : https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_pxwEL_BK3GBldh4hC4gNQT5Ugf-LLJM
    //Sign In URL
    //Template : https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    //Actual : https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_pxwEL_BK3GBldh4hC4gNQT5Ugf-LLJM
    setIsAdmin(isAdmin) {
        this.isUserAdmin = isAdmin;
        this.adminFlagchanged.next(this.isUserAdmin);
    }
    isAdmin() {
        return this.isUserAdmin;
    }
    updatePassword(email, password, updateSessionData) {
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].updatePasswordUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiKey, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => { return this.handleError(err); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(resData => {
            if (updateSessionData)
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    signup(email, password, updateSessionData) {
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].signupUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiKey, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => { return this.handleError(err); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(resData => {
            if (updateSessionData)
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    login(email, password) {
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].loginUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiKey, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => { return this.handleError(err); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        this.setIsAdmin(false);
        if (this.logoutTimer) {
            clearTimeout(this.logoutTimer);
        }
        this.logoutTimer = null;
    }
    autoLogout(expirationDuration) {
        this.logoutTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
    handleAuthentication(email, userId, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](email, userId, token, expirationDate);
        this.token = token;
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
        this.autoLogout(expiresIn * 1000);
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            let savedUser = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
            if (savedUser.Token) {
                this.user.next(savedUser);
                let expiresIn = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
                this.autoLogout(expiresIn);
            }
            this.dataSvc.isUserAnAdmin(userData.email).subscribe(response => {
                this.setIsAdmin(response);
            });
        }
    }
    handleError(err) {
        let errorMsg = 'An unknown error occurred.';
        if (!err.error || !err.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMsg);
        }
        switch (err.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMsg = 'Email already exists !!!';
                break;
            case 'INVALID_PASSWORD':
                errorMsg = 'Invalid password !!!';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMsg = 'Email ID does not exist !!! Please sign up.';
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMsg);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get Token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
    get expirationDate() {
        return this._tokenExpirationDate;
    }
}


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btm {\r\n    position : fixed;\r\n    bottom : 0;\r\n    left : 0;\r\n    width : 100vw;\r\n    background : rgba(149, 179, 212, 0.75);\r\n}\r\n.t {\r\n    height : 100vh;\r\n    z-index : 50;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixRQUFRO0lBQ1IsYUFBYTtJQUNiLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRtIHtcclxuICAgIHBvc2l0aW9uIDogZml4ZWQ7XHJcbiAgICBib3R0b20gOiAwO1xyXG4gICAgbGVmdCA6IDA7XHJcbiAgICB3aWR0aCA6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZCA6IHJnYmEoMTQ5LCAxNzksIDIxMiwgMC43NSk7XHJcbn1cclxuLnQge1xyXG4gICAgaGVpZ2h0IDogMTAwdmg7XHJcbiAgICB6LWluZGV4IDogNTA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



let FooterComponent = class FooterComponent {
    constructor(authSvc) {
        this.authSvc = authSvc;
        this.isAdminAuthenticated = false;
        this.isPanelistAuthenticated = false;
        this.user = null;
        this.sessionTimer = 0;
        this.sessionTimerAsString = "00:00:00";
        this.timer = null;
    }
    ngOnInit() {
        this.subscription = this.authSvc.user.subscribe(user => {
            this.user = user;
            this.isPanelistAuthenticated = !!user;
            if (!!user) {
                let eTime = user.expirationDate.getTime();
                let cTime = new Date().getTime();
                this.sessionTimer = +(((eTime - cTime) / 1000).toFixed());
                this.timer = setInterval(() => this.handleTime(), 1000);
            }
        });
        this.authSvc.adminFlagchanged.subscribe((isAdmin) => {
            this.isAdminAuthenticated = isAdmin;
        });
    }
    handleTime() {
        if (this.timer && this.sessionTimer < 1) {
            clearInterval(this.timer);
            return;
        }
        this.sessionTimer = this.sessionTimer - 1;
        this.sessionTimerAsString = this.formatTime(this.sessionTimer);
    }
    formatTime(sessionTimer) {
        const ss = (this.sessionTimer % 60);
        const mm = ((this.sessionTimer - ss) % 3600) / 60;
        const hh = (this.sessionTimer - (mm * 60) - ss) / 3600;
        return ((hh < 10) ? "0" + hh : hh) + ":" +
            ((mm < 10) ? "0" + mm : mm) + ":" +
            ((ss < 10) ? "0" + ss : ss);
    }
    onLogout() {
        this.authSvc.logout();
    }
};
FooterComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authSvc) {
        this.authSvc = authSvc;
        this.isAdminAuthenticated = false;
        this.isPanelistAuthenticated = false;
        this.user = null;
        this.sessionTimer = 0;
        this.sessionTimerAsString = "00:00:00";
        this.timer = null;
    }
    ngOnInit() {
        this.subscription = this.authSvc.user.subscribe(user => {
            this.user = user;
            this.isPanelistAuthenticated = !!user;
            if (!!user) {
                let eTime = user.expirationDate.getTime();
                let cTime = new Date().getTime();
                this.sessionTimer = +(((eTime - cTime) / 1000).toFixed());
                this.timer = setInterval(() => this.handleTime(), 1000);
            }
        });
        this.authSvc.adminFlagchanged.subscribe((isAdmin) => {
            this.isAdminAuthenticated = isAdmin;
        });
    }
    handleTime() {
        if (this.timer && this.sessionTimer < 1) {
            clearInterval(this.timer);
            return;
        }
        this.sessionTimer = this.sessionTimer - 1;
        this.sessionTimerAsString = this.formatTime(this.sessionTimer);
    }
    formatTime(sessionTimer) {
        const ss = (this.sessionTimer % 60);
        const mm = ((this.sessionTimer - ss) % 3600) / 60;
        const hh = (this.sessionTimer - (mm * 60) - ss) / 3600;
        return ((hh < 10) ? "0" + hh : hh) + ":" +
            ((mm < 10) ? "0" + mm : mm) + ":" +
            ((ss < 10) ? "0" + ss : ss);
    }
    onLogout() {
        this.authSvc.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/locations/location-edit/location-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/locations/location-edit/location-edit.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9ucy9sb2NhdGlvbi1lZGl0L2xvY2F0aW9uLWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/locations/location-edit/location-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/locations/location-edit/location-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: LocationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationEditComponent", function() { return LocationEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../location.service */ "./src/app/locations/location.service.ts");



let LocationEditComponent = class LocationEditComponent {
    constructor(locationSvc) {
        this.locationSvc = locationSvc;
        this.editMode = false;
    }
    ngOnInit() {
        this.subscription = this.locationSvc.startedEditing.subscribe((id) => {
            this.editMode = true;
            this.editedItemIndex = id;
            this.editedLocation = this.locationSvc.getLocation(id);
            this.locationForm.setValue({
                location_name: this.editedLocation.name
            });
        });
    }
    onSubmit(form) {
        const value = form.value;
        const newLocation = new _location_service__WEBPACK_IMPORTED_MODULE_2__["Location"](value.location_name);
        if (this.editMode) {
            this.locationSvc.updateLocation(this.editedItemIndex, newLocation);
        }
        else {
            this.locationSvc.addLocation(newLocation);
        }
        this.editMode = false;
        form.reset();
    }
    onClear() {
        this.locationForm.reset();
        this.editMode = false;
    }
    onDelete() {
        this.locationSvc.deleteLocation(this.editedItemIndex);
        this.onClear();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
LocationEditComponent.ctorParameters = () => [
    { type: _location_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], LocationEditComponent.prototype, "locationForm", void 0);
LocationEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/location-edit/location-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location-edit.component.css */ "./src/app/locations/location-edit/location-edit.component.css")).default]
    })
], LocationEditComponent);



/***/ }),

/***/ "./src/app/locations/location.service.ts":
/*!***********************************************!*\
  !*** ./src/app/locations/location.service.ts ***!
  \***********************************************/
/*! exports provided: Location, LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class Location {
    constructor(name) {
        this.name = name;
    }
}
let LocationsService = class LocationsService {
    constructor() {
        this.locations = [];
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.locationsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getLocations() {
        return this.locations.slice();
    }
    getLocation(id) {
        return this.locations[id];
    }
    setLocations(locations) {
        this.locations = locations;
        this.locationsChanged.next(this.locations);
    }
    updateLocation(id, location) {
        this.locations[id] = location;
        this.locationsChanged.next(this.locations);
    }
    addLocation(location) {
        this.locations.push(location);
        this.locationsChanged.next(this.locations);
    }
    deleteLocation(id) {
        this.locations.splice(id, 1);
        this.locationsChanged.next(this.locations);
    }
};
LocationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], LocationsService);



/***/ }),

/***/ "./src/app/locations/locations.component.css":
/*!***************************************************!*\
  !*** ./src/app/locations/locations.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9ucy9sb2NhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/locations/locations.component.ts":
/*!**************************************************!*\
  !*** ./src/app/locations/locations.component.ts ***!
  \**************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ "./src/app/locations/location.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");




let LocationsComponent = class LocationsComponent {
    constructor(locationSvc, dataSvc) {
        this.locationSvc = locationSvc;
        this.dataSvc = dataSvc;
        this.locations = [];
    }
    ngOnInit() {
        this.locations = this.locationSvc.getLocations();
        this.subscription = this.locationSvc.locationsChanged
            .subscribe((locations) => {
            this.locations = locations;
        });
        this.loadLocations();
    }
    onEditItem(id) {
        this.locationSvc.startedEditing.next(+id);
    }
    onSubmit() {
        this.dataSvc.uploadLocations(this.locations);
    }
    loadLocations() {
        this.dataSvc.downloadLocations();
    }
};
LocationsComponent.ctorParameters = () => [
    { type: _location_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] }
];
LocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./locations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./locations.component.css */ "./src/app/locations/locations.component.css")).default]
    })
], LocationsComponent);



/***/ }),

/***/ "./src/app/profiles/profile-edit/profile-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/profiles/profile-edit/profile-edit.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/profiles/profile-edit/profile-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/profiles/profile-edit/profile-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileEditComponent = class ProfileEditComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profile-edit/profile-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-edit.component.css */ "./src/app/profiles/profile-edit/profile-edit.component.css")).default]
    })
], ProfileEditComponent);



/***/ }),

/***/ "./src/app/profiles/profiles.component.css":
/*!*************************************************!*\
  !*** ./src/app/profiles/profiles.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3Byb2ZpbGVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/profiles/profiles.component.ts":
/*!************************************************!*\
  !*** ./src/app/profiles/profiles.component.ts ***!
  \************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profiles.service */ "./src/app/profiles/profiles.service.ts");
/* harmony import */ var _shared_application_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/application-event.service */ "./src/app/shared/application-event.service.ts");




let ProfilesComponent = class ProfilesComponent {
    constructor(profileSvc, evtSvc) {
        this.profileSvc = profileSvc;
        this.evtSvc = evtSvc;
        this.profiles = [];
        this.filterString = '';
    }
    ngOnInit() {
        this.profiles = this.profileSvc.profiles;
        this.evtSvc.generateEvent(new _shared_application_event_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationEvent"]("ForAlertComponent", "Yet to be implemented."));
    }
};
ProfilesComponent.ctorParameters = () => [
    { type: _profiles_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
    { type: _shared_application_event_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationEventService"] }
];
ProfilesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profiles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profiles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profiles.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profiles.component.css */ "./src/app/profiles/profiles.component.css")).default]
    })
], ProfilesComponent);



/***/ }),

/***/ "./src/app/profiles/profiles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/profiles/profiles.service.ts ***!
  \**********************************************/
/*! exports provided: Profile, ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _requirements_requirements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requirements/requirements.service */ "./src/app/requirements/requirements.service.ts");
/* harmony import */ var _skills_skill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skills/skill.service */ "./src/app/skills/skill.service.ts");
/* harmony import */ var _locations_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../locations/location.service */ "./src/app/locations/location.service.ts");





class Profile {
    constructor(name, contactNumber, matchingRequirement, assignedTo, selected, comments) {
        this.name = name;
        this.contactNumber = contactNumber;
        this.matchingRequirement = matchingRequirement;
        this.assignedTo = assignedTo;
        this.selected = selected;
        this.comments = comments;
    }
}
let ProfileService = class ProfileService {
    constructor() {
        this.profiles = [
            new Profile("Sanket", "992323", new _requirements_requirements_service__WEBPACK_IMPORTED_MODULE_2__["Requirement"](new _skills_skill_service__WEBPACK_IMPORTED_MODULE_3__["Skill"]("Pega | 3 Years"), new _locations_location_service__WEBPACK_IMPORTED_MODULE_4__["Location"]("Chennai")), "a@b.com", "N/A", "N/A"),
            new Profile("Aniket", "98765", new _requirements_requirements_service__WEBPACK_IMPORTED_MODULE_2__["Requirement"](new _skills_skill_service__WEBPACK_IMPORTED_MODULE_3__["Skill"]("Core Java, Spring, Hibernate | 5 years+"), new _locations_location_service__WEBPACK_IMPORTED_MODULE_4__["Location"]("Mumbai")), "b@c.com", "N/A", "N/A")
        ];
    }
};
ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ProfileService);



/***/ }),

/***/ "./src/app/requirements/requirement-edit/requirement-edit.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/requirements/requirement-edit/requirement-edit.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVpcmVtZW50cy9yZXF1aXJlbWVudC1lZGl0L3JlcXVpcmVtZW50LWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/requirements/requirement-edit/requirement-edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/requirements/requirement-edit/requirement-edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RequirementEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementEditComponent", function() { return RequirementEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _requirements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requirements.service */ "./src/app/requirements/requirements.service.ts");
/* harmony import */ var src_app_skills_skill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/skills/skill.service */ "./src/app/skills/skill.service.ts");
/* harmony import */ var src_app_locations_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/locations/location.service */ "./src/app/locations/location.service.ts");
/* harmony import */ var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");






let RequirementEditComponent = class RequirementEditComponent {
    constructor(locationSvc, skillSvc, requirementSvc, dataSvc) {
        this.locationSvc = locationSvc;
        this.skillSvc = skillSvc;
        this.requirementSvc = requirementSvc;
        this.dataSvc = dataSvc;
        this.skills = [];
        this.locations = [];
        this.requirements = [];
        this.editMode = false;
        this.blankRequirement = new _requirements_service__WEBPACK_IMPORTED_MODULE_2__["Requirement"](new src_app_skills_skill_service__WEBPACK_IMPORTED_MODULE_3__["Skill"]("Select skill"), new src_app_locations_location_service__WEBPACK_IMPORTED_MODULE_4__["Location"]("Select Location"));
        this.selectedRequirement = this.blankRequirement;
    }
    ngOnInit() {
        this.loadSkills();
        this.loadLocations();
        //this.loadRequirements();
        this.subscription = this.requirementSvc.startedEditing.subscribe((id) => {
            this.editedItemIndex = +id;
            this.selectedRequirement = this.requirementSvc.getRequirement(id);
            this.editMode = true;
        });
    }
    onSubmit(form) {
        const value = form.value;
        const newRequirement = new _requirements_service__WEBPACK_IMPORTED_MODULE_2__["Requirement"](new src_app_skills_skill_service__WEBPACK_IMPORTED_MODULE_3__["Skill"](value.nm_skill), new src_app_locations_location_service__WEBPACK_IMPORTED_MODULE_4__["Location"](value.nm_location));
        if (this.editMode) {
            this.requirementSvc.updateRequirement(this.editedItemIndex, newRequirement);
        }
        else {
            this.requirementSvc.addRequirement(newRequirement);
        }
        this.editMode = false;
        form.reset();
    }
    loadSkills() {
        this.dataSvc.downloadSkills();
        this.skills = this.skillSvc.getSkills();
        //this.skills.push(this.selectedRequirement.skill);
        this.subscriptionSkill = this.skillSvc.skillsChanged
            .subscribe((skills) => {
            this.skills = skills;
            //this.skills.push(this.selectedRequirement.skill);
        });
    }
    loadLocations() {
        this.dataSvc.downloadLocations();
        this.locations = this.locationSvc.getLocations();
        //this.locations.push(this.selectedRequirement.location);
        this.subscriptionLocation = this.locationSvc.locationsChanged
            .subscribe((locations) => {
            this.locations = locations;
            //this.locations.push(this.selectedRequirement.location);
        });
    }
    // loadRequirements() {
    //   this.dataSvc.downloadRequirements();
    //   this.requirements = this.requirementSvc.getRequirements();
    //   //this.requirements.push(this.selectedRequirement);
    //   this.subscriptionRequirement = this.requirementSvc.requirementsChanged
    //     .subscribe(
    //       (requirements: Requirement[]) => {
    //         this.requirements = requirements;
    //         //this.requirements.push(this.selectedRequirement);
    //       }
    //     );
    // }
    onClear() {
        this.requirementForm.reset();
        this.editMode = false;
    }
    onDelete() {
        this.requirementSvc.deleteRequirement(this.editedItemIndex);
        this.onClear();
    }
    ngOnDestroy() {
        if (this.subscriptionSkill)
            this.subscriptionSkill.unsubscribe();
        if (this.subscriptionLocation)
            this.subscriptionLocation.unsubscribe();
        // if (this.subscriptionRequirement)
        //   this.subscriptionRequirement.unsubscribe();
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
RequirementEditComponent.ctorParameters = () => [
    { type: src_app_locations_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationsService"] },
    { type: src_app_skills_skill_service__WEBPACK_IMPORTED_MODULE_3__["SkillsService"] },
    { type: _requirements_service__WEBPACK_IMPORTED_MODULE_2__["RequirementsService"] },
    { type: src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], RequirementEditComponent.prototype, "requirementForm", void 0);
RequirementEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-requirement-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./requirement-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirement-edit/requirement-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./requirement-edit.component.css */ "./src/app/requirements/requirement-edit/requirement-edit.component.css")).default]
    })
], RequirementEditComponent);



/***/ }),

/***/ "./src/app/requirements/requirement-filter.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/requirements/requirement-filter.pipe.ts ***!
  \*********************************************************/
/*! exports provided: RequirementFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementFilterPipe", function() { return RequirementFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RequirementFilterPipe = class RequirementFilterPipe {
    transform(value, pattarn) {
        if (value.length === 0) {
            return value;
        }
        return value.filter(s => s.skill.asString.search(pattarn) != 0);
    }
};
RequirementFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterRequirements',
        pure: false
    })
], RequirementFilterPipe);



/***/ }),

/***/ "./src/app/requirements/requirements.component.css":
/*!*********************************************************!*\
  !*** ./src/app/requirements/requirements.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVpcmVtZW50cy9yZXF1aXJlbWVudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/requirements/requirements.component.ts":
/*!********************************************************!*\
  !*** ./src/app/requirements/requirements.component.ts ***!
  \********************************************************/
/*! exports provided: RequirementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementsComponent", function() { return RequirementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _requirements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requirements.service */ "./src/app/requirements/requirements.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");




let RequirementsComponent = class RequirementsComponent {
    constructor(requirementSvc, dataSvc) {
        this.requirementSvc = requirementSvc;
        this.dataSvc = dataSvc;
        this.requirements = [];
    }
    ngOnInit() {
        this.requirements = this.requirementSvc.getRequirements();
        this.subscription = this.requirementSvc.requirementsChanged
            .subscribe((requirements) => {
            this.requirements = requirements;
        });
        this.loadRequirements();
    }
    onEditItem(id) {
        this.requirementSvc.startedEditing.next(+id);
    }
    onSubmit() {
        this.dataSvc.uploadRequirements(this.requirements);
    }
    loadRequirements() {
        this.dataSvc.downloadRequirements();
    }
};
RequirementsComponent.ctorParameters = () => [
    { type: _requirements_service__WEBPACK_IMPORTED_MODULE_2__["RequirementsService"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] }
];
RequirementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-requirements',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./requirements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirements.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./requirements.component.css */ "./src/app/requirements/requirements.component.css")).default]
    })
], RequirementsComponent);



/***/ }),

/***/ "./src/app/requirements/requirements.service.ts":
/*!******************************************************!*\
  !*** ./src/app/requirements/requirements.service.ts ***!
  \******************************************************/
/*! exports provided: Requirement, RequirementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Requirement", function() { return Requirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementsService", function() { return RequirementsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class Requirement {
    constructor(skill, location) {
        this.skill = skill;
        this.location = location;
    }
}
let RequirementsService = class RequirementsService {
    constructor() {
        this.requirements = [];
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.requirementsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getRequirements() {
        return this.requirements.slice();
    }
    getRequirement(id) {
        return this.requirements[id];
    }
    setRequirements(requirements) {
        this.requirements = requirements;
        this.requirementsChanged.next(this.requirements);
    }
    updateRequirement(id, requirement) {
        this.requirements[id] = requirement;
        this.requirementsChanged.next(this.requirements);
    }
    addRequirement(requirement) {
        this.requirements.push(requirement);
        this.requirementsChanged.next(this.requirements);
    }
    deleteRequirement(id) {
        this.requirements.splice(id, 1);
        this.requirementsChanged.next(this.requirements);
    }
};
RequirementsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], RequirementsService);



/***/ }),

/***/ "./src/app/shared/alert/alert.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/alert/alert.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backdrop {\r\n    position : fixed;\r\n    top : 0;\r\n    left : 0;\r\n    width : 100vw;\r\n    height : 100vh;\r\n    background : rgba(0,0,0,.75);\r\n    z-index : 50;\r\n}\r\n\r\n.alert-box{\r\n    position : fixed;\r\n    top : 30vh;\r\n    left : 20vw;\r\n    width : 60vw;\r\n    padding : 16px;\r\n    background : white;\r\n    z-index : 100;\r\n}\r\n\r\n.alert-box-actions {\r\n    text-align : right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uIDogZml4ZWQ7XHJcbiAgICB0b3AgOiAwO1xyXG4gICAgbGVmdCA6IDA7XHJcbiAgICB3aWR0aCA6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0IDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kIDogcmdiYSgwLDAsMCwuNzUpO1xyXG4gICAgei1pbmRleCA6IDUwO1xyXG59XHJcblxyXG4uYWxlcnQtYm94e1xyXG4gICAgcG9zaXRpb24gOiBmaXhlZDtcclxuICAgIHRvcCA6IDMwdmg7XHJcbiAgICBsZWZ0IDogMjB2dztcclxuICAgIHdpZHRoIDogNjB2dztcclxuICAgIHBhZGRpbmcgOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZCA6IHdoaXRlO1xyXG4gICAgei1pbmRleCA6IDEwMDtcclxufVxyXG5cclxuLmFsZXJ0LWJveC1hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ24gOiByaWdodDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _application_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application-event.service */ "./src/app/shared/application-event.service.ts");



let AlertComponent = class AlertComponent {
    constructor(evtSvc) {
        this.evtSvc = evtSvc;
        this.message = '';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClose() {
        this.message = "";
    }
    ngOnInit() {
        this.subscription = this.evtSvc.eventGenerated.subscribe((evt) => {
            if (evt.eventType === "ForAlertComponent") {
                this.message = this.message + (this.message ? " Also " : "") + evt.eventValue;
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
AlertComponent.ctorParameters = () => [
    { type: _application_event_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationEventService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "message", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AlertComponent.prototype, "close", void 0);
AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alert.component.css */ "./src/app/shared/alert/alert.component.css")).default]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/shared/application-event.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/application-event.service.ts ***!
  \*****************************************************/
/*! exports provided: ApplicationEvent, ApplicationEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationEvent", function() { return ApplicationEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationEventService", function() { return ApplicationEventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ApplicationEvent {
    constructor(eventType, eventValue) {
        this.eventType = eventType;
        this.eventValue = eventValue;
    }
}
let ApplicationEventService = class ApplicationEventService {
    constructor() {
        this.eventGenerated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    generateEvent(evt) {
        this.eventGenerated.next(evt);
    }
};
ApplicationEventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ApplicationEventService);



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _skills_skill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills/skill.service */ "./src/app/skills/skill.service.ts");
/* harmony import */ var _locations_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../locations/location.service */ "./src/app/locations/location.service.ts");
/* harmony import */ var _requirements_requirements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../requirements/requirements.service */ "./src/app/requirements/requirements.service.ts");
/* harmony import */ var _application_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application-event.service */ "./src/app/shared/application-event.service.ts");









let DataStorageService = class DataStorageService {
    constructor(http, skillSvc, locationSvc, requirementSvc, evtSvc) {
        this.http = http;
        this.skillSvc = skillSvc;
        this.locationSvc = locationSvc;
        this.requirementSvc = requirementSvc;
        this.evtSvc = evtSvc;
    }
    fetchAllUserDetails() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userDataUrl + ".json");
    }
    storeUser(user_name, user_type) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userDataUrl + "/" + this.formatUserName(user_name) + ".json", {
            'user_name': user_name,
            'user_type': user_type
        }).subscribe(() => {
            this.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "User added/updated successfully."));
        }, error => { console.log(error); });
    }
    isUserAnAdmin(user_name) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userDataUrl + "/" + this.formatUserName(user_name) + ".json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response['user_type'] === 'Admin'));
    }
    formatUserName(user_name) {
        return user_name.replace("@", "").replace(".", "").toLowerCase();
    }
    uploadSkills(skills) {
        this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].skillsDataUrl + ".json", skills).subscribe(() => {
            this.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Skills successfully uploaded to central server."));
        });
    }
    downloadSkills() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].skillsDataUrl + ".json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((skills) => {
            return (!skills) ? [] : skills;
        }))
            .subscribe((skills) => {
            this.skillSvc.setSkills(skills);
            this.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Skills successfully downloaded from central server."));
        });
    }
    uploadLocations(locations) {
        this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].locationsDataUrl + ".json", locations).subscribe(() => {
            this.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Locations successfully uploaded to central server."));
        });
    }
    downloadLocations() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].locationsDataUrl + ".json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((locations) => {
            return (!locations) ? [] : locations;
        }))
            .subscribe((locations) => {
            this.locationSvc.setLocations(locations);
            this.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Locations successfully downloaded from central server."));
        });
    }
    uploadRequirements(requirements) {
        this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].requirementsDataUrl + ".json", requirements).subscribe(() => {
            this.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Requirements successfully uploaded to central server."));
        });
    }
    downloadRequirements() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].requirementsDataUrl + ".json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((requirements) => {
            return (!requirements) ? [] : requirements;
        }))
            .subscribe((requirements) => {
            this.requirementSvc.setRequirements(requirements);
            this.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Requirements successfully downloaded from central server."));
        });
    }
};
DataStorageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _skills_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillsService"] },
    { type: _locations_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationsService"] },
    { type: _requirements_requirements_service__WEBPACK_IMPORTED_MODULE_7__["RequirementsService"] },
    { type: _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEventService"] }
];
DataStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DataStorageService);



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropDownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownDirective", function() { return DropDownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DropDownDirective = class DropDownDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.isOpen = false;
    }
    //This keeps menu open, we need to close it, if anywhere else is clicked.
    // @HostListener('click') toggleOpen(event: Event) {
    //     this.isOpen = !this.isOpen;
    // }
    toggleOpen(event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
};
DropDownDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DropDownDirective.prototype, "isOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
], DropDownDirective.prototype, "toggleOpen", null);
DropDownDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropDown]'
    })
], DropDownDirective);



/***/ }),

/***/ "./src/app/shared/filter-list-values.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/filter-list-values.pipe.ts ***!
  \***************************************************/
/*! exports provided: FilterListValuesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListValuesPipe", function() { return FilterListValuesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FilterListValuesPipe = class FilterListValuesPipe {
    transform(value, dataType, _pattarn) {
        const pattarn = _pattarn.toUpperCase();
        if (value.length === 0) {
            return value;
        }
        console.log(dataType);
        if (dataType === "Profile") {
            return value.filter(s => (s.name + s.contactNumber).toUpperCase().search(pattarn) >= 0);
        }
        if (dataType === "UserDetail") {
            return value.filter(s => (s.user_name).toUpperCase().search(pattarn) >= 0);
        }
        return value;
    }
};
FilterListValuesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterListValues',
        //pure : false causes filter to be reapplied when any data changes. Will have performance issues.
        //pure: false
        pure: true
    })
], FilterListValuesPipe);



/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lds-ring {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .lds-ring div {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 8px;\r\n    border: 8px solid blue;\r\n    border-radius: 50%;\r\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    border-color: blue transparent transparent transparent;\r\n  }\r\n  .lds-ring div:nth-child(1) {\r\n    -webkit-animation-delay: -0.45s;\r\n            animation-delay: -0.45s;\r\n  }\r\n  .lds-ring div:nth-child(2) {\r\n    -webkit-animation-delay: -0.3s;\r\n            animation-delay: -0.3s;\r\n  }\r\n  .lds-ring div:nth-child(3) {\r\n    -webkit-animation-delay: -0.15s;\r\n            animation-delay: -0.15s;\r\n  }\r\n  @-webkit-keyframes lds-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes lds-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzRUFBOEQ7WUFBOUQsOERBQThEO0lBQzlELHNEQUFzRDtFQUN4RDtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0U7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGO0VBUEE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1yaW5nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgICBib3JkZXItY29sb3I6IGJsdWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LoadingSpinnerComponent = class LoadingSpinnerComponent {
};
LoadingSpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading-spinner',
        template: `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loading-spinner.component.css */ "./src/app/shared/loading-spinner/loading-spinner.component.css")).default]
    })
], LoadingSpinnerComponent);



/***/ }),

/***/ "./src/app/skills/skill-edit/skill-edit.component.css":
/*!************************************************************!*\
  !*** ./src/app/skills/skill-edit/skill-edit.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbC1lZGl0L3NraWxsLWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/skills/skill-edit/skill-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/skills/skill-edit/skill-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: SkillEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillEditComponent", function() { return SkillEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skill.service */ "./src/app/skills/skill.service.ts");



let SkillEditComponent = class SkillEditComponent {
    constructor(skillSvc) {
        this.skillSvc = skillSvc;
        this.editMode = false;
    }
    ngOnInit() {
        this.subscription = this.skillSvc.startedEditing.subscribe((id) => {
            this.editMode = true;
            this.editedItemIndex = id;
            this.editedSkill = this.skillSvc.getSkill(id);
            let s = this.editedSkill.asString.split(" | ");
            let technology = s[0];
            let experience = s[1];
            this.skillForm.setValue({
                technology: technology,
                experience: experience
            });
        });
    }
    onSubmit(form) {
        const value = form.value;
        const newSkill = new _skill_service__WEBPACK_IMPORTED_MODULE_2__["Skill"](value.technology + " | " + value.experience);
        if (this.editMode) {
            this.skillSvc.updateSkill(this.editedItemIndex, newSkill);
        }
        else {
            this.skillSvc.addSkill(newSkill);
        }
        this.editMode = false;
        form.reset();
    }
    onClear() {
        this.skillForm.reset();
        this.editMode = false;
    }
    onDelete() {
        this.skillSvc.deleteSkill(this.editedItemIndex);
        this.onClear();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
SkillEditComponent.ctorParameters = () => [
    { type: _skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], SkillEditComponent.prototype, "skillForm", void 0);
SkillEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skill-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./skill-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skill-edit/skill-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./skill-edit.component.css */ "./src/app/skills/skill-edit/skill-edit.component.css")).default]
    })
], SkillEditComponent);



/***/ }),

/***/ "./src/app/skills/skill.service.ts":
/*!*****************************************!*\
  !*** ./src/app/skills/skill.service.ts ***!
  \*****************************************/
/*! exports provided: Skill, SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class Skill {
    constructor(skillAsString) {
        this.asString = skillAsString;
    }
}
let SkillsService = class SkillsService {
    constructor() {
        this.skills = [];
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.skillsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getSkills() {
        return this.skills.slice();
    }
    getSkill(id) {
        return this.skills[id];
    }
    setSkills(skills) {
        this.skills = skills;
        this.skillsChanged.next(this.skills);
    }
    updateSkill(id, skill) {
        this.skills[id] = skill;
        this.skillsChanged.next(this.skills);
    }
    addSkill(skill) {
        this.skills.push(skill);
        this.skillsChanged.next(this.skills);
    }
    deleteSkill(id) {
        this.skills.splice(id, 1);
        this.skillsChanged.next(this.skills);
    }
};
SkillsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], SkillsService);



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill.service */ "./src/app/skills/skill.service.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");




let SkillsComponent = class SkillsComponent {
    constructor(skillSvc, dataSvc) {
        this.skillSvc = skillSvc;
        this.dataSvc = dataSvc;
        this.skills = [];
    }
    ngOnInit() {
        this.skills = this.skillSvc.getSkills();
        this.subscription = this.skillSvc.skillsChanged
            .subscribe((skills) => {
            this.skills = skills;
        });
        this.loadSkills();
    }
    onEditItem(id) {
        this.skillSvc.startedEditing.next(+id);
    }
    onSubmit() {
        this.dataSvc.uploadSkills(this.skills);
    }
    loadSkills() {
        this.dataSvc.downloadSkills();
    }
};
SkillsComponent.ctorParameters = () => [
    { type: _skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"] },
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] }
];
SkillsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/app/user/user-detail.service.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-detail.service.ts ***!
  \*********************************************/
/*! exports provided: UserDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsService", function() { return UserDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details.model */ "./src/app/user/user-details.model.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UserDetailsService = class UserDetailsService {
    constructor(dataSvc) {
        this.dataSvc = dataSvc;
        this.usersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.users_list = [];
    }
    getUserList() {
        return this.users_list.slice();
    }
    fetchUserList() {
        return this.dataSvc.fetchAllUserDetails()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            let users_list = [];
            for (var k in response) {
                users_list.push(new _user_details_model__WEBPACK_IMPORTED_MODULE_3__["UserDetails"](response[k]['user_name'], response[k]['user_type']));
            }
            return users_list;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(users_list => {
            this.users_list = users_list;
        }));
    }
    getUserDetails(id) {
        return this.users_list[id];
    }
    addUser(userDtl) {
        this.users_list.push(userDtl);
        this.usersChanged.next(this.users_list.slice());
        this.dataSvc.storeUser(userDtl.user_name, userDtl.user_type);
    }
    updateUser(id, userDtl) {
        this.users_list[id] = userDtl;
        this.usersChanged.next(this.users_list.slice());
        this.dataSvc.storeUser(userDtl.user_name, userDtl.user_type);
    }
};
UserDetailsService.ctorParameters = () => [
    { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] }
];
UserDetailsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], UserDetailsService);



/***/ }),

/***/ "./src/app/user/user-details.model.ts":
/*!********************************************!*\
  !*** ./src/app/user/user-details.model.ts ***!
  \********************************************/
/*! exports provided: UserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserDetails {
    constructor(user_name, user_type) {
        this.user_name = user_name;
        this.user_type = user_type;
    }
}


/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-detail.service */ "./src/app/user/user-detail.service.ts");
/* harmony import */ var _user_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-details.model */ "./src/app/user/user-details.model.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_shared_application_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/application-event.service */ "./src/app/shared/application-event.service.ts");







let UserEditComponent = class UserEditComponent {
    constructor(route, userSvc, authSvc, evtSvc) {
        this.route = route;
        this.userSvc = userSvc;
        this.authSvc = authSvc;
        this.evtSvc = evtSvc;
        this.userDtl = new _user_details_model__WEBPACK_IMPORTED_MODULE_4__["UserDetails"]('', '');
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });
    }
    initForm() {
        if (this.editMode) {
            this.userDtl = this.userSvc.getUserDetails(this.id);
        }
    }
    onSubmit(userForm) {
        const userDtl = new _user_details_model__WEBPACK_IMPORTED_MODULE_4__["UserDetails"](userForm.value.nm_email, userForm.value.nm_user_type);
        console.log("User Edit : userDtl : " + userDtl);
        if (this.editMode) {
            this.userSvc.updateUser(this.id, userDtl);
        }
        else {
            this.authSubscription1 = this.authSvc.signup(userDtl.user_name, userForm.value.nm_password, false).subscribe((response) => {
                console.log("Add User Response " + response);
                this.userSvc.addUser(userDtl);
            }, (err) => {
                //this.error = err
                this.evtSvc.generateEvent(new src_app_shared_application_event_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationEvent"]("ForAlertComponent", err));
            });
        }
    }
    ngOnDestroy() {
        if (this.authSubscription1)
            this.authSubscription1.unsubscribe();
        if (this.authSubscription2)
            this.authSubscription2.unsubscribe();
    }
};
UserEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _user_detail_service__WEBPACK_IMPORTED_MODULE_3__["UserDetailsService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_shared_application_event_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationEventService"] }
];
UserEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-edit/user-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-edit.component.css */ "./src/app/user/user-edit/user-edit.component.css")).default]
    })
], UserEditComponent);



/***/ }),

/***/ "./src/app/user/user-start/user-start.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/user-start/user-start.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1zdGFydC91c2VyLXN0YXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user/user-start/user-start.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/user-start/user-start.component.ts ***!
  \*********************************************************/
/*! exports provided: UserStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStartComponent", function() { return UserStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UserStartComponent = class UserStartComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserStartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-start',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-start/user-start.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-start.component.css */ "./src/app/user/user-start/user-start.component.css")).default]
    })
], UserStartComponent);



/***/ }),

/***/ "./src/app/user/users-resolver.service.ts":
/*!************************************************!*\
  !*** ./src/app/user/users-resolver.service.ts ***!
  \************************************************/
/*! exports provided: UsersResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersResolverService", function() { return UsersResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-detail.service */ "./src/app/user/user-detail.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let UsersResolverService = class UsersResolverService {
    constructor(usrDtlSvc) {
        this.usrDtlSvc = usrDtlSvc;
    }
    resolve(route, state) {
        const users = this.usrDtlSvc.getUserList();
        if (users.length === 0) {
            return this.usrDtlSvc.fetchUserList();
        }
        else {
            return users;
        }
    }
};
UsersResolverService.ctorParameters = () => [
    { type: _user_detail_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"] }
];
UsersResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], UsersResolverService);



/***/ }),

/***/ "./src/app/user/users/users.component.css":
/*!************************************************!*\
  !*** ./src/app/user/users/users.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-break{\r\n    overflow-wrap: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYnJlYWt7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/user/users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-detail.service */ "./src/app/user/user-detail.service.ts");



let UsersComponent = class UsersComponent {
    constructor(usrDtl) {
        this.usrDtl = usrDtl;
        this.userDetails = [];
        this.filterString = '';
    }
    ngOnInit() {
        this.usrDtl.fetchUserList().subscribe((usrDetails) => { this.userDetails = usrDetails; });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
UsersComponent.ctorParameters = () => [
    { type: _user_detail_service__WEBPACK_IMPORTED_MODULE_2__["UserDetailsService"] }
];
UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/users/users.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.component.css */ "./src/app/user/users/users.component.css")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    signupUrl: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
    updatePasswordUrl: "https://identitytoolkit.googleapis.com/v1/accounts:update?key=",
    loginUrl: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
    userDataUrl: "https://ng-course-recipe-book-3c101.firebaseio.com/users",
    skillsDataUrl: "https://ng-course-recipe-book-3c101.firebaseio.com/skills",
    locationsDataUrl: "https://ng-course-recipe-book-3c101.firebaseio.com/locations",
    requirementsDataUrl: "https://ng-course-recipe-book-3c101.firebaseio.com/requirements",
    apiKey: "AIzaSyD_pxwEL_BK3GBldh4hC4gNQT5Ugf-LLJM"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Workspaces\Angular\Angular_Common_Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map