import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routecomponent } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserlistserviceService } from './userlistservice.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    routecomponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserlistserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
