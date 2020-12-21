import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreditCard } from './credit-card/credit-card.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CreditCard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
