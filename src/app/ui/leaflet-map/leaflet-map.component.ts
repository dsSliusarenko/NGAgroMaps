import {AfterViewInit, Component} from '@angular/core';
import * as L from "leaflet";
import {defaultMapConfig, defaultTileLayer, defaultTileLayerOptions, MapConfig} from "./map";
import {LeafletMapService} from "./leaflet-map.service";

@Component({
  selector: 'nga-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements AfterViewInit {
  mapConfig: MapConfig | undefined = defaultMapConfig;
  map!: L.Map;

  constructor(private leafletMapService: LeafletMapService) {
    if (this.mapConfig?.center !== this.leafletMapService.getNewMapConfig() && this.leafletMapService.getNewMapConfig() !== undefined) {
      this.mapConfig = this.leafletMapService.getNewMapConfig();
    }
  }

  initMap(): void {
    this.map = L.map('map', this.mapConfig);

    const tiles: L.TileLayer = L.tileLayer(defaultTileLayer, defaultTileLayerOptions);

    tiles.addTo(this.map);

    this.map.on('dragend', () => {
      this.leafletMapService.setNewMapConfig({
        center: this.map.getCenter(),
        zoom: this.map.getZoom()
      });
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
