import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ModelsComponent, AboutComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
