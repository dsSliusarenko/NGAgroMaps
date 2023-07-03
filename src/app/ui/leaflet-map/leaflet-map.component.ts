import {AfterViewInit, Component, Input} from '@angular/core';
import * as L from "leaflet";
import {MapConfig} from "./map";

@Component({
  selector: 'nga-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements AfterViewInit {
  @Input() mapConfig!: MapConfig;

  private map!: L.Map | L.LayerGroup<any>;

  private initMap(): void {
    this.map = L.map('map', this.mapConfig);

    const tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      minZoom: 3,
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    const objectsNames = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      minZoom: 0,
      maxZoom: 20,
      //@ts-ignore
      ext: 'png'
    });

    tiles.addTo(this.map);
    objectsNames.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
