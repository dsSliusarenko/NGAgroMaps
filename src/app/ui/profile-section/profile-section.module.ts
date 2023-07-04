import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProfileSectionComponent} from './profile-section.component';
import {IconModule} from "../icons/icons.module";
import {AngularMaterialModule} from "../angular-material/angular-material.module";

@NgModule({
  declarations: [
    ProfileSectionComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    AngularMaterialModule,
    NgOptimizedImage
  ],
  exports: [
    ProfileSectionComponent
  ]
})
export class ProfileSectionModule {
}
