import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routecomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistserviceService } from './userlistservice.service';

@NgModule({
  declarations: [
    AppComponent,
    routecomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserlistserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
