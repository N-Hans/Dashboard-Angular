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
var WeatherService_1 = require("./../../services/weather_service/WeatherService");
var Rx_1 = require("rxjs/Rx");
var WeatherComponent = (function () {
    function WeatherComponent(_weatherService) {
        this._weatherService = _weatherService;
    }
    WeatherComponent.prototype.InitWeather = function (city) {
        var _this = this;
        var timer = Rx_1.Observable.timer(0, 3600000);
        timer.subscribe(function (t) {
            _this._weatherService.GetWeather(city._id)
                .subscribe(function (resWeatherData) { return _this.weatherData = resWeatherData; }, function (error) { return alert("there was an error getting weather data"); });
        });
    };
    WeatherComponent.prototype.ngOnChanges = function () {
        if (this.targetCity != undefined) {
            this.InitWeather(this.targetCity);
        }
    };
    return WeatherComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WeatherComponent.prototype, "targetCity", void 0);
WeatherComponent = __decorate([
    core_1.Component({
        selector: 'weather',
        template: "<div *ngIf=\"!this.weatherData\" style='height:20vh; width:35vw'>\n               </div>\n               <div *ngIf=\"this.weatherData\">\n                    <div align='center' style=\"float: left; height:20vh; width: 20vw\">\n                        <span class=\"helper\"></span><img align = 'center' src=\"img/WeatherIcons/{{this.weatherData.list[0].weather[0].icon}}.svg\">\n                    </div>\n                    <div style=\"float: left; width:15vw\">\n                        <span class=\"helper\"></span><h1 style=\"font-size: 9.5vh; margin:0\">{{this.weatherData.list[0].main.temp_max.toFixed(0)}}&#176;C</h1>\n                    </div>\n                </div>\n               "
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [WeatherService_1.WeatherService])
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map