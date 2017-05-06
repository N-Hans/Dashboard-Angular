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
var CitiesProvider_1 = require("./../../services/cities_provider/CitiesProvider");
var CitiesList = (function () {
    function CitiesList(_cityProvider) {
        this._cityProvider = _cityProvider;
        this.EmitCity = new core_1.EventEmitter();
    }
    CitiesList.prototype.ngOnInit = function () {
        var _this = this;
        this._cityProvider.getCities()
            .subscribe(function (resCitiesData) { return _this.cities = resCitiesData; });
    };
    CitiesList.prototype.onCityChange = function (cityName) {
        this.updateTargetCity(cityName);
        this.EmitCity.emit(this.targetCity);
    };
    CitiesList.prototype.updateTargetCity = function (name) {
        this.targetCity = this.cities.find(function (city) { return city.name == name; });
    };
    return CitiesList;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CitiesList.prototype, "EmitCity", void 0);
CitiesList = __decorate([
    core_1.Component({
        selector: 'citiesList',
        template: "<div align = 'center' class=\"select-style\" >\n                    <select (change)=\"onCityChange($event.target.value)\" style=\"width: 30vw\">\n                        <option value=\"\" disabled selected>Select city for weather status</option>\n                        <option *ngFor=\"let city of cities\">{{city.name}}</option>\n                    </select>\n               </div>"
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [CitiesProvider_1.CitiesProvider])
], CitiesList);
exports.CitiesList = CitiesList;
//# sourceMappingURL=cities.list.component.js.map