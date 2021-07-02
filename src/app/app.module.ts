import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortElementComponent } from './sort-element/sort-element.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [AppComponent, SortElementComponent, SettingsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
