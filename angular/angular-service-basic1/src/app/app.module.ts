import { FactoryService } from './factory.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { LogService } from './log.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LogService,
    {
      provide: 'log',
      // useClass: LogService
      useExisting: LogService
    },
    {
      provide: 'apiUrl',
      useValue: 'https://api.github.com/users'
    },
    // factory로 쓸땐 사용할 service가 위에 등록이 되어있어야한다.
    {
      provide: 'factory',
      useFactory: (logService) => {
        return new FactoryService(logService, false);
      },
      deps: [
        LogService
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
