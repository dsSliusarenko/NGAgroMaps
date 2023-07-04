import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MatIconModule,
  ],
  declarations: []
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
    matIconRegistry.addSvgIcon(
      'calendar',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-calendar.svg'),
    );
    matIconRegistry.addSvgIcon(
      'logout',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-logout.svg'),
    );
    matIconRegistry.addSvgIcon(
      'back-up',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-back-up.svg'),
    );
  }
}
