import { Component, Injectable, Input, OnInit, OnChanges } from '@angular/core';
import { WeatherService } from './../../services/weather_service/weather_service';
import { IWeatherObject, IWeatherRecord, IMainWeatherRecord, IWeatherDescription } from './../../services/weather_service/IWeatherRecord';
import { City } from './../../services/weather_service/City';
import { CitiesList } from './../cities.list.component/cities.list.component'
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'weather',
    template: `<div *ngIf="!this.weatherData" style='height:20vh; width:35vw'>
               </div>
               <div *ngIf="this.weatherData">
                    <div align='center' style="float: left; height:20vh; width: 20vw">
                        <span class="helper"></span><img align = 'center' src="img/WeatherIcons/{{this.weatherData.list[0].weather[0].icon}}.svg">
                    </div>
                    <div style="float: left; width:15vw">
                        <span class="helper"></span><h1 style="font-size: 9.5vh; margin:0">{{this.weatherData.list[0].main.temp_max.toFixed(0)}}&#176;C</h1>
                    </div>
                </div>
               `
})
@Injectable()
export class WeatherComponent{
weatherData : IWeatherObject;

@Input()
targetCity : City;
constructor (private _weatherService : WeatherService){}

InitWeather(city:City){
    let timer = Observable.timer(0, 3600000);
    timer.subscribe(t=>{
       this._weatherService.GetWeather(city._id)
           .subscribe(resWeatherData => this.weatherData = resWeatherData);
    })
}

ngOnChanges(){
    if (this.targetCity!=undefined){
            this.InitWeather(this.targetCity);
    }
}
}