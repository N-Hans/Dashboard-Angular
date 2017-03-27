import { Component, Injectable, Input, Output, OnInit } from '@angular/core';
import { City } from './../../services/weather_service/City';
import { Clock } from './../clock.component/clock.component';
import { WeatherComponent } from './../weather.component/weather.component';
import { CitiesList } from './../cities.list.component/cities.list.component';
import { TodoComponent}  from './../todo.component/todo.component';
import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'dashboard',
    template: `<div style='height: 100vh'>
                    <div style='height: 15vh'>&nbsp;</div>
                        <clock></clock>
                        <div style="width: 35vw;float: left">
                            <citiesList (EmitCity)="InitWeather($event)"></citiesList>
                            <weather [targetCity] = "currentCity"></weather>
                            <todo></todo>
                        <div>
                    <div style='height: 15vh'>&nbsp;</div>
                </div>`,
    entryComponents: [Clock, CitiesList, WeatherComponent, TodoComponent]
})
export class Dashboard{

    currentCity : City;

    InitWeather(city:City){
        this.currentCity = city;
    }
    // ngOnInit(){
    //     let timer = Observable.timer(2000,5000);
    //     timer.subscribe(t=>{
    //         console.log(this.currentCity.name)
    //                });
    // }
}