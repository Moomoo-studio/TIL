import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewComponent1Component } from './my-new-component1/my-new-component1.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';
import { MyNewPipePipe } from './my-new-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyNewComponent1Component,
    NewCmpComponent,
    MyNewDirectiveDirective,
    MyNewPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
