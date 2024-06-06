import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  // Add BrowserModule here
    AppRoutingModule
  ],
  bootstrap: [AppComponent] // Ensure AppComponent is bootstrapped
})
export class AppModule { }
