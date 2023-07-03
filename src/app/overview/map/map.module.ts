import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {LeafletMapModule} from "../../ui/leaflet-map/leaflet-map.module";

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    LeafletMapModule
  ]
})
export class MapModule {
}
