import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SellsModule } from './sells/sells.module';



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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
