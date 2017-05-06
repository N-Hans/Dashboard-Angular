"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var clock_component_1 = require("../clock.component/clock.component");
var weather_component_1 = require("../weather.component/weather.component");
var todo_component_1 = require("../todo.component/todo.component");
var cities_list_component_1 = require("../cities.list.component/cities.list.component");
var Dashboard = (function () {
    function Dashboard() {
    }
    Dashboard.prototype.InitWeather = function (city) {
        this.currentCity = city;
    };
    return Dashboard;
}());
Dashboard = __decorate([
    core_1.Component({
        selector: 'dashboard',
        template: "<div style='height: 100vh'>\n                    <div style='height: 15vh'>&nbsp;</div>\n                        <clock></clock>\n                        <div style=\"width: 35vw;float: left\">\n                            <citiesList (EmitCity)=\"InitWeather($event)\"></citiesList>\n                            <weather [targetCity] = \"currentCity\"></weather>\n                            <todo></todo>\n                        <div>\n                    <div style='height: 15vh'>&nbsp;</div>\n                </div>",
        entryComponents: [clock_component_1.Clock, cities_list_component_1.CitiesList, weather_component_1.WeatherComponent, todo_component_1.TodoComponent]
    })
], Dashboard);
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.component.js.map