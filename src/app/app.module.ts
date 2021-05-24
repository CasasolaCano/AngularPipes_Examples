import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SellsModule } from './sells/sells.module';

import localeEs from '@angular/common/locales/es'
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    SellsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
