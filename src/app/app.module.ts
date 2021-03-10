import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UploadBetsComponent } from './upload-bets/upload-bets.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UploadBetsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
