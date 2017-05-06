"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var clock_component_1 = require("./dashboard/clock.component/clock.component");
var cities_list_component_1 = require("./dashboard/cities.list.component/cities.list.component");
var weather_component_1 = require("./dashboard/weather.component/weather.component");
var dashboard_component_1 = require("./dashboard/dashboard.component/dashboard.component");
var CitiesProvider_1 = require("./services/cities_provider/CitiesProvider");
var WeatherService_1 = require("./services/weather_service/WeatherService");
var todo_component_1 = require("./dashboard/todo.component/todo.component");
var TodosService_1 = require("./services/todos_service/TodosService");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule
        ],
        declarations: [dashboard_component_1.Dashboard, clock_component_1.Clock, cities_list_component_1.CitiesList, weather_component_1.WeatherComponent, todo_component_1.TodoComponent],
        bootstrap: [dashboard_component_1.Dashboard],
        providers: [CitiesProvider_1.CitiesProvider, WeatherService_1.WeatherService, TodosService_1.TodosService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map