"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersService = void 0;
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var operators_1 = require("rxjs/operators");
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUser = function (username) {
        return this.http
            .get("https://api.github.com/users/" + username)
            .pipe(operators_1.map(function (response) {
            try {
                return response;
            }
            catch (error) {
                console.error(error);
            }
        }));
    };
    UsersService = __decorate([
        core_1.Injectable()
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
