import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'clock',
    template: `<div style='width:65vw; border-right: solid 1px; float: left'>
                  <h1 style="text-align:center; margin: 5%; font-size: 14vw; text-shadow: 20px 20px 40px black">{{time}}</h1>
                  <h1 style="text-align:center; font-size: 5vw; text-shadow: 10px 10px 20px black">{{date}}</h1>
               </div>`
})
export class Clock{
    time : string;
    date : string;
    ngOnInit(){
        let timer = Observable.timer(0, 1000);
        timer.subscribe(t=>{
            let dayOfWeek;
            this.time = new Date().toLocaleTimeString();
            switch (new Date().getDay()){
                case 0: dayOfWeek = "Неділя";
                        break;
                case 1: dayOfWeek = "Понеділок";
                        break;
                case 2: dayOfWeek = "Вівторок";
                        break;
                case 3: dayOfWeek = "Середа";
                        break;
                case 4: dayOfWeek = "Четвер";
                        break;
                case 5: dayOfWeek = "П'ятниця";
                        break;
                case 6: dayOfWeek = "Субота";
                        break;
            }
            this.date = new Date().toLocaleDateString() + " - " + dayOfWeek;
        });
    }
}