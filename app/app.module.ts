import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Clock } from './dashboard/clock.component/clock.component';
import { CitiesList } from './dashboard/cities.list.component/cities.list.component';
import { WeatherComponent } from './dashboard/weather.component/weather.component';
import { Dashboard } from './dashboard/dashboard.component/dashboard.component';
import { TodoComponent } from './dashboard/todo.component/todo.component';
import { CitiesProvider } from './services/weather_service/CitiesProvider';
import { WeatherService } from './services/weather_service/weather_service';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [Dashboard, Clock, CitiesList, WeatherComponent, TodoComponent],
    bootstrap: [Dashboard],
    providers: [CitiesProvider, WeatherService]
})
export class AppModule{

}