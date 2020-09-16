import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainWidgetComponent } from './main-widget/main-widget.component';
import { SecondaryWidgetComponent } from './secondary-widget/secondary-widget.component';
import { SecondaryWidgetItemComponent } from './secondary-widget-item/secondary-widget-item.component';

@NgModule({
  declarations: [AppComponent, MainWidgetComponent, SecondaryWidgetComponent, SecondaryWidgetItemComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
