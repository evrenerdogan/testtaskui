import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {BaseHttpService} from "./services/http/base-http.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

export function initializeGlobals(http: BaseHttpService): () => Promise<any> {
  return http.getApiUrlFromJson();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initializeGlobals, multi: true, deps: [BaseHttpService]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
