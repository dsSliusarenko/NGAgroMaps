import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {CurrentWeather} from "../../services/weather";

@Component({
  selector: 'nga-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData('T2T0K2').subscribe((response: CurrentWeather): void => {
      // console.log(response)
    })
  }
}
