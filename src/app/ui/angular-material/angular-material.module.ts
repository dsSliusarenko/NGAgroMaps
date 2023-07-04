import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatListModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatListModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: []
})
export class AngularMaterialModule {

}
