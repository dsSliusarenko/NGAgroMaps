import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {LeafletMapModule} from "../../ui/leaflet-map/leaflet-map.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    LeafletMapModule,
    HttpClientModule
  ]
})
export class MapModule {
}
