function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-md-6 col-md-offset-3\">\r\n    <div *ngIf=\"isLoading\" align=\"center\">\r\n      <app-loading-spinner></app-loading-spinner>\r\n    </div>\r\n\r\n    <!-- <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n      <p>{{ error }}</p>\r\n    </div> -->\r\n\r\n    <form #authForm=\"ngForm\" (ngSubmit)=\"onSubmit(authForm)\" *ngIf=\"!isLoading\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">E-Mail</label>\r\n        <input type=\"email\" id=\"email\" class=\"form-control\" ngModel required email name=\"nm_email\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" id=\"password\" class=\"form-control\" ngModel required minlength=\"6\" name=\"nm_password\" />\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"authForm.invalid\">\r\n          {{ isLoginMode ? 'Login' : 'Sign Up' }}</button> |\r\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"onSwitchMode()\">Switch to\r\n          {{ isLoginMode ? ' Sign Up' : 'Login' }}</button>\r\n      </div>\r\n    </form>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <div class=\"btm\">\n        <div class=\"pull-left\" *ngIf=\"(isPanelistAuthenticated || isAdminAuthenticated)\">\n            <strong class=\"list-group-item-heading\">User: {{ user.email }}.<br /> Session expires in :\n                {{ sessionTimerAsString }}</strong>\n        </div>\n        <span class=\"pull-right\">\n            <strong class=\"list-group-item-heading\">Utility be Abhaykumar Lodha&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <br /> (+91) 8600 25 9997.</strong>\n        </span>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-alert></app-alert>\r\n<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a [routerLink]=\"['']\" href=\"#\" class=\"navbar-brand\">Profile Managment </a>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li [routerLinkActive]=\"['active']\">\r\n                    <a [routerLink]=\"['auth']\"\r\n                        *ngIf=\"!(isPanelistAuthenticated || isAdminAuthenticated)\">Authenticate</a>\r\n                </li>\r\n\r\n                <li class=\"dropdown\" appDropDown *ngIf=\"isAdminAuthenticated\">\r\n                    <a style=\"cursor:pointer;\" class=\"dropdown-toggle\" role=\"button\">Master<span\r\n                            class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['users']\">Users</a></li>\r\n                        <li><a [routerLink]=\"['skills']\">Skillsets</a></li>\r\n                        <li><a [routerLink]=\"['locations']\">Locations</a></li>\r\n                        <li><a [routerLink]=\"['requirements']\">Requirements</a></li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <li [routerLinkActive]=\"['active']\" *ngIf=\"(isPanelistAuthenticated || isAdminAuthenticated)\">\r\n                    <a [routerLink]=\"['profiles']\">Create a Profile</a>\r\n                </li>\r\n\r\n                <li class=\"dropdown\" appDropDown *ngIf=\"isAdminAuthenticated\">\r\n                    <a style=\"cursor:pointer;\" class=\"dropdown-toggle\" role=\"button\">Reports<span\r\n                            class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a [routerLink]=\"['users']\">Daywise evaluation details</a></li>\r\n                        <li><a style=\"cursor:pointer;\">All profiles</a></li>\r\n                    </ul>\r\n                </li>\r\n\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li [routerLinkActive]=\"['active']\" *ngIf=\"(isPanelistAuthenticated || isAdminAuthenticated)\">\r\n                    <a [routerLink]=\"['']\" (click)=\"onLogout()\">Logout</a>\r\n                </li>\r\n                <!-- <li class=\"dropdown\" appDropDown *ngIf=\"(isPanelistAuthenticated || isAdminAuthenticated)\">\r\n                    <a style=\"cursor:pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage<span\r\n                            class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a style=\"cursor:pointer;\">Save Data</a></li>\r\n                        <li><a style=\"cursor:pointer;\">Fetch Data</a></li>\r\n                    </ul>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/location-edit/location-edit.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/location-edit/location-edit.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLocationsLocationEditLocationEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"col-sm-5 form-group\">\n            <label for=\"name\">Name of Location</label>\n            <input\n              type=\"text\"\n              id=\"location_name\"\n              class=\"form-control\"\n              name=\"location_name\"\n              ngModel\n              required\n            >\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button\n              class=\"btn btn-success\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button> &nbsp;\n            <button\n              class=\"btn btn-danger\"\n              type=\"button\"\n              (click)=\"onDelete()\"\n              *ngIf=\"editMode\">Delete</button> &nbsp;\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLocationsLocationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xs-10\">\n        <app-location-edit></app-location-edit>\n        <hr>\n        <!-- <button class=\"btn btn-success\" type=\"button\" (click)=\"onLoadLocations()\">Load existing locations</button> | -->\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"onSubmit()\">Submit changes</button>\n        <hr>\n        <ul class=\"list-group\">\n            <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let location of locations; let i = index\"\n                (click)=\"onEditItem(i)\">\n                {{ location.name }}\n            </a>\n        </ul>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profile-edit/profile-edit.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profile-edit/profile-edit.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfilesProfileEditProfileEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>profile-edit works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profiles.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profiles.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfilesProfilesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-5\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Profile</button>\n            </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <label for=\"\">Filter by (Name/Number) : </label>\n                <input type=\"text\" [(ngModel)]=\"filterString\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <a style=\"cursor: pointer;\" [routerLink]=\"[index]\" routerLinkActive=\"active\"\n                    class=\"list-group-item clearfix\"\n                    *ngFor=\"let profile of profiles | filterListValues:'Profile':filterString; let i = index\">\n\n                    <div class=\"pull-left\">\n                        <h4 class=\"list-group-item-heading\">{{ profile.name }}</h4>\n                        <p class=\"list-group-item-text\">{{ profile.contactNumber }}</p>\n                        <p class=\"list-group-item-text\">{{ profile.matchingRequirement.skill.asString }}</p>\n                        <p class=\"list-group-item-text\">{{ profile.matchingRequirement.location.name }}</p>\n                    </div>\n                    <!-- <span class=\"pull-right\">\n                        <img [src]=\"recipe.imagePath\" alt=\"{{ recipe.name }}\" class=\"img-responsive\"\n                            style=\"max-height: 50px;\">\n                    </span> -->\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-7\">\n        <router-outlet></router-outlet>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirement-edit/requirement-edit.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirement-edit/requirement-edit.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRequirementsRequirementEditRequirementEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n            <div class=\"row\">\n\n                <div class=\"col-sm-5 form-group\">\n                    <label for=\"skill\">Required Skill</label>\n                    <select id=\"skill\" class=\"form-control\" [ngModel]=\"selectedRequirement.skill.asString\" required\n                        name=\"nm_skill\">\n                        <option [value]=\"skill.asString\" *ngFor=\"let skill of skills\">{{skill.asString}}</option>\n                    </select>\n                </div>\n\n                <div class=\"col-sm-5 form-group\">\n                    <label for=\"location\">Required Location</label>\n                    <select id=\"location\" class=\"form-control\" [ngModel]=\"selectedRequirement.location.name\" required\n                        name=\"nm_location\">\n                        <option [value]=\"location.name\" *ngFor=\"let location of locations\">{{location.name}}</option>\n                    </select>\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <button class=\"btn btn-success\" type=\"submit\"\n                        [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button> &nbsp;\n                    <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n                    &nbsp;\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirements.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirements.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRequirementsRequirementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xs-10\">\n        <app-requirement-edit></app-requirement-edit>\n        <hr>\n        <!-- <button class=\"btn btn-success\" type=\"button\" (click)=\"onLoadSkills()\">Load existing requirements</button> | -->\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"onSubmit()\">Submit Changes</button>\n        <hr>\n        <ul class=\"list-group\">\n            <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let requirement of requirements | filterRequirements:'Select skill'; let i = index\"\n                (click)=\"onEditItem(i)\">\n                {{ requirement.skill.asString }} | {{ requirement.location.name }}\n            </a>\n        </ul>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedAlertAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"backdrop\" (click)=\"onClose()\" *ngIf=\"!!message\">\r\n</div>\r\n<div class=\"alert-box\" *ngIf=\"!!message\">\r\n    <p>{{ message }}</p>\r\n    <div class=\"alert-box-actions\">\r\n        <button class=\"btn btn-primary\" (click)=\"onClose()\">Close</button>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skill-edit/skill-edit.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skill-edit/skill-edit.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSkillsSkillEditSkillEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"col-sm-5 form-group\">\n            <label for=\"name\">Technology</label>\n            <input\n              type=\"text\"\n              id=\"technology\"\n              class=\"form-control\"\n              name=\"technology\"\n              ngModel\n              required\n            >\n          </div>\n          <div class=\"col-sm-2 form-group\">\n            <label for=\"amount\">Experience</label>\n            <input\n              type=\"text\"\n              id=\"experience\"\n              class=\"form-control\"\n              name=\"experience\"\n              ngModel\n              required\n            >\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button\n              class=\"btn btn-success\"\n              type=\"submit\"\n              [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button> &nbsp;\n            <button\n              class=\"btn btn-danger\"\n              type=\"button\"\n              (click)=\"onDelete()\"\n              *ngIf=\"editMode\">Delete</button> &nbsp;\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSkillsSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xs-10\">\n        <app-skill-edit></app-skill-edit>\n        <hr>\n        <!-- <button class=\"btn btn-success\" type=\"button\" (click)=\"onLoadSkills()\">Load existing skills</button> | -->\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"onSubmit()\">Submit Changes</button>\n        <hr>\n        <ul class=\"list-group\">\n            <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let skill of skills; let i = index\"\n                (click)=\"onEditItem(i)\">\n                {{ skill.asString }}\n            </a>\n        </ul>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-edit/user-edit.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-edit/user-edit.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserEditUserEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div>\n        <div *ngIf=\"isLoading\" align=\"center\">\n            <app-loading-spinner></app-loading-spinner>\n        </div>\n\n        <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\" *ngIf=\"!isLoading\">\n            <div class=\"form-group\">\n                <label for=\"email\">E-Mail</label>\n                <input type=\"email\" id=\"email\" class=\"form-control\" [ngModel]=\"userDtl.user_name\"\n                required email\n                name=\"nm_email\"\n                [readonly]=\"editMode\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" id=\"password\" class=\"form-control\" ngModel required minlength=\"6\"\n                    name=\"nm_password\"\n                    [value]=\"editMode ? '123456' : '' \"\n                    [disabled]=\"editMode\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"status\">User Type</label>\n                <select id=\"status\" class=\"form-control\" [ngModel]=\"userDtl.user_type\" required\n                    name=\"nm_user_type\">\n                    <option value=\"Admin\">Admin</option>\n                    <option value=\"Panelist\">Panelist</option>\n                </select>\n            </div>\n            <div>\n                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"userForm.invalid\">\n                    {{ editMode ? 'Update User' :  'Create User'}}</button>\n            </div>\n        </form>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-start/user-start.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-start/user-start.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserStartUserStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Please select/add a user.</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/users/users.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/users/users.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-3\" align=\"right\">\n    <button class=\"btn btn-primary\" [routerLink]=\"['/','users','adduser']\">Add New User</button>\n    <hr>\n\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <label for=\"\">Filter by (Email) : </label>\n        <input type=\"text\" [(ngModel)]=\"filterString\">\n      </div>\n    </div>\n\n    <ul class=\"list-group\">\n      <a class=\"list-group-item text-break\" style=\"cursor: pointer\"\n        *ngFor=\"let usrDtl of userDetails | filterListValues:'UserDetail':filterString; let i = index\"\n        [routerLink]=\"['edit',i]\" align=\"right\">\n        {{ usrDtl.user_name }} ({{ usrDtl.user_type }})\n      </a>\n    </ul>\n  </div>\n  <div class=\"col-xs-12 col-md-8 col-lg-6\">\n    <router-outlet></router-outlet>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _user_user_start_user_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/user-start/user-start.component */
    "./src/app/user/user-start/user-start.component.ts");
    /* harmony import */


    var _user_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/users/users.component */
    "./src/app/user/users/users.component.ts");
    /* harmony import */


    var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user/user-edit/user-edit.component */
    "./src/app/user/user-edit/user-edit.component.ts");
    /* harmony import */


    var _user_users_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user/users-resolver.service */
    "./src/app/user/users-resolver.service.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/auth-admin.guard */
    "./src/app/auth/auth-admin.guard.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _locations_locations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./locations/locations.component */
    "./src/app/locations/locations.component.ts");
    /* harmony import */


    var _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./requirements/requirements.component */
    "./src/app/requirements/requirements.component.ts");
    /* harmony import */


    var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./profiles/profiles.component */
    "./src/app/profiles/profiles.component.ts");

    var routes = [{
      path: 'auth',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]
    }, {
      path: 'users',
      component: _user_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
      resolve: [_user_users_resolver_service__WEBPACK_IMPORTED_MODULE_7__["UsersResolverService"]],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AuthAdminGuard"]],
      children: [{
        path: '',
        component: _user_user_start_user_start_component__WEBPACK_IMPORTED_MODULE_4__["UserStartComponent"]
      }, {
        path: 'adduser',
        component: _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"]
      }, {
        path: 'edit/:id',
        component: _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"],
        resolve: [_user_users_resolver_service__WEBPACK_IMPORTED_MODULE_7__["UsersResolverService"]]
      }]
    }, {
      path: 'skills',
      component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AuthAdminGuard"]]
    }, {
      path: 'requirements',
      component: _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_12__["RequirementsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AuthAdminGuard"]]
    }, {
      path: 'locations',
      component: _locations_locations_component__WEBPACK_IMPORTED_MODULE_11__["LocationsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _auth_auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AuthAdminGuard"]]
    }, {
      path: 'profiles',
      component: _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_13__["ProfilesComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authSvc) {
        _classCallCheck(this, AppComponent);

        this.authSvc = authSvc;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authSvc.autoLogin();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/dropdown.directive */
    "./src/app/shared/dropdown.directive.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/loading-spinner/loading-spinner.component */
    "./src/app/shared/loading-spinner/loading-spinner.component.ts");
    /* harmony import */


    var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/alert/alert.component */
    "./src/app/shared/alert/alert.component.ts");
    /* harmony import */


    var _user_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user/users/users.component */
    "./src/app/user/users/users.component.ts");
    /* harmony import */


    var _user_user_start_user_start_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user/user-start/user-start.component */
    "./src/app/user/user-start/user-start.component.ts");
    /* harmony import */


    var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./user/user-edit/user-edit.component */
    "./src/app/user/user-edit/user-edit.component.ts");
    /* harmony import */


    var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./auth/auth-interceptor.service */
    "./src/app/auth/auth-interceptor.service.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _skills_skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./skills/skill-edit/skill-edit.component */
    "./src/app/skills/skill-edit/skill-edit.component.ts");
    /* harmony import */


    var _locations_locations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./locations/locations.component */
    "./src/app/locations/locations.component.ts");
    /* harmony import */


    var _locations_location_edit_location_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./locations/location-edit/location-edit.component */
    "./src/app/locations/location-edit/location-edit.component.ts");
    /* harmony import */


    var _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./requirements/requirements.component */
    "./src/app/requirements/requirements.component.ts");
    /* harmony import */


    var _requirements_requirement_edit_requirement_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./requirements/requirement-edit/requirement-edit.component */
    "./src/app/requirements/requirement-edit/requirement-edit.component.ts");
    /* harmony import */


    var _requirements_requirement_filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./requirements/requirement-filter.pipe */
    "./src/app/requirements/requirement-filter.pipe.ts");
    /* harmony import */


    var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./profiles/profiles.component */
    "./src/app/profiles/profiles.component.ts");
    /* harmony import */


    var _profiles_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./profiles/profile-edit/profile-edit.component */
    "./src/app/profiles/profile-edit/profile-edit.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _shared_filter_list_values_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./shared/filter-list-values.pipe */
    "./src/app/shared/filter-list-values.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["DropDownDirective"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__["LoadingSpinnerComponent"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"], _user_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"], _user_user_start_user_start_component__WEBPACK_IMPORTED_MODULE_13__["UserStartComponent"], _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__["UserEditComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_16__["SkillsComponent"], _skills_skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_17__["SkillEditComponent"], _locations_locations_component__WEBPACK_IMPORTED_MODULE_18__["LocationsComponent"], _locations_location_edit_location_edit_component__WEBPACK_IMPORTED_MODULE_19__["LocationEditComponent"], _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_20__["RequirementsComponent"], _requirements_requirement_edit_requirement_edit_component__WEBPACK_IMPORTED_MODULE_21__["RequirementEditComponent"], _requirements_requirement_filter_pipe__WEBPACK_IMPORTED_MODULE_22__["RequirementFilterPipe"], _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_23__["ProfilesComponent"], _profiles_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_24__["ProfileEditComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"], _shared_filter_list_values_pipe__WEBPACK_IMPORTED_MODULE_26__["FilterListValuesPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-admin.guard.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth-admin.guard.ts ***!
    \******************************************/

  /*! exports provided: AuthAdminGuard */

  /***/
  function srcAppAuthAuthAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthAdminGuard", function () {
      return AuthAdminGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");

    var AuthAdminGuard =
    /*#__PURE__*/
    function () {
      function AuthAdminGuard(authSvc, dataSvc) {
        _classCallCheck(this, AuthAdminGuard);

        this.authSvc = authSvc;
        this.dataSvc = dataSvc;
      }

      _createClass(AuthAdminGuard, [{
        key: "canActivate",
        value: function canActivate(route, router) {
          var _this = this;

          return this.authSvc.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), //Subscribe to take only one value and unsubscribe
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (user) {
            if (!!user) {
              console.log("AuthAdminGuard : " + _this.authSvc.isUserAdmin);
              return _this.dataSvc.isUserAnAdmin(user.email);
            } else {
              console.log("AuthAdminGuard : False");
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
            }
          }));
        }
      }]);

      return AuthAdminGuard;
    }();

    AuthAdminGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"]
      }];
    };

    AuthAdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthAdminGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth-interceptor.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/auth/auth-interceptor.service.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptorService */

  /***/
  function srcAppAuthAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthInterceptorService =
    /*#__PURE__*/
    function () {
      function AuthInterceptorService(authSvc) {
        _classCallCheck(this, AuthInterceptorService);

        this.authSvc = authSvc;
      }

      _createClass(AuthInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          return this.authSvc.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (user) {
            if (!user) return next.handle(req);
            var newReq = req.clone({
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('auth', user.Token)
            });
            return next.handle(newReq);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        }
      }]);

      return AuthInterceptorService;
    }();

    AuthInterceptorService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptorService);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");
    /* harmony import */


    var _shared_application_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/application-event.service */
    "./src/app/shared/application-event.service.ts");

    var AuthComponent =
    /*#__PURE__*/
    function () {
      function AuthComponent(authSvc, router, dataSvc, evtSvc) {
        _classCallCheck(this, AuthComponent);

        this.authSvc = authSvc;
        this.router = router;
        this.dataSvc = dataSvc;
        this.evtSvc = evtSvc;
        this.isLoginMode = true;
        this.isLoading = false;
      }

      _createClass(AuthComponent, [{
        key: "onSwitchMode",
        value: function onSwitchMode() {
          if (this.isLoginMode) {
            this.evtSvc.generateEvent(new _shared_application_event_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationEvent"]("ForAlertComponent", "Can't Signup. Please use Login mode or contact Administrator to get registered.")); //this.isLoginMode = !this.isLoginMode;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(authForm) {
          var _this2 = this;

          if (!this.isLoginMode) {
            return;
          }

          var email = authForm.value.nm_email;
          var password = authForm.value['nm_password'];

          if (authForm.valid) {
            this.isLoading = true;
          }

          var authObs;

          if (!this.isLoginMode && authForm.valid) {
            //Signup
            authObs = this.authSvc.signup(email, password, true);
          } else if (authForm.valid) {
            //Login
            authObs = this.authSvc.login(email, password);
          }

          authObs.subscribe(function (response) {
            _this2.isLoading = false;

            _this2.router.navigate(["/"]);

            _this2.dataSvc.isUserAnAdmin(email).subscribe(function (response) {
              _this2.authSvc.setIsAdmin(response);
            });
          }, function (errMsg) {
            _this2.evtSvc.generateEvent(new _shared_application_event_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationEvent"]("ForAlertComponent", errMsg));

            _this2.isLoading = false;
          });
          authForm.reset();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]
      }, {
        type: _shared_application_event_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationEventService"]
      }];
    };

    AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html"))["default"]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authSvc, router) {
        _classCallCheck(this, AuthGuard);

        this.authSvc = authSvc;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, router) {
          var _this3 = this;

          return this.authSvc.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), //Subscribe to take only one value and unsubscribe
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (!!user) return true;else {
              return _this3.router.createUrlTree(['/auth']); //false;
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.model */
    "./src/app/auth/user.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");

    ;

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router, dataSvc) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.dataSvc = dataSvc; //Same as subject, but can be used to get last emitted value without even subscribing.

        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.isUserAdmin = false;
        this.adminFlagchanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.token = null;
      } //Sign Up URL
      //Template : https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
      //Actual : https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_pxwEL_BK3GBldh4hC4gNQT5Ugf-LLJM
      //Sign In URL
      //Template : https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
      //Actual : https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_pxwEL_BK3GBldh4hC4gNQT5Ugf-LLJM


      _createClass(AuthService, [{
        key: "setIsAdmin",
        value: function setIsAdmin(isAdmin) {
          this.isUserAdmin = isAdmin;
          this.adminFlagchanged.next(this.isUserAdmin);
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.isUserAdmin;
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(email, password, updateSessionData) {
          var _this4 = this;

          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].updatePasswordUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiKey, {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this4.handleError(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resData) {
            if (updateSessionData) _this4.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          }));
        }
      }, {
        key: "signup",
        value: function signup(email, password, updateSessionData) {
          var _this5 = this;

          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].signupUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiKey, {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this5.handleError(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resData) {
            if (updateSessionData) _this5.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          }));
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this6 = this;

          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].loginUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiKey, {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this6.handleError(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resData) {
            _this6.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.user.next(null);
          this.router.navigate(['/auth']);
          localStorage.removeItem('userData');
          this.setIsAdmin(false);

          if (this.logoutTimer) {
            clearTimeout(this.logoutTimer);
          }

          this.logoutTimer = null;
        }
      }, {
        key: "autoLogout",
        value: function autoLogout(expirationDuration) {
          var _this7 = this;

          this.logoutTimer = setTimeout(function () {
            _this7.logout();
          }, expirationDuration);
        }
      }, {
        key: "handleAuthentication",
        value: function handleAuthentication(email, userId, token, expiresIn) {
          var expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
          var user = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](email, userId, token, expirationDate);
          this.token = token;
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
          this.autoLogout(expiresIn * 1000);
        }
      }, {
        key: "autoLogin",
        value: function autoLogin() {
          var _this8 = this;

          var userData = JSON.parse(localStorage.getItem('userData'));

          if (userData) {
            var savedUser = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

            if (savedUser.Token) {
              this.user.next(savedUser);
              var expiresIn = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
              this.autoLogout(expiresIn);
            }

            this.dataSvc.isUserAnAdmin(userData.email).subscribe(function (response) {
              _this8.setIsAdmin(response);
            });
          }
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMsg = 'An unknown error occurred.';

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
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_8__["DataStorageService"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/user.model.ts":
  /*!************************************!*\
    !*** ./src/app/auth/user.model.ts ***!
    \************************************/

  /*! exports provided: User */

  /***/
  function srcAppAuthUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User =
    /*#__PURE__*/
    function () {
      function User(email, id, _token, _tokenExpirationDate) {
        _classCallCheck(this, User);

        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
      }

      _createClass(User, [{
        key: "Token",
        get: function get() {
          if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
          }

          return this._token;
        }
      }, {
        key: "expirationDate",
        get: function get() {
          return this._tokenExpirationDate;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btm {\r\n    position : fixed;\r\n    bottom : 0;\r\n    left : 0;\r\n    width : 100vw;\r\n    background : rgba(149, 179, 212, 0.75);\r\n}\r\n.t {\r\n    height : 100vh;\r\n    z-index : 50;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixRQUFRO0lBQ1IsYUFBYTtJQUNiLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRtIHtcclxuICAgIHBvc2l0aW9uIDogZml4ZWQ7XHJcbiAgICBib3R0b20gOiAwO1xyXG4gICAgbGVmdCA6IDA7XHJcbiAgICB3aWR0aCA6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZCA6IHJnYmEoMTQ5LCAxNzksIDIxMiwgMC43NSk7XHJcbn1cclxuLnQge1xyXG4gICAgaGVpZ2h0IDogMTAwdmg7XHJcbiAgICB6LWluZGV4IDogNTA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(authSvc) {
        _classCallCheck(this, FooterComponent);

        this.authSvc = authSvc;
        this.isAdminAuthenticated = false;
        this.isPanelistAuthenticated = false;
        this.user = null;
        this.sessionTimer = 0;
        this.sessionTimerAsString = "00:00:00";
        this.timer = null;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.subscription = this.authSvc.user.subscribe(function (user) {
            _this9.user = user;
            _this9.isPanelistAuthenticated = !!user;

            if (!!user) {
              var eTime = user.expirationDate.getTime();
              var cTime = new Date().getTime();
              _this9.sessionTimer = +((eTime - cTime) / 1000).toFixed();
              _this9.timer = setInterval(function () {
                return _this9.handleTime();
              }, 1000);
            }
          });
          this.authSvc.adminFlagchanged.subscribe(function (isAdmin) {
            _this9.isAdminAuthenticated = isAdmin;
          });
        }
      }, {
        key: "handleTime",
        value: function handleTime() {
          if (this.timer && this.sessionTimer < 1) {
            clearInterval(this.timer);
            return;
          }

          this.sessionTimer = this.sessionTimer - 1;
          this.sessionTimerAsString = this.formatTime(this.sessionTimer);
        }
      }, {
        key: "formatTime",
        value: function formatTime(sessionTimer) {
          var ss = this.sessionTimer % 60;
          var mm = (this.sessionTimer - ss) % 3600 / 60;
          var hh = (this.sessionTimer - mm * 60 - ss) / 3600;
          return (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authSvc.logout();
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authSvc) {
        _classCallCheck(this, HeaderComponent);

        this.authSvc = authSvc;
        this.isAdminAuthenticated = false;
        this.isPanelistAuthenticated = false;
        this.user = null;
        this.sessionTimer = 0;
        this.sessionTimerAsString = "00:00:00";
        this.timer = null;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.subscription = this.authSvc.user.subscribe(function (user) {
            _this10.user = user;
            _this10.isPanelistAuthenticated = !!user;

            if (!!user) {
              var eTime = user.expirationDate.getTime();
              var cTime = new Date().getTime();
              _this10.sessionTimer = +((eTime - cTime) / 1000).toFixed();
              _this10.timer = setInterval(function () {
                return _this10.handleTime();
              }, 1000);
            }
          });
          this.authSvc.adminFlagchanged.subscribe(function (isAdmin) {
            _this10.isAdminAuthenticated = isAdmin;
          });
        }
      }, {
        key: "handleTime",
        value: function handleTime() {
          if (this.timer && this.sessionTimer < 1) {
            clearInterval(this.timer);
            return;
          }

          this.sessionTimer = this.sessionTimer - 1;
          this.sessionTimerAsString = this.formatTime(this.sessionTimer);
        }
      }, {
        key: "formatTime",
        value: function formatTime(sessionTimer) {
          var ss = this.sessionTimer % 60;
          var mm = (this.sessionTimer - ss) % 3600 / 60;
          var hh = (this.sessionTimer - mm * 60 - ss) / 3600;
          return (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authSvc.logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/locations/location-edit/location-edit.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/locations/location-edit/location-edit.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLocationsLocationEditLocationEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9ucy9sb2NhdGlvbi1lZGl0L2xvY2F0aW9uLWVkaXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/locations/location-edit/location-edit.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/locations/location-edit/location-edit.component.ts ***!
    \********************************************************************/

  /*! exports provided: LocationEditComponent */

  /***/
  function srcAppLocationsLocationEditLocationEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationEditComponent", function () {
      return LocationEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../location.service */
    "./src/app/locations/location.service.ts");

    var LocationEditComponent =
    /*#__PURE__*/
    function () {
      function LocationEditComponent(locationSvc) {
        _classCallCheck(this, LocationEditComponent);

        this.locationSvc = locationSvc;
        this.editMode = false;
      }

      _createClass(LocationEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.subscription = this.locationSvc.startedEditing.subscribe(function (id) {
            _this11.editMode = true;
            _this11.editedItemIndex = id;
            _this11.editedLocation = _this11.locationSvc.getLocation(id);

            _this11.locationForm.setValue({
              location_name: _this11.editedLocation.name
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var value = form.value;
          var newLocation = new _location_service__WEBPACK_IMPORTED_MODULE_2__["Location"](value.location_name);

          if (this.editMode) {
            this.locationSvc.updateLocation(this.editedItemIndex, newLocation);
          } else {
            this.locationSvc.addLocation(newLocation);
          }

          this.editMode = false;
          form.reset();
        }
      }, {
        key: "onClear",
        value: function onClear() {
          this.locationForm.reset();
          this.editMode = false;
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.locationSvc.deleteLocation(this.editedItemIndex);
          this.onClear();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return LocationEditComponent;
    }();

    LocationEditComponent.ctorParameters = function () {
      return [{
        type: _location_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', {
      "static": false
    })], LocationEditComponent.prototype, "locationForm", void 0);
    LocationEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-location-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./location-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/location-edit/location-edit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./location-edit.component.css */
      "./src/app/locations/location-edit/location-edit.component.css"))["default"]]
    })], LocationEditComponent);
    /***/
  },

  /***/
  "./src/app/locations/location.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/locations/location.service.ts ***!
    \***********************************************/

  /*! exports provided: Location, LocationsService */

  /***/
  function srcAppLocationsLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Location", function () {
      return Location;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationsService", function () {
      return LocationsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var Location = function Location(name) {
      _classCallCheck(this, Location);

      this.name = name;
    };

    var LocationsService =
    /*#__PURE__*/
    function () {
      function LocationsService() {
        _classCallCheck(this, LocationsService);

        this.locations = [];
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.locationsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(LocationsService, [{
        key: "getLocations",
        value: function getLocations() {
          return this.locations.slice();
        }
      }, {
        key: "getLocation",
        value: function getLocation(id) {
          return this.locations[id];
        }
      }, {
        key: "setLocations",
        value: function setLocations(locations) {
          this.locations = locations;
          this.locationsChanged.next(this.locations);
        }
      }, {
        key: "updateLocation",
        value: function updateLocation(id, location) {
          this.locations[id] = location;
          this.locationsChanged.next(this.locations);
        }
      }, {
        key: "addLocation",
        value: function addLocation(location) {
          this.locations.push(location);
          this.locationsChanged.next(this.locations);
        }
      }, {
        key: "deleteLocation",
        value: function deleteLocation(id) {
          this.locations.splice(id, 1);
          this.locationsChanged.next(this.locations);
        }
      }]);

      return LocationsService;
    }();

    LocationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LocationsService);
    /***/
  },

  /***/
  "./src/app/locations/locations.component.css":
  /*!***************************************************!*\
    !*** ./src/app/locations/locations.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLocationsLocationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9ucy9sb2NhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/locations/locations.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/locations/locations.component.ts ***!
    \**************************************************/

  /*! exports provided: LocationsComponent */

  /***/
  function srcAppLocationsLocationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationsComponent", function () {
      return LocationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./location.service */
    "./src/app/locations/location.service.ts");
    /* harmony import */


    var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");

    var LocationsComponent =
    /*#__PURE__*/
    function () {
      function LocationsComponent(locationSvc, dataSvc) {
        _classCallCheck(this, LocationsComponent);

        this.locationSvc = locationSvc;
        this.dataSvc = dataSvc;
        this.locations = [];
      }

      _createClass(LocationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.locations = this.locationSvc.getLocations();
          this.subscription = this.locationSvc.locationsChanged.subscribe(function (locations) {
            _this12.locations = locations;
          });
          this.loadLocations();
        }
      }, {
        key: "onEditItem",
        value: function onEditItem(id) {
          this.locationSvc.startedEditing.next(+id);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.dataSvc.uploadLocations(this.locations);
        }
      }, {
        key: "loadLocations",
        value: function loadLocations() {
          this.dataSvc.downloadLocations();
        }
      }]);

      return LocationsComponent;
    }();

    LocationsComponent.ctorParameters = function () {
      return [{
        type: _location_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"]
      }, {
        type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]
      }];
    };

    LocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-locations',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./locations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/locations/locations.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./locations.component.css */
      "./src/app/locations/locations.component.css"))["default"]]
    })], LocationsComponent);
    /***/
  },

  /***/
  "./src/app/profiles/profile-edit/profile-edit.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/profiles/profile-edit/profile-edit.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfilesProfileEditProfileEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profiles/profile-edit/profile-edit.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/profiles/profile-edit/profile-edit.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProfileEditComponent */

  /***/
  function srcAppProfilesProfileEditProfileEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function () {
      return ProfileEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileEditComponent =
    /*#__PURE__*/
    function () {
      function ProfileEditComponent() {
        _classCallCheck(this, ProfileEditComponent);
      }

      _createClass(ProfileEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileEditComponent;
    }();

    ProfileEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profile-edit/profile-edit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-edit.component.css */
      "./src/app/profiles/profile-edit/profile-edit.component.css"))["default"]]
    })], ProfileEditComponent);
    /***/
  },

  /***/
  "./src/app/profiles/profiles.component.css":
  /*!*************************************************!*\
    !*** ./src/app/profiles/profiles.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfilesProfilesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3Byb2ZpbGVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/profiles/profiles.component.ts":
  /*!************************************************!*\
    !*** ./src/app/profiles/profiles.component.ts ***!
    \************************************************/

  /*! exports provided: ProfilesComponent */

  /***/
  function srcAppProfilesProfilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function () {
      return ProfilesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profiles.service */
    "./src/app/profiles/profiles.service.ts");
    /* harmony import */


    var _shared_application_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/application-event.service */
    "./src/app/shared/application-event.service.ts");

    var ProfilesComponent =
    /*#__PURE__*/
    function () {
      function ProfilesComponent(profileSvc, evtSvc) {
        _classCallCheck(this, ProfilesComponent);

        this.profileSvc = profileSvc;
        this.evtSvc = evtSvc;
        this.profiles = [];
        this.filterString = '';
      }

      _createClass(ProfilesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.profiles = this.profileSvc.profiles;
          this.evtSvc.generateEvent(new _shared_application_event_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationEvent"]("ForAlertComponent", "Yet to be implemented."));
        }
      }]);

      return ProfilesComponent;
    }();

    ProfilesComponent.ctorParameters = function () {
      return [{
        type: _profiles_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
      }, {
        type: _shared_application_event_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationEventService"]
      }];
    };

    ProfilesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profiles',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profiles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profiles/profiles.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profiles.component.css */
      "./src/app/profiles/profiles.component.css"))["default"]]
    })], ProfilesComponent);
    /***/
  },

  /***/
  "./src/app/profiles/profiles.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/profiles/profiles.service.ts ***!
    \**********************************************/

  /*! exports provided: Profile, ProfileService */

  /***/
  function srcAppProfilesProfilesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Profile", function () {
      return Profile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _requirements_requirements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../requirements/requirements.service */
    "./src/app/requirements/requirements.service.ts");
    /* harmony import */


    var _skills_skill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../skills/skill.service */
    "./src/app/skills/skill.service.ts");
    /* harmony import */


    var _locations_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../locations/location.service */
    "./src/app/locations/location.service.ts");

    var Profile = function Profile(name, contactNumber, matchingRequirement, assignedTo, selected, comments) {
      _classCallCheck(this, Profile);

      this.name = name;
      this.contactNumber = contactNumber;
      this.matchingRequirement = matchingRequirement;
      this.assignedTo = assignedTo;
      this.selected = selected;
      this.comments = comments;
    };

    var ProfileService = function ProfileService() {
      _classCallCheck(this, ProfileService);

      this.profiles = [new Profile("Sanket", "992323", new _requirements_requirements_service__WEBPACK_IMPORTED_MODULE_2__["Requirement"](new _skills_skill_service__WEBPACK_IMPORTED_MODULE_3__["Skill"]("Pega | 3 Years"), new _locations_location_service__WEBPACK_IMPORTED_MODULE_4__["Location"]("Chennai")), "a@b.com", "N/A", "N/A"), new Profile("Aniket", "98765", new _requirements_requirements_service__WEBPACK_IMPORTED_MODULE_2__["Requirement"](new _skills_skill_service__WEBPACK_IMPORTED_MODULE_3__["Skill"]("Core Java, Spring, Hibernate | 5 years+"), new _locations_location_service__WEBPACK_IMPORTED_MODULE_4__["Location"]("Mumbai")), "b@c.com", "N/A", "N/A")];
    };

    ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProfileService);
    /***/
  },

  /***/
  "./src/app/requirements/requirement-edit/requirement-edit.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/requirements/requirement-edit/requirement-edit.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRequirementsRequirementEditRequirementEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVpcmVtZW50cy9yZXF1aXJlbWVudC1lZGl0L3JlcXVpcmVtZW50LWVkaXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/requirements/requirement-edit/requirement-edit.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/requirements/requirement-edit/requirement-edit.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: RequirementEditComponent */

  /***/
  function srcAppRequirementsRequirementEditRequirementEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequirementEditComponent", function () {
      return RequirementEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _requirements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../requirements.service */
    "./src/app/requirements/requirements.service.ts");
    /* harmony import */


    var src_app_skills_skill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/skills/skill.service */
    "./src/app/skills/skill.service.ts");
    /* harmony import */


    var src_app_locations_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/locations/location.service */
    "./src/app/locations/location.service.ts");
    /* harmony import */


    var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");

    var RequirementEditComponent =
    /*#__PURE__*/
    function () {
      function RequirementEditComponent(locationSvc, skillSvc, requirementSvc, dataSvc) {
        _classCallCheck(this, RequirementEditComponent);

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

      _createClass(RequirementEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.loadSkills();
          this.loadLocations(); //this.loadRequirements();

          this.subscription = this.requirementSvc.startedEditing.subscribe(function (id) {
            _this13.editedItemIndex = +id;
            _this13.selectedRequirement = _this13.requirementSvc.getRequirement(id);
            _this13.editMode = true;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var value = form.value;
          var newRequirement = new _requirements_service__WEBPACK_IMPORTED_MODULE_2__["Requirement"](new src_app_skills_skill_service__WEBPACK_IMPORTED_MODULE_3__["Skill"](value.nm_skill), new src_app_locations_location_service__WEBPACK_IMPORTED_MODULE_4__["Location"](value.nm_location));

          if (this.editMode) {
            this.requirementSvc.updateRequirement(this.editedItemIndex, newRequirement);
          } else {
            this.requirementSvc.addRequirement(newRequirement);
          }

          this.editMode = false;
          form.reset();
        }
      }, {
        key: "loadSkills",
        value: function loadSkills() {
          var _this14 = this;

          this.dataSvc.downloadSkills();
          this.skills = this.skillSvc.getSkills(); //this.skills.push(this.selectedRequirement.skill);

          this.subscriptionSkill = this.skillSvc.skillsChanged.subscribe(function (skills) {
            _this14.skills = skills; //this.skills.push(this.selectedRequirement.skill);
          });
        }
      }, {
        key: "loadLocations",
        value: function loadLocations() {
          var _this15 = this;

          this.dataSvc.downloadLocations();
          this.locations = this.locationSvc.getLocations(); //this.locations.push(this.selectedRequirement.location);

          this.subscriptionLocation = this.locationSvc.locationsChanged.subscribe(function (locations) {
            _this15.locations = locations; //this.locations.push(this.selectedRequirement.location);
          });
        } // loadRequirements() {
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

      }, {
        key: "onClear",
        value: function onClear() {
          this.requirementForm.reset();
          this.editMode = false;
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.requirementSvc.deleteRequirement(this.editedItemIndex);
          this.onClear();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscriptionSkill) this.subscriptionSkill.unsubscribe();
          if (this.subscriptionLocation) this.subscriptionLocation.unsubscribe(); // if (this.subscriptionRequirement)
          //   this.subscriptionRequirement.unsubscribe();

          if (this.subscription) this.subscription.unsubscribe();
        }
      }]);

      return RequirementEditComponent;
    }();

    RequirementEditComponent.ctorParameters = function () {
      return [{
        type: src_app_locations_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationsService"]
      }, {
        type: src_app_skills_skill_service__WEBPACK_IMPORTED_MODULE_3__["SkillsService"]
      }, {
        type: _requirements_service__WEBPACK_IMPORTED_MODULE_2__["RequirementsService"]
      }, {
        type: src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', {
      "static": false
    })], RequirementEditComponent.prototype, "requirementForm", void 0);
    RequirementEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-requirement-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./requirement-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirement-edit/requirement-edit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./requirement-edit.component.css */
      "./src/app/requirements/requirement-edit/requirement-edit.component.css"))["default"]]
    })], RequirementEditComponent);
    /***/
  },

  /***/
  "./src/app/requirements/requirement-filter.pipe.ts":
  /*!*********************************************************!*\
    !*** ./src/app/requirements/requirement-filter.pipe.ts ***!
    \*********************************************************/

  /*! exports provided: RequirementFilterPipe */

  /***/
  function srcAppRequirementsRequirementFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequirementFilterPipe", function () {
      return RequirementFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RequirementFilterPipe =
    /*#__PURE__*/
    function () {
      function RequirementFilterPipe() {
        _classCallCheck(this, RequirementFilterPipe);
      }

      _createClass(RequirementFilterPipe, [{
        key: "transform",
        value: function transform(value, pattarn) {
          if (value.length === 0) {
            return value;
          }

          return value.filter(function (s) {
            return s.skill.asString.search(pattarn) != 0;
          });
        }
      }]);

      return RequirementFilterPipe;
    }();

    RequirementFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filterRequirements',
      pure: false
    })], RequirementFilterPipe);
    /***/
  },

  /***/
  "./src/app/requirements/requirements.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/requirements/requirements.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRequirementsRequirementsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVpcmVtZW50cy9yZXF1aXJlbWVudHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/requirements/requirements.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/requirements/requirements.component.ts ***!
    \********************************************************/

  /*! exports provided: RequirementsComponent */

  /***/
  function srcAppRequirementsRequirementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequirementsComponent", function () {
      return RequirementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _requirements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./requirements.service */
    "./src/app/requirements/requirements.service.ts");
    /* harmony import */


    var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");

    var RequirementsComponent =
    /*#__PURE__*/
    function () {
      function RequirementsComponent(requirementSvc, dataSvc) {
        _classCallCheck(this, RequirementsComponent);

        this.requirementSvc = requirementSvc;
        this.dataSvc = dataSvc;
        this.requirements = [];
      }

      _createClass(RequirementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.requirements = this.requirementSvc.getRequirements();
          this.subscription = this.requirementSvc.requirementsChanged.subscribe(function (requirements) {
            _this16.requirements = requirements;
          });
          this.loadRequirements();
        }
      }, {
        key: "onEditItem",
        value: function onEditItem(id) {
          this.requirementSvc.startedEditing.next(+id);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.dataSvc.uploadRequirements(this.requirements);
        }
      }, {
        key: "loadRequirements",
        value: function loadRequirements() {
          this.dataSvc.downloadRequirements();
        }
      }]);

      return RequirementsComponent;
    }();

    RequirementsComponent.ctorParameters = function () {
      return [{
        type: _requirements_service__WEBPACK_IMPORTED_MODULE_2__["RequirementsService"]
      }, {
        type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]
      }];
    };

    RequirementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-requirements',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./requirements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/requirements/requirements.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./requirements.component.css */
      "./src/app/requirements/requirements.component.css"))["default"]]
    })], RequirementsComponent);
    /***/
  },

  /***/
  "./src/app/requirements/requirements.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/requirements/requirements.service.ts ***!
    \******************************************************/

  /*! exports provided: Requirement, RequirementsService */

  /***/
  function srcAppRequirementsRequirementsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Requirement", function () {
      return Requirement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequirementsService", function () {
      return RequirementsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var Requirement = function Requirement(skill, location) {
      _classCallCheck(this, Requirement);

      this.skill = skill;
      this.location = location;
    };

    var RequirementsService =
    /*#__PURE__*/
    function () {
      function RequirementsService() {
        _classCallCheck(this, RequirementsService);

        this.requirements = [];
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.requirementsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(RequirementsService, [{
        key: "getRequirements",
        value: function getRequirements() {
          return this.requirements.slice();
        }
      }, {
        key: "getRequirement",
        value: function getRequirement(id) {
          return this.requirements[id];
        }
      }, {
        key: "setRequirements",
        value: function setRequirements(requirements) {
          this.requirements = requirements;
          this.requirementsChanged.next(this.requirements);
        }
      }, {
        key: "updateRequirement",
        value: function updateRequirement(id, requirement) {
          this.requirements[id] = requirement;
          this.requirementsChanged.next(this.requirements);
        }
      }, {
        key: "addRequirement",
        value: function addRequirement(requirement) {
          this.requirements.push(requirement);
          this.requirementsChanged.next(this.requirements);
        }
      }, {
        key: "deleteRequirement",
        value: function deleteRequirement(id) {
          this.requirements.splice(id, 1);
          this.requirementsChanged.next(this.requirements);
        }
      }]);

      return RequirementsService;
    }();

    RequirementsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RequirementsService);
    /***/
  },

  /***/
  "./src/app/shared/alert/alert.component.css":
  /*!**************************************************!*\
    !*** ./src/app/shared/alert/alert.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedAlertAlertComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".backdrop {\r\n    position : fixed;\r\n    top : 0;\r\n    left : 0;\r\n    width : 100vw;\r\n    height : 100vh;\r\n    background : rgba(0,0,0,.75);\r\n    z-index : 50;\r\n}\r\n\r\n.alert-box{\r\n    position : fixed;\r\n    top : 30vh;\r\n    left : 20vw;\r\n    width : 60vw;\r\n    padding : 16px;\r\n    background : white;\r\n    z-index : 100;\r\n}\r\n\r\n.alert-box-actions {\r\n    text-align : right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uIDogZml4ZWQ7XHJcbiAgICB0b3AgOiAwO1xyXG4gICAgbGVmdCA6IDA7XHJcbiAgICB3aWR0aCA6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0IDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kIDogcmdiYSgwLDAsMCwuNzUpO1xyXG4gICAgei1pbmRleCA6IDUwO1xyXG59XHJcblxyXG4uYWxlcnQtYm94e1xyXG4gICAgcG9zaXRpb24gOiBmaXhlZDtcclxuICAgIHRvcCA6IDMwdmg7XHJcbiAgICBsZWZ0IDogMjB2dztcclxuICAgIHdpZHRoIDogNjB2dztcclxuICAgIHBhZGRpbmcgOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZCA6IHdoaXRlO1xyXG4gICAgei1pbmRleCA6IDEwMDtcclxufVxyXG5cclxuLmFsZXJ0LWJveC1hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ24gOiByaWdodDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/alert/alert.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/alert/alert.component.ts ***!
    \*************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppSharedAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _application_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../application-event.service */
    "./src/app/shared/application-event.service.ts");

    var AlertComponent =
    /*#__PURE__*/
    function () {
      function AlertComponent(evtSvc) {
        _classCallCheck(this, AlertComponent);

        this.evtSvc = evtSvc;
        this.message = '';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AlertComponent, [{
        key: "onClose",
        value: function onClose() {
          this.message = "";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.subscription = this.evtSvc.eventGenerated.subscribe(function (evt) {
            if (evt.eventType === "ForAlertComponent") {
              _this17.message = _this17.message + (_this17.message ? " Also " : "") + evt.eventValue;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ctorParameters = function () {
      return [{
        type: _application_event_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationEventService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AlertComponent.prototype, "message", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AlertComponent.prototype, "close", void 0);
    AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alert.component.css */
      "./src/app/shared/alert/alert.component.css"))["default"]]
    })], AlertComponent);
    /***/
  },

  /***/
  "./src/app/shared/application-event.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/application-event.service.ts ***!
    \*****************************************************/

  /*! exports provided: ApplicationEvent, ApplicationEventService */

  /***/
  function srcAppSharedApplicationEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationEvent", function () {
      return ApplicationEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationEventService", function () {
      return ApplicationEventService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ApplicationEvent = function ApplicationEvent(eventType, eventValue) {
      _classCallCheck(this, ApplicationEvent);

      this.eventType = eventType;
      this.eventValue = eventValue;
    };

    var ApplicationEventService =
    /*#__PURE__*/
    function () {
      function ApplicationEventService() {
        _classCallCheck(this, ApplicationEventService);

        this.eventGenerated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ApplicationEventService, [{
        key: "generateEvent",
        value: function generateEvent(evt) {
          this.eventGenerated.next(evt);
        }
      }]);

      return ApplicationEventService;
    }();

    ApplicationEventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApplicationEventService);
    /***/
  },

  /***/
  "./src/app/shared/data-storage.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/data-storage.service.ts ***!
    \************************************************/

  /*! exports provided: DataStorageService */

  /***/
  function srcAppSharedDataStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataStorageService", function () {
      return DataStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _skills_skill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../skills/skill.service */
    "./src/app/skills/skill.service.ts");
    /* harmony import */


    var _locations_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../locations/location.service */
    "./src/app/locations/location.service.ts");
    /* harmony import */


    var _requirements_requirements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../requirements/requirements.service */
    "./src/app/requirements/requirements.service.ts");
    /* harmony import */


    var _application_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./application-event.service */
    "./src/app/shared/application-event.service.ts");

    var DataStorageService =
    /*#__PURE__*/
    function () {
      function DataStorageService(http, skillSvc, locationSvc, requirementSvc, evtSvc) {
        _classCallCheck(this, DataStorageService);

        this.http = http;
        this.skillSvc = skillSvc;
        this.locationSvc = locationSvc;
        this.requirementSvc = requirementSvc;
        this.evtSvc = evtSvc;
      }

      _createClass(DataStorageService, [{
        key: "fetchAllUserDetails",
        value: function fetchAllUserDetails() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userDataUrl + ".json");
        }
      }, {
        key: "storeUser",
        value: function storeUser(user_name, user_type) {
          var _this18 = this;

          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userDataUrl + "/" + this.formatUserName(user_name) + ".json", {
            'user_name': user_name,
            'user_type': user_type
          }).subscribe(function () {
            _this18.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "User added/updated successfully."));
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "isUserAnAdmin",
        value: function isUserAnAdmin(user_name) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userDataUrl + "/" + this.formatUserName(user_name) + ".json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response['user_type'] === 'Admin';
          }));
        }
      }, {
        key: "formatUserName",
        value: function formatUserName(user_name) {
          return user_name.replace("@", "").replace(".", "").toLowerCase();
        }
      }, {
        key: "uploadSkills",
        value: function uploadSkills(skills) {
          var _this19 = this;

          this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].skillsDataUrl + ".json", skills).subscribe(function () {
            _this19.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Skills successfully uploaded to central server."));
          });
        }
      }, {
        key: "downloadSkills",
        value: function downloadSkills() {
          var _this20 = this;

          this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].skillsDataUrl + ".json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (skills) {
            return !skills ? [] : skills;
          })).subscribe(function (skills) {
            _this20.skillSvc.setSkills(skills);

            _this20.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Skills successfully downloaded from central server."));
          });
        }
      }, {
        key: "uploadLocations",
        value: function uploadLocations(locations) {
          var _this21 = this;

          this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].locationsDataUrl + ".json", locations).subscribe(function () {
            _this21.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Locations successfully uploaded to central server."));
          });
        }
      }, {
        key: "downloadLocations",
        value: function downloadLocations() {
          var _this22 = this;

          this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].locationsDataUrl + ".json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (locations) {
            return !locations ? [] : locations;
          })).subscribe(function (locations) {
            _this22.locationSvc.setLocations(locations);

            _this22.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Locations successfully downloaded from central server."));
          });
        }
      }, {
        key: "uploadRequirements",
        value: function uploadRequirements(requirements) {
          var _this23 = this;

          this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].requirementsDataUrl + ".json", requirements).subscribe(function () {
            _this23.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Requirements successfully uploaded to central server."));
          });
        }
      }, {
        key: "downloadRequirements",
        value: function downloadRequirements() {
          var _this24 = this;

          this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].requirementsDataUrl + ".json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (requirements) {
            return !requirements ? [] : requirements;
          })).subscribe(function (requirements) {
            _this24.requirementSvc.setRequirements(requirements);

            _this24.evtSvc.generateEvent(new _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEvent"]("ForAlertComponent", "Requirements successfully downloaded from central server."));
          });
        }
      }]);

      return DataStorageService;
    }();

    DataStorageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _skills_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillsService"]
      }, {
        type: _locations_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationsService"]
      }, {
        type: _requirements_requirements_service__WEBPACK_IMPORTED_MODULE_7__["RequirementsService"]
      }, {
        type: _application_event_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationEventService"]
      }];
    };

    DataStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataStorageService);
    /***/
  },

  /***/
  "./src/app/shared/dropdown.directive.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/dropdown.directive.ts ***!
    \**********************************************/

  /*! exports provided: DropDownDirective */

  /***/
  function srcAppSharedDropdownDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDownDirective", function () {
      return DropDownDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DropDownDirective =
    /*#__PURE__*/
    function () {
      function DropDownDirective(elRef) {
        _classCallCheck(this, DropDownDirective);

        this.elRef = elRef;
        this.isOpen = false;
      } //This keeps menu open, we need to close it, if anywhere else is clicked.
      // @HostListener('click') toggleOpen(event: Event) {
      //     this.isOpen = !this.isOpen;
      // }


      _createClass(DropDownDirective, [{
        key: "toggleOpen",
        value: function toggleOpen(event) {
          this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        }
      }]);

      return DropDownDirective;
    }();

    DropDownDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')], DropDownDirective.prototype, "isOpen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])], DropDownDirective.prototype, "toggleOpen", null);
    DropDownDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appDropDown]'
    })], DropDownDirective);
    /***/
  },

  /***/
  "./src/app/shared/filter-list-values.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/filter-list-values.pipe.ts ***!
    \***************************************************/

  /*! exports provided: FilterListValuesPipe */

  /***/
  function srcAppSharedFilterListValuesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterListValuesPipe", function () {
      return FilterListValuesPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterListValuesPipe =
    /*#__PURE__*/
    function () {
      function FilterListValuesPipe() {
        _classCallCheck(this, FilterListValuesPipe);
      }

      _createClass(FilterListValuesPipe, [{
        key: "transform",
        value: function transform(value, dataType, _pattarn) {
          var pattarn = _pattarn.toUpperCase();

          if (value.length === 0) {
            return value;
          }

          console.log(dataType);

          if (dataType === "Profile") {
            return value.filter(function (s) {
              return (s.name + s.contactNumber).toUpperCase().search(pattarn) >= 0;
            });
          }

          if (dataType === "UserDetail") {
            return value.filter(function (s) {
              return s.user_name.toUpperCase().search(pattarn) >= 0;
            });
          }

          return value;
        }
      }]);

      return FilterListValuesPipe;
    }();

    FilterListValuesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filterListValues',
      //pure : false causes filter to be reapplied when any data changes. Will have performance issues.
      //pure: false
      pure: true
    })], FilterListValuesPipe);
    /***/
  },

  /***/
  "./src/app/shared/loading-spinner/loading-spinner.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/loading-spinner/loading-spinner.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLoadingSpinnerLoadingSpinnerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".lds-ring {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .lds-ring div {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 8px;\r\n    border: 8px solid blue;\r\n    border-radius: 50%;\r\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    border-color: blue transparent transparent transparent;\r\n  }\r\n  .lds-ring div:nth-child(1) {\r\n    -webkit-animation-delay: -0.45s;\r\n            animation-delay: -0.45s;\r\n  }\r\n  .lds-ring div:nth-child(2) {\r\n    -webkit-animation-delay: -0.3s;\r\n            animation-delay: -0.3s;\r\n  }\r\n  .lds-ring div:nth-child(3) {\r\n    -webkit-animation-delay: -0.15s;\r\n            animation-delay: -0.15s;\r\n  }\r\n  @-webkit-keyframes lds-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes lds-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzRUFBOEQ7WUFBOUQsOERBQThEO0lBQzlELHNEQUFzRDtFQUN4RDtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0U7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGO0VBUEE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1yaW5nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgICBib3JkZXItY29sb3I6IGJsdWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/loading-spinner/loading-spinner.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LoadingSpinnerComponent */

  /***/
  function srcAppSharedLoadingSpinnerLoadingSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function () {
      return LoadingSpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadingSpinnerComponent = function LoadingSpinnerComponent() {
      _classCallCheck(this, LoadingSpinnerComponent);
    };

    LoadingSpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading-spinner',
      template: "<div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>",
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./loading-spinner.component.css */
      "./src/app/shared/loading-spinner/loading-spinner.component.css"))["default"]]
    })], LoadingSpinnerComponent);
    /***/
  },

  /***/
  "./src/app/skills/skill-edit/skill-edit.component.css":
  /*!************************************************************!*\
    !*** ./src/app/skills/skill-edit/skill-edit.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSkillsSkillEditSkillEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbC1lZGl0L3NraWxsLWVkaXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/skills/skill-edit/skill-edit.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/skills/skill-edit/skill-edit.component.ts ***!
    \***********************************************************/

  /*! exports provided: SkillEditComponent */

  /***/
  function srcAppSkillsSkillEditSkillEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillEditComponent", function () {
      return SkillEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../skill.service */
    "./src/app/skills/skill.service.ts");

    var SkillEditComponent =
    /*#__PURE__*/
    function () {
      function SkillEditComponent(skillSvc) {
        _classCallCheck(this, SkillEditComponent);

        this.skillSvc = skillSvc;
        this.editMode = false;
      }

      _createClass(SkillEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.subscription = this.skillSvc.startedEditing.subscribe(function (id) {
            _this25.editMode = true;
            _this25.editedItemIndex = id;
            _this25.editedSkill = _this25.skillSvc.getSkill(id);

            var s = _this25.editedSkill.asString.split(" | ");

            var technology = s[0];
            var experience = s[1];

            _this25.skillForm.setValue({
              technology: technology,
              experience: experience
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var value = form.value;
          var newSkill = new _skill_service__WEBPACK_IMPORTED_MODULE_2__["Skill"](value.technology + " | " + value.experience);

          if (this.editMode) {
            this.skillSvc.updateSkill(this.editedItemIndex, newSkill);
          } else {
            this.skillSvc.addSkill(newSkill);
          }

          this.editMode = false;
          form.reset();
        }
      }, {
        key: "onClear",
        value: function onClear() {
          this.skillForm.reset();
          this.editMode = false;
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.skillSvc.deleteSkill(this.editedItemIndex);
          this.onClear();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return SkillEditComponent;
    }();

    SkillEditComponent.ctorParameters = function () {
      return [{
        type: _skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', {
      "static": false
    })], SkillEditComponent.prototype, "skillForm", void 0);
    SkillEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skill-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./skill-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skill-edit/skill-edit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./skill-edit.component.css */
      "./src/app/skills/skill-edit/skill-edit.component.css"))["default"]]
    })], SkillEditComponent);
    /***/
  },

  /***/
  "./src/app/skills/skill.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/skills/skill.service.ts ***!
    \*****************************************/

  /*! exports provided: Skill, SkillsService */

  /***/
  function srcAppSkillsSkillServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Skill", function () {
      return Skill;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsService", function () {
      return SkillsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var Skill = function Skill(skillAsString) {
      _classCallCheck(this, Skill);

      this.asString = skillAsString;
    };

    var SkillsService =
    /*#__PURE__*/
    function () {
      function SkillsService() {
        _classCallCheck(this, SkillsService);

        this.skills = [];
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.skillsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(SkillsService, [{
        key: "getSkills",
        value: function getSkills() {
          return this.skills.slice();
        }
      }, {
        key: "getSkill",
        value: function getSkill(id) {
          return this.skills[id];
        }
      }, {
        key: "setSkills",
        value: function setSkills(skills) {
          this.skills = skills;
          this.skillsChanged.next(this.skills);
        }
      }, {
        key: "updateSkill",
        value: function updateSkill(id, skill) {
          this.skills[id] = skill;
          this.skillsChanged.next(this.skills);
        }
      }, {
        key: "addSkill",
        value: function addSkill(skill) {
          this.skills.push(skill);
          this.skillsChanged.next(this.skills);
        }
      }, {
        key: "deleteSkill",
        value: function deleteSkill(id) {
          this.skills.splice(id, 1);
          this.skillsChanged.next(this.skills);
        }
      }]);

      return SkillsService;
    }();

    SkillsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SkillsService);
    /***/
  },

  /***/
  "./src/app/skills/skills.component.css":
  /*!*********************************************!*\
    !*** ./src/app/skills/skills.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSkillsSkillsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./skill.service */
    "./src/app/skills/skill.service.ts");
    /* harmony import */


    var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");

    var SkillsComponent =
    /*#__PURE__*/
    function () {
      function SkillsComponent(skillSvc, dataSvc) {
        _classCallCheck(this, SkillsComponent);

        this.skillSvc = skillSvc;
        this.dataSvc = dataSvc;
        this.skills = [];
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.skills = this.skillSvc.getSkills();
          this.subscription = this.skillSvc.skillsChanged.subscribe(function (skills) {
            _this26.skills = skills;
          });
          this.loadSkills();
        }
      }, {
        key: "onEditItem",
        value: function onEditItem(id) {
          this.skillSvc.startedEditing.next(+id);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.dataSvc.uploadSkills(this.skills);
        }
      }, {
        key: "loadSkills",
        value: function loadSkills() {
          this.dataSvc.downloadSkills();
        }
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ctorParameters = function () {
      return [{
        type: _skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"]
      }, {
        type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]
      }];
    };

    SkillsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skills',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./skills.component.css */
      "./src/app/skills/skills.component.css"))["default"]]
    })], SkillsComponent);
    /***/
  },

  /***/
  "./src/app/user/user-detail.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-detail.service.ts ***!
    \*********************************************/

  /*! exports provided: UserDetailsService */

  /***/
  function srcAppUserUserDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsService", function () {
      return UserDetailsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-details.model */
    "./src/app/user/user-details.model.ts");
    /* harmony import */


    var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserDetailsService =
    /*#__PURE__*/
    function () {
      function UserDetailsService(dataSvc) {
        _classCallCheck(this, UserDetailsService);

        this.dataSvc = dataSvc;
        this.usersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.users_list = [];
      }

      _createClass(UserDetailsService, [{
        key: "getUserList",
        value: function getUserList() {
          return this.users_list.slice();
        }
      }, {
        key: "fetchUserList",
        value: function fetchUserList() {
          var _this27 = this;

          return this.dataSvc.fetchAllUserDetails().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            var users_list = [];

            for (var k in response) {
              users_list.push(new _user_details_model__WEBPACK_IMPORTED_MODULE_3__["UserDetails"](response[k]['user_name'], response[k]['user_type']));
            }

            return users_list;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (users_list) {
            _this27.users_list = users_list;
          }));
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(id) {
          return this.users_list[id];
        }
      }, {
        key: "addUser",
        value: function addUser(userDtl) {
          this.users_list.push(userDtl);
          this.usersChanged.next(this.users_list.slice());
          this.dataSvc.storeUser(userDtl.user_name, userDtl.user_type);
        }
      }, {
        key: "updateUser",
        value: function updateUser(id, userDtl) {
          this.users_list[id] = userDtl;
          this.usersChanged.next(this.users_list.slice());
          this.dataSvc.storeUser(userDtl.user_name, userDtl.user_type);
        }
      }]);

      return UserDetailsService;
    }();

    UserDetailsService.ctorParameters = function () {
      return [{
        type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]
      }];
    };

    UserDetailsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserDetailsService);
    /***/
  },

  /***/
  "./src/app/user/user-details.model.ts":
  /*!********************************************!*\
    !*** ./src/app/user/user-details.model.ts ***!
    \********************************************/

  /*! exports provided: UserDetails */

  /***/
  function srcAppUserUserDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetails", function () {
      return UserDetails;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserDetails = function UserDetails(user_name, user_type) {
      _classCallCheck(this, UserDetails);

      this.user_name = user_name;
      this.user_type = user_type;
    };
    /***/

  },

  /***/
  "./src/app/user/user-edit/user-edit.component.css":
  /*!********************************************************!*\
    !*** ./src/app/user/user-edit/user-edit.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserEditUserEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user-edit/user-edit.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user/user-edit/user-edit.component.ts ***!
    \*******************************************************/

  /*! exports provided: UserEditComponent */

  /***/
  function srcAppUserUserEditUserEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEditComponent", function () {
      return UserEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-detail.service */
    "./src/app/user/user-detail.service.ts");
    /* harmony import */


    var _user_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user-details.model */
    "./src/app/user/user-details.model.ts");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var src_app_shared_application_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/application-event.service */
    "./src/app/shared/application-event.service.ts");

    var UserEditComponent =
    /*#__PURE__*/
    function () {
      function UserEditComponent(route, userSvc, authSvc, evtSvc) {
        _classCallCheck(this, UserEditComponent);

        this.route = route;
        this.userSvc = userSvc;
        this.authSvc = authSvc;
        this.evtSvc = evtSvc;
        this.userDtl = new _user_details_model__WEBPACK_IMPORTED_MODULE_4__["UserDetails"]('', '');
      }

      _createClass(UserEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.route.params.subscribe(function (params) {
            _this28.id = +params['id'];
            _this28.editMode = params['id'] != null;

            _this28.initForm();
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          if (this.editMode) {
            this.userDtl = this.userSvc.getUserDetails(this.id);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(userForm) {
          var _this29 = this;

          var userDtl = new _user_details_model__WEBPACK_IMPORTED_MODULE_4__["UserDetails"](userForm.value.nm_email, userForm.value.nm_user_type);
          console.log("User Edit : userDtl : " + userDtl);

          if (this.editMode) {
            this.userSvc.updateUser(this.id, userDtl);
          } else {
            this.authSubscription1 = this.authSvc.signup(userDtl.user_name, userForm.value.nm_password, false).subscribe(function (response) {
              console.log("Add User Response " + response);

              _this29.userSvc.addUser(userDtl);
            }, function (err) {
              //this.error = err
              _this29.evtSvc.generateEvent(new src_app_shared_application_event_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationEvent"]("ForAlertComponent", err));
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.authSubscription1) this.authSubscription1.unsubscribe();
          if (this.authSubscription2) this.authSubscription2.unsubscribe();
        }
      }]);

      return UserEditComponent;
    }();

    UserEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _user_detail_service__WEBPACK_IMPORTED_MODULE_3__["UserDetailsService"]
      }, {
        type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_shared_application_event_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationEventService"]
      }];
    };

    UserEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-edit/user-edit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-edit.component.css */
      "./src/app/user/user-edit/user-edit.component.css"))["default"]]
    })], UserEditComponent);
    /***/
  },

  /***/
  "./src/app/user/user-start/user-start.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/user/user-start/user-start.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserStartUserStartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1zdGFydC91c2VyLXN0YXJ0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/user-start/user-start.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/user-start/user-start.component.ts ***!
    \*********************************************************/

  /*! exports provided: UserStartComponent */

  /***/
  function srcAppUserUserStartUserStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStartComponent", function () {
      return UserStartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserStartComponent =
    /*#__PURE__*/
    function () {
      function UserStartComponent() {
        _classCallCheck(this, UserStartComponent);
      }

      _createClass(UserStartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserStartComponent;
    }();

    UserStartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-start',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-start.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-start/user-start.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-start.component.css */
      "./src/app/user/user-start/user-start.component.css"))["default"]]
    })], UserStartComponent);
    /***/
  },

  /***/
  "./src/app/user/users-resolver.service.ts":
  /*!************************************************!*\
    !*** ./src/app/user/users-resolver.service.ts ***!
    \************************************************/

  /*! exports provided: UsersResolverService */

  /***/
  function srcAppUserUsersResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersResolverService", function () {
      return UsersResolverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user-detail.service */
    "./src/app/user/user-detail.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UsersResolverService =
    /*#__PURE__*/
    function () {
      function UsersResolverService(usrDtlSvc) {
        _classCallCheck(this, UsersResolverService);

        this.usrDtlSvc = usrDtlSvc;
      }

      _createClass(UsersResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var users = this.usrDtlSvc.getUserList();

          if (users.length === 0) {
            return this.usrDtlSvc.fetchUserList();
          } else {
            return users;
          }
        }
      }]);

      return UsersResolverService;
    }();

    UsersResolverService.ctorParameters = function () {
      return [{
        type: _user_detail_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"]
      }];
    };

    UsersResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UsersResolverService);
    /***/
  },

  /***/
  "./src/app/user/users/users.component.css":
  /*!************************************************!*\
    !*** ./src/app/user/users/users.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-break{\r\n    overflow-wrap: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYnJlYWt7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/users/users.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/users/users.component.ts ***!
    \***********************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUserUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-detail.service */
    "./src/app/user/user-detail.service.ts");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(usrDtl) {
        _classCallCheck(this, UsersComponent);

        this.usrDtl = usrDtl;
        this.userDetails = [];
        this.filterString = '';
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.usrDtl.fetchUserList().subscribe(function (usrDetails) {
            _this30.userDetails = usrDetails;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _user_detail_service__WEBPACK_IMPORTED_MODULE_2__["UserDetailsService"]
      }];
    };

    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/users/users.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./users.component.css */
      "./src/app/user/users/users.component.css"))["default"]]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Workspaces\Angular\Angular_Common_Project\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map