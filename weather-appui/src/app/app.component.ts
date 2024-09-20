import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RepoTableComponent } from './components/repocomponent/repo/repo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WeatherDisplayComponent,MatCardModule,MatButtonModule,MatIconModule,MatSelectModule,ReactiveFormsModule,RepoTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-appui';
  day = 'Monday';
  temperature = 22;
  humidity = 17;
  selectedCountry = 'USA';
  countries = ['USA', 'Canada', 'UK', 'Australia', 'India'];

  prevDay() {
    // Logic to update the weather information for the previous day
    // For static data, simply change the day
    this.day = 'Sunday';
  }

  nextDay() {
    // Logic to update the weather information for the next day
    // For static data, simply change the day
    this.day = 'Tuesday';
  }
}
