"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var Clock = (function () {
    function Clock() {
    }
    Clock.prototype.ngOnInit = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(0, 1000);
        timer.subscribe(function (t) {
            var dateData = new Date();
            _this.time = dateData.toLocaleTimeString("en-GB");
            var dayOfWeek;
            switch (dateData.getDay()) {
                case 0:
                    dayOfWeek = "Sunday";
                    break;
                case 1:
                    dayOfWeek = "Monday";
                    break;
                case 2:
                    dayOfWeek = "Tuesday";
                    break;
                case 3:
                    dayOfWeek = "Wednesday";
                    break;
                case 4:
                    dayOfWeek = "Thursday";
                    break;
                case 5:
                    dayOfWeek = "Friday";
                    break;
                case 6:
                    dayOfWeek = "Saturday";
                    break;
            }
            _this.date = dateData.toLocaleDateString("en-GB") + " - " + dayOfWeek;
        });
    };
    return Clock;
}());
Clock = __decorate([
    core_1.Component({
        selector: 'clock',
        template: "<div style='width:65vw; border-right: solid 1px; float: left'>\n                  <h1 style=\"text-align:center; margin: 5%; font-size: 14vw; text-shadow: 20px 20px 40px black\">{{time}}</h1>\n                  <h1 style=\"text-align:center; font-size: 5vw; text-shadow: 10px 10px 20px black\">{{date}}</h1>\n               </div>"
    })
], Clock);
exports.Clock = Clock;
//# sourceMappingURL=clock.component.js.map