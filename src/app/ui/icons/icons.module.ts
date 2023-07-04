import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MatIconModule,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class IconModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon(
      'planet',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-planet.svg'),
    );
    matIconRegistry.addSvgIcon(
      'field',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-field.svg'),
    );
  }
}
