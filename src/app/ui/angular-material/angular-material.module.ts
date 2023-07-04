import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  imports: [
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MatListModule,
    MatToolbarModule
  ],
  declarations: []
})
export class AngularMaterialModule {

}
