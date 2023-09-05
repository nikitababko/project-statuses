import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content.component';

@NgModule({
  imports: [HttpClientModule],
  bootstrap: [ContentComponent],
})
export class ContentModule {}
