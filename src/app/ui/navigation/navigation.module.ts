import {NgModule} from "@angular/core";
import {NavigationComponent} from "./navigation.component";
import {IconModule} from "../icons/icons.module";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    IconModule,
    RouterLink
  ],
  exports: [
    NavigationComponent
  ],
  declarations: [
    NavigationComponent
  ]
})

export class NavigationModule {

}
