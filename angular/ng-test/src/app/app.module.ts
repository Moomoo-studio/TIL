import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestTestTestComponent } from './test-test-test/test-test-test.component';
import { TestComponent } from './test/test/test.component';
import { MonitoringTestComponent } from './monitoring-test/monitoring-test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestTestTestComponent,
    TestComponent,
    MonitoringTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
