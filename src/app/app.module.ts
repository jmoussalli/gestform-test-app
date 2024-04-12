import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppGestformTestComponent } from './app-gestform-test/app-gestform-test.component';
import { AppGestformTestAproposComponent } from './app-gestform-test-apropos/app-gestform-test-apropos.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AppGestformTestComponent,
    AppGestformTestAproposComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
