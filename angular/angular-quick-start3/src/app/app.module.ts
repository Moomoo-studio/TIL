import { OneService } from './one.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: 'one',
      useClass: OneService
    },
    {
      provide : 'apiUrl',
      useValue : 'test'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
