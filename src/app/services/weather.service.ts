import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {CurrentWeather} from "./weather";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  private static currentUrl = (location: string): string => `${environment.weatherApiUrl}current.json?key=${environment.privateWeatherKey}&q=${location}&aqi=no`;

  constructor(private httpClient: HttpClient) {
  }

  getWeatherData(location: string): Observable<CurrentWeather> {
    const url: string = WeatherService.currentUrl(location);
    return this.httpClient.get<CurrentWeather>(url);
  }
}
