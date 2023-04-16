import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.component';
import { FormsModule } from '@angular/forms';
import { SlideComponent } from './Components/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
