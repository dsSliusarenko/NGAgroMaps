import {Component} from '@angular/core';
import {MapConfig} from "../../ui/leaflet-map/map";

@Component({
  selector: 'nga-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  mapConfig: MapConfig = {
    center: [51.049999, -114.066666],
    zoom: 14
  }
}
