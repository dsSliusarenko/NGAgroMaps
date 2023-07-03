import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const ngaRoutes: Routes = [
  {
    path: '',
    redirectTo: 'overview/map',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then((m) => m.OverviewModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ngaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
