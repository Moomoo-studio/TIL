import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // http dependency injection
    HttpModule
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'https://api.github.com/users'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }