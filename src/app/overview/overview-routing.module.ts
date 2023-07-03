import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from "./map/map.component";
import {OverviewComponent} from "./overview.component";
import {ListComponent} from "./list/list.component";

const overviewRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    children: [
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(overviewRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OverviewRoutingModule {
}
