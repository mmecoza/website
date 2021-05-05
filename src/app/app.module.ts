import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './features/shared/nav/nav.component';
import { SlideComponent } from './features/shared/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
