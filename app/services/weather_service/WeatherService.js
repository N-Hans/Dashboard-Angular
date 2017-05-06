"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
        this.key = "25c948162ab81a7a7c76bb1a5c9bbcde";
    }
    WeatherService.prototype.url = function () {
        return "http://api.openweathermap.org/data/2.5/forecast?id="
            + (this.cityId)
            + "&APPID="
            + (this.key)
            + "&units=metric";
    };
    WeatherService.prototype.GetWeather = function (cityId) {
        this.cityId = cityId.toString();
        return this._http.get(this.url()).map(function (response) { return response.json(); });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=WeatherService.js.map