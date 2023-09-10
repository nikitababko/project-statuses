import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { RowItemComponent } from './components/row-item/row-item.component';
import { ContentStatusComponent } from './components/content-status/content-status.component';
import { IconComponent } from './components/icon/icon.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    RowItemComponent,
    ContentStatusComponent,
    IconComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
