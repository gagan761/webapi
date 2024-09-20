import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


interface Forecast {
  day: string;
  temp: number;
  humidity: number;
}

interface CityWeather {
  cityName: string;
  forecast: Forecast[];
}
@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,MatIconModule,MatSelectModule],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent {

  weatherList: any[]=[];
  currentDayIndex = 0;

  cities: CityWeather[] = [];
  selectedCity?: CityWeather;
  
  constructor(private http:HttpClient){

  }

  ngOnInit()
  {
    this.http.get("http://localhost:5144/crud/weather").subscribe((data:any)=>{
      this.cities=data;
    })

  }
  

  onCityChange(event:any): void {
console.log(event);

    
    this.selectedCity = this.cities.find(city => city.cityName === event.value);
    this.currentDayIndex=0;
    console.log(this.selectedCity);
    
  }
  nextDay(): void {
    if (this.selectedCity && this.currentDayIndex < this.selectedCity.forecast.length - 1) {
      this.currentDayIndex++;
    }
  }
  prevDay(): void {
    if (this.selectedCity && this.currentDayIndex > 0) {
      this.currentDayIndex--;
    }
  }
  get currentForecast(): Forecast | undefined {
       
    return this.selectedCity?.forecast[this.currentDayIndex];
  }


}
