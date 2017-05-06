import { Component, OnInit } from '@angular/core';
import { ICity } from '../../entities/ICity';
import { Clock } from '../clock.component/clock.component';
import { WeatherComponent } from '../weather.component/weather.component';
import { TodoComponent } from '../todo.component/todo.component';
import { CitiesList } from '../cities.list.component/cities.list.component';

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

    currentCity : ICity;

    InitWeather(city:ICity){
        this.currentCity = city;
    }
}