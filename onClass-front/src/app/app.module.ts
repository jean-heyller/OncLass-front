import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atomic_design/atoms/button/button.component';
import { NavigationmenuComponent } from './components/atomic_design/molecules/navigationmenu/navigationmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavigationmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
