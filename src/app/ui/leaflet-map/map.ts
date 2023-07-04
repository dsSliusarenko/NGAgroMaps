import {LatLngExpression} from "leaflet";

export interface MapConfig {
  center: LatLngExpression;
  zoom: number
}

export const defaultMapConfig: MapConfig = {
  center: [51.191408092498484, -114.09355093741783],
  zoom: 14
}

export const defaultTileLayer: string = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

export interface DefaultTileLayerOptions {
  maxZoom: number;
  minZoom: number;
  attribution: string
}

export const defaultTileLayerOptions: DefaultTileLayerOptions = {
  maxZoom: 18,
  minZoom: 3,
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
};
