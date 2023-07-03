import {NgModule} from '@angular/core';
import {OverviewComponent} from './overview.component';
import {OverviewRoutingModule} from "./overview-routing.module";
import {RouterOutlet} from "@angular/router";
import {MapModule} from "./map/map.module";
import {ListModule} from "./list/list.module";

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    OverviewRoutingModule,
    MapModule,
    ListModule,
    RouterOutlet
  ],
  exports: []
})
export class OverviewModule {
}
