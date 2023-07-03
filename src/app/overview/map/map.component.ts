import {Component} from '@angular/core';
import {MapConfig} from "../../ui/leaflet-map/map";
import * as L from "leaflet";

@Component({
  selector: 'nga-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  mapConfig: MapConfig = {
    center: [ 51.191408092498484, -114.09355093741783],
    zoom: 14
  }

  printLastCoords (lastCoords: L.LatLng): void {
    console.log(lastCoords)
  }
}
