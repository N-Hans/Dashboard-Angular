import { Component, Injectable, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CitiesProvider } from './../../services/weather_service/CitiesProvider';
import { City } from './../../services/weather_service/City';

@Component({
    selector: 'citiesList',
    template: `<div align = 'center' class="select-style" >
                    <select (change)="onCityChange($event.target.value)" style="width: 30vw">
                        <option *ngFor="let city of cities">{{city.name}}</option>
                    </select>
               </div>`
})

@Injectable()
export class CitiesList implements OnInit{
    cities : City[];

    @Output() EmitCity = new EventEmitter<City>();

    public targetCity : City;

    constructor(private _cityProvider : CitiesProvider){}
    ngOnInit(){
        this._cityProvider.getCities()
            .subscribe(resCitiesData => this.cities = resCitiesData);
        // while(this.cities==undefined){
        //     console.log("waiting...");
        //     setTimeout(()=>{}, 3000)
        // }
        // this.targetCity = this.cities[0];
        // this.EmitCity.emit(this.targetCity);
    }

    onCityChange(cityName : string) {
        this.updateTargetCity(cityName);
        this.EmitCity.emit(this.targetCity);
    }

    updateTargetCity(name : string){
        this.targetCity = this.cities.find(city => city.name == name);
    }
}