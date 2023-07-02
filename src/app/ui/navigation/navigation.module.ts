import {NgModule} from "@angular/core";
import {NavigationComponent} from "./navigation.component";
import {IconModule} from "../icons/icons.module";

@NgModule({
  imports: [
    IconModule
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
