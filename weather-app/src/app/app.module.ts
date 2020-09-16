import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainWidgetComponent } from './main-widget/main-widget.component';
import { SecondaryWidgetComponent } from './secondary-widget/secondary-widget.component';
import { SecondaryWidgetItemComponent } from './secondary-widget-item/secondary-widget-item.component';
import { VisibilityPipe } from 'src/pipes/visibility.pipe';
import { UVPipe } from 'src/pipes/uv.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainWidgetComponent,
    SecondaryWidgetComponent,
    SecondaryWidgetItemComponent,
    VisibilityPipe,
    UVPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
