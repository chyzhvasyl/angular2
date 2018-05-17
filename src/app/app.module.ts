import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CssTestComponent } from './css-test/css-test.component';
import { AngularTestComponent } from './angular-test/angular-test.component';

import { ValidformComponent } from './angular-test/validform/validform.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CssTestComponent,
    AngularTestComponent,

    ValidformComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
