import {NgModule} from '@angular/core';
import {OverviewComponent} from './overview.component';
import {OverviewRoutingModule} from "./overview-routing.module";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    OverviewRoutingModule,
    RouterOutlet
  ],
  exports: []
})
export class OverviewModule {
}
